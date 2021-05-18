/*
 * @Author: your name
 * @Date: 2021-05-11 13:18:34
 * @LastEditTime: 2021-05-17 11:29:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\components\Home\HomeMain\index.tsx
 */
import { defineComponent, Suspense } from 'vue'
import NavTabs from "@comp/Home/HomeMain/NavTabs";
import ArticleList from "@comp/Home/HomeMain/ArticleList";
import './index.scss'
export default defineComponent({
  name: 'HomeMain',
  setup() {
    return {
    }
  },
  render() {
    return (
      <div id="HomeMain_container">
        {/* {  } <a-button onClick={ this.getToken } v-if="false">GET_TOKEN</a-button> */}
        <NavTabs />
        <Suspense>
          <ArticleList />
        </Suspense>
      </div>
    )
  }
})