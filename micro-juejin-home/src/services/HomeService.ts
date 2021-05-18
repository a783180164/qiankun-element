/*
 * @Author: your name
 * @Date: 2021-05-07 14:00:23
 * @LastEditTime: 2021-05-11 13:54:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\services\PeopleService.ts
 */
import API from "@/apis";

export default class HomeService {
  static instance: any

  // constructor() {}

  /*单例模式获取该service类的实例*/
  static getInstance(): any {
    if (!HomeService.instance) {
      HomeService.instance = new HomeService();
      HomeService.instance.cursor = "0";
    }
    return HomeService.instance;
  }

  getArticleList = async (num: number): Promise<any> => {
    const res = await API.home.getArticleList(num, HomeService.instance.cursor);
    HomeService.instance.cursor = res.cursor;
    return res.list;
  };
}
