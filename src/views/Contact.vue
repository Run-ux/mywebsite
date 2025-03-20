<template>
  <div class="min-h-screen bg-light dark:bg-dark py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-dark dark:text-light mb-12">联系我</h1>
      
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 联系信息 -->
          <div>
            <h2 class="text-2xl font-semibold text-dark dark:text-light mb-6">联系方式</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                  <span class="text-xl">📧</span>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">邮箱</p>
                  <p class="text-gray-700 dark:text-gray-300">contact@example.com</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                  <span class="text-xl">📱</span>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">微信</p>
                  <p class="text-gray-700 dark:text-gray-300">programmer_xm</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                  <span class="text-xl">🔗</span>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                  <a href="https://github.com" target="_blank" class="text-primary hover:underline">github.com/programmer-xm</a>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                  <span class="text-xl">💼</span>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">领英</p>
                  <a href="https://linkedin.com" target="_blank" class="text-primary hover:underline">linkedin.com/in/programmer-xm</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 联系表单 -->
          <div>
            <h2 class="text-2xl font-semibold text-dark dark:text-light mb-6">发送消息</h2>
            <form class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">姓名</label>
                <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">邮箱</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">消息</label>
                <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"></textarea>
              </div>
              
              <button type="submit" class="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition">
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <!-- 地图或其他信息 -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
        <h2 class="text-2xl font-semibold text-dark dark:text-light mb-6">工作时间</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="text-lg font-medium text-primary mb-2">工作日</h3>
            <p class="text-gray-700 dark:text-gray-300">周一至周五: 9:00 - 18:00</p>
          </div>
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="text-lg font-medium text-primary mb-2">周末</h3>
            <p class="text-gray-700 dark:text-gray-300">周六至周日: 休息</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>