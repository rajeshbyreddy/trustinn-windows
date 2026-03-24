const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

// Fix for macOS certificate parsing error
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

let mainWindow;

function createWindow() {
  const iconPath = process.platform === 'win32' ? path.join(__dirname, 'image.ico') : path.join(__dirname, 'image.png');
  
  mainWindow = new BrowserWindow({
    width: 1800,
    height: 1200,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: false,
      contextIsolation: true,
      nodeIntegration: false,
    },
    icon: iconPath,
  });

  mainWindow.loadFile(path.join(__dirname, 'k.html'));

  // Open DevTools in development
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

// Handle IPC for file operations if needed
ipcMain.handle('get-app-path', () => {
  return app.getAppPath();
});

// Create application menu
const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Exit',
        accelerator: 'CmdOrCtrl+Q',
        click: () => {
          app.quit();
        },
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
    ],
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' },
    ],
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About TrustInn',
        click: () => {
          // You can create an about dialog here
        },
      },
    ],
  },
];

if (process.platform === 'darwin') {
  template.unshift({
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideOthers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' },
    ],
  });
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
