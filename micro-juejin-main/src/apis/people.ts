/*
 * @Author: your name
 * @Date: 2021-04-29 13:55:55
 * @LastEditTime: 2021-04-29 13:55:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\apis\people.ts
 */
import http from "@/shared/http";

const people = {
  // 获取人员列表
  getPeopleList: () => http.get("/people/list")
};

export default people;
