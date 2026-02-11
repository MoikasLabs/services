#!/bin/bash

# KOBOLDS Services Health Check Monitor
# Checks the health endpoint and alerts on Discord if service is down

# Configuration
HEALTH_URL="https://services.shalohm.co/api/health"
DISCORD_WEBHOOK_URL="${DISCORD_WEBHOOK_URL:-}"
STATE_FILE="/tmp/kobolds-services-health-state"
MAX_FAILURES=2  # Alert after 2 consecutive failures

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Function to send Discord alert
send_discord_alert() {
    local status=$1
    local message=$2
    
    if [ -z "$DISCORD_WEBHOOK_URL" ]; then
        echo "⚠️  Discord webhook not configured, skipping notification"
        return
    fi

    local color
    if [ "$status" == "down" ]; then
        color=15548997  # Red
    elif [ "$status" == "recovered" ]; then
        color=5763719   # Green
    else
        color=16705372  # Yellow
    fi

    curl -X POST "$DISCORD_WEBHOOK_URL" \
        -H "Content-Type: application/json" \
        -d "{
            \"embeds\": [{
                \"title\": \"🚨 KOBOLDS Services Alert\",
                \"description\": \"$message\",
                \"color\": $color,
                \"fields\": [{
                    \"name\": \"Service\",
                    \"value\": \"$HEALTH_URL\",
                    \"inline\": false
                }, {
                    \"name\": \"Time\",
                    \"value\": \"$(date -u '+%Y-%m-%d %H:%M:%S UTC')\",
                    \"inline\": false
                }],
                \"timestamp\": \"$(date -u +%Y-%m-%dT%H:%M:%S.000Z)\"
            }]
        }" \
        2>/dev/null
}

# Read previous state
if [ -f "$STATE_FILE" ]; then
    PREV_STATE=$(cat "$STATE_FILE")
else
    PREV_STATE="unknown"
fi

# Check health endpoint
HTTP_CODE=$(curl -s -o /tmp/health-response.json -w "%{http_code}" "$HEALTH_URL" --max-time 10)

if [ "$HTTP_CODE" == "200" ]; then
    # Service is healthy
    if [ "$PREV_STATE" == "down" ]; then
        echo -e "${GREEN}✅ Service recovered${NC}"
        send_discord_alert "recovered" "Service has recovered and is now healthy ✅"
    else
        echo -e "${GREEN}✅ Service is healthy${NC}"
    fi
    echo "healthy" > "$STATE_FILE"
    
    # Show some health info
    if [ -f /tmp/health-response.json ]; then
        VERSION=$(jq -r '.build.version // "unknown"' /tmp/health-response.json 2>/dev/null)
        UPTIME=$(jq -r '.uptime // 0' /tmp/health-response.json 2>/dev/null)
        echo "  Version: $VERSION | Uptime: ${UPTIME}s"
    fi
else
    # Service is down or unhealthy
    FAILURE_COUNT=0
    if [ -f "${STATE_FILE}.failures" ]; then
        FAILURE_COUNT=$(cat "${STATE_FILE}.failures")
    fi
    FAILURE_COUNT=$((FAILURE_COUNT + 1))
    echo "$FAILURE_COUNT" > "${STATE_FILE}.failures"
    
    echo -e "${RED}❌ Service is down (HTTP $HTTP_CODE)${NC}"
    echo "  Failure count: $FAILURE_COUNT"
    
    # Alert after consecutive failures
    if [ "$FAILURE_COUNT" -ge "$MAX_FAILURES" ]; then
        if [ "$PREV_STATE" != "down" ]; then
            echo "  🚨 Sending alert to Discord..."
            send_discord_alert "down" "Service is DOWN! Health check returned HTTP $HTTP_CODE after $FAILURE_COUNT consecutive failures ❌"
        fi
        echo "down" > "$STATE_FILE"
    fi
fi

# Cleanup
rm -f /tmp/health-response.json
