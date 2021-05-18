/*
 * @Author: your name
 * @Date: 2021-05-07 15:17:13
 * @LastEditTime: 2021-05-17 11:33:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\components\Home\HomeMain\ArticleList\index.tsx
 */
import { defineComponent, reactive, toRefs, computed } from 'vue'
import ArticleCard from "@comp/Home/HomeMain/ArticleCard"
import { RecycleScroller } from "vue-virtual-scroller"
import { onGlobalStateChange } from "@/main"
import { useStore } from 'vuex'
import './index.scss'
export default defineComponent({
  name: 'ArticleList',
  async setup() {
    const store = useStore()
    const state = reactive({
      loading: true,
      skeletonNum: 15,
      busy: false
    })
    
    async function created() {
      onGlobalStateChange(async (micoState: any) => {
        console.log("监听到滚动到底了！！！！！！！！！！！！！！！");
        if (micoState.scrollToBottom && !state.loading) {
          state.skeletonNum = 11;
          state.loading = true;
          await store.dispatch('home/getArticleList', 10);
          state.loading = false;
        }
      })
      state.loading = true;
      await store.dispatch('home/getArticleList');
      state.loading = false;
    }
    const articleList = computed(()=> {
      return store.state?.home?.articleList
    } )
    try {
      created()
    } finally {
      
    }
    return {
      ...toRefs(state),
      articleList
    }
  },
  render() {
    return (
      <div id="ArticleList">
        <div v-show= { this.loading }>
          {
            Array.from({length: this.skeletonNum}).map((item: any, index: number) => index).map((item: any) => {
              return (
                <div key={ item } class="skeleton-wrapper">
                  <a-skeleton active />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
})