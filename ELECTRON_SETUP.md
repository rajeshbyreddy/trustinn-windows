## Electron App Setup Guide for TrustInn

### Prerequisites
- Node.js and npm installed
- Your current HTML files

### Installation Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Run in development mode:**
```bash
npm start
```

3. **Build for Windows:**
```bash
npm run build-win
```

### Project Structure
```
├── package.json       # Project metadata & scripts
├── main.js           # Electron main process
├── preload.js        # Security layer for IPC
├── index.html        # Renderer (UI)
└── assets/           # Icons & resources (optional)
```

### What Was Created

1. **main.js** - Controls the window and app lifecycle
2. **preload.js** - Security context between main and renderer processes
3. **package.json** - Dependencies and build configuration
4. **index.html** - Your web application

### Usage
- Files uploaded automatically work in the app
- No external server needed for basic demo
- All data stored locally (localStorage works as-is)
- For API calls, update API_BASE in index.html to your backend

### Building & Packaging

**Development mode:**
```bash
npm start
```

**Windows installer + portable:**
```bash
npm run dist
```

**Portable executable only:**
```bash
npm run build-win-portable
```

### Features
- Native Windows taskbar integration
- Drag & drop file handling
- System menu with keyboard shortcuts
- Offline-first architecture (localStorage)
- Developer tools toggle in development

### Next Steps
1. Replace `http://localhost:3000` URLs with your actual API endpoints
2. Add icons to `assets/` folder (icon.png, etc)
3. Customize app name, version, and author in package.json
4. Test thoroughly before releasing

### Notes
- The app runs in Electron's Chromium browser
- All web APIs work (localStorage, DOM, etc)
- Direct Node.js access available via IPC (main.js ipcMain handlers)
