/*
 * @Author: your name
 * @Date: 2021-04-23 15:21:51
 * @LastEditTime: 2021-04-30 10:40:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\master\src\main.ts
 */
import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';

// 按需引入Ant Design 组件
import { setRegistAntd } from "@/shared/registAntd";

// 注册微应用相关
import subRegister from "@/shared/subRegister";

let instance: any = null

function render({ container }: any = {}) {
  console.log(container)
  if (!instance) {
    instance = createApp(App);
    instance.config.productionTip = false
    instance.use(router).use(store);
    setRegistAntd(instance)
    instance.mount('#container');
  }
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

subRegister(instance);