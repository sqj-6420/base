/**
 * 项目配置文件
 */

module.exports = {
    host: '127.0.0.1', // 主机地址
    port: 3100, // 端口
    area: '1', // 地区编码
    isUseRedis: false, // 是否采用 redis 作为 session 共享存储
    sessionSecret: 'secret-key', // 用于计算 session 的 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    cookieMaxAge: 36000000, // cookie 过期时间
    // redis 配置项（如果是单点登录的多个系统，那么redis的配置都是一致的）
    RedisOptions: {
        host: '127.0.0.1', // redis 服务器主机名
        port: '6379', // redis 服务器端口
        pass: '', // redis 数据库密码
        db: 2, // redis 数据库索引，默认 0
        logErrors: '' // redis 错误打印
    },
    proxy: {
        prefix: 'ApprTerminalSys',          // 路由前缀
        // 接口配置数组
        interface: [{
            name: 'CommonService', // 接口包名，需要和接口的前缀一致
            // CommonService接口包部署地址，需要有http头
            target: 'http://192.168.0.152:7001',
            changeOrigin: true, // 是否需要改变原始主机头为目标url
        },{
            name: 'ApprItemInterface', // 接口包名，需要和接口的前缀一致
            // 事项库接口包部署地址，需要有http头
            target: 'http://192.168.0.152:7001',
            changeOrigin: true, // 是否需要改变原始主机头为目标url
        },{
            name: 'ApprNetInterface', // 接口包名，需要和接口的前缀一致
            // 网厅后台接口包部署地址，需要有http头
            target: 'http://192.168.0.152:7001',
            changeOrigin: true, // 是否需要改变原始主机头为目标url
        }]
    }
};