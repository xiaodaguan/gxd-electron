const {
    app,
    BrowserWindow
} = require('electron');

const electron = require('electron');
const dialog = electron.dialog;
const globalShortcut = electron.globalShortcut;
const ipcMain = require('electron').ipcMain;


function createWindow() {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        width: 400,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // 并且为你的应用加载index.html
    win.loadFile('index.html');

    win.setHasShadow(true);
    win.setPosition(100, 100);

    // win.maximize();

    // win.loadURL("https://www.icloud.com/notes/");

    // 打开开发者工具
    // win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});


app.on('ready', function () {
    globalShortcut.register('F12', function () {
        dialog.showMessageBox({
            type: 'info',
            message: '成功!',
            detail: '你按下了一个全局注册的快捷键绑定.',
            buttons: ['好的']
        });

    })
});

app.on('will-quit', function () {
    globalShortcut.unregisterAll()
});

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。

ipcMain.on('asynchronous-message', (event, arg) => {

    if (arg === 'open reminder') {
        var win = new BrowserWindow({
            width: 1366,
            height: 768,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.loadURL("https://www.icloud.com/notes/");

    }

    if (arg === 'open wechat') {
        var win = new BrowserWindow({
            width: 1000,
            height: 1000,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.loadURL("https://wx.qq.com/");
    }

    if (arg === 'open gxd') {
        var win = new BrowserWindow({
            width: 1366,
            height: 768,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.loadURL("http://guanxiaoda.cn/");
        win.maximize();
    }
    if (arg === 'open office') {
        var win = new BrowserWindow({
            width: 1366,
            height: 768,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.loadURL("https://www.office.com/?auth=1");
        win.maximize();
    }
    if (arg === 'open word') {
        var win = new BrowserWindow({
            width: 1366,
            height: 768,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.loadURL("https://www.office.com/launch/word?auth=1");
        win.maximize();
    }
    if (arg === 'open weread') {
        var win = new BrowserWindow({
            width: 1366,
            height: 768,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.loadURL("https://weread.qq.com/");
        win.maximize();
    }

});