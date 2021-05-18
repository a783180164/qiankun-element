/*
 * @Author: your name
 * @Date: 2021-05-07 14:00:23
 * @LastEditTime: 2021-05-08 16:35:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\services\PeopleService.ts
 */
import API from "@/apis";

export default class PeopleService {
  static instance: any;

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
