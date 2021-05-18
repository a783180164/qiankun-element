/*
 * @Author: your name
 * @Date: 2021-04-23 15:47:18
 * @LastEditTime: 2021-05-07 13:16:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\home\src\App.tsx
 */

import { defineComponent } from 'vue'
import BasicLayout from "@/layouts/BasicLayout";
import './App.less'
export default defineComponent({
  setup() {
    return {}
  },
  render() {
    return (
      <div id="main_app">
        <BasicLayout />
      </div>
    )
  }
})