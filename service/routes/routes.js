// 引入controller层，可以根据不同的接口分为不同的文件引入
const controllers = require('../controllers/index');

module.exports = function (app) {
    app.get('/', controllers.index); //网站主页
    // app.get('/ApprTerminalSys', controllers.index); //网站主页

    //获取config.js的值
    app.get('/ApprTerminalSys/getConfig', controllers.getConfigJson); //网站主页
}