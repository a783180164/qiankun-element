/*
 * @Author: your name
 * @Date: 2021-05-07 17:21:07
 * @LastEditTime: 2021-05-08 16:31:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\store\modules\home\getter.ts
 */

import { PeopleState } from './state'
import { GetterTree } from 'vuex'
import { RootState } from '@/store'
enum GettersTypes  {
  peopleList = 'peopleList'
}
export interface Getters {
  [GettersTypes.peopleList](state: PeopleState): Array<any>
}

export const getters: GetterTree<PeopleState, RootState> & Getters= {
  [GettersTypes.peopleList](state: PeopleState)  {
    return state.peopleList
  }
}
