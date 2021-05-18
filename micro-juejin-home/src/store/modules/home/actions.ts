/*
 * @Author: your name
 * @Date: 2021-05-07 17:08:12
 * @LastEditTime: 2021-05-08 13:32:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\store\modules\home\actions.ts
 */
import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '@/store'
import { Mutations } from './mutations'
import { HomeActionTypes } from './action-types'
import { HomeMutationTypes } from './mutation-types'
import { HomeState } from './state'
import HomeService from '@/services/HomeService';
const homeService = HomeService.getInstance();


type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<HomeState, any>, 'commit'>

export interface Actions {
  [HomeActionTypes.getArticleList](
    { commit }: AugmentedActionContext,
    limit: number
  ): void
}

export const actions: ActionTree<HomeState, RootState> & Actions = {
  async [HomeActionTypes.getArticleList]({ commit }, limit: number) {
    const res = await homeService.getArticleList(limit);
    commit(HomeMutationTypes.SET_ARTICLE_LIST, res);
  }
}
