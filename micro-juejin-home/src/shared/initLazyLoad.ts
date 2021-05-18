/*
 * @Author: your name
 * @Date: 2021-05-07 14:18:27
 * @LastEditTime: 2021-05-07 14:52:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\shared\initLazyLoad.ts
 */
import VueLazyload from "vue3-lazy";
import { App } from 'vue'
// eslint-disable-next-line no-unused-vars
const errorPng = require('@/assets/404-5.png')
const loading = require('@/assets/loading-4.gif')

export function setupLazyLoad(vm: App)  {
  vm.use(VueLazyload, {
    preLoad: 1.3,
    error: errorPng,
    loading: loading,
    attempt: 1
  });
}