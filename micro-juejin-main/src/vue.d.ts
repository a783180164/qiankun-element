/*
 * @Author: your name
 * @Date: 2021-04-30 11:08:52
 * @LastEditTime: 2021-04-30 11:11:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-main\src\vue.d.ts
 */
import { TransitionProps } from 'vue'
declare module 'vue' {
  export interface TransitionProps {
    [key: string]: any
  }
  // export interface TransitionGroup {
  //   [key: string]: any
  // }
}