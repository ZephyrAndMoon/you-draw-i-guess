import { defineComponent, DefineComponent, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { FormParams, PageStatus } from './assets/types/index'
import { _FormComponent } from '@varlet/ui'

import loginAvatar from './assets/img/avatar-login.jpg'
import registerAvatar from './assets/img/avatar-register.jpg'

import CodeVerify from '@/components/CodeVerify'

import './index.scss'

export default defineComponent({
  name: 'LoginAndRegister',
  components: { CodeVerify },
  setup() {
    const router = useRouter()
    const verifyRef = ref<DefineComponent | null>(null)
    const topRef = ref<HTMLElement | null>(null)
    const bottomRef = ref<HTMLElement | null>(null)
    const loginForm = ref<_FormComponent | null>(null)
    const registerForm = ref<_FormComponent | null>(null)

    let currentPageStatus = ref<PageStatus>('')

    let formParams = reactive<FormParams>({
      verify: '',
      username: '',
      password: '',
      confirmPassword: ''
    })

    const handleSwitchStatus = (type: PageStatus = ''): void => {
      if (type === currentPageStatus.value) return

      currentPageStatus.value = type
      Object.assign(formParams, {
        verify: '',
        username: '',
        password: '',
        confirmPassword: ''
      })

      if (type === 'login') {
        topRef.value!.className = 'top active'
        bottomRef.value!.className = 'bottom inactive'
      }
      if (type === 'register') {
        topRef.value!.className = 'top inactive'
        bottomRef.value!.className = 'bottom active'
      }
    }

    const handleLogin = async () => {
      const validate = await loginForm.value!.validate()
    }

    const handleRegister = async () => {
      const validate = await registerForm.value!.validate()
      const verifyCodePass =
        formParams.verify.toLowerCase() === verifyRef.value!.imgCode.toLowerCase()

      if (validate && verifyCodePass) {
        router.push({
          path: '/fill-info'
        })
      }
    }

    return {
      verifyRef,
      loginForm,
      registerForm,
      formParams,
      handleLogin,
      handleRegister,
      topRef,
      bottomRef,
      currentPageStatus,
      handleSwitchStatus
    }
  },
  render() {
    return (
      <>
        <div class="login-and-register">
          <div ref="topRef" class="top" onClick={() => this.handleSwitchStatus('login')}>
            <h3 class="title">SIGN IN</h3>
            <var-image class="avatar" fit="cover" radius="50%" src={loginAvatar} />
            <p class="desc">登录账号</p>
            <p class="sub-desc">请游戏玩家登录游戏账号</p>
            <var-form
              ref="loginForm"
              class="form login-form"
              v-show={this.currentPageStatus === 'login'}
            >
              <var-input
                placeholder="账 号"
                rules={[(v: any) => !!v || '账号不能为空']}
                v-model={this.formParams.username}
              />
              <var-input
                type="password"
                placeholder="密 码"
                rules={[(v: any) => !!v || '密码不能为空']}
                v-model={this.formParams.password}
              />
              <var-button class="btn login-btn" onClick={this.handleLogin}>
                登&emsp;录
              </var-button>
            </var-form>
          </div>
          <div ref="bottomRef" class="bottom" onClick={() => this.handleSwitchStatus('register')}>
            <h3 class="title">SIGN UP</h3>
            <var-image class="avatar" fit="cover" radius="50%" src={registerAvatar} />
            <p class="desc">注册账号</p>
            <p class="sub-desc">请游戏玩家注册游戏账号</p>
            <var-form
              ref="registerForm"
              class="form login-form"
              v-show={this.currentPageStatus === 'register'}
            >
              <var-input
                placeholder="账 号"
                rules={[(v: any) => !!v || '账号不能为空']}
                v-model={this.formParams.username}
              />
              <var-input
                type="password"
                placeholder="密 码"
                rules={[(v: any) => !!v || '密码不能为空']}
                v-model={this.formParams.password}
              />
              <var-input
                type="password"
                placeholder="确 认 密 码"
                rules={[(v: any) => !!v || '确认密码不能为空']}
                v-model={this.formParams.confirmPassword}
              />
              <var-row>
                <var-col span="12">
                  <var-input
                    placeholder="验 证 码"
                    rules={[(v: any) => !!v || '验证码不能为空']}
                    v-model={this.formParams.verify}
                  />
                </var-col>
                <var-col span="12" class="verify">
                  <CodeVerify ref="verifyRef" />
                </var-col>
              </var-row>

              <var-button class="btn register-btn" onClick={this.handleRegister}>
                注&emsp;册
              </var-button>
            </var-form>
          </div>
        </div>
      </>
    )
  }
})
