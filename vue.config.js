const path = require('path')
const Version = new Date().getTime();
const isPro = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: "/", //部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: process.env.VUE_APP_PACKAGE, //运行时生成的生产环境构建文件的目录(默认'dist'，构建之前会被清除)
  // assetsDir: '',        //静态资源目录(js、css、img、fonts)，相对outputDir的目录(默认'')
  // indexPath: 'index.html', //指定生成index.html的输出路径(相对outputDir)也可以是绝对路径
  // lintOnSave: true,                //是否开启ESlint（保存时检查）
  productionSourceMap: true, //生产环境是否生成 sourceMap 文件
  devServer: {
    port: 8088,
    // host: "kapi.xincheng.com",
    open: true,
    proxy: {
      "/api": {
        target: "http://10.0.36.85:32510",
        changeOrigin: true, // 如果接口跨域
        pathRewrite: { "^/api": "/api" },
      },
    },
  },
  configureWebpack: {
    output: {
      filename: `js/[name].${Version}.js`,
      chunkFilename: `js/[name].${Version}.js`,
    },
  },
  chainWebpack: (config) => {
    if(isPro){
      config.plugin("extract-css").tap((args) => [
        {
          filename: `css/[name].${Version}.css`,
          chunkFilename: `css/[name].${Version}.css`,
        },
      ]);
    }
  },
  pluginOptions: {//vue less全局变量
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
      	// 注意路径，不能使用配置中的别名路径（例如：alias 配置下的路径别名）
        path.resolve(__dirname, 'src/assets/css/reset.less'), 
      ]
    }
  }
};
