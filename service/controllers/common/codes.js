/**
 * Created by qingxing on 2016/8/24.
 * 验证码模块
 */
'use strict';
var captchapng = require('captchapng');

// 验证码获取
exports.captchap=function (req, res, next) {
    var width  = 80;
    var height = 34;
    var code              = parseInt(Math.random() * 9000 + 1000);
    //var code              = 1234;

    // 保存到session
    req.session.checkcode = code;


    // 输出图片
    var p = new captchapng(width, height, code);
    p.color(0, 0, 0, 0);
    p.color(80, 80, 80, 255);

    var img       = p.getBase64();
    var imgbase64 = new Buffer(img, 'base64');
    res.writeHead(200, {
        'Content-Type' : 'image/png'
    });
    res.end(imgbase64);
}

// 验证码验证
exports.verification = function(req, res, next) {
    if(req.body.codes == req.session.checkcode) {
        var data = {
            state: true,
            desc: '验证成功'
        }
    } else {
        var data = {
            state: false,
            desc: '验证码不正确'
        }
    }
    res.send(data);
}