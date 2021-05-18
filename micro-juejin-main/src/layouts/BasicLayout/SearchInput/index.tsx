/*
 * @Author: your name
 * @Date: 2021-04-28 17:24:35
 * @LastEditTime: 2021-04-30 11:30:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\layouts\SearchInput\index.tsx
 */
/*
 * @Author: your name
 * @Date: 2021-04-28 17:18:10
 * @LastEditTime: 2021-04-28 17:24:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\layouts\BasicLayout\BellBadge\index.tsx
 */
import { defineComponent, reactive, toRefs } from 'vue'
import { propTypes } from '@/utils/propTypes'
import './index.less'
export default defineComponent({
  name: 'SearchInput',
  props: {
    isCollapsed: propTypes.bool.def(false)
  },
  setup() {
    const state = reactive({
      searchValue: '',
      placeholder: '探索掘金'
    })
    const handleSearch = () => {
      console.log(state.searchValue)
    }
    const handleFocus = () => {
      state.placeholder = '搜索文字/标签/用户'
    }
    const handleBlur = () => {
      state.placeholder = '探索掘金'
    }
    return {
      ...toRefs(state),
      handleSearch,
      handleFocus,
      handleBlur
    }
  },
  render() {
    return (
      <a-input-search placeholder={this.placeholder} 
                      v-model={ this.searchValue }
                      onSearch={ this.handleSearch.bind(this) }
                      onFocus={ this.handleFocus.bind(this) } 
                      onBlur={ this.handleBlur.bind(this) }
                      class="SearchInput_wrapper"
                      style={{
                        minWidth: '115px',
                        flex: 1,
                        transition: 'width 0.5s'
                      }}
                      enterButton={ false } />
    )
  }
})