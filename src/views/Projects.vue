<template>
  <div class="min-h-screen bg-light dark:bg-dark py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-dark dark:text-light mb-12">我的项目</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 项目卡片 1 -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
          <div class="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <div class="text-5xl">🚀</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-dark dark:text-light mb-2">智能电商平台</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">基于Vue和Node.js的全栈电商应用，包含智能推荐系统</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Vue.js</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">MongoDB</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-primary hover:underline">查看详情</a>
              <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-primary">GitHub</a>
            </div>
          </div>
        </div>

        <!-- 项目卡片 2 -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
          <div class="h-48 bg-gradient-to-r from-secondary to-primary flex items-center justify-center">
            <div class="text-5xl">📱</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-dark dark:text-light mb-2">社交媒体应用</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">基于React Native的跨平台社交应用，支持实时聊天和内容分享</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React Native</span>
              <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Firebase</span>
              <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Redux</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-primary hover:underline">查看详情</a>
              <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-primary">GitHub</a>
            </div>
          </div>
        </div>

        <!-- 项目卡片 3 -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
          <div class="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <div class="text-5xl">🤖</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-dark dark:text-light mb-2">AI助手工具</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">基于Python和机器学习的智能助手，可以自动化日常任务</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Python</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">TensorFlow</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm">Flask</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-primary hover:underline">查看详情</a>
              <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-primary">GitHub</a>
            </div>
          </div>
        </div>

        <!-- 项目卡片 4 -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
          <div class="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
            <div class="text-5xl">📊</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-dark dark:text-light mb-2">数据可视化平台</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">企业级数据分析和可视化工具，支持多种数据源和自定义图表</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">D3.js</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">GraphQL</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-primary hover:underline">查看详情</a>
              <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-primary">GitHub</a>
            </div>
          </div>
        </div>

        <!-- 项目卡片 5 -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
          <div class="h-48 bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
            <div class="text-5xl">🎮</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-dark dark:text-light mb-2">HTML5游戏</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">使用JavaScript和Canvas开发的休闲小游戏，支持移动端和PC端</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">JavaScript</span>
              <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">HTML5 Canvas</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Phaser.js</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-primary hover:underline">查看详情</a>
              <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-primary">GitHub</a>
            </div>
          </div>
        </div>

        <!-- 项目卡片 6 -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
          <div class="h-48 bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
            <div class="text-5xl">📝</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-dark dark:text-light mb-2">在线笔记应用</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">支持Markdown的云端笔记应用，具有实时协作和版本控制功能</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Vue.js</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Express</span>
              <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Socket.io</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-primary hover:underline">查看详情</a>
              <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-primary">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>