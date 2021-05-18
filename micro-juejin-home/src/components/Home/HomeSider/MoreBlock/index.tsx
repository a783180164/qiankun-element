/*
 * @Author: your name
 * @Date: 2021-05-11 13:37:20
 * @LastEditTime: 2021-05-11 13:44:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\components\Home\HomeSider\MoreBlock\index.tsx
 */
import { defineComponent } from 'vue'
import './index.scss'
export default defineComponent({
  name: 'MoreBlock',
  render() {
    return (
      <div id="MoreBlock">
        <div class="more-list-row">
          <a href="https://juejin.im/about" target="_blank">关于</a>
          ·
          <a href="https://juejin.im/license" target="_blank" rel="">
            营业执照
          </a>
          ·
          <a href="https://juejin.im/links" target="_blank">友情链接</a>
        </div>
        <div class="more-list-row">
          <a href="https://juejin.im/terms" target="_blank">用户协议</a>
          ·
          <a href="https://juejin.im/privacy" target="_blank" rel="">
            隐私政策
          </a>
          ·
          <a href="https://juejin.im/book/5c90640c5188252d7941f5bb" target="_blank"
            >使用指南</a
          >
        </div>
        <div class="more-list-row">
          <a href="https://juejin.im/about" target="_blank">津ICP备15003202号-2</a>
        </div>
        <div class="more-list-row">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719"
            target="_blank"
            >京公网安备11010802026719号</a
          >
        </div>
        <div class="more-list-row">
          <a href="javascript: void 0" target="_blank">©2020 掘金</a>
        </div>
    
        <a href="http://weibo.com/xitucircle" target="_blank">
          <img
            src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/weibo.0cd39f5.png"
            alt="微博"
            class="icon"
          />
        </a>
        <img
          src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/wechat.ce329e6.png"
          alt="微信"
          class="icon"
          style="cursor: pointer"
        />
      </div>
    )
  }
})