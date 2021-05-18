/*
 * @Author: your name
 * @Date: 2021-04-29 13:36:48
 * @LastEditTime: 2021-05-07 10:47:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\micro-juejin-main\src\layouts\BasicLayout\NavBar\index.tsx
 */
import { state as MicoState, actions } from "@/shared/subRegister";
import { defineComponent, computed, watch, reactive, toRefs, PropType, ref } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { ActiveRuleType } from '../interface'
import './index.less'
export default defineComponent({
  name: 'NavBar',
  props: {
    showHeader: propTypes.bool.def(true),
    activeRule: {
      type: String as PropType<ActiveRuleType>,
      default: ''
    }
  },
  setup(props) {
    // debugger
    const activeTag = ref('')
    const state = reactive({
      navListMap: {
        "/micro-juejin-home": [
          "推荐",
          "关注",
          "后端",
          "前端",
          "Android",
          "iOS",
          "人工智能",
          "开发工具",
          "代码人生",
          "阅读"
        ],
        "/micro-juejin-boiling": [
          "推荐",
          "热门",
          "关注",
          "上班摸鱼",
          "内推招聘",
          "一图胜千言",
          "今天学到了",
          "每天一道算法题",
          "开发工具推荐",
          "树洞一下"
        ],
        "/micro-juejin-brochure": [
          "全部",
          "后端",
          "前端",
          "Android",
          "iOS",
          "人工智能",
          "开发工具",
          "代码人生",
          "阅读"
        ],
        "/micro-juejin-activity": ["热门活动", "北京", "广州", "深圳", "杭州"],
        '/micro-juejin-topic': []
      },
      cities: [
        { city_alias: "changsha", city_name: "长沙" },
        { city_alias: "chengdu", city_name: "成都" },
        { city_alias: "chongqing", city_name: "重庆" },
        { city_alias: "fuzhou", city_name: "福州" },
        { city_alias: "haiwai", city_name: "海外" },
        { city_alias: "hefei", city_name: "合肥" },
        { city_alias: "nanjing", city_name: "南京" },
        { city_alias: "qingdao", city_name: "青岛" },
        { city_alias: "quanguo", city_name: "全国" },
        { city_alias: "shenyang", city_name: "沈阳" },
        { city_alias: "shijiazhuang", city_name: "石家庄" },
        { city_alias: "suzhou", city_name: "苏州" },
        { city_alias: "taiyuan", city_name: "太原" },
        { city_alias: "tianjin", city_name: "天津" },
        { city_alias: "wuhan", city_name: "武汉" },
        { city_alias: "xiamen", city_name: "厦门" },
        { city_alias: "xian", city_name: "西安" },
        { city_alias: "xianggang", city_name: "香港" },
        { city_alias: "zhengzhou", city_name: "郑州" },
        { city_alias: "zhuhai", city_name: "珠海" },
        { city_alias: "buxian", city_name: "不限" }
      ]
    })
    const navList: any = computed(() => {
      console.log(props.activeRule)
      console.log(state.navListMap[props.activeRule] || [])
      return state.navListMap[props.activeRule] || [];
    })
    watch(() => props.activeRule, () => {
      activeTag.value = navList.value && navList.value[0]
    })
    const handleSelect = (tag: string) => {
      activeTag.value = tag;
      const tempState = {
        ...MicoState,
        city: tag,
        isLoadingMicro: false
      };
      tempState.city = tag;
      actions.setGlobalState(tempState);
    }
    return {
      // state
      ...toRefs(
        state
      ),
      activeTag,
      // 计算书写
      navList,
      // 方法
      handleSelect

    }
  },
  render() {
    return (
      <div
        id="NavBar"
        style={{
          top: this.showHeader ? '63px' : '0'
        }}
      >
        <div class="NavBar_container">
          <div class="nav_list">
            {
              this.navList.map((tag: any) => {
                return (
                  <div  key={tag} class="nav_list-item"
                        style={
                          {
                            color: this.activeTag === tag ? '#007FFF' : '#71777c'
                          }
                        }
                        onClick={ this.handleSelect.bind(this, tag) }>
                    { tag }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
})