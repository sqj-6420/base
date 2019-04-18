//储存用户登录信息
exports.getInfo = function (req, res) {
    res.send({status:200,info:req.session.info})
};

exports.saveInfo = function (req, res) {
    req.session.info = new Object();
    req.session.info = {
        userCode:req.body.userCode,
        userType:req.body.userType
    }
    setUserCookie(res, {
        'isLogin': true,
        'userCode':req.body.userCode,
        'userType': req.body.userType
    })
    res.send({status:200,desc:"存储用户信息成功"});
};

//清空userCode
exports.clearInfo = function (req,res) {
    req.session.info = null;
    // setUserCookie(res, {
    //     'isLogin': false,
    //     'userCode':''
    // })
    res.clearCookie('isLogin');
    res.clearCookie('userCode');
    res.clearCookie('userType');
    res.send({status:200,desc:"清空userCode成功"})
}

// 设置cookie
var setUserCookie = function (res, json) {
    for (var i in json) {
        res.cookie(i, json[i], {
            maxAge: 30 * 60 * 1000
        });
    }
};