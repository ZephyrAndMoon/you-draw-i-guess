import { defineComponent } from 'vue'
import './index.scss'
import winnerLogo from '../../assets/winner-logo.png'

export default defineComponent({

  setup() {
    // let list = reactive<Object[]>([
    //   {id: 1, name: "测试用户1", url: "https://varlet.gitee.io/varlet-ui/cat.jpg"},
    //   {id: 2, name: "测试用户2", url: "https://varlet.gitee.io/varlet-ui/cat.jpg"},
    //   {id: 3, name: "测试用户3", url: "https://varlet.gitee.io/varlet-ui/cat.jpg"}
    // ])
    // return {
    //   list
    // }
  },
  render() {
    return (
      <div class="home-winner">
        <div class="home-winner-logo">
          <img src={winnerLogo} alt="" />
        </div>
        <ul>
          <li class="home-winner-item">
            <img class="logo" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
            <p class="name"></p>
            <p class="top">1st</p>
          </li>
          <li class="home-winner-item">
            <img class="logo" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
            <p class="name"></p>
            <p class="top">2st</p>
          </li>
          <li class="home-winner-item">
            <img class="logo" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
            <p class="name"></p>
            <p class="top">3st</p>
          </li>
        </ul>
      </div>
    )
  }
})
