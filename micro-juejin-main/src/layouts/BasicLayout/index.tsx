/*
 * @Author: your name
 * @Date: 2021-04-29 09:47:43
 * @LastEditTime: 2021-05-17 13:45:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\layouts\BasicLayout\index.tsx
 */
import { defineComponent, reactive, toRefs, computed, watch, onMounted, Transition } from 'vue'
import apps from "@/shared/microApps";
import { debounce, throttle } from "@/shared/util";
import SearchInput from "@/layouts/BasicLayout/SearchInput";
import WriteButton from "@/layouts/BasicLayout/WriteButton";
import BellBadge from "@/layouts/BasicLayout/BellBadge";
import UserAvatar from "@/layouts/BasicLayout/UserAvatar";
import NavBar from "@/layouts/BasicLayout/NavBar";
import Loading from "@/components/common/Loading";
import { actions, state as microState } from "@/shared/subRegister";
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ActiveRuleType } from './interface'
import './index.less'
interface State {
  isLoadingMicro: boolean
  switchingApp: boolean
  apps: any
  activeRule: ActiveRuleType
  ruleMap: any
  screenWidth: number
  scrollTop: number
  showHeader: boolean
}
export default defineComponent({
  name: 'BasicLayout',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const state: State = reactive({
      isLoadingMicro: true,
      switchingApp: false,
      apps,
      activeRule: '/micro-juejin-home',
      ruleMap: new Map(),
      screenWidth: document.body.clientWidth,
      scrollTop: 0,
      showHeader: true
    })
    // 当前标题
    const currentTitle = computed(() => {
      return state.activeRule 
              ? state.ruleMap.get(state.activeRule)
              : apps[0].$meta.title
    })
    const isLoading = computed(() => {
      return store.state.isLoading
    })
    // 是否展开
    const isCollapsed = computed(() => {
      return state.screenWidth < 960;
    })
    // 计算展示什么页面
    const showNavBar = computed(() => {
      switch (state.activeRule) {
        case "/micro-juejin-home":
          return true;
        case "/micro-juejin-boiling":
          return isCollapsed
        case "/micro-juejin-topic":
          return false
        case "/micro-juejin-brochure":
          return true
        case "/micro-juejin-activity":
          return true
        default:
          return false
      }
    })

    const handleRouterLink = (activeRule: ActiveRuleType) => {
      if (state.activeRule === activeRule) {
        return;
      }
      state.activeRule = activeRule
      state.switchingApp = true;
      setTimeout(async () => {
        await router.push(activeRule);
        state.switchingApp = false;
      }, 500);
    }
    // 滚动
    const handleScroll = (e: any) => {
      const { clientHeight, scrollHeight, scrollTop } = e.target;
      if (scrollHeight - scrollTop === clientHeight) {
        microState.scrollToBottom = true;
        microState.isLoadingMicro = false;
        actions.setGlobalState(microState);
      }
      state.scrollTop = e.target.scrollTop;
    }
    watch(route, (newVal) => {
      state.activeRule = '/' + newVal.path.split("/")[1] as ActiveRuleType
    })
    watch(() => state.scrollTop, debounce(
      function(newVal: number, oldVal: number) {
        state.showHeader = newVal - oldVal <= 0;
        if (newVal <= 0) {
          state.showHeader = true;
        }
      },
      200,
      false
    ))

    const created = () => {
      document.cookie = 'test_cookie="I am a cookie"'
      localStorage.setItem("test_token", "I am Channing")
      apps.forEach(app => {
        state.ruleMap.set(app.activeRule, app.$meta.title)
      })
      state.activeRule = '/' + route.path.split('/')[1] as ActiveRuleType
    }
    
    // 初始化
    created()

    onMounted(() => {
      window.onresize = throttle(
        () => {
          state.screenWidth = document.body.clientWidth;
        },
        500,
        false
      );
  
      // 监听微应用加载状态
      actions.onGlobalStateChange(microState => {
        console.log("BasicLayout 监听到全局状态变化");
        console.log(state);
        state.isLoadingMicro = microState.isLoadingMicro;
      });
    })
    return {
      // state
      ...toRefs(state),
      // 计算属性
      currentTitle,
      isCollapsed,
      showNavBar,
      // 方法
      handleRouterLink,
      handleScroll,
      //计算属性
      isLoading
    }
  },
  render() {
    const HeaderMenuWrapperFisrt = () => (
        <div key="0" class="header_menu-wrapper">
            <img
              class="header_menu-img"
              src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/logo.a7995ad.svg"
              alt="LOGO"
            />
            <a-menu
              theme="light"
              mode="horizontal"
              selectedKeys={ [this.activeRule] }
              class="header_menu"
            >
              {
                this.apps.map((item: any) => {
                  return (
                    <a-menu-item key={ item.activeRule } onClick={ this.handleRouterLink.bind(this, item.activeRule) }>
                        <span class="header_menu-title">{ item.$meta.title }</span>
                    </a-menu-item>
                  )
                })
              }
            </a-menu>
      </div>
    )

    const HeaderMenuWrapperSecond = () => (
      <div class="header_menu-wrapper" key="1">
        <img
          class="header_menu-img"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ1cHgiIGhlaWdodD0iMzhweCIgdmlld0JveD0iMCAwIDQ1IDM4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkp1ZWppbjwvdGl0bGU+CiAgICA8ZGVzYz5KdWVqaW4uaW08L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iMC4xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAtMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCA1LjAwMDAwMCkiIGZpbGw9IiMwMDZDRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEuMjkzNDMyOCwyLjU4MzEzMDQ5IEwxOC4wMTczOTg0LDAgTDE0LjU5NDYyNCwyLjY5ODg3ODAxIEwxNC40MTcyMDc3LDIuODQxODIzMDQgTDE4LjAxNzM5ODQsNS43MTI0MjQ4MyBMMjEuNjI4NjU3OCwyLjg0MTgyMzA0IEwyMS4yOTM0MzI4LDIuNTgzMTMwNDkgWiBNMzMuNzA3ODI4OSwxMi42MDA2Njc0IEwxOC4wMDc5MTA5LDI0Ljk4MDI3NiBMMi4zMTc0ODA0NCwxMi42MDgyNTc0IEwwLDE0LjQ2OTcwNTIgTDE4LjAwNzkxMDksMjguNjY5MDE2NyBMMzYuMDI1NjI1NiwxNC40NjIxMTUyIEwzMy43MDc4Mjg5LDEyLjYwMDY2NzQgWiBNMTguMDA3OTEwOSwxMy42MDUwNzc2IEw5LjQ2NDQxNTU0LDYuODY4NjM1MDUgTDcuMTQ2NjE4ODUsOC43MzAwODI5IEwxOC4wMDc5MTA5LDE3LjI5NDEzNDUgTDI4Ljg3ODM3NDIsOC43MjI0OTI5IEwyNi41NjA1Nzc1LDYuODYxMDQ1MDUgTDE4LjAwNzkxMDksMTMuNjA1MDc3NiBaIiBpZD0iRmlsbC0xLUNvcHkiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
          alt="LOGO"
        />
        <a-dropdown>
          <a class="header_menu-title" onClick={ e => e.preventDefault() }>
            { this.currentTitle } <a-icon type="down" />
          </a>
          <a-menu slot="overlay" selectable selectedKeys={ [this.activeRule] }>
            {
              this.apps.map((item: any) => {
                return (
                  <a-menu-item key={ item.activeRule } onClick={ this.handleRouterLink.bind(this, item.activeRule) }>
                    <span class="header_menu-title">{ item.$meta.title }</span>
                  </a-menu-item>
                )
              })
            }
          </a-menu>
        </a-dropdown>
      </div>
    )
    return (
      <a-layout class="BasicLayout_container">
        <Transition name="head_fade">
            <a-layout-header class="BasicLayout_header" v-show={ this.showHeader }>
              <div class="BasicLayout_header_container">
                {/* <Transition
                  name="menu_fade"
                  mode="out-in"
                > */}
                  {
                    !this.isCollapsed 
                      ? <HeaderMenuWrapperFisrt />
                      : <HeaderMenuWrapperSecond />
                  }
                  <div class="header_right-wrapper">
                    <SearchInput isCollapsed={ this.isCollapsed } />
                    <WriteButton isCollapsed={ this.isCollapsed } />
                    <BellBadge />
                    <UserAvatar />
                  </div>
                {/* </Transition> */}
              </div>
            </a-layout-header>
        </Transition>

        <Transition name="ease_fade">
          {
            this.showNavBar && (
                <NavBar showHeader= { this.showHeader }
                        activeRule= { this.activeRule }
              />
            )
        }
        </Transition>
        <a-layout-content
          class="BasicLayout_content"
          ref="BasicLayout_content"
          onScroll={ this.handleScroll }
        >

          <Loading class="BasicLayout_loading" v-show={ this.isLoading } />
          <Transition name="subApp_fade">
            <div id="subApp" ref="subApp" v-show={ !this.switchingApp }>
              {/* Micro App--> */}
              <router-view />
            </div>
          </Transition>
        </a-layout-content>
        <a-layout-footer class="BasicLayout_footer">
          Created By Channing
        </a-layout-footer>
      </a-layout>
    )
  }
})