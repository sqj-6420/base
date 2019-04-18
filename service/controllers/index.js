// node模块
var fs = require('fs');
var path = require('path');
// 配置文件
var config = require('../config.js');

// 首页
exports.index = function (req, res) {
    res.render('guidance.html', {
        title: '首页'
    })
};

//获取config.json中的值
exports.getConfigJson = function(req , res , next){
    var configId = req.query.configId;
    var configVal = config[configId];
    res.send({
        status:200,
        data:{
            configVal:configVal
        },
    })
}