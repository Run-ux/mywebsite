<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex-shrink-0 flex items-center">
            <span class="text-2xl font-bold text-primary">程序员小明</span>
          </router-link>
        </div>
        
        <!-- 桌面导航 -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium" active-class="text-primary dark:text-primary font-semibold">首页</router-link>
          <router-link to="/about" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium" active-class="text-primary dark:text-primary font-semibold">关于我</router-link>
          <router-link to="/projects" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium" active-class="text-primary dark:text-primary font-semibold">项目</router-link>
          <router-link to="/blog" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium" active-class="text-primary dark:text-primary font-semibold">博客</router-link>
          <router-link to="/contact" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium" active-class="text-primary dark:text-primary font-semibold">联系</router-link>
        </div>
        
        <!-- 移动端菜单按钮 -->
        <div class="flex md:hidden items-center">
          <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- 移动端菜单 -->
    <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-gray-800 shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link @click="closeMenu" to="/" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium" active-class="text-primary dark:text-primary font-semibold">首页</router-link>
        <router-link @click="closeMenu" to="/about" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium" active-class="text-primary dark:text-primary font-semibold">关于我</router-link>
        <router-link @click="closeMenu" to="/projects" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium" active-class="text-primary dark:text-primary font-semibold">项目</router-link>
        <router-link @click="closeMenu" to="/blog" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium" active-class="text-primary dark:text-primary font-semibold">博客</router-link>
        <router-link @click="closeMenu" to="/contact" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium" active-class="text-primary dark:text-primary font-semibold">联系</router-link>
      </div>
    </div>
  </nav>
</template>