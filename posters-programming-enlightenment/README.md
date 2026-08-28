# 《编程启蒙：思维与代码》横版海报

本目录包含两套共 28 张 `1920×1080` PNG 横版海报。`imagegen-final/` 是最终交付版本，画面及画面内文字均由 ImageGen 根据本地素材和排版参考逐张生成；根目录下的两套同名系列是可继续编辑的 HTML/CSS 排版稿。

## 目录

- `imagegen-final/material-series/`：最终交付的 18 张素材主导 ImageGen 海报。
- `imagegen-final/esther-series/`：最终交付的 10 张 Esther Design System × ImageGen 海报。
- `imagegen-final/overview-*.jpg`：两套最终成图总览。
- `imagegen-final/PROMPTS.md`：生成方式、统一约束与逐张主题记录。
- `material-series/`：18 张可编辑排版参考稿，结合书封、立体书图、IP 角色、二维码与书中内容。
- `esther-series/`：10 张可编辑 Esther Design System 排版参考稿。
- `overview-material-series.jpg`：18 张素材系列总览。
- `overview-esther-series.jpg`：10 张 Esther 系列总览。
- `assets/`：本组海报使用的书籍、IP 与品牌素材副本。
- `source/material-posters.html`：18 张素材系列源稿。
- `source/esther-posters.html`：10 张 Esther 系列源稿。
- `source/render.mjs`：将两份 HTML 导出为 PNG 并生成总览图。

## 内容依据

海报文案取自仓库内《编程启蒙：思维与代码》的书封、内容简介、前言与目录。出版信息：黄家宝编著，北京航空航天大学出版社，ISBN 978-7-5124-4941-1。未添加成绩、学员数量或效果承诺。

## 最终成图校验

- 18 张素材系列与 10 张 Esther 系列均为独立 PNG，统一为 `1920×1080`。
- 两张含微信公众号二维码的成图均通过 macOS Vision QR 识别，解码目标与原始素材一致。
- 所有最终成图及图中文字均由 ImageGen 生成；HTML/CSS 仅承担前期内容结构与构图参考。

## 重新导出

使用 Codex bundled Node.js，并让 `NODE_PATH` 指向 bundled `node_modules` 后运行：

```bash
node source/render.mjs
```

脚本使用本机 Google Chrome、Playwright 与 Sharp，输出尺寸固定为 `1920×1080`。

## 设计系统授权

`imagegen-final/esther-series/`、`esther-series/` 与 `source/esther-posters.html` 使用 Esther Design System：

- 原作者：ESTHER不二（esthersjw）
- 项目：<https://github.com/esthersjw/esther-design-system>
- 许可：CC BY-NC-SA 4.0（署名、非商用、相同方式共享）

© 2026 ESTHER不二 (esthersjw) · CC BY-NC-SA 4.0
