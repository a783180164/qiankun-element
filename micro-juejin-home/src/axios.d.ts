/*
 * @Author: your name
 * @Date: 2021-05-07 13:55:17
 * @LastEditTime: 2021-05-08 14:51:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\axios.d.ts
 */
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
declare module 'axios' {
  export interface AxiosRequestConfig {
    __retryCount?: number
  }
  export interface AxiosResponse {
    list?: any
    cursor?: any
  }
  
  export interface AxiosError {
    statusText?: any
  }
}