import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import MarkDown from 'vue3-markdown-it'

import './styles/index.scss'

createApp(App).use(router).use(createPinia()).use(MarkDown).mount('#app')
