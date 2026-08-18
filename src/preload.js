const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('closeout', { snapshot: key => ipcRenderer.invoke('snapshot', key), open: (key, payload) => ipcRenderer.invoke('open', key, payload), adjust: (key, id, payload) => ipcRenderer.invoke('adjust', key, id, payload), submit: (key, id) => ipcRenderer.invoke('submit', key, id), approve: (key, id, payload) => ipcRenderer.invoke('approve', key, id, payload) });

