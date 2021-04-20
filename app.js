var electron = require('electron');
electron.app.on('ready', function (){

    var mainWindow = new electron.BrowserWindow();

    mainWindow.loadURL("file://" + __dirname + "/index.html");

});
