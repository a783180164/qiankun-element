/*
 * @Author: your name
 * @Date: 2021-04-28 17:18:10
 * @LastEditTime: 2021-04-30 11:39:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\layouts\BasicLayout\BellBadge\index.tsx
 */
import { defineComponent } from 'vue'
import { BellOutlined } from '@ant-design/icons-vue';
import './index.less'
export default defineComponent({
  name: 'BellBadge',
  setup() {
    return {
    }
  },
  render() {
    return (
      <BellOutlined class="bell-icon" />
    )
  }
})