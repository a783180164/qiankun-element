/*
 * @Author: your name
 * @Date: 2021-05-07 17:08:12
 * @LastEditTime: 2021-05-08 16:32:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\store\modules\home\actions.ts
 */
import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '@/store'
import { Mutations } from './mutations'
import { PeopleAactions } from './action-types'
import { PeopleMutationTypes } from './mutation-types'
import { PeopleState } from './state'
import PeopleService  from '@/services/PeopleService';
const peopleService = PeopleService.getInstance();



type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<PeopleState, any>, 'commit'>

export interface Actions {
  [PeopleAactions.getPeopleList](
    { commit }: AugmentedActionContext,
    limit: number
  ): void
}

export const actions: ActionTree<PeopleState, RootState> & Actions = {
  async [PeopleAactions.getPeopleList]({ commit }) {
    const res = await peopleService.getPeopleList()
    commit(PeopleMutationTypes.SET_PEOPLE_LIST, res)
  }
}
