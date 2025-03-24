<template>
  <div class="min-h-screen overflow-hidden relative">
    <!-- 美化的背景渐变效果 -->
    <div class="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-100 to-light dark:from-gray-900 dark:via-amber-950 dark:to-dark z-0 animate-gradient-slow"></div>
    <!-- 装饰性背景元素 -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-3xl animate-float-slow"></div>
    <div class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-red-300/10 to-yellow-300/10 rounded-full blur-3xl animate-float-reverse"></div>
    <div class="absolute top-1/3 right-1/4 w-40 h-40 bg-amber-200/10 dark:bg-amber-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
    <!-- 添加更多装饰元素 -->
    <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-red-200/20 dark:bg-red-400/10 rounded-full blur-xl animate-bounce-slow"></div>
    <div class="absolute bottom-1/3 right-1/3 w-32 h-32 bg-yellow-200/15 dark:bg-yellow-400/10 rounded-full blur-xl animate-spin-slow"></div>
    <div class="absolute top-3/4 left-1/4 w-16 h-16 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-lg animate-ping-slow"></div>
    
    <!-- 内容容器，相对定位确保内容在背景之上 -->
    <div class="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-dark dark:text-light mb-12">联系我</h1>
      
      <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg p-8 mb-10 transform transition-all duration-500 hover:shadow-xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 联系信息 -->
          <div class="transform transition-all duration-500 hover:scale-105">
            <h2 class="text-2xl font-bold text-dark dark:text-light mb-6 relative inline-block">
              联系方式
              <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </h2>
            <div class="space-y-6">
              <div class="flex items-center group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-3 rounded-lg">
                <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mr-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <span class="text-xl">📧</span>
                </div>
                <div class="transition-all duration-300">
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">邮箱</p>
                  <p class="text-gray-700 dark:text-gray-300 font-semibold group-hover:text-primary transition-colors duration-300">contact@example.com</p>
                </div>
              </div>
              
              <div class="flex items-center group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-3 rounded-lg">
                <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mr-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <span class="text-xl">📱</span>
                </div>
                <div class="transition-all duration-300">
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">微信</p>
                  <p class="text-gray-700 dark:text-gray-300 font-semibold group-hover:text-primary transition-colors duration-300">programmer_xm</p>
                </div>
              </div>
              
              <div class="flex items-center group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-3 rounded-lg">
                <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mr-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <span class="text-xl">🔗</span>
                </div>
                <div class="transition-all duration-300">
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">GitHub</p>
                  <a href="https://github.com" target="_blank" class="text-primary hover:text-secondary transition-colors duration-300 font-semibold hover:underline">github.com/programmer-xm</a>
                </div>
              </div>
              
              <div class="flex items-center group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-3 rounded-lg">
                <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mr-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <span class="text-xl">💼</span>
                </div>
                <div class="transition-all duration-300">
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">领英</p>
                  <a href="https://linkedin.com" target="_blank" class="text-primary hover:text-secondary transition-colors duration-300 font-semibold hover:underline">linkedin.com/in/programmer-xm</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 联系表单 -->
          <div class="transform transition-all duration-500 hover:scale-105">
            <h2 class="text-2xl font-bold text-dark dark:text-light mb-6 relative inline-block group">
              发送消息
              <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </h2>
            <form class="space-y-6">
              <div class="group">
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300 group-focus-within:text-primary">姓名</label>
                <div class="relative">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    class="w-full px-5 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-gray-100 transition-all duration-300 backdrop-blur-sm" 
                    placeholder="请输入您的姓名"
                  />
                  <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
                </div>
              </div>
              
              <div class="group">
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300 group-focus-within:text-primary">邮箱</label>
                <div class="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    class="w-full px-5 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-gray-100 transition-all duration-300 backdrop-blur-sm" 
                    placeholder="请输入您的邮箱地址"
                  />
                  <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
                </div>
              </div>
              
              <div class="group">
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300 group-focus-within:text-primary">消息</label>
                <div class="relative">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    class="w-full px-5 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-gray-100 transition-all duration-300 backdrop-blur-sm" 
                    placeholder="请输入您的留言内容"
                  ></textarea>
                  <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
                </div>
              </div>
              
              <button 
                type="submit" 
                class="w-full px-8 py-4 bg-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20 transition-all duration-300 text-lg font-medium relative overflow-hidden group"
              >
                <span class="absolute inset-0 w-full h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span class="relative flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                  发送消息
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <!-- 工作时间信息 -->
      <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:shadow-xl">
        <h2 class="text-2xl font-bold text-dark dark:text-light mb-6 relative inline-block group">
          工作时间
          <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl group hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mr-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">工作日</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 pl-14 text-lg">周一至周五: <span class="font-semibold">9:00 - 18:00</span></p>
          </div>
          
          <div class="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl group hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mr-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">周末</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 pl-14 text-lg">周六至周日: <span class="font-semibold">休息</span></p>
          </div>
        </div>
        
        <!-- 添加额外信息 -->
        <div class="mt-8 p-5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mr-4 shadow-md">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p class="text-gray-700 dark:text-gray-300">如有紧急事项，请通过邮件或微信联系，我会尽快回复您！</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>