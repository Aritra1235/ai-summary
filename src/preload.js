// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    updateModelsList: async () => {
        console.log("Calling 'get-models' IPC...");
        const models = await ipcRenderer.invoke('get-models');
        console.log("Received models:", models);
        document.getElementById('models-list').innerHTML = JSON.stringify(models, null, 2);
    }
  });