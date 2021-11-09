import { defineComponent } from 'vue'
import './index.scss'
import png from '../../assets/logo.png';
export default defineComponent({
  setup() {

  },
  render() {
    return (
      <div class="home-header">
        <div class="home-header-user">
          <img class="photo" style="width: 2rem; height: 2rem" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
          <p class="name">用户名称</p>
        </div>
        <div class="home-header-btn">
          <var-button>出题记录</var-button>
          <var-button>我的作品</var-button>
        </div>
        <div class="home-header-logo">
          <img src={png} />
        </div>
        <div class="home-header-bg"></div>
      </div>
    )
  }
})
