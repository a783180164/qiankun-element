/*
 * @Author: your name
 * @Date: 2021-05-07 17:21:07
 * @LastEditTime: 2021-05-11 10:22:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\store\modules\home\getter.ts
 */

import { HomeState } from './state'
import { GetterTree } from 'vuex'
import { RootState } from '@/store'
enum GettersTypes  {
  menus = 'menus'
}
export interface Getters {
  [GettersTypes.menus](state: HomeState): Array<any>
}

export const getters: GetterTree<HomeState, RootState> & Getters= {
  [GettersTypes.menus](state: HomeState)  {
    return state.articleList
  }
}