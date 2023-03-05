// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')      
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

let mainWindow2;

function createWindow2() {
  // Create the browser window.
  mainWindow2 = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')      
    }
  })

  // and load the index.html of the app.
  mainWindow2.loadFile('bienvenido.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

})

let user;

ipcMain.on('usuarioValido', function (event, args) {
  console.log(args);
  user = args;
  createWindow2()
  mainWindow2.webContents.on('did-finish-load', function(event, args){
    mainWindow2.webContents.send('inicioCorrecto', user)
  })
  
})