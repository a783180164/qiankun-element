/*
 * @Author: your name
 * @Date: 2021-05-11 13:26:24
 * @LastEditTime: 2021-05-11 16:40:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\components\Home\HomeSider\ADCard\index.tsx
 */
import { defineComponent } from 'vue'
import {propTypes} from '@/utils/propTypes'
import './index.scss'
export default defineComponent({
  name: 'ADCard',
  props: {
    href: propTypes.string.def(''),
    img: propTypes.string.def('')
  },
  render() {
    return (
      <a href={ this.href as string } target="_blank">
        <div class="HomeSider_AD_wrapper">
          <img src={ this.img as string } alt="" />
        </div>
      </a>
    )
  }
})