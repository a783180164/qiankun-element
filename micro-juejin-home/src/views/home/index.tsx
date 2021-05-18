/*
 * @Author: your name
 * @Date: 2021-04-25 17:12:14
 * @LastEditTime: 2021-05-11 14:39:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\home\src\views\home\index.tsx
 */
import { defineComponent } from 'vue'
import HomeMain from "@comp/Home/HomeMain";
import HomeSider from "@comp/Home/HomeSider";
import './index.scss'
export default defineComponent({
  name: 'Home',
  setup() {
    return {
    }
  },
  render() {
    return(
      <div class="Home">
          <HomeMain />
          <HomeSider />
      </div>
    )
  },

})