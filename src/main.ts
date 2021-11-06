import { createApp } from 'vue'
import Varlet from '@varlet/ui'
import App from './App.vue'

import '@varlet/ui/es/style'

import 'amfe-flexible/index'

import router from './router/index'

createApp(App).use(router).use(Varlet).mount('#app')
