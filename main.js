const { app, BrowserWindow } = require('electron');

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        fullscreen: true,
        autoHideMenuBar: true,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    //mainWindow.webContents.openDevTools()
    mainWindow.maximize();
    mainWindow.loadFile('index.html');
    mainWindow.show();

    /* Spawn express server */
    var serv = require('express')();
    var bodyParser = require("body-parser");
    var http = require('http').createServer(serv);

    //Here we are configuring express to use body-parser as middle-ware.
    serv.use(bodyParser.urlencoded({ extended: false }));
    serv.use(bodyParser.json());

    serv.post('/handle', function(request, response){
        mainWindow.webContents.send('report', request.body);
        response.send('ok');
    });

    serv.get('/', function(req, res){
        mainWindow.webContents.send('report', 'whoooooooh!');
        res.send('<h1>Hello world</h1>');
    });

    http.listen(6666, function(){
        console.log('listening on *:6666');
    });
});
