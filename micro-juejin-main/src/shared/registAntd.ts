/*
 * @Author: your name
 * @Date: 2021-04-28 14:55:19
 * @LastEditTime: 2021-05-07 13:50:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\shared\registAntd.ts
 */
/*
使用babel-plugin-import按需引入antd，具体配置在babel.config.js中。
另外因为是定制主题的方式，还需要在vue.config.js中配置less的相关参数，
其中javascriptEnabled的值必须为true，否则主题定制的样式无法生效
 */


import type { App } from 'vue';
import Antd from 'ant-design-vue';
// eslint-disable-next-line no-unused-vars
import {
  Button,
  Empty,
  notification,
  message,
  Avatar,
  Icon,
  Tooltip,
  Layout,
  Menu,
  Dropdown,
  Input
} from "ant-design-vue";
//


export function setRegistAntd(instance: App<Element>): void {
  /*需要注册的组件名字, 注册之前需要确保已经import这个组件*/
  instance.config.globalProperties.$notification = notification;
  instance.config.globalProperties.$message = message;
  const components = [
    Button,
    Empty,
    notification,
    message,
    Avatar,
    Icon,
    Tooltip,
    Layout,
    Menu,
    Dropdown,
    Input
  ];
  register(components);
  function register(components: any[]) {
    components.forEach((comp: any) => {
      instance.use(comp);
    });
  }
}