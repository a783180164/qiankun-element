/*
 * @Author: your name
 * @Date: 2021-05-08 16:02:48
 * @LastEditTime: 2021-05-08 16:05:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\store\modules\people\state.ts
 */
export type PeopleState = {
  peopleList: Array<any>
}

export const state: PeopleState = {
  peopleList: []
}