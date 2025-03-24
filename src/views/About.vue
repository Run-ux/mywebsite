<script setup>
import { ref, onMounted } from 'vue';
import avatarImg from '../assets/avatar.svg';
import skillsImg from '../assets/skills.svg';

const isVisible = ref(false);

onMounted(() => {
  // 页面加载后触发动画
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <div class="min-h-screen overflow-hidden relative">
    <!-- 美化的背景渐变效果 -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-light dark:from-gray-900 dark:via-indigo-950 dark:to-dark z-0 animate-gradient-slow"></div>
    <!-- 装饰性背景元素 -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl animate-float-slow"></div>
    <div class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl animate-float-reverse"></div>
    <div class="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
    
    <!-- 内容容器，相对定位确保内容在背景之上 -->
    <div class="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-dark dark:text-light mb-12 fade-in">关于我</h1>
      
      <!-- 个人简介和头像 -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-10 hover-shadow" :class="{ 'slide-up': isVisible }">
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="md:w-1/3 flex justify-center">
            <img :src="avatarImg" alt="个人头像" class="w-48 h-48 rounded-full shadow-lg hover-scale floating" />
          </div>
          <div class="md:w-2/3">
            <h2 class="text-2xl font-semibold text-dark dark:text-light mb-6">个人简介</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              你好！我是一名充满激情的全栈开发工程师，拥有5年的专业开发经验。我热爱创造能够解决实际问题的应用程序，并且不断学习新技术来提升自己的技能。
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              我的技术栈涵盖前端和后端开发，擅长使用现代JavaScript框架构建响应式和用户友好的web应用。我注重代码质量和性能优化，同时也具备良好的团队协作能力。
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              在工作之外，我喜欢参与开源项目，撰写技术博客分享我的知识和经验，并且热衷于参加技术社区活动。
            </p>
          </div>
        </div>
      </div>
      
      <!-- 技能展示 -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-10 hover-shadow" :class="{ 'slide-in-right': isVisible }">
        <h2 class="text-2xl font-semibold text-dark dark:text-light mb-6">专业技能</h2>
        <div class="flex justify-center mb-8">
          <img :src="skillsImg" alt="技能图表" class="w-full max-w-2xl pulse" />
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="skill-item">
            <h3 class="text-xl font-medium text-primary mb-2">前端技术</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-1">
              <div class="bg-blue-600 h-2.5 rounded-full skill-progress" style="width: 90%"></div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Vue.js, React, JavaScript, HTML/CSS, Tailwind</p>
          </div>
          
          <div class="skill-item">
            <h3 class="text-xl font-medium text-primary mb-2">后端技术</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-1">
              <div class="bg-green-600 h-2.5 rounded-full skill-progress" style="width: 85%"></div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Node.js, Express, Python, Django, RESTful API</p>
          </div>
          
          <div class="skill-item">
            <h3 class="text-xl font-medium text-primary mb-2">数据库</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-1">
              <div class="bg-red-600 h-2.5 rounded-full skill-progress" style="width: 80%"></div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm">MongoDB, MySQL, PostgreSQL, Redis</p>
          </div>
          
          <div class="skill-item">
            <h3 class="text-xl font-medium text-primary mb-2">DevOps</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-1">
              <div class="bg-pink-600 h-2.5 rounded-full skill-progress" style="width: 75%"></div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Docker, CI/CD, AWS, Git, Linux</p>
          </div>
        </div>
      </div>
      
      <!-- 教育背景 -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-10 hover-shadow" :class="{ 'slide-in-left': isVisible }">
        <h2 class="text-2xl font-semibold text-dark dark:text-light mb-6">教育背景</h2>
        <div class="mb-6">
          <h3 class="text-xl font-medium text-primary">计算机科学与技术 学士学位</h3>
          <p class="text-gray-600 dark:text-gray-400">某知名大学 | 2015 - 2019</p>
          <p class="text-gray-700 dark:text-gray-300 mt-2">
            主修课程：数据结构与算法、操作系统、数据库系统、计算机网络、软件工程
          </p>
        </div>
        <div>
          <h3 class="text-xl font-medium text-primary">相关证书</h3>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>AWS 认证解决方案架构师</li>
            <li>Google 认证专业云开发工程师</li>
            <li>Microsoft 认证：Azure 开发者助理</li>
          </ul>
        </div>
      </div>
      
      <!-- 工作经历 -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover-shadow" :class="{ 'slide-up': isVisible }">
        <h2 class="text-2xl font-semibold text-dark dark:text-light mb-6">工作经历</h2>
        <div class="mb-8">
          <h3 class="text-xl font-medium text-primary">高级全栈开发工程师</h3>
          <p class="text-gray-600 dark:text-gray-400">某科技公司 | 2021 - 至今</p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>负责公司核心产品的前端和后端开发</li>
            <li>优化应用性能，提高页面加载速度50%</li>
            <li>设计并实现RESTful API，支持移动端和Web端应用</li>
            <li>指导初级开发人员，组织技术分享会</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-medium text-primary">前端开发工程师</h3>
          <p class="text-gray-600 dark:text-gray-400">某互联网公司 | 2019 - 2021</p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>使用Vue.js开发企业级SaaS应用</li>
            <li>实现响应式设计，确保在各种设备上的良好体验</li>
            <li>与UI/UX设计师和后端开发人员紧密合作</li>
            <li>参与代码审查，提高团队代码质量</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.skill-progress {
  animation: progress 1.5s ease-out forwards;
  width: 0;
}

@keyframes progress {
  from { width: 0; }
  to { width: var(--width); }
}

.skill-item {
  transition: transform 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
}

/* 为技能进度条设置初始宽度 */
.skill-item:nth-child(1) .skill-progress {
  --width: 90%;
}

.skill-item:nth-child(2) .skill-progress {
  --width: 85%;
}

.skill-item:nth-child(3) .skill-progress {
  --width: 80%;
}

.skill-item:nth-child(4) .skill-progress {
  --width: 75%;
}
</style>