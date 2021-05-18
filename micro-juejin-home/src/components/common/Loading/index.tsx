/*
 * @Author: your name
 * @Date: 2021-04-29 09:55:31
 * @LastEditTime: 2021-05-07 11:08:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\components\common\Loading\index.tsx
 */
import { defineComponent } from 'vue'
import './index.less'
export default defineComponent({
  name: 'Loading',
  render() {
    return (
      <div class="loading_container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    )
  }
})