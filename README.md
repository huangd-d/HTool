# 综合工具平台

一站式开发工具解决方案，基于 Electron + Vue 3 构建的跨平台桌面应用。

## 技术栈

- **前端框架**：Vue 3 (Composition API, `<script setup>`)
- **构建工具**：Vite
- **桌面应用**：Electron
- **UI 库**：Element Plus
- **图标**：Element Plus Icons
- **样式**：CSS 变量 + 响应式设计

## 项目结构

```
w-project/
├── electron/           # Electron 主进程
│   ├── src/            # 主进程源码
│   │   ├── api/        # API 处理模块
│   │   ├── protocol/   # 协议处理模块
│   │   ├── window/     # 窗口管理模块
│   │   └── index.js    # 主进程入口
│   ├── preload.js      # 预加载脚本
│   └── package.json    # Electron 依赖
├── web/                # Vue 前端
│   ├── src/            # 前端源码
│   │   ├── assets/     # 静态资源
│   │   ├── components/ # 组件
│   │   ├── config/     # 配置文件
│   │   ├── router/     # 路由
│   │   ├── views/      # 页面视图
│   │   ├── App.vue     # 根组件
│   │   └── main.js     # 前端入口
│   ├── vite.config.js  # Vite 配置
│   └── package.json    # 前端依赖
└── .gitignore          # Git 忽略文件
```

## 功能特点

### 1. 首页
- 功能卡片展示
- 快速导航到各功能模块
- 响应式设计，适配不同屏幕尺寸

### 2. API 管理
- API 项目管理（创建、编辑、删除）
- API 分类管理
- API 接口管理
- API 测试与请求

### 3. 技术文档访问
- 本地技术文档浏览
- 支持多种文档格式

### 4. 办公文件预览
- 办公文件快速预览
- 支持常见文档格式

### 5. 标签页管理
- 多标签页切换
- 标签页创建与关闭
- 跨 WebContentsView 通信

## 安装和运行

### 前置条件
- Node.js 14+ 环境
- npm 或 yarn 包管理器

### 安装依赖

```bash
# 安装前端依赖
cd web
npm install

# 安装 Electron 依赖
cd ../electron
npm install
```

### 开发模式运行

```bash
# 启动前端开发服务器
cd web
npm run dev

# 在另一个终端启动 Electron
cd ../electron
npm run dev
```

## 构建和打包

### 构建前端

```bash
cd web
npm run build
```

### 打包 Electron 应用

```bash
cd electron
npm run build
```

## 开发指南

### 代码规范
- Vue 文件使用 `<script setup>` 语法
- 组件命名使用 PascalCase
- 函数和变量使用 camelCase
- 代码注释使用中文

### 项目配置
- 菜单配置：`web/src/config/menuConfig.js`
- 路由配置：`web/src/router/index.js`
- 主进程窗口管理：`electron/src/window/`

### 跨进程通信
- 渲染进程 → 主进程：使用 `window.electronAPI`
- 主进程 → 渲染进程：使用 `webContents.send()`

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

MIT License - 详见 LICENSE 文件