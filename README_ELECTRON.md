# TrustInn Desktop Application

This is the Electron-based desktop version of the TrustInn Code Analysis Platform for Windows.

## Quick Start

### Windows:
1. Double-click `setup.bat` 
2. After installation completes, run: `npm start`

### macOS/Linux:
```bash
bash setup.sh
npm start
```

## File Structure

| File | Purpose |
|------|---------|
| `main.js` | Electron main process (window lifecycle, menus) |
| `preload.js` | Security layer for main ↔ renderer communication |
| `index.html` | Application UI and logic |
| `package.json` | Project config, scripts, and dependencies |

## Available Scripts

```bash
npm start              # Run in development mode
npm run dev           # Run with DevTools open
npm run dist          # Build Windows installer + portable
npm run build-win     # Build Windows app only
npm run build-win-portable  # Create portable .exe
```

## Building for Distribution

To create a Windows installer and portable exe:

```bash
npm run dist
```

This creates files in the `dist/` folder:
- `TrustInn Setup 1.0.0.exe` - Installer
- `TrustInn 1.0.0.exe` - Portable executable

## Configuration

### API Endpoints
Update the API base URL in `index.html`:
```javascript
const API_BASE = 'http://localhost:3000';  // Change to your backend
```

### App Name & Version
Edit `package.json`:
```json
{
  "name": "trustinn-desktop",
  "version": "1.0.0",
  "author": "Your Name"
}
```

### Windows Installer
Customize the installer by editing the `build` section in `package.json`.

## Features

✅ Native Windows app (no browser address bar)  
✅ Drag & drop file support  
✅ System menu with keyboard shortcuts  
✅ Local storage (token persistence)  
✅ Offline-capable (can work without server)  
✅ Professional installer (NSIS)  
✅ Portable executable option  

## Development

### Enable DevTools
In development mode, DevTools open automatically. You can also press `Ctrl+Shift+I` in the running app.

### Debug Main Process
```bash
npm run dev
# Then in VS Code: F5 to attach debugger
```

## Troubleshooting

**App won't start:**
- Ensure Node.js v14+ is installed: `node --version`
- Delete `node_modules` and run `npm install` again
- Check for port conflicts if using a local backend

**Build fails:**
- Make sure you have write permissions in the directory
- On Windows, try running as Administrator
- Clear cache: `npm cache clean --force`

## Releasing

1. Update version in `package.json`
2. Run `npm run dist`
3. The installer and portable exe are in `dist/`
4. Sign the executable with your certificate (optional but recommended)

## Support

For issues or questions about converting to Electron:
- Check Electron docs: https://www.electronjs.org/docs
- Review `main.js` comments for customization examples

---

**Built with Electron** | Ready for Windows distribution
