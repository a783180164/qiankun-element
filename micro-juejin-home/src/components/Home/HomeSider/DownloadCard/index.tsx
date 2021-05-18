/*
 * @Author: your name
 * @Date: 2021-05-11 13:32:39
 * @LastEditTime: 2021-05-11 13:33:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\components\Home\HomeSider\DownloadCard\index.tsx
 */
import { defineComponent } from 'vue'
import './index'
export default defineComponent({
  name: 'DownloadCard',
  render() {
    return (
      <a href="https://juejin.im/app" target="_blank">
        <div class="DownloadCard">
          <img
            src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/app-install.6226a3b.png"
            alt=""
          />
          <div class="DownloadCard_content">
            <span>下载掘金客户端</span>
            <span>一个帮助开发者成长的社区</span>
          </div>
        </div>
      </a>
    )
  }
})