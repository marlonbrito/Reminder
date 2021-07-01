const { BrowserWindow } = require('electron')
const path = require('path')
function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        show: false,
        width: 250,
        height: 310,
        frame: false,
        resizable: false,
        fullscreenable: false,
        transparent:true,
        skipTaskbar:true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')

    mainWindow.on('blur',()=>mainWindow.hide())
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
    return mainWindow
}

module.exports = createWindow()