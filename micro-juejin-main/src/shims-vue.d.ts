/*
 * @Author: your name
 * @Date: 2021-04-23 15:21:51
 * @LastEditTime: 2021-04-30 11:13:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-main\src\shims-vue.d.ts
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
