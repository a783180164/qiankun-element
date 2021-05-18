/*
 * @Author: your name
 * @Date: 2021-04-23 15:47:18
 * @LastEditTime: 2021-05-11 11:37:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\shims-vue.d.ts
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue-virtual-scroller' {
  import { RecycleScroller } from "vue-virtual-scroller"
  export { RecycleScroller }
}