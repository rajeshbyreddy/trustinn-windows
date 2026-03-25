const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');

// Fix for macOS certificate parsing error
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

let mainWindow;

// Auto-update configuration (will be initialized after app is ready)
autoUpdater.logger = log;

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

app.on('ready', () => {
  createWindow();
  // Check for updates after app is ready
  autoUpdater.checkForUpdatesAndNotify();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

// Auto-update event handlers
autoUpdater.on('update-available', (info) => {
  console.log('Update available:', info.version);
  if (mainWindow) {
    dialog.showMessageBox(mainWindow, {
      type: 'info',
      title: 'Update Available',
      message: `A new version (${info.version}) is available!`,
      detail: `Current version: ${app.getVersion()}\n\nWould you like to download and install the update?`,
      buttons: ['Update Now', 'Later'],
    }).then((result) => {
      if (result.response === 0) {
        autoUpdater.downloadUpdate();
      }
    });
  }
});

autoUpdater.on('update-downloaded', () => {
  console.log('Update downloaded');
  dialog.showMessageBox(mainWindow, {
    type: 'info',
    title: 'Update Ready',
    message: 'Update downloaded and ready to install',
    detail: 'The application will restart to complete the update installation.',
    buttons: ['Restart Now', 'Later'],
  }).then((result) => {
    if (result.response === 0) {
      autoUpdater.quitAndInstall();
    }
  });
});

autoUpdater.on('error', (error) => {
  console.error('Auto-update error:', error);
});

// Handle IPC for file operations and update checks
ipcMain.handle('get-app-path', () => {
  return app.getAppPath();
});

ipcMain.handle('check-for-updates', () => {
  return autoUpdater.checkForUpdates();
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
        label: 'Check for Updates',
        click: () => {
          autoUpdater.checkForUpdatesAndNotify();
        },
      },
      { type: 'separator' },
      {
        label: 'About TrustInn',
        click: () => {
          dialog.showMessageBox(mainWindow, {
            type: 'info',
            title: 'About TrustInn',
            message: 'TrustInn - Code Analysis Platform',
            detail: `Version: ${app.getVersion()}\\n\\nA desktop application for code analysis and verification using CBMC.`,
          });
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
