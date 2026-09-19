# 编程启蒙：思维与代码 · 28 张横版海报

2026-09-17 独立新批次，包含 **18 张素材创意海报 + 10 张 Esther 风格海报**。

画面及图中文字均由**内置 imagegen 逐张生成**。保留原生 PNG，实际尺寸见 [manifest.json](manifest.json)。没有使用 HTML 截图替代海报，也没有后期叠字、裁切或拉伸。

## 浏览与下载

直接打开 [gallery.html](gallery.html) 或 [index.html](index.html)。画廊支持按系列筛选、点击放大、方向键切换、Esc 关闭及逐张下载；无外部脚本或字体依赖，可离线使用。

| 内容 | 入口 |
| --- | --- |
| 18 张素材系列 | [material-series/](material-series/) |
| 10 张 Esther 系列 | [esther-series/](esther-series/) |
| 完整提示词 | [PROMPTS.md](PROMPTS.md) |
| 设计与素材依据 | [BRIEF.md](BRIEF.md) |
| 文件尺寸及 SHA-256 | [manifest.json](manifest.json) / [SHA256SUMS.txt](SHA256SUMS.txt) |
| 核验结果 | [QA.md](QA.md) |
| 逐张生成来源及复核记录 | [source/](source/) |
| 署名与许可 | [ATTRIBUTION.md](ATTRIBUTION.md) |

## 视觉方向

素材系列以黑金书封为中心，使用暖奶油、深棕、琥珀金，结合纸艺、书籍静物、概念图解和品牌角色。每张围绕一个阅读主题展开，避免重复同一构图。

Esther 系列保留暖纸底、衬线大字、手绘批注、极大字号对比与杂志式布局。按设计系统允许的品牌色替换方式，采用深棕 `#3B3025`、金黄 `#D7AF52` 和少量朱红 `#AB5142`，与黑金书封保持协调。

书名、作者和内容主题均核对仓库里的真实书封与书前 PDF。创意标题属于宣传文案，未标作书中引语。书封由 imagegen 参考原图再现；出版社微小手写标识和封面极小文字可能存在生成近似。

## 许可与署名

Esther 系列及画廊衍生自 **ESTHER不二（esthersjw）** 的 [Esther Design System](https://github.com/esthersjw/esther-design-system)，适用 **CC BY-NC-SA 4.0：署名、非商用、相同方式共享**。书籍与品牌素材权利仍归各自权利人，详见 [ATTRIBUTION.md](ATTRIBUTION.md)。

## 重建展示页及核验

从本目录运行：

```sh
python3 source/build-gallery.py
shasum -a 256 -c SHA256SUMS.txt
```

脚本只读取图片并生成画廊、提示词汇总和校验清单，不改变海报像素。`source/esther-template-reference.html` 为原始模板留档，实际浏览入口是本目录的 `gallery.html`。
