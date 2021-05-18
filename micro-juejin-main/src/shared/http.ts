/*
 * @Author: your name
 * @Date: 2021-04-28 14:40:28
 * @LastEditTime: 2021-04-29 17:21:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\shared\http.ts
 */
import Axios from "axios";
import interceptors from "./interceptors";

const http = Axios.create({
    baseURL: "/api",
    headers: {
      Accept: "application/json",
      "X-Requested-With": "Channing-Request",
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "-1"
    },
    withCredentials: true,
    timeout: 60000 // max time of request timeout
});

interceptors(http);

export { http };
export default http;
