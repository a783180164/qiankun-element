/*
 * @Author: your name
 * @Date: 2021-05-07 15:26:01
 * @LastEditTime: 2021-05-08 16:24:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\store\home\index.ts
 */
import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module
} from 'vuex'

import { RootState } from '@/store'
import { state } from './state'
import { mutations, Mutations } from './mutations'
import { actions, Actions } from './actions'
import type { PeopleState } from './state'
import { getters } from './getters'
export { PeopleState }

export type PeopleStore<S = PeopleState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>& {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
};

export const store: Module<PeopleState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

