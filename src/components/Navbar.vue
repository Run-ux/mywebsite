<script setup>
import { ref, onMounted, computed, nextTick, watch } from 'vue';
import './NavbarStyles.css';
import { useRouter, useRoute } from 'vue-router';
import { useThemeStore } from '../stores/theme';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';

const router = useRouter();
const route = useRoute();
const isMenuOpen = ref(false);
const activeIndicator = ref(null);
const navItems = ref(null);
const hoveredItem = ref(null);

// 主题切换相关
const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);

// 切换主题
const toggleTheme = () => {
  themeStore.toggleTheme();
};

// 计算当前活动路由
const currentPath = computed(() => route.path);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// 鼠标悬停处理
const handleMouseEnter = (event) => {
  hoveredItem.value = event.currentTarget;
  updateIndicator(event.currentTarget);
};

const handleMouseLeave = () => {
  hoveredItem.value = null;
  // 鼠标离开时，如果有活动项，则移动指示器到活动项
  const activeItem = document.querySelector('.text-primary.font-semibold');
  if (activeItem) {
    updateIndicator(activeItem);
  } else {
    // 如果没有活动项，隐藏指示器
    if (activeIndicator.value) {
      activeIndicator.value.style.width = '0';
    }
  }
};

// 更新指示器位置
const updateIndicator = (element) => {
  if (!activeIndicator.value) return;
  
  const rect = element.getBoundingClientRect();
  const navRect = navItems.value.getBoundingClientRect();
  
  activeIndicator.value.style.width = `${rect.width}px`;
  activeIndicator.value.style.transform = `translateX(${rect.left - navRect.left}px)`;
  activeIndicator.value.style.opacity = '1';
};

// 组件挂载后初始化指示器
onMounted(() => {
  // 设置初始活动项的指示器
  nextTick(() => {
    const activeItem = document.querySelector('.text-primary.font-semibold');
    if (activeItem && activeIndicator.value) {
      updateIndicator(activeItem);
    }
  });
});

// 监听路由变化，更新指示器
watch(() => route.path, () => {
  nextTick(() => {
    const activeItem = document.querySelector('.text-primary.font-semibold');
    if (activeItem && activeIndicator.value) {
      updateIndicator(activeItem);
    }
  });
});
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex-shrink-0 flex items-center hover-scale transition-all duration-300">
            <span class="text-2xl font-bold text-primary hover:text-opacity-80 transition-all duration-300 logo-text">0xFFFFAAA1</span>
          </router-link>
        </div>
        
        <!-- 桌面导航 -->
        <div ref="navItems" class="hidden md:flex items-center space-x-8 relative">
          <div 
            ref="activeIndicator" 
            class="absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-in-out opacity-0"
            style="width: 0;"
          ></div>
          <router-link 
            to="/" 
            class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden transition-all duration-300 ease-in-out" 
            active-class="text-primary dark:text-primary font-semibold"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <span class="relative z-10 transition-transform duration-300 ease-in-out hover:translate-y-[-2px]">首页</span>
          </router-link>
          <router-link 
            to="/about" 
            class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden transition-all duration-300 ease-in-out" 
            active-class="text-primary dark:text-primary font-semibold"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <span class="relative z-10 transition-transform duration-300 ease-in-out hover:translate-y-[-2px]">关于我</span>
          </router-link>
          <router-link 
            to="/projects" 
            class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden transition-all duration-300 ease-in-out" 
            active-class="text-primary dark:text-primary font-semibold"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <span class="relative z-10 transition-transform duration-300 ease-in-out hover:translate-y-[-2px]">项目</span>
          </router-link>
          <router-link 
            to="/blog" 
            class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden transition-all duration-300 ease-in-out" 
            active-class="text-primary dark:text-primary font-semibold"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <span class="relative z-10 transition-transform duration-300 ease-in-out hover:translate-y-[-2px]">博客</span>
          </router-link>
          <router-link 
            to="/contact" 
            class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden transition-all duration-300 ease-in-out" 
            active-class="text-primary dark:text-primary font-semibold"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <span class="relative z-10 transition-transform duration-300 ease-in-out hover:translate-y-[-2px]">联系</span>
          </router-link>
          
          <!-- 主题切换按钮 -->
          <button 
            @click="toggleTheme" 
            class="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12 focus:outline-none"
            :aria-label="isDark ? '切换到亮色模式' : '切换到深色模式'"
          >
            <SunIcon v-if="isDark" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>
        </div>
        
        <!-- 移动端菜单按钮 -->
        <div class="flex md:hidden items-center">
          <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none transition-all duration-300 hover:scale-110 hover:rotate-3">
            <svg class="h-6 w-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- 移动端菜单 -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-8 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-8 opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-gray-800 shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link 
            @click="closeMenu" 
            to="/" 
            class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-5 hover:bg-gray-50 dark:hover:bg-gray-700" 
            active-class="text-primary dark:text-primary font-semibold border-l-4 border-primary pl-4"
          >
            首页
          </router-link>
          <router-link 
            @click="closeMenu" 
            to="/about" 
            class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-5 hover:bg-gray-50 dark:hover:bg-gray-700" 
            active-class="text-primary dark:text-primary font-semibold border-l-4 border-primary pl-4"
          >
            关于我
          </router-link>
          <router-link 
            @click="closeMenu" 
            to="/projects" 
            class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-5 hover:bg-gray-50 dark:hover:bg-gray-700" 
            active-class="text-primary dark:text-primary font-semibold border-l-4 border-primary pl-4"
          >
            项目
          </router-link>
          <router-link 
            @click="closeMenu" 
            to="/blog" 
            class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-5 hover:bg-gray-50 dark:hover:bg-gray-700" 
            active-class="text-primary dark:text-primary font-semibold border-l-4 border-primary pl-4"
          >
            博客
          </router-link>
          <router-link 
            @click="closeMenu" 
            to="/contact" 
            class="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-5 hover:bg-gray-50 dark:hover:bg-gray-700" 
            active-class="text-primary dark:text-primary font-semibold border-l-4 border-primary pl-4"
          >
            联系
          </router-link>
          
          <!-- 移动端主题切换按钮 -->
          <div class="flex items-center justify-between px-3 py-2 mt-2 border-t border-gray-200 dark:border-gray-700">
            <span class="text-gray-700 dark:text-gray-300 text-sm font-medium">{{ isDark ? '深色模式' : '亮色模式' }}</span>
            <button 
              @click="toggleTheme" 
              class="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110 focus:outline-none"
              :aria-label="isDark ? '切换到亮色模式' : '切换到深色模式'"
            >
              <SunIcon v-if="isDark" class="h-5 w-5" />
              <MoonIcon v-else class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>