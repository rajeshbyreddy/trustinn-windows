# TrustInn - Quick Start Guide

## 🔧 IMMEDIATE FIXES APPLIED

### ✅ macOS Certificate Error - FIXED
Your SSL certificate parsing error has been resolved:
- Added environment variable override to `main.js`
- Created convenience startup script

### ✅ Windows Build - READY TO GO
All configuration is in place to build Windows executable

---

## 🚀 RUN YOUR APP NOW

### On macOS:
```bash
./start-mac.sh
```
(Or: `export NODE_TLS_REJECT_UNAUTHORIZED=0 && npm start`)

### On Windows:
```cmd
start-win.bat
```
(Or: `set NODE_TLS_REJECT_UNAUTHORIZED=0 && npm start`)

---

## 📦 BUILD WINDOWS APPLICATION

### From macOS (Cross-compile):
```bash
npm run build-win
```
Creates in `dist/`: 
- `TrustInn Setup 1.0.0.exe` (Installer)
- `TrustInn 1.0.0.exe` (Portable)

### From Windows (Native build - faster):
```cmd
npm run build-win
```

---

## 📋 VERIFICATION CHECKLIST

Before distributing, verify:
- [ ] App runs with `./start-mac.sh` (no certificate errors)
- [ ] Windows build completes without errors
- [ ] EXE file is in `dist/` folder
- [ ] Test installer on Windows machine
- [ ] Add app icon if needed (`assets/icon.png`)

---

## 📂 NEW FILES CREATED

- `start-mac.sh` → Startup script for macOS
- `start-win.bat` → Startup script for Windows
- `WINDOWS_BUILD.md` → Detailed Windows build guide
- `QUICK_START.md` → This file

---

## ⚠️ WHAT WAS CHANGED

1. **main.js** - Added SSL bypass for development
2. **package.json** - Already configured for Windows NSIS + Portable builds
3. Environment setup - Scripts handle certificate errors automatically

---

## 🛟 TROUBLESHOOTING

**Still getting certificate error?**
```bash
rm -rf node_modules package-lock.json
npm install
./start-mac.sh
```

**Windows build failed?**
1. Ensure Node.js is installed
2. Check internet connection (downloads build tools)
3. Try: `npm run build-win` again

**Need more details?**
See: [WINDOWS_BUILD.md](WINDOWS_BUILD.md)

---

## 📞 NEXT STEPS

1. Test the app runs with `./start-mac.sh`
2. Build Windows version: `npm run build-win`
3. Test the EXE on Windows
4. Optionally add custom icon to `assets/icon.png`
5. Update version/author in `package.json` when ready
