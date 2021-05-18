/*
 * @Author: your name
 * @Date: 2021-05-07 16:59:50
 * @LastEditTime: 2021-05-08 16:30:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\store\modules\home\mutations.ts
 */
import { MutationTree } from 'vuex'
import { PeopleState } from './state'
import { PeopleMutationTypes } from './mutation-types'

export type Mutations<S = PeopleState> = {
  [PeopleMutationTypes.SET_PEOPLE_LIST](state: S, articleList: Array<any>): void
}

export const mutations: MutationTree<PeopleState> & Mutations = {
  [PeopleMutationTypes.SET_PEOPLE_LIST](state: PeopleState, peopleList: Array<any>) {
    state.peopleList = peopleList
  },
}