/*
 * @Author: your name
 * @Date: 2021-04-25 15:17:53
 * @LastEditTime: 2021-05-17 14:09:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\master\src\store\module\application.ts
 */
import { createStore } from 'vuex'


interface ApplicationState {
  content: string
  mircoAppLoading: boolean
}
const state: ApplicationState = {
  content: '',
  mircoAppLoading: false
}

const mutations = {
  SET_CONTENT(state: ApplicationState, content: string): void {
    state.content = content
  },
  SET_MIRCOAPPLOADING(state: ApplicationState, mircoAppLoading: boolean): void {
    // 设置需要缓存的组件
    state.mircoAppLoading = mircoAppLoading
  }
}
const application = {
  namespace: true
  state,
  mutations
}

export default application
