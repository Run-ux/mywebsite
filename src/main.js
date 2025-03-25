import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import { useThemeStore } from './stores/theme'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

// 初始化主题
const themeStore = useThemeStore()
themeStore.initTheme()

app.mount('#app')
