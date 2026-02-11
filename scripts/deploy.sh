#!/bin/bash
set -e

# Configuration
SERVICE_NAME="kobolds-services"
HEALTH_CHECK_URL="${HEALTH_CHECK_URL:-https://services.shalohm.co/api/health}"
HEALTH_CHECK_RETRIES=10
HEALTH_CHECK_DELAY=3

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 KOBOLDS Services Deployment${NC}"
echo "================================"

# Run pre-deployment checks
echo -e "\n${GREEN}Step 1: Pre-deployment verification${NC}"
./scripts/pre-deploy.sh

# Backup current deployment (for rollback)
echo -e "\n${GREEN}Step 2: Creating backup${NC}"
BACKUP_DIR="backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

if [ -d "dist" ]; then
    cp -r dist "$BACKUP_DIR/" && echo "  ✅ Backed up dist/"
fi

if [ -d ".next" ]; then
    cp -r .next "$BACKUP_DIR/" && echo "  ✅ Backed up .next/"
fi

echo "$(git rev-parse HEAD)" > "$BACKUP_DIR/commit.txt"
echo "  📝 Backup saved to $BACKUP_DIR"

# Record deployment info
echo -e "\n${GREEN}Step 3: Recording deployment${NC}"
cat > deployment-info.json <<EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "commit": "$(git rev-parse HEAD)",
  "branch": "$(git branch --show-current)",
  "version": "$(node -p "require('./package.json').version")",
  "backup": "$BACKUP_DIR"
}
EOF
echo "  ✅ Deployment info saved"

# Deploy (restart service or copy files)
echo -e "\n${GREEN}Step 4: Deploying${NC}"
# If using PM2:
# pm2 reload $SERVICE_NAME
# Or systemd:
# systemctl restart $SERVICE_NAME
# Or manual:
echo "  ⚠️  Manual deployment step required"
echo "  Run: pm2 reload $SERVICE_NAME (or your deployment command)"

# Health check
echo -e "\n${GREEN}Step 5: Health check${NC}"
echo "  Checking $HEALTH_CHECK_URL"

for i in $(seq 1 $HEALTH_CHECK_RETRIES); do
    if curl -f -s "$HEALTH_CHECK_URL" > /dev/null 2>&1; then
        echo -e "  ${GREEN}✅ Service is healthy!${NC}"
        break
    else
        if [ $i -eq $HEALTH_CHECK_RETRIES ]; then
            echo -e "  ${RED}❌ Health check failed after $HEALTH_CHECK_RETRIES attempts${NC}"
            echo -e "  ${YELLOW}Consider running: ./scripts/rollback.sh${NC}"
            exit 1
        fi
        echo "  ⏳ Attempt $i/$HEALTH_CHECK_RETRIES failed, retrying in ${HEALTH_CHECK_DELAY}s..."
        sleep $HEALTH_CHECK_DELAY
    fi
done

echo -e "\n${GREEN}✅ Deployment successful!${NC}"
echo "  Commit: $(git rev-parse --short HEAD)"
echo "  Time: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo ""
