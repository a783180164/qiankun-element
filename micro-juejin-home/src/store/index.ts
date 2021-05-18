/*
 * @Author: your name
 * @Date: 2021-04-23 15:47:19
 * @LastEditTime: 2021-05-08 16:32:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\store\index.ts
 */
import { createStore, createLogger } from 'vuex'
import { store as home, HomeStore, HomeState } from "@/store/modules/home";
import { store as people, PeopleStore, PeopleState } from "@/store/modules/people";
export interface RootState {
  home: HomeState
  people: PeopleState
}

export type Store = HomeStore<Pick<RootState, 'home'>> & PeopleStore<Pick<RootState, 'people'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

export const store = createStore({
  plugins,
  getters: {},
  actions: {},
  modules: {
    home,
    people
  }
})

export function useStore(): Store {
  return store as Store
}

