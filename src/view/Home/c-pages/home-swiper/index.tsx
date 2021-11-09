import { defineComponent } from 'vue'
import './index.scss'
export default defineComponent({
  setup() {

  },
  render() {
    return (
      <div class="home-swiper">
        <var-swipe>
          <var-swipe-item>
            <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
          </var-swipe-item>
          <var-swipe-item>
            <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" />
          </var-swipe-item>
          <var-swipe-item>
            <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" />
          </var-swipe-item>
        </var-swipe>
      </div>
    )
  }
})
