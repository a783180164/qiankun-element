/*
 * @Author: your name
 * @Date: 2021-04-28 15:04:55
 * @LastEditTime: 2021-04-28 15:06:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\views\People\index.tsx
 */
import { defineComponent, reactive, toRefs }  from 'vue'

export default defineComponent({
  name: 'People',
  setup() {
    const state = reactive({
      count: 0
    })
    return {
      ...toRefs(state) 
    }
  }
})