/*
 * @Author: your name
 * @Date: 2021-04-25 15:17:53
 * @LastEditTime: 2021-04-30 09:47:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\master\src\store\module\application.ts
 */
import { createStore } from 'vuex'
import PeopleService from '@/services/PeopleService';

const SET_PEOPLE_LIST = "SET_PEOPLE_LIST"
const peopleService = PeopleService.getInstance();

export default createStore({
  state: {
    peopleList: []
  },
  getters: {
    // peopleList(state) {
    //   return state.peopleList;
    // }
  },
  mutations: {
    [SET_PEOPLE_LIST]: (state, peopleList) => {
      state.peopleList = peopleList;
    }
  },
  actions: {
    getPeopleList: async ({ commit }) => {
      const res = await peopleService.getPeopleList();
      commit(SET_PEOPLE_LIST, res);
    }
  },
  modules: {
  }
})
