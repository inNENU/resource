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

#### 更新原则

1. **保留原标题**: 尽量保持原页面中的 `title` / `header` 标题不变（如"学科建设"不应改为"学科与人才培养"、"组织架构"等）。只有原标题确实无法涵盖新材料的内容时，才可修改标题或添加新标题。
2. **保留未涉及内容**: 新材料中未提及的整段旧内容可能来源于其他材料，不应将其删除。只有当旧段落与新材料段落明显对应、且新材料有更新的表述时，才替换旧语句。未被新材料覆盖的旧段落应完整保留。
3. **中西文空格**: 在中文汉字与英文字母、阿拉伯数字之间必须添加半角空格（例如："1945 年 10 月 25 日"、"211 工程"、"A 类学科"、"B+ 等级"）。数字与单位之间不加空格（如："500余平米"、"1000余万元"）。
4. **保留旧入口**: 往年招生的专业其转入要求入口不要随意删除——学院可能有动态专业调整，往年专业仍可能允许转入。同样的，已有的页面路径（如列表项、转专业入口等）如果页面文件仍然存在，不应删除其引用。
5. **新增条目需有对应页面**: 在 `enroll.yml` 等索引页的列表中添加新条目时，必须有对应的 `.yml` 页面文件存在。若页面尚未创建，应先用 YAML 注释标注，并在 `task/TODO.md` 中记录缺失页面，防止用户点击后出现 404。反过来，新建 `.yml` 页面文件后，也必须在其父级目录的 `index.yml` 中添加对应的列表项入口。
6. **内容归属要正确**: 学院介绍（`intro.yml`）侧重学院本身的历史、师资、学科、科研等；招生专业信息（本科招生概况、专业列表）属于 `enroll.yml`。类似地，院士等知名人物若有独立页面（如 `pages/intro/about/teacher/` 下的文件），不应将内容重复加到学院 intro 中。
7. **git diff 自查**: 每次修改完一个文件后，用 `git diff` 对比修改前后，确认没有意外丢失任何旧内容或入口。
8. **年度归档**: 每年更新的页面（如招生简章），旧年份文件应移至 `pages/other/` 下对应目录存档（参考 `pages/other/enroll/grad/rule/` 存放 2022-2025 年招生简章的模式），并在 `history.yml` 中记录入口。这与学院介绍等原地更新内容的处理方式不同。

#### 协作约定

- **不要 `git add`**：永远不要执行 `git add`。用户会自行审查并暂存认可的文件。
- **已暂存 ≠ 禁止修改**：`git diff --cached` 中的文件是用户已审查通过的当前版本，但并不意味着你不能再修改——如果任务尚未完成（如部分内容还未更新、后续还需要继续补充），你仍可以在已暂存的基础上继续编辑。关键是不要 `revert` 或撤销用户已认可的内容。
- **继续工作时的检查**：当用户要求继续时，先用 `git diff --name-only` 查看未暂存的文件列表。这些文件是用户尚未审查（或未认可）的，需要根据用户反馈进行调整。

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

- `phone` 组件仅渲染为一个电话号和添加联系人按钮，不展示 `remark`、`street` 等附加字段。因此，凡涉及人员信息展示的页面，应在 `phone` 组件之前先用 `text` / `p` 等组件写出人员的姓名、职务、职责、办公地点等正文内容，再用 `phone` 组件提供一键拨号/保存功能。信息需要在正文和 `phone` 组件中各写一遍。
- 所有 YAML 文件均在 VS Code 中通过 schema 获得智能提示和校验
- `aiIgnore: true` 的页面将在 AI 处理时被跳过
- 图片引用使用 `$img/` 前缀（而非直接相对路径），构建时会由 `innenu-generator` 解析
- `env` 字段可限制组件仅在小程序 (`wx`)、Web (`web`) 或 App (`app`) 中显示
- `path` 支持相对路径（同目录）和绝对路径（`/` 开头，从 pages 根算起）
