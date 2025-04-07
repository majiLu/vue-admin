import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import { createRouter } from '@/router/index'

createApp(App).use(createRouter()).mount('#app')
