#!/bin/bash

# Setup cron job for KOBOLDS Services health monitoring
# Run this script once to install the cron job

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HEALTH_CHECK_SCRIPT="$SCRIPT_DIR/health-check.sh"

# Verify health check script exists
if [ ! -f "$HEALTH_CHECK_SCRIPT" ]; then
    echo "❌ Health check script not found: $HEALTH_CHECK_SCRIPT"
    exit 1
fi

# Create cron job entry (every 5 minutes)
CRON_ENTRY="*/5 * * * * $HEALTH_CHECK_SCRIPT >> /var/log/kobolds-services-health.log 2>&1"

# Check if cron job already exists
if crontab -l 2>/dev/null | grep -q "$HEALTH_CHECK_SCRIPT"; then
    echo "⚠️  Cron job already exists"
    echo "Current crontab:"
    crontab -l | grep "$HEALTH_CHECK_SCRIPT"
    read -p "Replace it? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Aborted"
        exit 0
    fi
    # Remove old entry
    crontab -l | grep -v "$HEALTH_CHECK_SCRIPT" | crontab -
fi

# Add new cron job
(crontab -l 2>/dev/null; echo "$CRON_ENTRY") | crontab -

echo "✅ Cron job installed successfully!"
echo ""
echo "Monitoring: https://services.shalohm.co/api/health"
echo "Frequency: Every 5 minutes"
echo "Log file: /var/log/kobolds-services-health.log"
echo ""
echo "To view current crontab:"
echo "  crontab -l"
echo ""
echo "To view logs:"
echo "  tail -f /var/log/kobolds-services-health.log"
echo ""
echo "To remove the cron job:"
echo "  crontab -e  # and delete the line with health-check.sh"
echo ""
echo "⚠️  Don't forget to set DISCORD_WEBHOOK_URL environment variable:"
echo "  export DISCORD_WEBHOOK_URL='https://discord.com/api/webhooks/...'"
echo "  Or add it to /etc/environment for persistence"
