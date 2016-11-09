import electron , { app, BrowserWindow } from 'electron'

let mainWindow = null

const createWindow = () => {

  console.log('The application is ready.')

  mainWindow = new BrowserWindow({width: 1280, height: 1024})

  mainWindow.loadURL('file://'+ __dirname + '/src/index.html')

	mainWindow.webContents.openDevTools()
  
  mainWindow.on('closed', function() {
  	mainWindow = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin')
    app.quit()
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
  if (win === null)
    createWindow()
});