/*
 * @Author: your name
 * @Date: 2021-04-23 15:21:51
 * @LastEditTime: 2021-04-29 16:09:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\master\src\store\index.ts
 */
import { createStore } from 'vuex'
import peopleStore from '@/store/module/people'

export default createStore({
  state: { isLoading: false },
  mutations: {
    loadingToggle: (state, loading) => {
      state.isLoading = loading;
      console.log("loadingToggle~~~~~~~~~~~~~~~~~~",loading);
    }
  },
  actions: {
  },
  modules: { people: peopleStore }
})
