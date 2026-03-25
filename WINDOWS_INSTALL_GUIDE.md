# Windows Installation & Update Guide

## Problem & Solution

**Issue:** Clicking the .exe was running the app directly without an installer wizard.

**Cause:** Two different .exe files were being generated:
- ✅ **TrustInn Setup 1.0.0.exe** ← **USE THIS ONE** (Proper Windows Installer)
- ❌ **TrustInn 1.0.0.exe** ← (Portable version - runs directly, no installation process)

---

## How to Build the Windows Installer

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build the Installer
```bash
npm run build-win
```

This creates:
- `dist/TrustInn Setup 1.0.0.exe` ← **Installer** (Shows Windows installer wizard)
- `dist/TrustInn 1.0.0.exe` ← Portable version (optional, direct launch)

---

## What to Distribute to Users

### ✅ Recommended: Installer (.exe)
**File:** `dist/TrustInn Setup 1.0.0.exe`

**User Experience:**
1. Users double-click the installer
2. Windows installer wizard appears
3. Users choose installation folder
4. Application is installed with shortcuts
5. Users can uninstall via Windows Control Panel

### ❌ Not Recommended: Portable (.exe)
**File:** `dist/TrustInn 1.0.0.exe`

This runs the app directly without installation. **Don't use this unless you have a specific reason.**

---

## Auto-Update System

### For Users
When updates are available:
1. App automatically checks for updates on startup
2. A notification dialog appears: `"A new version (X.X.X) is available!"`
3. Users can click **"Update Now"** to download and install
4. App notifies when update is ready and restarts
5. Or use **Help → Check for Updates** menu

### For Developers
To publish updates, you need to:
1. Update `version` in `package.json`
2. Create a release/update server (or use GitHub Releases)
3. Configure `electron-updater` with the update URL

**Current Status:** ⚠️ Updates are configured but need a backend update server.

---

## Build Commands Reference

| Command | Output | Usage |
|---------|--------|-------|
| `npm run build-win` | Installer only | **Recommended** |
| `npm run build-win-portable` | Portable only | For USB/portable use |
| `npm run dist` | Both installer & portable | When you need both |

---

## Troubleshooting

### No installer appearing in dist folder?
1. Clear `dist/` folder: `rm -rf dist`
2. Rebuild: `npm run build-win`
3. Check for errors in console

### Update notifications not showing?
1. Ensure `electron-updater` is installed
2. App needs internet access to check for updates
3. Check DevTools (Help → View → Toggle DevTools)

### Windows SmartScreen Warning?
This is normal for unsigned apps. Users can click "More info" → "Run anyway"

To avoid this, you'll need to code-sign your app with an EV certificate.

---

## Next Steps

1. **Install npm packages:**
   ```bash
   npm install
   ```

2. **Build the installer:**
   ```bash
   npm run build-win
   ```

3. **Distribute:** Share `dist/TrustInn Setup 1.0.0.exe` with users

4. **Updates (Optional):** Set up a GitHub Release page or update server for auto-updates
