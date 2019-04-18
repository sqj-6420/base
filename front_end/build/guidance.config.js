module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    outputDir: '../service/public/', // 更改打包路径
    assetsDir:'',
    pages: {
        guidance: {
            // page 的入口
            entry: 'src/pages/guidance/main.js',
            // 模板来源
            template: 'src/pages/guidance/tpl.html',
            // 在 dist/demo.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '桂林政务大厅智能办事引导系统',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'guidance']
        }
    },
    // 请求代理
    devServer: {
        proxy: {
            // '/CommonService': {
            //     target: 'http://192.168.0.152:7001',
            //     ws: true,
            //     changeOrigin: true
            // },
            // 'ApprNetInterface': {
            //     target: 'http://192.168.0.152:7001',
            //     ws: true,
            //     changeOrigin: true
            // },
            // 'ApprItemInterface': {
            //     target: 'http://192.168.0.152:7001',
            //     ws: true,
            //     changeOrigin: true
            // },
            'ApprTerminalSys': {
                target: 'http://127.0.0.1:3100',
                ws: true,
                changeOrigin: true
            }
        }
    },
    // 生产环境下的sourceMap
    productionSourceMap: true,
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config
                .externals({
                    'vue': 'Vue',
                    'vue-router': 'VueRouter'
                })
        } else {
            // 为开发环境修改配置...
        }
    },
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
}