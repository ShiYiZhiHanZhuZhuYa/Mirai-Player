# Kuriyama Mirai Player

### 介绍 📖

Kuriyama Mirai Player 一款基于 Vue3.3、Vite4、Pinia、Element-Plus 开源的Web音乐播放器，使用目前最新技术栈开发。

### 在线预览 👀

vercel：https://kuriyamamiraiplayer.vercel.app/#/ (可能需要魔法)

github pages：https://xiangzi7.github.io/Kuriyama-Mirai-Player/


### 代码仓库 ⭐

GitHub：https://github.com/XiangZi7/Kuriyama-Mirai-Player

项目功能 🔨
使用 Vue3.3 开发，单文件组件＜ script setup ＞
采用 Vite4 作为项目开发、打包工具
使用 Pinia 替代 Vuex，轻量、简单、易用，集成 Pinia 持久化插件
基于 Element Plus
使用 VueRouter 路由懒加载

### 安装使用步骤 📔

* Clone

#Github

`git clone https://github.com/XiangZi7/Kuriyama-Mirai-Player.git`

* Install：
  `yarn`
* Run：
  `yarn dev`
* 文档说明
  https://neteasecloudmusicapi.vercel.app/#/  （可能需魔法上网）
### 项目运行和打包 👀
* 第一步将vite项目进行打包，在项目目录终端中执行
   `npm run build`然后我们看到打包好的dist文件
* 去终端中执行 注意：我们要在生成的dist目录中执行
  `npm install electron` 安装electron
* 再在这个目录下创建两个文件 分别是main.js和package.json




main.js
```
const {app, BrowserWindow} =require('electron');//引入electron
let win;
let windowConfig = {
  width:800,
  height:600
};//窗口配置程序运行窗口的大小，可自行设置
function createWindow(){
  win = new BrowserWindow(windowConfig);//创建一个窗口
  win.loadURL(`file://${__dirname}/index.html`);//在窗口内要展示的内容index.html 就是打包生成的index.html
  win.webContents.openDevTools();  //开启调试工具
  win.on('close',() => {
    //回收BrowserWindow对象
    win = null;
  });
  win.on('resize',() => {
    win.reload();
  })
}
app.on('ready',createWindow);
app.on('window-all-closed',() => {
  app.quit();
});
app.on('activate',() => {
  if(win == null){
    createWindow();
  }
});




package.json

{
    "name": "demo",
    "author": "作者",
    "version": "1.0.4",
    "main": "main.js",
    "description": "项目描述",
    "scripts": {
        "pack": "electron-builder --dir",
        "dist": "electron-builder",
        "start": "electron .",
        "postinstall": "electron-builder install-app-deps"
    },
    "dependencies": {
        
    },
    "devDependencies": {
        "electron-builder": "^24.6.3",
        "core-js": "^2.4.1",
        "electron-packager": "^12.1.0",
        "electron-updater": "^2.22.1",
        "electron": "^25.3.2"
    },
    "build": {
		"appId": "example.app.id", 
		"productName": "productName", 
		"directories": {
			"output": "build" 
		},
		"files": [ 
			"./**/**/*"
		],          
		"win": {
			"target": [
				{
					"target": "nsis",
					"arch": [
						"ia32"
					]
				}
			],
			"icon": "./public/icon(1).png",
			"artifactName": "${productName}_${version}.${ext}"
			
		},
		"nsis": {
			"oneClick": false,
			"allowToChangeInstallationDirectory": true,
			"runAfterFinish": false
		}
        
	}
    
}
```
* 配置不正常的话 打包会有奇怪的错误 
* 在dist 目录执行 npm start 看看效果 👇
* 效果出来了 我们就进行下一步 安装electron-builder  在dist目录安装 终端运行 `npm install electron-builder --save-dev` 
* 在终端执行`npm run dist`即可打包 打包完成后就可以在dist文件夹下的build 找到进入win文件夹点击exe程序 就能启动应用了
* 实在不行的话 包也打出来了 就在release里


### 项目截图 📷

![1686722338917](image/README/1686722338917.png)

![1686722358440](image/README/1686722358440.png)

![1686722368781](image/README/1686722368781.png)

![1686722421686](image/README/1686722421686.png)

![1686722435660](image/README/1686722435660.png)

### 项目后台接口 🧩

* https://neteasecloudmusicapi.vercel.app/#/  （可能需魔法上网）
### QQ交流群 👨‍👨‍👦‍👦

![1686722147442](image/README/1686722147442.png)
