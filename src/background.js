'use strict'

import { app, protocol, BrowserWindow, ipcMain, dialog,Table } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
// import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
let win = null
const isDevelopment = process.env.NODE_ENV !== 'production'
// 目前需要重启
// var Zip = require('machinepack-zip');
// Zip.unzip({undefined,
//   source: '../public/table.zip',
  
//   destination: '../public',
  
//   })
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true, stream: true } }
])

async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1600,
    height: 1000,
    frame: false,
    name: '1',
    // show: false,
    webPreferences: {

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: false
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {//dev
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')//build
    // win.webContents.openDevTools()
  }
  win.setMenu(null);
  //自定义方法
  ipcMain.on('min', e => win.minimize());
  ipcMain.on('max', e => {
    if (win.isMaximized()) {
      win.unmaximize()
    } else {
      win.maximize()
    }
  });
  ipcMain.on('close', e => {
    win.close()
  });
}

// app.on('ready-to-show', () => {
//   win.show()
// })


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})



const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event) => {
    // if (mainWindow) {
    //   if (mainWindow.isMinimized()) mainWindow.restore()
    //   mainWindow.focus()
    // }
    dialog.showMessageBox({
      type: 'info',
      title: '提示',
      message: '请关闭当前窗口!',
      buttons: ['关闭当前窗口并新建', '取消'],   //选择按钮，点击确认则下面的idx为0，取消为1
      cancelId: 1, //button索引
    }).then(idx => {
      if (idx.response == 1) {
        if (win) {
          if (win.isMinimized()) win.restore()
          win.focus()
        }
      } else if (idx.response == 0) {
        app.relaunch();
        app.quit()
      }
    })
  })
  app.on('ready', () => {
    createWindow()
  })
}









// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

