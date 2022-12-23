const { app, BrowserWindow, electron } = require('electron');
const ipc = require("electron").ipcMain;


// Enable live reload for Electron
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

const createWindow = () => {
        // Create the browser window.
        const mainWindow = new BrowserWindow({
            useContentSize: true,
            width: 920,
            height: 620,
            transparent:true,
            frame: false,
            resizable: false,
            webPreferences: {
                nodeIntegration: true, 
                contextIsolation: false,
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile("src/index.html");

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    // minimise func
    ipc.on("min", function(event) {
        mainWindow.minimize() 
    });

    // close func
    ipc.on("close", function(event) {
        mainWindow.close() 
    });

    // about func
    ipc.on("know-more-btn-click", function(event) {
        require('electron').shell.openExternal('https://github.com/SanchesIH/standmol.git'); 
    });

};

app.on('ready', createWindow);

// alows windows to close on MacOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
 })