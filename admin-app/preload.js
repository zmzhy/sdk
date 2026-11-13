'use strict';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('adminApi', {
    config: () => ipcRenderer.invoke('app:config'),
    setToken: (token) => ipcRenderer.invoke('app:set-token', token),
    openExternal: (url) => ipcRenderer.invoke('app:open-external', url),
    test: () => ipcRenderer.invoke('gh:test'),
    stats: () => ipcRenderer.invoke('gh:stats'),
    listMails: () => ipcRenderer.invoke('gh:mail:list'),
    sendMail: (payload) => ipcRenderer.invoke('gh:mail:send', payload),
    deleteMail: (id) => ipcRenderer.invoke('gh:mail:delete', id),
    listSaves: () => ipcRenderer.invoke('gh:saves'),
    leaderboard: (limit) => ipcRenderer.invoke('gh:leaderboard', limit)
});
