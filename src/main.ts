import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import MarkDown from 'vue3-markdown-it'

import './styles/index.scss'

createApp(App).use(router).use(MarkDown).mount('#app')
