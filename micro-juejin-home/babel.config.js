/*
 * @Author: your name
 * @Date: 2021-04-23 15:47:18
 * @LastEditTime: 2021-05-11 16:26:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: true
      }
    ]
  ]
}
