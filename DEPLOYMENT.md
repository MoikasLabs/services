# KOBOLDS Services - CI/CD Safeguards Documentation

## 🎯 Mission
Prevent 2+ hour outages by implementing automated safeguards that catch build failures before they reach production.

## ✅ Implemented Safeguards

### 1. GitHub Actions CI/CD Workflow
**Location:** `.github/workflows/deploy.yml`

**Runs on:** Every push and pull request to `master`/`main`

**Checks:**
- ✅ Frozen lockfile enforcement (`npm ci --frozen-lockfile`)
- ✅ TypeScript type checking (`tsc --noEmit`)
- ✅ ESLint validation
- ✅ Security audit (moderate level)
- ✅ Production build verification
- ✅ Package.json validation (no `file:` paths)
- ✅ Discord notifications on failure

**Setup:**
1. Add `DISCORD_WEBHOOK_URL` to GitHub repository secrets
2. GitHub Actions will automatically run on every commit

---

### 2. Pinned Dependencies
**Status:** ✅ All dependencies pinned to exact versions

**Before:**
```json
"dependencies": {
  "next": "^16.1.6",
  "react": "^19.2.3"
}
```

**After:**
```json
"dependencies": {
  "next": "16.1.6",
  "react": "19.2.3"
}
```

**Benefits:**
- No unexpected version drift
- Reproducible builds across environments
- Breaking changes caught explicitly

---

### 3. Deployment Scripts
**Location:** `scripts/`

#### pre-deploy.sh
**Purpose:** Verify build integrity before deployment

**Checks:**
- Git repository status
- Clean dependency install
- TypeScript compilation
- ESLint validation
- Security audit
- Production build success

**Usage:**
```bash
./scripts/pre-deploy.sh
```

#### deploy.sh
**Purpose:** Safe deployment with health checks

**Features:**
- Runs pre-deployment verification
- Creates automatic backup
- Records deployment info
- Health check with retries
- Rollback suggestion on failure

**Usage:**
```bash
# Set health check URL if different from default
export HEALTH_CHECK_URL="https://services.shalohm.co/api/health"

./scripts/deploy.sh
```

#### rollback.sh
**Purpose:** One-command rollback to previous version

**Features:**
- Lists available backups
- Restores build artifacts
- Shows commit information
- Suggests git checkout

**Usage:**
```bash
# Rollback to most recent backup
./scripts/rollback.sh

# Rollback to specific backup
./scripts/rollback.sh 2  # Selects 2nd backup in list
```

---

### 4. Health Check Endpoint
**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-02-11T18:53:00.000Z",
  "uptime": 3600,
  "build": {
    "timestamp": "2026-02-11T18:00:00Z",
    "commit": "abc123...",
    "branch": "master",
    "version": "0.1.0"
  },
  "dependencies": {
    "next": "16.1.6",
    "react": "19.2.3",
    "tailwindcss": "3.4.4"
  },
  "environment": "production"
}
```

**Status Codes:**
- `200` - Service healthy
- `503` - Service unhealthy

**Used by:**
- Deployment scripts
- Monitoring system
- External health checkers

---

### 5. Pre-commit Hooks
**Framework:** Husky + lint-staged

**Checks on commit:**
- ✅ TypeScript type checking on staged files
- ✅ Validates no `file:` paths in dependencies
- ✅ Blocks commits with build errors

**Bypassing (emergency only):**
```bash
git commit --no-verify -m "Emergency fix"
```

**Configuration:** `package.json` → `lint-staged`

---

### 6. Monitoring Cron Job
**Location:** `scripts/monitoring/`

**Features:**
- Health check every 5 minutes
- Discord alerts on downtime
- Requires 2 consecutive failures before alerting
- Tracks service state (up/down/recovered)

**Setup:**
```bash
# 1. Configure Discord webhook
export DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/YOUR_WEBHOOK"

# 2. Install cron job
./scripts/monitoring/setup-cron.sh

# 3. Verify installation
crontab -l | grep health-check

# 4. View logs
tail -f /var/log/kobolds-services-health.log
```

**Manual test:**
```bash
./scripts/monitoring/health-check.sh
```

---

## 🚀 Deployment Workflow

### Safe Deployment Process

1. **Local Development:**
   ```bash
   # Make changes
   git add .
   git commit -m "feat: new feature"
   # Pre-commit hooks run automatically
   ```

2. **Push to GitHub:**
   ```bash
   git push origin master
   # GitHub Actions runs CI checks
   ```

3. **Pre-deployment Verification:**
   ```bash
   cd /root/dev/projects/shalom/apps/services
   ./scripts/pre-deploy.sh
   ```

4. **Deploy:**
   ```bash
   ./scripts/deploy.sh
   # Creates backup, deploys, runs health check
   ```

5. **Monitor:**
   - Check `/api/health` endpoint
   - Watch logs: `tail -f /var/log/kobolds-services-health.log`
   - Discord notifications for issues

### Emergency Rollback

```bash
# View available backups
./scripts/rollback.sh

# Rollback to most recent
./scripts/rollback.sh

# Rollback to specific backup
./scripts/rollback.sh 3
```

---

## 📊 Success Criteria

- [x] GitHub Actions passes on current code
- [x] package.json has exact versions (no ^ or ~)
- [x] `npm run build` succeeds in clean environment
- [x] Deployment scripts are executable and work
- [x] Health check responds with 200
- [x] Pre-commit hooks block bad commits
- [x] Monitoring alerts would fire if service down

---

## 🔧 Maintenance

### Updating Dependencies

```bash
# 1. Update package.json with new exact versions
# 2. Clean install
npm ci --frozen-lockfile

# 3. Test build
npm run build

# 4. Commit with exact versions
git add package.json package-lock.json
git commit -m "chore: Update dependencies to vX.Y.Z"
```

### Testing Safeguards

```bash
# Test pre-commit hooks
echo "test" >> test.ts
git add test.ts
git commit -m "test"
# Should run TypeScript check

# Test GitHub Actions
git push origin test-branch
# Check Actions tab on GitHub

# Test health check
curl https://services.shalohm.co/api/health | jq

# Test monitoring
./scripts/monitoring/health-check.sh
```

---

## 🚨 Troubleshooting

### Build Fails in CI but Works Locally

```bash
# Reproduce CI environment
rm -rf node_modules package-lock.json
npm ci --frozen-lockfile
npm run build
```

### Pre-commit Hooks Not Running

```bash
# Reinstall Husky
npm run prepare
chmod +x .husky/pre-commit
```

### Health Check Returns 503

```bash
# Check service logs
pm2 logs kobolds-services
# Or systemd logs
journalctl -u kobolds-services -f

# Verify build output exists
ls -la .next/ dist/
```

### Monitoring Not Alerting

```bash
# Check cron job is installed
crontab -l | grep health-check

# Check Discord webhook is set
echo $DISCORD_WEBHOOK_URL

# Test manually
./scripts/monitoring/health-check.sh
```

---

## 📝 Change Log

- **2026-02-11:** Initial implementation of all CI/CD safeguards
  - GitHub Actions workflow
  - Dependency pinning
  - Deployment scripts
  - Health check endpoint
  - Pre-commit hooks
  - Monitoring system

---

## 🎓 Lessons Learned

1. **Pin dependencies:** Version drift caused the original 2+ hour outage
2. **Automated checks:** Manual verification is error-prone
3. **Health monitoring:** Early detection prevents long outages
4. **Rollback capability:** Quick recovery is critical
5. **Multiple layers:** Defense in depth catches errors at different stages

---

## 🔗 Related Documentation

- GitHub Actions: `.github/workflows/deploy.yml`
- Scripts: `scripts/` directory
- Health endpoint: `app/api/health/route.ts`
- Main README: `README.md`
