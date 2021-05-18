/*
 * @Author: your name
 * @Date: 2021-04-28 17:44:15
 * @LastEditTime: 2021-04-30 12:07:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\layouts\BasicLayout\WriteButton\index.tsx
 */
import { defineComponent, Transition } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { DownOutlined } from '@ant-design/icons-vue';
import './index.less'
export default defineComponent({
  name: 'WriteButton',
  props: {
    isCollapsed: propTypes.bool.def(false)
  },
  setup() {
    const handleClickArticle = () => {
      window.open("https://juejin.im/editor/drafts")
    }
    const handleClickBoiling = () => {
      console.log("handleClickBoiling")
    }
    return {
      handleClickArticle,
      handleClickBoiling
    }
  },
  render() {
    return (
      <div
        class="WriteButton_wrapper"
        style={{
          width: this.isCollapsed ? 0 : '120px'
        }}
      >
        <Transition name="ease_fade" class="WriteButton_wrapper">
          {
            !this.isCollapsed && (
              <a-dropdown-button
                trigger={ ['click'] }
                type="primary"
                style="margin-left: 8px"
                v-slots={{
                  overlay: ()=> {
                    return <a-menu style="width:105px;text-align: center">
                      <a-menu-item key="0" onClick={ this.handleClickBoiling.bind(this) }>
                        <span>发布沸点</span>
                      </a-menu-item>
                    </a-menu>
                  },
                  icon: () => {
                    return <DownOutlined />
                  }
                }}
              >
                <div class="button-wrapper">
                  <div onClick={ this.handleClickArticle.bind(this) }>写文章</div>
                </div>
              </a-dropdown-button>
            )
          }
        </Transition>
      </div>
    )
  }
})