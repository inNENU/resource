# inNENU Resource

## 项目概述

本项目是 **inNENU** 小程序/App/网站的**资源仓库**。所有页面内容以 YAML 文件形式存放，通过 `innenu-generator` 渲染为小程序页面。项目同时托管静态资源（图片、文档）和结构化数据（账号信息等）。

- **技术栈**: Node.js (ESM, pnpm), TypeScript, VuePress (用于附属站点)
- **核心依赖**: `innenu-generator` — 将 YAML 页面配置转换为小程序 JSON

---

## 目录结构

```
├── pages/            # 小程序页面 (YAML → JSON)
├── file/             # 文件类静态资源 (docx, pdf 等)
├── img/              # 图片资源 (jpg, png, svg 等)
├── data/             # 结构化数据 (账号信息、功能配置等)
├── config/           # 站点配置 (group, item, shareLink, 捐赠等)
├── scripts/          # 构建/校验脚本
│   ├── generate/     # 各类生成器子模块
│   └── config/       # 脚本配置
├── public/           # 公共静态文件
├── service/          # PHP 后端服务
├── site/             # VuePress 附属站点源码
└── .resource/        # 构建产物输出目录 (gitignore)
```

---

## pages/ — 页面系统

### 六大分类

| 目录               | 说明     | 入口页面                                         |
| ------------------ | -------- | ------------------------------------------------ |
| `pages/intro/`     | 东师介绍 | 学校概况、学科建设、招生信息、学生就业、资助     |
| `pages/guide/`     | 东师指南 | 校园卡、校园网、寝室、食堂、学习、选课、学位等   |
| `pages/school/`    | 学院介绍 | 21 个学院 + 专业介绍 (`school.yml`)              |
| `pages/newcomer/`  | 新生专题 | 入学准备、报到流程、到校路线、常见问题、防盗防骗 |
| `pages/apartment/` | 学校机构 | 招生办、研究生院、校医院、图书馆、后勤、档案馆等 |
| `pages/other/`     | 其他页面 | 关于、作弊通报、退学处理、Hope Studio 等         |

### 页面文件约定

- **索引页**: 每个子目录下的 `index.yml` 为目录入口页
- **子页面**: 同目录下的其他 `.yml` 文件或子目录中的 `index.yml`，通过 `path` 字段引用
- **路径引用**:
  - 相对路径 `path: intro` → 当前目录下的 `intro.yml` 或 `intro/index.yml`
  - 绝对路径 `path: /school/major` → 从 pages 根开始的绝对路径
  - 外部链接 `url: notice-detail?url=...` → 直接跳转 URL

### 页面 YAML 顶层字段

```yaml
title: 页面标题 # 必填
icon: icon-name # 页面图标 (内置图标名 或 $img/...)
desc: 页面描述 # 可选，用于分享等
author: Mr.Hope # 作者 (string 或 string[])
time: 2025-07-23T... # 更新时间 (ISO 8601 日期/日期时间)
tags: # 标签数组
  - 标签1
grey: true # 是否使用灰色背景
shareable: true # 是否可分享
aiIgnore: true # 是否被 AI 忽略
cite: # 引用来源 (string 或 string[])
  - https://...
content: # 必填，页面内容组件数组
  - tag: ...
```

### 内容组件类型 (content 数组中的 `tag`)

可用的组件 tag 值定义在 `node_modules/innenu-generator/schemas/component.schema.json`：

| tag               | 说明     | 关键字段                                                    |
| ----------------- | -------- | ----------------------------------------------------------- |
| `title`           | 标题     | `text`                                                      |
| `text`            | 文本块   | `header`, `text`, `type`(info/tip/warning/danger)           |
| `p`               | 段落     | `header`, `text` (string 或 string[])                       |
| `ul`              | 无序列表 | `header`, `text` (string[])                                 |
| `img`             | 图片     | `src`, `desc`, `watermark`                                  |
| `carousel`        | 轮播图   | `images` (string[])                                         |
| `grid`            | 网格菜单 | `header`, `items` (含 `text`, `icon`, `path`/`url`)         |
| `list`            | 列表菜单 | `header`, `items` (含 `text`, `icon`, `desc`, `path`/`url`) |
| `functional-list` | 功能列表 | `header`, `items` (含 `type`, `text`, `url`)                |
| `card`            | 卡片     | `title`, `desc`, `cover`, `logo`, `path`/`url`/`action`     |
| `account`         | 账户信息 | `name`, `logo`, `wxid`, `qq`, `site`, `loc`, `mail`         |
| `phone`           | 电话信息 | `fName`, `num`, `org`, `street`, `postCode`, `site`         |
| `table`           | 表格     | `header`, `head`, `body`                                    |
| `audio`           | 音频     | `src`, `name`, `author`, `poster`                           |
| `video`           | 视频     | `src`, `poster`, `autoplay`                                 |
| `doc`             | 文档     | `src`, `name`                                               |
| `location`        | 位置     | `loc`, `name`, `detail`                                     |
| `action`          | 动作     | `content`                                                   |
| `footer`          | 页脚     | `text`, `path`                                              |

### 资源引用前缀

- **图片**: `$img/dorm/photo.jpg` → 指向 `img/` 目录
- **文件**: `$file/dorm/form.docx` → 指向 `file/` 目录

---

## file/ — 文件资源

按功能分类存放文档类资源（`.docx`, `.pdf`, `.xlsx` 等），目录名对应 `pages/` 下的业务模块：

```
file/
├── dorm/          # 寝室相关文档
├── course/        # 课程相关文档
├── enroll/        # 招生相关文档
├── exam/          # 考试相关文档
├── intro/         # 介绍相关文档
├── about/         # 校歌等
└── ...
```

引用方式: `src: $file/dorm/out.docx`

---

## img/ — 图片资源

按功能分类存放图片资源（`.jpg`, `.png`, `.svg` 等），目录名对应业务模块：

```
img/
├── dorm/          # 寝室图片
├── scenery/       # 校园风光 (benbu/ 和 jingyue/)
├── map/           # 地图相关
├── media/         # 媒体/公众号头像
├── tab/           # 首页卡片封面
├── about/         # 关于页面
├── inNENU*        # App 图标系列
├── weNENU*        # 网站图标系列
└── ...
```

引用方式: `src: $img/dorm/empty.jpg` 或 `icon: $img/media/phy.jpg`

---

## data/ — 结构化数据

### data/account/ — 微信公众号账号数据

每个 YAML 文件对应一个公众号的数据，schema: `wechat-account-data.schema.json`

```yaml
name: 东北师范大学物理学院
detail: 东北师范大学物理学院
desc: 尊重的教育 创造的教育
id: nenuphy
logo: $img/media/phy.jpg
article: # 近期文章列表 (用于页面展示)
  - cover: https://...
    title: ...
    desc: ...
    url: https://...
```

### data/function/ — 功能大厅数据

包含账号、地图、音乐、体测计算器、视频、网站等功能的配置数据。

### data/version.json

版本信息。

---

## config/ — 站点配置

| 文件            | 说明                                                                   |
| --------------- | ---------------------------------------------------------------------- |
| `item.yml`      | 全局功能项定义（如 `admission`, `calendar`, `phone`, `weather` 等）    |
| `group.yml`     | 首页展示分组定义（如 `activate-card`, `qq-group-card`, `faq-card` 等） |
| `shareLink.yml` | 分享链接配置                                                           |
| `scraper.json`  | 爬虫配置                                                               |
| `donate/`       | 历年捐赠数据                                                           |

---

## 如何生成/更新页面

### 根据文字内容创建新页面

1. **确定页面归属**: 根据内容主题，选择 `pages/` 下的六大分类之一
2. **创建 YAML 文件**: 在对应目录下创建 `.yml` 文件，使用上述 schema 编写页面结构
3. **引用资源**: 将图片放入 `img/` 对应目录，文档放入 `file/` 对应目录，使用 `$img/` 或 `$file/` 前缀引用
4. **关联到索引页**: 在父级目录的 `index.yml` 中添加对应的 `list` 或 `grid` item

### 根据文字内容更新现有页面

1. 找到对应的 `.yml` 文件
2. 根据新内容编辑 `content` 数组中的组件
3. 如涉及资源文件，同步更新 `img/` 或 `file/` 目录
4. 更新顶层 `time` 字段为当前日期

### 构建命令

| 命令                     | 说明                                              |
| ------------------------ | ------------------------------------------------- |
| `pnpm resource:generate` | 将 YAML 页面转为小程序 JSON (输出到 `.resource/`) |
| `pnpm resource:check`    | 校验资源完整性                                    |
| `pnpm resource:copy`     | 复制资源文件                                      |
| `pnpm assets:check`      | 校验静态资源引用                                  |
| `pnpm serve`             | 启动本地预览服务                                  |
| `pnpm lint`              | 代码 / 格式化检查                                 |
| `pnpm site:dev`          | 启动 VuePress 附属站点开发服务器                  |

### 页面渲染流程

```
pages/**/xxx.yml  →  innenu-generator (getPageJSON)  →  .resource/**/xxx.json
                                         ↓
                              file/ + img/ 资源文件复制
```

---

## 关键 Schema 文件

| Schema                                                     | 用途                    | 适用范围                         |
| ---------------------------------------------------------- | ----------------------- | -------------------------------- |
| `innenu-generator/schemas/page-config.schema.json`         | 页面 YAML 整体结构      | `pages/**/*.yml`                 |
| `innenu-generator/schemas/component.schema.json`           | 内容组件的 tag 类型定义 | 页面 `content` 数组              |
| `innenu-generator/schemas/wechat-account-data.schema.json` | 公众号数据              | `data/account/*.yml`             |
| `innenu-generator/schemas/qq-accounts.schema.json`         | QQ 账号列表             | `data/function/account/qq.yml`   |
| `innenu-generator/schemas/wx-accounts.schema.json`         | 微信账号列表            | `data/function/account/wx.yml`   |
| `innenu-generator/schemas/map-markers.schema.json`         | 地图标记                | `data/function/map/marker/*.yml` |
| `innenu-generator/schemas/map-page-config.schema.json`     | 地图页配置              | `data/function/map/**/*.yml`     |

---

## 注意事项

- 所有 YAML 文件均在 VS Code 中通过 schema 获得智能提示和校验
- `aiIgnore: true` 的页面将在 AI 处理时被跳过
- 图片引用使用 `$img/` 前缀（而非直接相对路径），构建时会由 `innenu-generator` 解析
- `env` 字段可限制组件仅在小程序 (`wx`)、Web (`web`) 或 App (`app`) 中显示
- `path` 支持相对路径（同目录）和绝对路径（`/` 开头，从 pages 根算起）
