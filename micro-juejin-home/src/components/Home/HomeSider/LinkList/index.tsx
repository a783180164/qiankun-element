/*
 * @Author: your name
 * @Date: 2021-05-11 13:34:46
 * @LastEditTime: 2021-05-11 13:36:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\components\Home\HomeSider\LinkList\index.tsx
 */
import { defineComponent } from 'vue'
import './index.scss'
export default defineComponent({
  name: 'LinkList',
  render() {
    return (
      <div class="LinkList">
        <a
          class="link md-opjjpmhoiojifppkkcdabiobhakljdgm_doc"
          data-v-07f5a5ba=""
          href="/extension"
          target="_blank"
          ><img
            src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"
            class="icon"
            data-v-07f5a5ba=""
          />
          <span class="title" data-v-07f5a5ba="">下载掘金浏览器插件</span></a
        >
        <a
          class="link"
          href="https://github.com/xitu/gold-miner"
          rel="nofollow noopener noreferrer"
          target="_blank"
          ><img
            src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/juejin-miner.b78347c.png"
            class="icon"
          />
          <span class="title" data-v-07f5a5ba="">前往掘金翻译计划</span></a
        >
      </div>
    )
  }
})