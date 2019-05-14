var electron = require('electron');
electron.app.on('ready', function (){
    
    var mainWindow = new electron.BrowserWindow({width: 1920, height: 1280});
    
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    
});