const express = require('express'),
    path = require('path'),
    http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    RedisStore = require('connect-redis')(session),
    log4js = require('log4js'),
    proxy = require('http-proxy-middleware'),
    app = express();

const config = require('./config');

// 设置环境变量
// process.env.NODE_ENV = 'production'
app.set('env', config.env);

// 视图目录
app.set('views', (path.join(__dirname, './public')));
// 模板引擎
app.set('view engine', 'html');
app.engine('html', ejs.__express);
// 静态资源（这里的静态资源地址要根据项目文件夹来进行修改）
// const viewPath = config.env === 'development' ? '../webs/dist' : './public';
const viewPath = './public';
app.use(express.static(path.join(__dirname, viewPath)));
//设置反向代理，默认 false
app.enable('trust proxy');

// 定义数据解析器
// urlencoded 设置为 false 时，会使用 querystring 库解析URL编码的数据；设置为 true 时，会使用qs库解析URL编码的数据
// app.use(bodyParser.urlencoded({ extended: true }));

// redis 和 session 配置（这里必须放在拦截器之前）
// if (config.isUseRedis != '0') {
//     console.log('Redis 已启用 ======');
//     app.use(session({
//         store: new RedisStore(config.RedisOptions), // 使用redis作为session的存放地
//         secret: config.sessionSecret,
//         resave: true,
//         saveUninitialized: true,
//         cookie: {
//             maxAge: config.cookieMaxAge -0
//         }
//     }));
// } else {
//     app.use(session({
//         secret: config.sessionSecret, // 通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
//         resave: true, // 将 session 强制保存到 session store 中，即使在请求中 session 并没有修改
//         saveUninitialized: true, // 强制没有初始化的 session 保存到 store 中，没有初始化时只刚被创建而未修改。如果要实现登录该值最好设置为 false
//         // cookie 配置项
//         cookie: {
//             maxAge: config.cookieMaxAge -0 // 过期时间（单位毫秒） 需要大于1分钟 过短可能会导致 session 不过期
//         }
//     }));

// }

// 登录路由拦截 (拦截必须在声明路由之前)
// app.use(function (req, res, next) {
//     if (req.session.userInfo) {
//         next()
//     } else {
//         return res.send({
//             status: 400,
//             isLogin: false,
//             msg: '该接口需要登录'
//         });
//     }
//     next();
// });

// 反向代理
const proxyConfig = config.proxy;
proxyFn(proxyConfig)

// 将数组转化为符合要求的 proxy 对象 并挂载到 app 上
// 具体配置参阅 https://www.npmjs.com/package/http-proxy-middleware
function proxyFn (proxyConfig) {
    const prefix = proxyConfig.prefix;
    const interface = proxyConfig.interface;
    for (let i = 0; i < interface.length; i++) {
        const proxyInterface = proxy({
            target: interface[i].target, // 目标地址
            changeOrigin: interface[i].changeOrigin, // 是否需要改变原始主机头为目标url
            pathRewrite: {
                [`^/${prefix}/${interface[i].name}`]: `/${interface[i].name}`    // 重写请求
            }
        })
        // 挂载代理
        app.use(`/${prefix}/${interface[i].name}`, proxyInterface)
    }
}
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(function(req , res , next){
//     req.session.terminal = true;
//     next();
//     // 测试使用
//     // req.session.info = {
//     //     userCode: 'csqy123456', // 用户账号 lizhongshan123 个人账户(已绑定企业)  yueebao 个人账号(无绑定企业) csr zhang123 企业用户
//     //     userType: '2' // 用户类型 1 个人用户 2 企业用户 3 单位用户
//     // };
//     // console.log(req.session.info);
// })

// 引入路由
const routes = require('./routes/routes');
routes(app);

// 错误处理
app.use(function(err, req, res, next) {
    const message = req.app.get('env') === 'development' ? err.message : {
        status: '500',
        msg: '程序发生内部错误，请联系管理员'
    };
    const status = err.status === undefined ? '500' : err.status.toString();
    logger.error(err);
    // 单页面应用直接返回错误信息即可，在单页面路由中配置错误页面
    res.setHeader('Content-Type','text/javascript;charset=UTF-8');
    res.status(status).send(message || '');
});

// 404 处理
app.get('*', function(req, res) {
    var message = '很抱歉！您访问的路由不存在或已被删除';
    res.setHeader('Content-Type','text/javascript;charset=UTF-8');
    res.status(404).send(message);
});

// 日志记录（这里的log4js是2.x版本）
log4js.configure({
    appenders: {
        // 将错误信息输出在console
        console: {
            type: 'console'
        },
        cheeseLogs: {
            type: 'file',
            filename: path.join(__dirname, './logs/logger.log'),
            pattern: '.yyyy-MM-dd',
            category: 'NodeJS日志',
            maxLogSize: 1048576
        }
    },
    categories: {
        default: {
            appenders: ['console', 'cheeseLogs'],
            level: 'all'
        }
    }
});
const logger = log4js.getLogger('NodeJS日志');
// console.log = logger.info.bind(logger);
app.use(log4js.connectLogger(logger));

// 监听端口
app.listen(config.port, function () {
    // console.log('========================================================');
    // console.log('当前环境为：' + app.get('env'));
    // console.log('========================================================');
    // console.log("可视化界面的访问地址连接：/Apply/configuration/files");
    console.log('========================================================');
    console.log('Server is listening the port: ' + config.port);
});