/*
 * @Author: your name
 * @Date: 2021-05-11 13:44:38
 * @LastEditTime: 2021-05-11 16:40:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\components\Home\HomeSider\RankList\index.tsx
 */
import { defineComponent } from 'vue'
import './index.scss'
export default defineComponent({
  name: 'RankList',
  render() {
    return (
      <div class="RankList">
        <div class="RankList_header">🏅作者榜</div>
        <div class="RankList_content">
          <a
            class="RankList_content-item"
            href="https://juejin.im/user/4406498333825357"
            target="_blank"
          >
            <img
              src={ 'https://images.weserv.nl/?url=https://user-gold-cdn.xitu.io/2020/2/6/17019b0aa298132e?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'}
              alt="avatar"
            />
            <div class="RankList_content-right">
              <div class="RankList_content-name">
                <span>敖丙</span>
                <div class="RankList_content-level">
                  <a
                    href="https://juejin.im/book/6844733795329900551/section/6844733795371843597"
                    target="_blank"
                  >
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0YzNjI2MiIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTggN2gydjRoLTJ6TTE3IDNoMnYyaC0yek0xNSA1aDJ2NmgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTcgNmgzdjJoLTN6TTE2LjMzMyAzLjY2N0wxNyAzdjJoLTJ6TTE3IDloMnYyaC0yeiIvPgogICAgPC9nPgo8L3N2Zz4K"
                      alt="lv-6"
                    />
                  </a>
                </div>
              </div>
              <span class="RankList_content-position">
                🏆掘金签约作者 @ 微信搜：敖丙
              </span>
            </div>
          </a>
          <a
            class="RankList_content-item"
            href="https://juejin.im/user/2348212569517645"
            target="_blank"
          >
            <img
              src='https://images.weserv.nl/?url=https://user-gold-cdn.xitu.io/2020/6/29/172fe584f4e4db13?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1'
              alt="avatar"
            />
            <div class="RankList_content-right">
              <div class="RankList_content-name">
                <span>TianTianUp</span>
                <div class="RankList_content-level">
                  <a
                    href="https://juejin.im/book/6844733795329900551/section/6844733795371843597"
                    target="_blank"
                  >
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGQTAwMCIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTggOGgydjNoLTJ6TTE1IDNoNXYyaC01ek0xNSA5aDN2MmgtM3pNMTYgNmgzdjJoLTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDZoMnYyaC0yek0xNSA1aDJ2M2gtMnoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                      alt="lv-6"
                    />
                  </a>
                </div>
              </div>
              <span class="RankList_content-position">
                微信公众号：前端UpUp @ 网易
              </span>
            </div>
          </a>
          <a
            class="RankList_content-item"
            href="https://juejin.im/user/2101921963839678"
            target="_blank"
          >
            <img
              v-lazy="'https://mirror-gold-cdn.xitu.io/16d46f01d783cbf7e0d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'"
              alt="avatar"
            />
            <div class="RankList_content-right">
              <div class="RankList_content-name">
                <span>ChanningHyl</span>
                <div class="RankList_content-level">
                  <a
                    href="https://juejin.im/book/6844733795329900551/section/6844733795371843597"
                    target="_blank"
                  >
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzhDREJGNCIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTYgNGwxLTF2MmgtMXpNMTcgM2gydjJoLTJ6TTE3IDVoMnY2aC0yeiIvPgogICAgPC9nPgo8L3N2Zz4K"
                      alt="lv-6"
                    />
                  </a>
                </div>
              </div>
              <span class="RankList_content-position">
                ⚡一介切图仔
              </span>
            </div>
          </a>
        </div>
        <a
          href="https://juejin.im/recommendation/authors/recommended"
          target="_blank"
          class="RankList_footer"
        >
          完整榜单 <a-icon type="right"></a-icon>
        </a>
      </div>
    )
  }
})