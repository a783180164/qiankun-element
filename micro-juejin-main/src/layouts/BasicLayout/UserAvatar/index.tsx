/*
 * @Author: your name
 * @Date: 2021-04-28 17:41:58
 * @LastEditTime: 2021-04-28 17:43:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\layouts\BasicLayout\UserAvatar\index.tsx
 */

import { defineComponent } from 'vue'
import './index.less'
export default defineComponent({
  name: 'UserAvatar',
  render() {
    return (
      <a-avatar style="min-width: 32px"
                src="https://mirror-gold-cdn.xitu.io/16d46f01d783cbf7e0d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" />
    )
  }
})