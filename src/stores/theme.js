import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: localStorage.getItem('theme') === 'dark' || 
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  }),
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
      this.applyTheme()
    },
    initTheme() {
      this.applyTheme()
    },
    applyTheme() {
      // 确保先移除所有主题类，然后再添加当前主题类
      document.documentElement.classList.remove('dark')
      if (this.isDark) {
        document.documentElement.classList.add('dark')
      }
      // 调试信息
      console.log('Theme applied:', this.isDark ? 'dark' : 'light')
    }
  }
})