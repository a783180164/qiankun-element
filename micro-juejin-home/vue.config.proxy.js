/*
 * @Author: your name
 * @Date: 2021-05-07 13:29:36
 * @LastEditTime: 2021-05-07 13:30:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\vue.config.proxy.js
 */
const packageName = require("./package.json").name;

const prefix = "/api/" + packageName;
const prefixRegExp = "^" + prefix;

const proxy = {
  [prefix]: {
    target: "http://localhost:3000",
    ws: false,
    changeOrigin: false,
    pathRewrite: {
      [prefixRegExp]: "/api"
    }
  }
};
module.exports = proxy;
