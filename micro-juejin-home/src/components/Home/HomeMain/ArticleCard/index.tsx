/*
 * @Author: your name
 * @Date: 2021-05-07 15:16:56
 * @LastEditTime: 2021-05-11 15:03:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\components\Home\HomeMain\ArticleCard\index.tsx
 */
import { defineComponent } from 'vue'
import { propTypes  } from '@/utils/propTypes'
import './index.scss'
export default defineComponent({
  name: 'ArticleCard',
  props: {
    article: propTypes.object
  },
  render() {
    return (
      <a  class="ArticleCard"
          href={`https://juejin.im/post/${this.article.id}`}
          target="_blank">
          <div class="ArticleCard_main-wrapper">
            <div class="ArticleCard_head">
              <span>{ this.article.author }</span>
              <span>{ this.article.date }</span>
              <span>{ this.article.tag }</span>
            </div>
            <div class="ArticleCard_title">
              <span>{ this.article.title }</span>
            </div>
            <a-button-group class="ArticleCard_action">
              <a-button size="small" class="ArticleCard_action-like">
                <i
                  class="iconfont icondianzan"
                  style="font-size: 12px;margin-right: 3px;"
                ></i>
                <span>{ this.article.like }</span>
              </a-button>
              <a-button size="small" class="ArticleCard_action-comment">
                <i
                  class="iconfont iconcomment_fill"
                  style="font-size: 12px;margin-right: 3px;transform: scale(0.8) translateY(1px)"
                />
                { this.article.comment }
              </a-button>
            </a-button-group>
          </div>
        {
          this.article.photo && (
            <div class="ArticleCard_photo">
              <img src={ this.article.photo } alt="" />
            </div>
          )
        }
      </a>
    )
  }
})