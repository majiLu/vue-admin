import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import { createRouter } from '@/router/index'

createApp(App).use(pinia).use(createRouter()).mount('#app')
