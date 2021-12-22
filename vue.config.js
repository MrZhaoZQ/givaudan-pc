// vue.config.js
// 设计稿宽度为1920，则设置remUnit为192，此时若需适配设计稿为750的移动端则需要在该设计稿上量出的值乘以1920/750
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
            .options({ remUnit: 192, remPrecision: 6 })
            .end()
        
        config
            .plugin('html')
            .tap(args => {
                args[0].title= '奇华顿香氛黑科技搜索器'
                return args
            })
    }
}