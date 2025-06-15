---
date: 2025-06-15
title: React-Router Overview
tags:
  - react-router
  - DeepWiki
description: 跟着DeepWiki学习react-router（1 Overview）
---

之前都是通过Copilot来辅助分析，有了DeepWiki更省事了，主体枝干都有了，未直接给出的一些细枝末节通过进一步对话也能得出。

# 概述/总览

## [React Router模块结构](https://deepwiki.com/remix-run/react-router/1-overview#architecture-overview)

### 核心包
- react-router - 核心路由功能包 
- react-router-dom - Web浏览器特定功能包 

### 平台适配包
- @react-router/cloudflare - Cloudflare Workers适配器
- @react-router/node - Node.js环境适配器
- @react-router/architect - AWS Architect集成 
- @react-router/express - Express中间件集成
- @react-router/serve - 生产应用服务器 

### 开发工具包
- @react-router/dev - 开发工具和Vite插件
- @react-router/fs-routes - 文件系统路由约定
- create-react-router - 项目脚手架工具


## [关键组件和数据流](https://deepwiki.com/remix-run/react-router/1-overview#key-components-and-data-flow)

### 路由
- Router
- BrowserRouter
- HashRouter
- MemoryRouter
- Routes
- Route
- RouterProvider
- DateRouter

#### [Router与BrowserRouter、HashRouter、MemoryRouter的关系？](https://deepwiki.com/search/routerbrowserrouterhashrouterm_79d3817d-2060-4f96-a4a0-7cd9721a2419)

#### [这些组件各自的作用/职责是什么？](https://deepwiki.com/search/_2dffce94-e1e1-4fa4-9cb5-70df845b70e9)


### 导航
- Link
- NavLink
- Form
- Navigate

#### [Form为什么算作导航，而不是数据流？](https://deepwiki.com/search/form_3f5ca83d-a538-4ab5-98ea-1118aaa76589)

### 布局
- Outlet
- ScrollRestoration

#### [ScrollRestoration为什么划分到布局？](https://deepwiki.com/search/form_3f5ca83d-a538-4ab5-98ea-1118aaa76589#2)

### 数据流
- Actions
- Loaders
- Fetchers


## [使用模式](https://deepwiki.com/remix-run/react-router/1-overview#usage-modes)

### Library Mode/库模式

### Framework Mode/框架模式

### Component Mode/组件模式


## [渲染和数据加载过程](https://deepwiki.com/remix-run/react-router/1-overview#rendering-and-data-loading-process)


## [核心组件](https://deepwiki.com/remix-run/react-router/1-overview#core-components)

### BrowserRouter：在现代浏览器中使用 HTML5 历史 API 实现干净的 URL

### HashRouter：在较旧的浏览器或静态文件环境中使用 URL 哈希进行路由

### MemoryRouter：将历史记录保存在内存中（用于测试）

### RouterProvider：数据路由器的主入口点


## [路由定义](https://deepwiki.com/remix-run/react-router/1-overview#route-definition)

### Component syntax
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="dashboard" element={<Dashboard />}>
    <Route path="stats" element={<Stats />} />
  </Route>
</Routes>
```

### Object syntax
```ts
const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "stats", element: <Stats /> }
        ]
      }
    ]
  }
];

const router = createBrowserRouter(routes);
```

## [导航](https://deepwiki.com/remix-run/react-router/1-overview#navigation)

### 组件
- Link
- NavLink
- Navigate
- Form: Data mutation through forms（？为什么算导航）

### Hooks
- useNavigate


## [数据加载和更改](https://deepwiki.com/remix-run/react-router/1-overview#data-loading-and-mutations)

## [服务器端渲染](https://deepwiki.com/remix-run/react-router/1-overview#server-side-rendering)

## [平台适配](https://deepwiki.com/remix-run/react-router/1-overview#platform-adaptations)

## [开发工具](https://deepwiki.com/remix-run/react-router/1-overview#development-tools)

## [版本演变](https://deepwiki.com/remix-run/react-router/1-overview#version-evolution)