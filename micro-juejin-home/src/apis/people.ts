/*
 * @Author: your name
 * @Date: 2021-05-07 13:57:57
 * @LastEditTime: 2021-05-07 13:59:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\apis\people.ts
 */
import http from "@/shared/http";

const people = {
  // 获取人员列表
  getPeopleList: () => http.get("/people/list")
};

export default people;
