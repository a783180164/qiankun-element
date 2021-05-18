/*
 * @Author: your name
 * @Date: 2021-04-29 09:51:26
 * @LastEditTime: 2021-04-30 11:04:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\components\common\FLIPWrapper\index.tsx
 */
import { defineComponent, TransitionGroup } from 'vue'
import './index.less'
export default defineComponent({
  name: 'FLIPWrapper',
  render() {
    return() {
      <TransitionGroup name="FLIP-wrapper" id="FLIP-wrapper">
        <slot>
          <h1 key={ -1 } class="FLIP-wrapper-tip">🦄 EMPTY 😱😱😱😱😱😱😱</h1>
        </slot>
      </TransitionGroup>
    }
  }
})
