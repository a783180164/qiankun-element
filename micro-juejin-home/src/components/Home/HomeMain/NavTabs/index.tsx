/*
 * @Author: your name
 * @Date: 2021-05-11 13:10:37
 * @LastEditTime: 2021-05-11 16:45:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\components\Home\HomeMain\NavTabs\index.tsx
 */
import { defineComponent, reactive, toRefs } from 'vue'
import './index.scss'
export default defineComponent({
  name: 'NavTabs',
  setup() {
    const state = reactive({
      activeKey: 'popular',
      navTabs: [
        {
          title: '热门',
          value: 'popular'
        },
        {
          title: '最新',
          value: 'newest'
        },
        {
          title: '热榜',
          value: 'three_days_hottest'
        }
      ]
    })
    const handleClick = (activeKey: string) => {
      console.log(activeKey, 111)
      state.activeKey = activeKey
    }
    return {
      ...toRefs(state),
      handleClick
    }
  },
  render() {
    return (
      <div id="NavTabs">
        <a-button
          type="link"
          class={ ['NavTab_btn', this.activeKey === 'popular' ? 'active_tab' : ''] }
          onClick={ this.handleClick.bind(this, 'popular') }
          ><span>热门</span>
        </a-button>
        <a-button
          type="link"
          class={ ['NavTab_btn', this.activeKey === 'newest' ? 'active_tab' : ''] }
          onClick={ this.handleClick.bind(this, 'newest') }
          ><span>最新</span>
        </a-button>
        <a-button
          type="link"
          class={[
            'NavTab_btn',
            this.activeKey === 'three_days_hottest' ? 'active_tab' : ''
          ]}
          onClick={ this.handleClick.bind(this, 'three_days_hottest') }
          ><span>热榜</span>
        </a-button>
      </div>
    )
  }
})