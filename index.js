const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
  const win = new BrowserWindow()
  win.loadFile('app/index.html')
})