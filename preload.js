const { contextBridge, ipcMain } = require('electron');

// Expose safe APIs to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  getAppPath: () => ipcRenderer.invoke('get-app-path'),
});

// If you need to access localStorage or other web APIs
// they will work automatically in the renderer
