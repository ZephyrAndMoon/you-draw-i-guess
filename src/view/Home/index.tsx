import { defineComponent } from 'vue'
import HomeHeader from './c-pages/home-header/index'
import HomeSwiper from './c-pages/home-swiper/index'
import HomeWinner from './c-pages/home-winner/index'

import './index.scss'

export default defineComponent({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeWinner
  },
  setup() {

  },
  render() {
    return (
      <div class="home">
        <HomeHeader />
        <HomeSwiper />
        <HomeWinner />
        <div class="home-btn">
          <var-button >创建房间</var-button>
        </div>
      </div>
    )
  }
})
