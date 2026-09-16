# 《编程启蒙：思维与代码》横版海报 · 28 张

本次新建的独立海报集：18 张书籍主题设计，以及 10 张 Esther Design System 衍生设计。旧版目录保持原状。

**全部画面及图中文字由内置 imagegen 逐张生成。** 最终图片保留原生 `1672×941` PNG，画幅接近 16:9；没有后期叠字、裁切或拉伸。28 张图片约 59.5 MiB。

## 浏览与下载

直接打开 [gallery.html](gallery.html)，即可查看全部作品、放大切换、逐张下载。画廊可离线使用，没有外部脚本或字体依赖。

| 目录 / 文件 | 内容 |
| --- | --- |
| [material-series/](material-series/) | 18 张书籍主题海报，暖金、墨黑、琥珀与奶油色 |
| [esther-series/](esther-series/) | 10 张 Esther 风格海报，暖纸底、深棕与金黄、手绘批注 |
| [PROMPTS.md](PROMPTS.md) | 每张海报的生成提示词、参考素材及记录状态 |
| [ATTRIBUTION.md](ATTRIBUTION.md) | 设计系统署名、许可与原始素材权利说明 |
| [manifest.json](manifest.json) | 28 张图片的尺寸、字节数与 SHA-256 |
| [QA.md](QA.md) | 文字、数量、尺寸、文件与画廊检查结果 |
| [source/](source/) | 生成记录、只读 OCR、复核结果与画廊生成脚本 |

## 设计方向

第一组围绕书封的黑金主视觉展开，使用实体书陈列、纸张路径、台阶、二进制与知识模块等构图，让编程思维与 Python 入门主题有不同视觉表达。

第二组按照 Esther 设计系统允许的品牌色替换规则，用深棕 `#3B3025`、金黄 `#D7AF52` 和朱红 `#AB5142` 配合暖奶油纸底。保留衬线标题、手绘角色、笔记批注、流程线与极大字号对比，让黑金书封成为画面中的主要视觉。

## 文案依据

书名、作者及封面依据仓库内的真实书籍素材。内容以本书 PDF 的内容简介、前言和目录为依据：上篇思维、下篇 Python 入门，涵盖变量、数据类型、条件、循环与函数。网址来自 `data/message.txt`。

同一素材目录中的“网店页面资料”Word 文件实际描述另一本 IRIS 技术书，本次没有使用其中的作者、价格或内容。

海报文案为面向读者的创意提炼，不添加销量、收益、获奖或学习效果保证。书封是 imagegen 根据原图生成的再现，书封内极小文字与手写出版社标识可能有生成近似；正文主标题与独立书名经过人工检查。

## 许可

Esther 系列及画廊设计衍生自 **ESTHER不二（esthersjw）** 的 [Esther Design System](https://github.com/esthersjw/esther-design-system)，适用 **CC BY-NC-SA 4.0：署名、非商用、相同方式共享**。详见 [ATTRIBUTION.md](ATTRIBUTION.md)。

## 重建画廊及完整性校验

在此目录内运行：

```sh
python3 source/build-gallery.py
shasum -a 256 -c SHA256SUMS.txt
```

以上操作只读取图片并生成展示页和清单，不改变图片像素。`source/esther-template-reference.html` 是模板衍生参考，实际可用预览入口为 `gallery.html`。
