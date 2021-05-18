/*
 * @Author: your name
 * @Date: 2021-04-26 17:31:51
 * @LastEditTime: 2021-04-26 17:32:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\home\src\utils\index.ts
 */

export const filters = {
  prefix(url: string): string {
    if (url && url.startsWith('http')) {
      return url
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`
      return url
    }
  }
}