// vue.config.js

module.exports = {
    publicPath: './',
    outputDir: './pc/',
    chainWebpack: config => {
        config.module
            .rule('scss')
            .oneOf('vue')
            .use('px2rem-loader')
            .loader('px2rem-loader')
            .before('postcss-loader') // this makes it work.
            .options({ remUnit: 192, remPrecision: 6 }) // 设计稿宽度：1920px
            .end()
        
        config
            .plugin('html')
            .tap(args => {
                args[0].title= '奇华顿香氛黑科技搜索器'
                return args
            })
    }
}