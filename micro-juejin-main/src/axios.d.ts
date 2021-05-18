import { AxiosRequestConfig, AxiosResponse } from "axios";
declare module 'axios' {
  export interface AxiosRequestConfig {
    __retryCount?: number
  }
  export interface AxiosResponse {
    list?: any
  }
}