#!/bin/bash
set -e

echo "🔍 Pre-Deployment Verification"
echo "=============================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if in git repo
if [ ! -d .git ]; then
    echo -e "${RED}❌ Not in a git repository${NC}"
    exit 1
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  Warning: Uncommitted changes detected${NC}"
    git status --short
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Clean install
echo -e "\n${GREEN}📦 Installing dependencies (frozen lockfile)...${NC}"
rm -rf node_modules .next dist
npm ci --frozen-lockfile

# Type check
echo -e "\n${GREEN}🔧 Running TypeScript type check...${NC}"
npx tsc --noEmit

# Lint
echo -e "\n${GREEN}✨ Running ESLint...${NC}"
npm run lint

# Security audit
echo -e "\n${GREEN}🔒 Running security audit...${NC}"
npm audit --audit-level=moderate || echo -e "${YELLOW}⚠️  Audit warnings present${NC}"

# Build
echo -e "\n${GREEN}🏗️  Building production bundle...${NC}"
NODE_ENV=production npm run build

# Validate build output
if [ ! -d "dist" ] && [ ! -d ".next" ]; then
    echo -e "${RED}❌ Build output not found!${NC}"
    exit 1
fi

echo -e "\n${GREEN}✅ Pre-deployment checks passed!${NC}"
echo -e "\n📊 Build Information:"
echo "  - Git commit: $(git rev-parse --short HEAD)"
echo "  - Branch: $(git branch --show-current)"
echo "  - Build time: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo ""
