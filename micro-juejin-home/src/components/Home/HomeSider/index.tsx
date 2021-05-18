/*
 * @Author: your name
 * @Date: 2021-05-11 13:47:47
 * @LastEditTime: 2021-05-11 16:40:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\components\Home\HomeSider\index.tsx
 */

import { defineComponent, Transition } from 'vue'
import ADCard from "@comp/Home/HomeSider/ADCard";
import DownloadCard from "@comp/Home/HomeSider/DownloadCard";
import RankList from "@comp/Home/HomeSider/RankList";
import LinkList from "@comp/Home/HomeSider/LinkList";
import MoreBlock from "@comp/Home/HomeSider/MoreBlock";
import './index.scss'
export default defineComponent({
  name: 'HomeSider',
  render() {
    return (
      <Transition name='head_fade'>
        <div id="HomeSider_container">
          <ADCard
            href={ 'https://yunqi.aliyun.com/2020/hol?utm_content=g_1000178162' }
            img={ 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63631b8ee0494096a4a8ed1b2e88bbb4~tplv-k3u1fbpfcp-zoom-1.image'}
          />
          <ADCard href={ 'https://juejin.im/post/6869996232249442311' }
                  img={'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84f2f5347c464ffe96aab061ebe2cebb~tplv-k3u1fbpfcp-zoom-1.image'}
          />
          <DownloadCard />
          <RankList />
          <LinkList />
          <MoreBlock />
        </div>
      </Transition>
    )
  }
})