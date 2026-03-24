# GitHub Release Setup - TrustInn Windows

## 📋 Instructions to Create & Push GitHub Release

Follow these steps to push your TrustInn Windows releases to GitHub:

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create repository with these settings:
   - **Repository name**: `trustinn-windows`
   - **Description**: TrustInn Desktop - Code Analysis Platform (Windows)
   - **Visibility**: Public
   - **DO NOT** initialize with README (we have one)
   - Click **Create repository**

### Step 2: Add GitHub Remote

```bash
cd /Users/rajeshbyreddy/Downloads/html

# Add your GitHub remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/trustinn-windows.git

# Set main branch
git branch -M main

# Push source code
git push -u origin main
```

### Step 3: Create GitHub Release (via Web)

1. Go to: https://github.com/YOUR_USERNAME/trustinn-windows
2. Click **"Create a new release"** (or go to Releases tab)
3. Fill in release details:
   - **Tag version**: `v1.0.0`
   - **Release title**: `TrustInn v1.0.0 - Windows Desktop`
   - **Description**: 
     ```
     # TrustInn Desktop v1.0.0 - Initial Release
     
     ## What's Included
     - ✅ Code Analysis for C, Java, Python, Solidity
     - ✅ CBMC Integration
     - ✅ Real-time verification results
     - ✅ Secure authentication
     - ✅ Offline-first architecture
     
     ## Download
     - **TrustInn Setup 1.0.0.exe** - Full installer (recommended, ~65MB)
     - **TrustInn 1.0.0.exe** - Portable executable (~65MB)
     
     ## Installation
     ### Windows Installer
     1. Download and run the installer
     2. Follow setup wizard
     3. Launch from Start menu
     
     ### Portable Version
     1. Download the portable EXE
     2. Run directly (no installation needed)
     
     ## System Requirements
     - Windows 7 or later
     - 2GB RAM minimum (4GB recommended)
     - 200MB disk space
     
     ## Support
     - Website: https://www.nitminer.com
     - Issues: [GitHub Issues](https://github.com/YOUR_USERNAME/trustinn-windows/issues)
     ```

4. **Attach Files** (Upload from `dist/` folder):
   - Click **"Attach binaries by dropping them here..."**
   - Select and upload:
     - `dist/TrustInn Setup 1.0.0.exe`
     - `dist/TrustInn 1.0.0.exe`

5. Check ✅ **"This is a pre-release"** (if you want) or leave unchecked for full release

6. Click **"Publish release"**

---

## Alternative: Command Line Release (Using GitHub CLI)

If you have GitHub CLI installed:

```bash
# Install GitHub CLI (if not already)
brew install gh

# Login to GitHub
gh auth login

# Create release
gh release create v1.0.0 \
  dist/TrustInn\ Setup\ 1.0.0.exe \
  dist/TrustInn\ 1.0.0.exe \
  --title "TrustInn v1.0.0 - Windows Desktop" \
  --notes "Initial release with full code analysis suite"
```

---

## ✅ Complete! Users Can Now Download

After publishing the release, users will see:

**GitHub Release Page**: `https://github.com/YOUR_USERNAME/trustinn-windows/releases/tag/v1.0.0`

**Download Links**:
```
Installer:  https://github.com/YOUR_USERNAME/trustinn-windows/releases/download/v1.0.0/TrustInn_Setup_1.0.0.exe
Portable:   https://github.com/YOUR_USERNAME/trustinn-windows/releases/download/v1.0.0/TrustInn_1.0.0.exe
```

---

## 🔄 Future Releases

For next version (v1.1.0):

```bash
# Make changes, commit
git add .
git commit -m "v1.1.0: Add feature X"
git push origin main

# Create new release
gh release create v1.1.0 \
  dist/TrustInn\ Setup\ 1.1.0.exe \
  dist/TrustInn\ 1.1.0.exe \
  --title "TrustInn v1.1.0" \
  --notes "Release notes here"
```

Or via web interface following the same steps above.

---

## 📊 Share Download Link

Once released, share this link for downloads:
```
https://github.com/YOUR_USERNAME/trustinn-windows/releases
```

Users will see all versions and can download the latest or any previous version!
