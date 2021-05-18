/*
 * @Author: your name
 * @Date: 2021-05-07 13:57:40
 * @LastEditTime: 2021-05-08 10:48:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\apis\home.ts
 */
import http from "@/shared/http";

const home = {
  // 获取文章列表
  getArticleList: (limit: number, cursor: any) =>
    http.get(`/home/articleList?limit=${limit || 15}&cursor=${cursor}`)
};

export default home;
