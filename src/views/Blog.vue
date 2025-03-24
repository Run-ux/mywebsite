<template>
  <div class="min-h-screen overflow-hidden relative">
    <!-- 美化的背景渐变效果 -->
    <div class="absolute inset-0 bg-gradient-to-br from-green-50 via-teal-100 to-light dark:from-gray-900 dark:via-teal-950 dark:to-dark z-0 animate-gradient-slow"></div>
    <!-- 装饰性背景元素 -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-green-300/20 to-blue-300/20 rounded-full blur-3xl animate-float-slow"></div>
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-l from-blue-300/10 to-green-300/10 rounded-full blur-3xl animate-float-reverse"></div>
    <div class="absolute top-1/3 left-1/4 w-40 h-40 bg-teal-200/10 dark:bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
    
    <!-- 内容容器，相对定位确保内容在背景之上 -->
    <div class="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-dark dark:text-light mb-12">技术博客</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 博客文章 1 -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
          <div class="h-48 bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
            <div class="text-5xl">📱</div>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-center mb-3">
              <span class="text-sm text-gray-500 dark:text-gray-400">2023年12月15日</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">前端开发</span>
            </div>
            <h3 class="text-xl font-bold text-dark dark:text-light mb-2">Vue 3 组合式API的最佳实践</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">探索Vue 3组合式API的强大功能，以及如何在大型应用中有效使用它...</p>
            <a href="#" class="text-primary hover:underline">阅读全文 →</a>
          </div>
        </div>

        <!-- 博客文章 2 -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
          <div class="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
            <div class="text-5xl">⚙️</div>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-center mb-3">
              <span class="text-sm text-gray-500 dark:text-gray-400">2023年11月28日</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">后端开发</span>
            </div>
            <h3 class="text-xl font-bold text-dark dark:text-light mb-2">Node.js微服务架构设计</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">如何使用Node.js构建可扩展的微服务架构，包括服务发现、负载均衡和容错...</p>
            <a href="#" class="text-primary hover:underline">阅读全文 →</a>
          </div>
        </div>

        <!-- 博客文章 3 -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
          <div class="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <div class="text-5xl">🔒</div>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-center mb-3">
              <span class="text-sm text-gray-500 dark:text-gray-400">2023年10月10日</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">网络安全</span>
            </div>
            <h3 class="text-xl font-bold text-dark dark:text-light mb-2">Web应用安全最佳实践</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">保护你的Web应用免受常见安全威胁，包括XSS、CSRF和SQL注入攻击的防御策略...</p>
            <a href="#" class="text-primary hover:underline">阅读全文 →</a>
          </div>
        </div>

        <!-- 博客文章 4 -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
          <div class="h-48 bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
            <div class="text-5xl">🚀</div>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-center mb-3">
              <span class="text-sm text-gray-500 dark:text-gray-400">2023年9月5日</span>
              <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">性能优化</span>
            </div>
            <h3 class="text-xl font-bold text-dark dark:text-light mb-2">前端性能优化技巧</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">提升Web应用性能的实用技巧，包括资源加载优化、代码分割和缓存策略...</p>
            <a href="#" class="text-primary hover:underline">阅读全文 →</a>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div class="flex justify-center mt-12">
        <nav class="inline-flex rounded-md shadow-sm">
          <a href="#" class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-l-md hover:bg-gray-50 dark:hover:bg-gray-700">上一页</a>
          <a href="#" class="px-4 py-2 bg-primary text-white border border-primary">1</a>
          <a href="#" class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">2</a>
          <a href="#" class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">3</a>
          <a href="#" class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-r-md hover:bg-gray-50 dark:hover:bg-gray-700">下一页</a>
        </nav>
      </div>
    </div>
    </div>
  </div>
</template>