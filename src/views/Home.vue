<script setup>
import { ref, onMounted } from "vue";

// 控制动画的状态
const heroVisible = ref(false);
const skillsVisible = ref(false);

// 监听滚动事件，触发动画
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const skillsSection = document.querySelector("#skills-section");

  if (skillsSection) {
    const skillsPosition = skillsSection.offsetTop;
    if (scrollPosition > skillsPosition - window.innerHeight * 0.8) {
      skillsVisible.value = true;
    }
  }
};

onMounted(() => {
  // 页面加载后显示hero部分
  setTimeout(() => {
    heroVisible.value = true;
  }, 300);

  // 添加滚动监听
  window.addEventListener("scroll", handleScroll);

  // 初始检查一次滚动位置
  handleScroll();
});
</script>

<template>
  <div class="min-h-screen overflow-hidden relative">
    <!-- 美化的背景渐变效果 -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-light dark:from-gray-900 dark:via-blue-950 dark:to-dark z-0 animate-gradient-slow"
    ></div>
    <!-- 装饰性背景元素 -->
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float-slow"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-green-300/10 to-blue-300/10 rounded-full blur-3xl animate-float-reverse"
    ></div>
    <div
      class="absolute top-1/3 right-1/4 w-40 h-40 bg-yellow-200/10 dark:bg-yellow-400/5 rounded-full blur-2xl animate-pulse-slow"
    ></div>

    <!-- 内容容器，相对定位确保内容在背景之上 -->
    <div class="relative z-10">
      <!-- Hero Section -->
      <section class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <!-- 背景装饰元素 -->
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 blur-3xl -z-10 animate-pulse"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-48 h-48 bg-green-100 dark:bg-green-900 rounded-full opacity-20 blur-3xl -z-10 animate-pulse"
        ></div>

        <div
          class="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div class="md:w-1/2" :class="{ 'fade-in': heroVisible }">
            <h1
              class="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-20"
            >
              <span
                class="text-primary slide-in-left"
                style="animation-delay: 0.3s; display: inline-block"
                >你好，我是</span
              ><br />
              <span
                class="text-6xl slide-in-left"
                style="animation-delay: 0.6s; display: inline-block"
                >0xFFFFAAA1</span
              >
            </h1>
            <p
              class="text-xl text-gray-700 dark:text-gray-300 mb-8 slide-in-left"
              style="animation-delay: 0.9s"
            >
              一个普通的程序员，喜欢探索新事物，喜欢分享知识。
            </p>
            <div class="flex gap-4 slide-in-left" style="animation-delay: 1.2s">
              <a
                href="/projects"
                class="px-6 py-3 bg-transparent text-blue-600 border border-black rounded-lg hover:bg-blue-900 hover:text-white transition hover-shadow"
              >
                查看作品
              </a>
              <a
                href="/contact"
                class="px-6 py-3 border border-black text-blue-600 rounded-lg hover:bg-blue-900 hover:text-white transition hover-shadow"
              >
                联系我
              </a>
            </div>
          </div>
          <div class="md:w-1/2 slide-in-right" style="animation-delay: 0.6s">
            <div
              class="relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center floating"
            >
              <div
                class="absolute w-60 h-60 md:w-72 md:h-72 bg-light dark:bg-dark rounded-full flex items-center justify-center"
              >
                <!-- 使用codeboy.png作为头像图片 -->
                <div class="bounce" style="margin-top: 50px">
                  <img
                    src="@/assets/codeboy.png"
                    alt="Codeboy"
                    class="w-80 h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section
        id="skills-section"
        class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg my-12 relative overflow-hidden"
      >
        <!-- 背景装饰 -->
        <div
          class="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 dark:bg-blue-900 rounded-full opacity-30"
        ></div>
        <div
          class="absolute -bottom-10 -left-10 w-40 h-40 bg-green-50 dark:bg-green-900 rounded-full opacity-30"
        ></div>

        <h2
          class="text-3xl font-bold text-center text-dark dark:text-light mb-12 relative z-10 fade-in"
          :class="{ 'fade-in': skillsVisible }"
        >
          <span class="relative inline-block">
            我的技能
            <span
              class="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full transform scale-x-0 transition-transform duration-500"
              :class="{ 'scale-x-100': skillsVisible }"
            ></span>
          </span>
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div
            class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center hover-scale hover-shadow transition-all duration-300"
            :class="{ 'slide-up': skillsVisible }"
            style="animation-delay: 0.1s"
          >
            <div class="text-4xl mb-4 pulse">💻</div>
            <h3 class="text-xl font-semibold mb-2 text-primary">前端开发</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Vue, React, JavaScript, HTML/CSS
            </p>
          </div>
          <div
            class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center hover-scale hover-shadow transition-all duration-300"
            :class="{ 'slide-up': skillsVisible }"
            style="animation-delay: 0.3s"
          >
            <div class="text-4xl mb-4 pulse">🔧</div>
            <h3 class="text-xl font-semibold mb-2 text-primary">后端开发</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Node.js, Python, Java, SQL
            </p>
          </div>
          <div
            class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center hover-scale hover-shadow transition-all duration-300"
            :class="{ 'slide-up': skillsVisible }"
            style="animation-delay: 0.5s"
          >
            <div class="text-4xl mb-4 pulse">📱</div>
            <h3 class="text-xl font-semibold mb-2 text-primary">移动开发</h3>
            <p class="text-gray-600 dark:text-gray-300">
              React Native, Flutter
            </p>
          </div>
          <div
            class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center hover-scale hover-shadow transition-all duration-300"
            :class="{ 'slide-up': skillsVisible }"
            style="animation-delay: 0.7s"
          >
            <div class="text-4xl mb-4 pulse">🚀</div>
            <h3 class="text-xl font-semibold mb-2 text-primary">DevOps</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Docker, CI/CD, AWS, Git
            </p>
          </div>
        </div>

        <!-- 添加一个项目预览部分 -->
        <div
          class="mt-16 fade-in"
          :class="{ 'fade-in': skillsVisible }"
          style="animation-delay: 1s"
        >
          <h3
            class="text-2xl font-bold text-center text-dark dark:text-light mb-8"
          >
            精选项目
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover-shadow transition-all duration-300"
            >
              <h4 class="text-xl font-semibold text-primary mb-2">
                个人作品集网站
              </h4>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                使用Vue.js和Tailwind
                CSS构建的响应式个人网站，展示我的技能和项目。
              </p>
              <div class="flex justify-end">
                <a
                  href="#"
                  class="text-primary hover:text-blue-700 dark:hover:text-blue-400 font-medium"
                  >查看详情 →</a
                >
              </div>
            </div>
            <div
              class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover-shadow transition-all duration-300"
            >
              <h4 class="text-xl font-semibold text-primary mb-2">
                电商管理系统
              </h4>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                基于Vue和Element
                UI的电商后台管理系统，包含商品管理、订单处理等功能。
              </p>
              <div class="flex justify-end">
                <a
                  href="#"
                  class="text-primary hover:text-blue-700 dark:hover:text-blue-400 font-medium"
                  >查看详情 →</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
