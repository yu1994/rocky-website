const webpack = require("webpack");
module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.60.123/api/",
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api": "/" }
      }
    }
  },
  //publicPath: process.env.NODE_ENV === 'production'? './': '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: "'development'",
          BASE_API: '"http://192.168.60.123/api/"'
        }
      })
    ]
  }
};
