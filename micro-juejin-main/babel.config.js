/*
 * @Author: your name
 * @Date: 2021-04-23 15:21:51
 * @LastEditTime: 2021-04-30 09:58:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-main\babel.config.js
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
