import { defineComponent, onMounted, reactive, ref } from 'vue'
import { _ImageComponent } from '@varlet/ui'

import { UrlList } from './assets/types'
import './index.scss'

export default defineComponent({
  name: 'FillInfo',
  setup() {
    const INIT_AVATAR_LIST_LENGTH: number = 9
    const avatarUrlList = reactive<UrlList>([])

    let currentSelectAvatarIndex = ref<number | null>(null)
    let formParams = reactive({
      avatar: '',
      nickname: ''
    })

    onMounted(() => {
      for (let i = 1; i <= INIT_AVATAR_LIST_LENGTH; i++) {
        import(`./assets/img/avatar${i}.jpeg`).then((res) => {
          avatarUrlList.push(res.default)
        })
      }
    })

    const createAvatarDom = (className: string): Array<JSX.Element> => {
      // 防止每添加一次头像数据就执行一次该函数
      if (avatarUrlList.length !== INIT_AVATAR_LIST_LENGTH) return []
      return avatarUrlList.map((item: string, i: number) => (
        <var-image
          src={item}
          radius="50%"
          class={`${className} ${i === currentSelectAvatarIndex.value ? 'is-select' : ''}`}
          onClick={() => handleAvatarClick(i)}
        />
      ))
    }

    const handleAvatarClick = (index: number): void => {
      currentSelectAvatarIndex.value = index
      formParams.avatar = avatarUrlList[index]
    }

    return {
      formParams,
      createAvatarDom
    }
  },
  render() {
    return (
      <div class="fill-info">
        <div class="container">
          <p class="tip">请选择一款默认头像👇🏻</p>
          <div class="container__avatar">{this.createAvatarDom('container__avatar-item')}</div>
          <div class="container__nickname">
            <var-form ref="loginForm" class="form">
              <var-input
                placeholder="请输入您的游戏昵称"
                v-model={this.formParams.nickname}
                rules={[(v: any) => !!v || '游戏昵称不能为空']}
              />
              <var-button class="btn">注 册</var-button>
            </var-form>
          </div>
        </div>
      </div>
    )
  }
})
