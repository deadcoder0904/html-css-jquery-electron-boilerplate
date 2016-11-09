const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

app.on('ready', () => {
  console.log('The application is ready.')

  mainWindow = new BrowserWindow({width: 1280, height: 1024})

  mainWindow.loadURL('file://'+ __dirname + '/src/index.html')

  mainWindow.on('closed', function() {
    mainWindow = null
  })
})