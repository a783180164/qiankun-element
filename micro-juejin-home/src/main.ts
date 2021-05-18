/*
 * @Author: your name
 * @Date: 2021-04-23 15:47:18
 * @LastEditTime: 2021-05-11 17:16:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\home\src\main.ts
 */
import { createApp } from 'vue'
import "./public-path";
import App from './App'
import router from './router'
import { store } from './store'
import { setupLazyLoad } from '@/shared/initLazyLoad'
import { setRegistAntd } from '@/shared/registAntd'
let instance: any = null
function render(props: any = {}) {
  const { container } = props;
  instance = createApp(App);
  instance.use(router).use(store);
  setupLazyLoad(instance)
  setRegistAntd(instance)
  instance.mount(container ? container.querySelector("#micro-juejin-home-app") : "#micro-juejin-home-app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
/*
 * 微应用必须暴露加载的生命周期hooks
 *
 * */
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

/*监听全局状态变化
 * onGlobalStateChange: (callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) => void， 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
 *
 * callback(state,prev)
 * @params {Object} state //变更后的全局状态对象
 * @params {Object} prev  //变更前的全局状态对象
 *
 * 这里用export暴露给子组件调用，下同
 * */
export let onGlobalStateChange: any;

/*改变全局状态
 * setGlobalState: (state: Record<string, any>) => boolean， 按一级属性设置全局状态，微应用中只能修改已存在的一级属性
 * */
export let setGlobalState: any;

export async function mount(props: any) {
  onGlobalStateChange = props.onGlobalStateChange;
  setGlobalState = props.setGlobalState;

  console.log("[vue] props from main framework", props);
  // VueRender(props);
  render(props)
}

export async function unmount() {
  instance.$unmount?.();
  instance = null;
}
