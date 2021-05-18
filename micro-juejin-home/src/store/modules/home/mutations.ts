/*
 * @Author: your name
 * @Date: 2021-05-07 16:59:50
 * @LastEditTime: 2021-05-08 16:30:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\store\modules\home\mutations.ts
 */
import { MutationTree } from 'vuex'
import { HomeState } from './state'
import { HomeMutationTypes } from './mutation-types'

export type Mutations<S = HomeState> = {
  [HomeMutationTypes.SET_ARTICLE_LIST](state: S, articleList: Array<unknown>): void
}

export const mutations: MutationTree<HomeState> & Mutations = {
  [HomeMutationTypes.SET_ARTICLE_LIST](state: HomeState, articleList: Array<unknown>) {
    state.articleList = state.articleList.concat(articleList)
  },
}