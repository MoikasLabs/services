#!/bin/bash
set -e

# Configuration
SERVICE_NAME="kobolds-services"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${RED}⏮️  KOBOLDS Services Rollback${NC}"
echo "=============================="

# Check if backups exist
if [ ! -d "backups" ]; then
    echo -e "${RED}❌ No backups directory found${NC}"
    exit 1
fi

# List available backups
echo -e "\n${BLUE}Available backups:${NC}"
BACKUPS=($(ls -t backups/))
if [ ${#BACKUPS[@]} -eq 0 ]; then
    echo -e "${RED}❌ No backups available${NC}"
    exit 1
fi

for i in "${!BACKUPS[@]}"; do
    BACKUP_DIR="backups/${BACKUPS[$i]}"
    COMMIT=""
    if [ -f "$BACKUP_DIR/commit.txt" ]; then
        COMMIT=" ($(cat $BACKUP_DIR/commit.txt | cut -c1-8))"
    fi
    echo "  [$((i+1))] ${BACKUPS[$i]}$COMMIT"
done

# Select backup
if [ -z "$1" ]; then
    echo -e "\n${YELLOW}Rolling back to most recent backup: ${BACKUPS[0]}${NC}"
    SELECTED_BACKUP="backups/${BACKUPS[0]}"
    read -p "Continue? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    SELECTED_INDEX=$(($1 - 1))
    if [ $SELECTED_INDEX -lt 0 ] || [ $SELECTED_INDEX -ge ${#BACKUPS[@]} ]; then
        echo -e "${RED}❌ Invalid backup selection${NC}"
        exit 1
    fi
    SELECTED_BACKUP="backups/${BACKUPS[$SELECTED_INDEX]}"
fi

echo -e "\n${GREEN}Restoring from: $SELECTED_BACKUP${NC}"

# Restore files
if [ -d "$SELECTED_BACKUP/dist" ]; then
    echo "  📦 Restoring dist/"
    rm -rf dist
    cp -r "$SELECTED_BACKUP/dist" .
fi

if [ -d "$SELECTED_BACKUP/.next" ]; then
    echo "  📦 Restoring .next/"
    rm -rf .next
    cp -r "$SELECTED_BACKUP/.next" .
fi

# Restart service
echo -e "\n${GREEN}Restarting service${NC}"
# If using PM2:
# pm2 reload $SERVICE_NAME
# Or systemd:
# systemctl restart $SERVICE_NAME
echo "  ⚠️  Manual restart required"
echo "  Run: pm2 reload $SERVICE_NAME (or your restart command)"

# Check commit info
if [ -f "$SELECTED_BACKUP/commit.txt" ]; then
    COMMIT=$(cat "$SELECTED_BACKUP/commit.txt")
    echo -e "\n${BLUE}Rolled back to commit:${NC} $COMMIT"
    echo -e "${YELLOW}Git checkout recommended:${NC} git checkout $COMMIT"
fi

echo -e "\n${GREEN}✅ Rollback complete${NC}"
echo "  Remember to check health and logs!"
echo ""
