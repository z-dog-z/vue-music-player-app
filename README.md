# Vue Music Player App

<div align="center">

![Vue3](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat&logo=vite&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4.x-red?style=flat)
![Pinia](https://img.shields.io/badge/Pinia-3.x-F7D336?style=flat&logo=pinia&logoColor=black)
![Vant](https://img.shields.io/badge/Vant-4.x-1989FA?style=flat)

**基于 Vue 3 的仿网易云音乐 Web 端音乐播放器**

从 Vue 基础语法到组件化实战，一个完整落地的前端学习项目

</div>

---

## 项目简介

本项目是一个仿网易云音乐风格的音乐类 Web 应用，采用 Vue 3 全家桶搭建，实现了多页面路由切换、轮播图、歌单推荐列表以及真实可用的音频播放功能。

项目包含两部分内容：

- **musicApp**：核心实战项目，移动端音乐播放器
- **Day01 ~ Day04**：Vue 框架学习笔记与基础练习，记录从入门到项目实战的完整学习路径

## 功能模块

| 模块 | 路由 | 功能说明 |
| --- | --- | --- |
| 我的 | `/mine` | 个人中心页面（应用默认首页） |
| 发现音乐 | `/discover` | 顶部轮播图（`van-swipe` 自动播放）、金刚区功能入口、发现好歌单推荐列表 |
| 云村 | `/cloud` | 社区页面 |
| 视频 | `/video` | 视频页面 |
| 播放器 | 页面组件 | 基于 `Audio` 对象实现真实播放/暂停、唱片随播放状态旋转动画、播放结束自动重置 |

## 技术栈

| 技术 | 版本 | 用途 |
| --- | --- | --- |
| Vue 3 | ^3.5 | 渐进式前端框架，`<script setup>` 组合式 API 写法 |
| Vite | ^7.0 | 下一代前端构建工具 |
| Vue Router | ^4.5 | 单页面应用路由（懒加载 + 重定向） |
| Pinia | ^3.0 | 状态管理 |
| Vant | ^4.9 | 移动端组件库（轮播图、图标、按钮等） |
| Less | ^4.3 | CSS 预处理器 |

## 项目结构

```text
musicApp
├── public/                    # 静态资源
├── src/
│   ├── assets/                # 图片、视频等资源文件
│   ├── components/            # 通用组件
│   │   ├── icons/             # 图标组件
│   │   ├── HelloWorld.vue
│   │   ├── TheWelcome.vue
│   │   └── WelcomeItem.vue
│   ├── pages/                 # 页面级组件
│   │   ├── componets/         # 页面子组件
│   │   │   ├── Header.vue     # 顶部导航
│   │   │   └── Player.vue     # 底部播放器
│   │   ├── Cloud.vue          # 云村页
│   │   ├── Discover.vue       # 发现音乐页
│   │   ├── Mine.vue           # 我的页
│   │   └── Video.vue          # 视频页
│   ├── router/                # 路由配置
│   │   └── index.js
│   ├── stores/                # Pinia 状态管理
│   │   └── counter.js
│   ├── views/                 # 视图组件
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

## 快速开始

```bash
# 克隆项目
git clone https://github.com/z-dog-z/vue-music-player-app.git

# 进入项目目录
cd Day04/musicApp

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 学习历程

| 阶段 | 内容 |
| --- | --- |
| Day 01 | HTML 标签、表格与表单练习 |
| Day 02 | CSS 选择器、盒模型、过渡与动画 |
| Day 03 | JavaScript 数据类型、数组、函数 |
| Day 04 | Vue 基础语法 + musicApp 项目实战（路由、组件、Vant、音频播放） |

## 声明

本项目仅用于个人学习与技术交流，页面样式参考网易云音乐，图片与音频素材均来自网络，不用于任何商业用途。

---

<div align="center">

如果这个项目对你有帮助，欢迎点一个 Star ⭐

</div>
