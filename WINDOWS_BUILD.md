# Building TrustInn for Windows

## Quick Start (macOS/Linux Development)

### 1. Run on macOS (Fixed)
```bash
./start-mac.sh
# OR manually:
export NODE_TLS_REJECT_UNAUTHORIZED=0
npm start
```

### 2. Build Windows Application

You have multiple options:

#### **Option A: NSIS Installer (Recommended)**
```bash
npm run build-win
```
Creates: `dist/TrustInn Setup 1.0.0.exe` (installer)

#### **Option B: Portable Executable**
```bash
npm run build-win-portable
```
Creates: `dist/TrustInn 1.0.0.exe` (standalone, no installation)

#### **Option C: Both Installer + Portable**
```bash
npm run dist
```
Creates both formats in `dist/` folder

---

## Building on Windows (If Building Natively)

### Prerequisites:
1. Install Node.js (https://nodejs.org/)
2. Install dependencies:
   ```cmd
   npm install
   ```

### Build Commands:
```cmd
REM NSIS Installer
npm run build-win

REM Portable EXE
npm run build-win-portable

REM Both
npm run dist
```

---

## Output Files

After building, check `dist/` folder:
- `TrustInn Setup 1.0.0.exe` - Full installer (recommended for distribution)
- `TrustInn 1.0.0.exe` - Portable executable

---

## What's Included in Build

✓ Main application (main.js)  
✓ Security layer (preload.js)  
✓ All HTML/CSS/JS assets  
✓ Application icon (from assets/icon.png)  
✓ Start menu & desktop shortcuts  
✓ Uninstall functionality  

---

## Troubleshooting

**macOS Certificate Error:**
- Use: `./start-mac.sh` script
- Or set: `export NODE_TLS_REJECT_UNAUTHORIZED=0`

**Windows: Missing icon:**
- Create `assets/icon.png` (256x256 minimum)
- Or remove icon reference to use default

**Build fails:**
1. Delete `node_modules/` and `dist/`
2. Run: `npm install`
3. Try build again

---

## Distribution

To share the app:
1. Use `TrustInn Setup 1.0.0.exe` for professional distribution
2. Users run installer → creates start menu shortcut
3. App installed in `%AppData%\Local\Programs\TrustInn\`

---

## Next Steps

1. Add proper icon: `assets/icon.png` (use 512x512 or larger)
2. Update version in `package.json` when ready to ship
3. Test installer on Windows before distribution
4. Sign certificate for production (optional, prevents SmartScreen warning)
