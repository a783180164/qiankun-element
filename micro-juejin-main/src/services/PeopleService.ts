/*
 * @Author: your name
 * @Date: 2021-04-29 13:55:01
 * @LastEditTime: 2021-04-30 10:05:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\services\PeopleService.ts
 */
import API from "@/apis";

export default class PeopleService {
  static instance: any
  // constructor() {}

  /*单例模式获取该service类的实例*/
  static getInstance(): any {
    if (!PeopleService.instance) {
      PeopleService.instance = new PeopleService();
    }
    return PeopleService.instance;
  }

  getPeopleList = async (): Promise<any> => {
    const res = await API.people.getPeopleList();
    return res.list;
  };
}
