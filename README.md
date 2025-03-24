# 个人网站项目

这是一个使用 Vue 3 和 Vite 构建的个人网站项目，包含首页、关于我、项目展示、博客和联系方式等页面。项目使用了现代前端技术栈，并配置了 GitHub Actions 自动部署到 GitHub Pages。

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- Vite - 现代前端构建工具
- Vue Router - 官方路由管理器
- Tailwind CSS - 实用优先的 CSS 框架
- Pinia - Vue 的状态管理库
- Headless UI - 无样式 UI 组件库
- Heroicons - SVG 图标集合

## 功能特点

- 响应式设计，适配各种设备屏幕
- 暗色/亮色模式切换
- 多页面路由导航
- 项目展示页面
- 个人简介和技能展示
- 博客文章列表
- 联系表单

## 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/mywebsite.git

# 进入项目目录
cd mywebsite

# 安装依赖
npm install
```

## 开发

```bash
# 启动开发服务器
npm run dev
```

访问 http://localhost:5173/ 查看网站。

## 构建

```bash
# 构建生产版本
npm run build
```

## 预览构建结果

```bash
# 预览构建后的网站
npm run preview
```

## 部署到 GitHub Pages

项目已配置 GitHub Actions 自动部署流程。当你推送代码到 main 分支时，会自动触发构建和部署过程：

1. 确保你的仓库设置中已启用 GitHub Pages
2. 在仓库设置中，将 GitHub Pages 的源设置为"GitHub Actions"
3. 推送代码到 main 分支即可触发自动部署

```bash
git add .
git commit -m "your commit message"
git push origin main
```

部署完成后，你的网站将可以通过 https://yourusername.github.io/mywebsite/ 访问。

## 项目结构

```
├── .github/workflows/  # GitHub Actions配置
├── public/             # 静态资源
├── src/                # 源代码
│   ├── assets/         # 图片等资源
│   ├── components/     # 组件
│   ├── router/         # 路由配置
│   ├── views/          # 页面视图
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── index.html          # HTML模板
├── package.json        # 项目依赖
├── vite.config.js      # Vite配置
└── tailwind.config.js  # Tailwind CSS配置
```
