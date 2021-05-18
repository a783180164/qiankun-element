/*
 * @Author: your name
 * @Date: 2021-04-25 11:23:07
 * @LastEditTime: 2021-05-18 17:21:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\master\vue.config.ts
 */
const { name } = require('./package.json');
module.exports = {
  /*antd 主题定制*/
  css: {
    loaderOptions: {
      less: {
        // 注意用lessOptions包裹，不然识别不了，被坑了一手
        lessOptions: {
          modifyVars: {
            /* less 变量覆盖，用于自定义 ant design 主题 */
            "primary-color": "#007FFF",
            "link-color": "#007FFF",
            // "primary-color": "#673AB7",
            // "link-color": "#673AB7",
            "border-radius-base": "4px"
          },
          javascriptEnabled: true
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 8070
  },
  chainWebpack: (config)=> {
    config.module.rule('images')
    .test(/\.(png|jpe?g|gif|webp|woff2?|eot|ttf|otf)$/i)
    .use('url-loader')
    .loader('url-loader')
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};