# 提示词与生成记录
## 生成方式

内置 `image_gen__imagegen`；每张独立生成，全部图中文字由工具直接生成。保留原生 PNG，未进行后期叠字、裁切或缩放。参考素材的来源见 ATTRIBUTION.md。
## 记录完整性

素材 01–09、17–18 和 Esther 01–10 保留了实际调用提示词。素材 10–16 已生成并保存，但其原始调用全文未在中断前写入文件；以下七张标注为“补录”的提示词是根据分派 brief 和成图整理的可复用设计说明，不能当作原始调用日志。其文件与原生生成结果的 SHA-256 匹配记录见 `source/material-10-16-provenance.json`。
## 01-golden-opening.png （原始调用提示词）

```text
Use case: ads-marketing. Create ONE finished landscape Chinese book campaign poster, exact 16:9 composition, request 1536x864 pixels, edge-to-edge image. Input image 1 is the real book cover/product reference, not the whole background. Reproduce this book faithfully including its black cover, golden vertical beam, title 编程启蒙：思维与代码 and author 黄家宝. Make book prominent and readable with correct rectangular hardcover geometry. Generate all visible Chinese and English typography directly in this image. Refined professional publication art direction, deliberate optical alignment, generous margins, minimal copy, clear readable large Chinese characters, faithful punctuation. Use warm gold, amber, near-black espresso and cream colors which complement the actual cover. No blue/purple, no neon, no invented price, endorsements, badges, QR, fake logos, or decorative pseudo-code. All text verbatim, no extra marketing copy. Book's tiny publisher details should be faithful to reference.
Art direction: A powerful restrained luxury book-publishing hero. Espresso-black wide backdrop, narrow architectural amber light slit behind the upright book on right, satin brass low platform and long soft shadow. Left 55 percent reserved for immense elegant gold Chinese serif heading across two purposeful lines. Very sparse fine gold dust only near the book matching original cover; premium book photograph, no cheesy sci-fi. Small top-left label '编程启蒙'. Main title '从思维出发' then '让代码发光'. Small bottom-left text '《编程启蒙：思维与代码》' and '黄家宝 编著'.
Text (verbatim): "编程启蒙"; "从思维出发"; "让代码发光"; "《编程启蒙：思维与代码》"; "黄家宝 编著"
```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg"]

记录文件：`source/material-01-09.json`

## 02-cream-editorial.png （原始调用提示词）

```text
Use case: ads-marketing. Create ONE finished landscape Chinese book campaign poster, exact 16:9 composition, request 1536x864 pixels, edge-to-edge image. Input image 1 is the real book cover/product reference, not the whole background. Reproduce this book faithfully including its black cover, golden vertical beam, title 编程启蒙：思维与代码 and author 黄家宝. Make book prominent and readable with correct rectangular hardcover geometry. Generate all visible Chinese and English typography directly in this image. Refined professional publication art direction, deliberate optical alignment, generous margins, minimal copy, clear readable large Chinese characters, faithful punctuation. Use warm gold, amber, near-black espresso and cream colors which complement the actual cover. No blue/purple, no neon, no invented price, endorsements, badges, QR, fake logos, or decorative pseudo-code. All text verbatim, no extra marketing copy. Book's tiny publisher details should be faithful to reference.
Art direction: Warm ivory editorial museum publication, quiet crisp daylight. A large real book positioned slightly angled on left casts an elegant long shadow. Oversized espresso Chinese serif headline on upper right, tiny gold uppercase italic 'think first' above it; a single gold rectangular annotation under subtitle, spacious editorial layout, no frames or rounded cards. Exact headline lines '学会编程' / '从理解开始'. Subtitle '在思维与代码之间，建立自己的逻辑'. Bottom '《编程启蒙：思维与代码》' and 'AI悦创 · 黄家宝'.
Text (verbatim): "think first"; "学会编程"; "从理解开始"; "在思维与代码之间，建立自己的逻辑"; "《编程启蒙：思维与代码》"; "AI悦创 · 黄家宝"
```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg"]

记录文件：`source/material-01-09.json`

## 03-ideas-to-code.png （原始调用提示词）

```text
Use case: ads-marketing. Create ONE finished landscape Chinese book campaign poster, exact 16:9 composition, request 1536x864 pixels, edge-to-edge image. Input image 1 is the real book cover/product reference, not the whole background. Reproduce this book faithfully including its black cover, golden vertical beam, title 编程启蒙：思维与代码 and author 黄家宝. Make book prominent and readable with correct rectangular hardcover geometry. Generate all visible Chinese and English typography directly in this image. Refined professional publication art direction, deliberate optical alignment, generous margins, minimal copy, clear readable large Chinese characters, faithful punctuation. Use warm gold, amber, near-black espresso and cream colors which complement the actual cover. No blue/purple, no neon, no invented price, endorsements, badges, QR, fake logos, or decorative pseudo-code. All text verbatim, no extra marketing copy. Book's tiny publisher details should be faithful to reference.
Art direction: Sculptural warm golden paper ribbon folds into an elegant meandering path across bottom of landscape, ending at a standing black-gold real book in center-right. Background warm stone cream, tactile paper and matte brass, realistic studio product illustration. Large clean warm-charcoal headline in upper-left, gold small restrained three-word footer separated with spacious dots. Headline '让想法' / '一步步成为程序'. Subtitle '理解问题 · 拆解思路 · 编写代码'. Small book title '《编程启蒙：思维与代码》'. Avoid other text or lists.
Text (verbatim): "让想法"; "一步步成为程序"; "理解问题 · 拆解思路 · 编写代码"; "《编程启蒙：思维与代码》"
```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg"]

记录文件：`source/material-01-09.json`

## 04-two-parts.png （原始调用提示词）

```text
Use case: ads-marketing. Create ONE finished landscape Chinese book campaign poster, exact 16:9 composition, request 1536x864 pixels, edge-to-edge image. Input image 1 is the real book cover/product reference, not the whole background. Reproduce this book faithfully including its black cover, golden vertical beam, title 编程启蒙：思维与代码 and author 黄家宝. Make book prominent and readable with correct rectangular hardcover geometry. Generate all visible Chinese and English typography directly in this image. Refined professional publication art direction, deliberate optical alignment, generous margins, minimal copy, clear readable large Chinese characters, faithful punctuation. Use warm gold, amber, near-black espresso and cream colors which complement the actual cover. No blue/purple, no neon, no invented price, endorsements, badges, QR, fake logos, or decorative pseudo-code. All text verbatim, no extra marketing copy. Book's tiny publisher details should be faithful to reference.
Art direction: Bold editorial asymmetrical diptych. Left 62% warm ivory, right38% dark coffee. Real black-gold book crosses the dividing edge low in the composition at an angle, clear cover. Large Chinese typography on left in espresso '一半思维' then below in muted gold '一半代码'. On right small ivory labels stacked vertically with ample space: '上篇：思维' and '下篇：Python入门'. Small top label '从理解到实践', small bottom-left book title '《编程启蒙：思维与代码》'. No card grid, no arrows. Strong confident publication poster.
Text (verbatim): "从理解到实践"; "一半思维"; "一半代码"; "上篇：思维"; "下篇：Python入门"; "《编程启蒙：思维与代码》"
```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg"]

记录文件：`source/material-01-09.json`

## 05-logic-steps.png （原始调用提示词）

```text
Use case: ads-marketing. Create ONE finished landscape Chinese book campaign poster, exact 16:9 composition, request 1536x864 pixels, edge-to-edge image. Input image 1 is the real book cover/product reference, not the whole background. Reproduce this book faithfully including its black cover, golden vertical beam, title 编程启蒙：思维与代码 and author 黄家宝. Make book prominent and readable with correct rectangular hardcover geometry. Generate all visible Chinese and English typography directly in this image. Refined professional publication art direction, deliberate optical alignment, generous margins, minimal copy, clear readable large Chinese characters, faithful punctuation. Use warm gold, amber, near-black espresso and cream colors which complement the actual cover. No blue/purple, no neon, no invented price, endorsements, badges, QR, fake logos, or decorative pseudo-code. All text verbatim, no extra marketing copy. Book's tiny publisher details should be faithful to reference.
Art direction: Espresso-black architectural still life: 4 broad matte warm-gold steps ascend from lower-left toward upper-right, culminating in the real black-gold book on highest step. Golden side lighting, no extraneous objects. Header at upper-left huge warm ivory Chinese serif, occupy clear dark negative space '把复杂问题' / '拆成清晰步骤'. Small gold subheading '编程思维，从拆解开始'. Small book title near lower-left '《编程启蒙：思维与代码》'. Distinct diagonal composition. Crisp physically believable book, all cover design faithful.
Text (verbatim): "把复杂问题"; "拆成清晰步骤"; "编程思维，从拆解开始"; "《编程启蒙：思维与代码》"
```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg"]

记录文件：`source/material-01-09.json`

## 06-everyday-algorithms.png （原始调用提示词）

```text
Use case: ads-marketing. Create ONE finished landscape Chinese book campaign poster, exact 16:9 composition, request 1536x864 pixels, edge-to-edge image. Input image 1 is the real book cover/product reference, not the whole background. Reproduce this book faithfully including its black cover, golden vertical beam, title 编程启蒙：思维与代码 and author 黄家宝. Make book prominent and readable with correct rectangular hardcover geometry. Generate all visible Chinese and English typography directly in this image. Refined professional publication art direction, deliberate optical alignment, generous margins, minimal copy, clear readable large Chinese characters, faithful punctuation. Use warm gold, amber, near-black espresso and cream colors which complement the actual cover. No blue/purple, no neon, no invented price, endorsements, badges, QR, fake logos, or decorative pseudo-code. All text verbatim, no extra marketing copy. Book's tiny publisher details should be faithful to reference.
Art direction: Top-down designed tabletop collage on warm parchment. Real black-gold book lies on right with complete readable cover. Left below typography, minimal paper-cut branching path in brass brown drawn from a simple forked route, use 3 tiny labels '观察' '比较' '选择' at relevant stops, calm organized composition with no complex charts. Top-left giant elegant Chinese title '生活里的难题' / '也有算法'. Small title below '《编程启蒙：思维与代码》'. Warm honey sunlight and subtle paper shadows. Refined intellectual educational tone.
Text (verbatim): "生活里的难题"; "也有算法"; "观察"; "比较"; "选择"; "《编程启蒙：思维与代码》"
```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg"]

记录文件：`source/material-01-09.json`

## 07-pixels-world.png （原始调用提示词）

```text
Use case: ads-marketing. Create ONE finished landscape Chinese book campaign poster, exact 16:9 composition, request 1536x864 pixels, edge-to-edge image. Input image 1 is the real book cover/product reference, not the whole background. Reproduce this book faithfully including its black cover, golden vertical beam, title 编程启蒙：思维与代码 and author 黄家宝. Make book prominent and readable with correct rectangular hardcover geometry. Generate all visible Chinese and English typography directly in this image. Refined professional publication art direction, deliberate optical alignment, generous margins, minimal copy, clear readable large Chinese characters, faithful punctuation. Use warm gold, amber, near-black espresso and cream colors which complement the actual cover. No blue/purple, no neon, no invented price, endorsements, badges, QR, fake logos, or decorative pseudo-code. All text verbatim, no extra marketing copy. Book's tiny publisher details should be faithful to reference.
Art direction: Elegant editorial abstract pixel study in gold and cream. A large orderly wall of small amber and dark-brown square pixels on left gradually resolves toward center into tiny detailed golden image texture, material texture resembles foil mosaic. On right a large faithful real book rests on a warm ivory plinth. Huge espresso headline spans upper-left '从一个像素' / '看懂数字世界'. Small subtitle bottom-left '把日常现象，变成理解计算机的入口'. Lower small title '《编程启蒙：思维与代码》'. No random letters or technical labels, image remains spacious.
Text (verbatim): "从一个像素"; "看懂数字世界"; "把日常现象，变成理解计算机的入口"; "《编程启蒙：思维与代码》"
```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg"]

记录文件：`source/material-01-09.json`

## 08-binary-language.png （原始调用提示词）

```text
Use case: ads-marketing. Create ONE finished landscape Chinese book campaign poster, exact 16:9 composition, request 1536x864 pixels, edge-to-edge image. Input image 1 is the real book cover/product reference, not the whole background. Reproduce this book faithfully including its black cover, golden vertical beam, title 编程启蒙：思维与代码 and author 黄家宝. Make book prominent and readable with correct rectangular hardcover geometry. Generate all visible Chinese and English typography directly in this image. Refined professional publication art direction, deliberate optical alignment, generous margins, minimal copy, clear readable large Chinese characters, faithful punctuation. Use warm gold, amber, near-black espresso and cream colors which complement the actual cover. No blue/purple, no neon, no invented price, endorsements, badges, QR, fake logos, or decorative pseudo-code. All text verbatim, no extra marketing copy. Book's tiny publisher details should be faithful to reference.
Art direction: Restrained black and old-gold typographic campaign. Enormous matte embossed digits '0' and '1' partially bleed off the left background, low contrast espresso on charcoal with thin warm gold rim, not glowing. The actual black-gold book appears substantial center-right, front cover clear and warmly illuminated. Large cream Chinese headline in foreground left '两个数字' / '打开新的世界'. Small gold subtitle '从二进制，理解计算机的语言'. Small lower title '《编程启蒙：思维与代码》'. Luxurious bookshop poster, no cyberpunk or invented syntax.
Text (verbatim): "0"; "1"; "两个数字"; "打开新的世界"; "从二进制，理解计算机的语言"; "《编程启蒙：思维与代码》"
```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg"]

记录文件：`source/material-01-09.json`

## 09-python-first-page.png （原始调用提示词）

```text
Use case: ads-marketing. Create ONE finished landscape Chinese book campaign poster, exact 16:9 composition, request 1536x864 pixels, edge-to-edge image. Input image 1 is the real book cover/product reference, not the whole background. Reproduce this book faithfully including its black cover, golden vertical beam, title 编程启蒙：思维与代码 and author 黄家宝. Make book prominent and readable with correct rectangular hardcover geometry. Generate all visible Chinese and English typography directly in this image. Refined professional publication art direction, deliberate optical alignment, generous margins, minimal copy, clear readable large Chinese characters, faithful punctuation. Use warm gold, amber, near-black espresso and cream colors which complement the actual cover. No blue/purple, no neon, no invented price, endorsements, badges, QR, fake logos, or decorative pseudo-code. All text verbatim, no extra marketing copy. Book's tiny publisher details should be faithful to reference.
Art direction: Warm naturally lit writing desk editorial product photograph. Faithful closed black-gold book on left-front beside an open blank cream notebook and simple brass pencil; no person. Overhead-to-oblique view, amber afternoon diagonal window shadow. Keep broad uncluttered warm ivory desk area on right for large Chinese serif headline '你的 Python' / '从这一页开始'. Small subtitle '从变量到函数，循序渐进地理解代码'. Footer '《编程启蒙：思维与代码》' and 'bornforthis.cn'. Sophisticated warm real book photograph, no coffee, plants, extra distracting props or text.
Text (verbatim): "你的 Python"; "从这一页开始"; "从变量到函数，循序渐进地理解代码"; "《编程启蒙：思维与代码》"; "bornforthis.cn"
```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg"]

记录文件：`source/material-01-09.json`

## material-series/10-variables.png （补录设计说明）

```text
Use case: ads-marketing. 创作一张接近16:9的中文横版图书海报。以真实《编程启蒙：思维与代码》白底效果图为书籍参考，保留黑金书封、黄家宝作者名和封面身份。构图：暖奶油桌面，琥珀色透明数据容器，标注 age、name、score，书在右侧。主标题：给数据一个名字。副文案：从变量开始，理解代码里的信息。独立书名：《编程启蒙：思维与代码》。图片内全部文字直接由imagegen生成；配色使用暖金、墨黑、琥珀、奶油；文字清晰、留白充足。不得添加虚构销售数据、效果承诺、价格、二维码或无关内容。
```

记录文件：`source/material-10-16-briefs.json`

## material-series/11-data-types.png （补录设计说明）

```text
Use case: ads-marketing. 创作一张接近16:9的中文横版图书海报。以真实《编程启蒙：思维与代码》白底效果图为书籍参考，保留黑金书封、黄家宝作者名和封面身份。构图：奶油金色陈列架，数字、字符串、列表、元组、字典和集合的物件隐喻，黑金书封主视觉。主标题：数据，也有不同模样。副文案：认识 Python 常用数据类型。独立书名：《编程启蒙：思维与代码》。图片内全部文字直接由imagegen生成；配色使用暖金、墨黑、琥珀、奶油；文字清晰、留白充足。不得添加虚构销售数据、效果承诺、价格、二维码或无关内容。
```

记录文件：`source/material-10-16-briefs.json`

## material-series/12-if-choice.png （补录设计说明）

```text
Use case: ads-marketing. 创作一张接近16:9的中文横版图书海报。以真实《编程启蒙：思维与代码》白底效果图为书籍参考，保留黑金书封、黄家宝作者名和封面身份。构图：黑金书籍与暖金 if/else 分岔路径，非对称大字。主标题：遇到选择，让逻辑带路。副文案：理解 if，写出有判断的程序。独立书名：《编程启蒙：思维与代码》。图片内全部文字直接由imagegen生成；配色使用暖金、墨黑、琥珀、奶油；文字清晰、留白充足。不得添加虚构销售数据、效果承诺、价格、二维码或无关内容。
```

记录文件：`source/material-10-16-briefs.json`

## material-series/13-loops.png （补录设计说明）

```text
Use case: ads-marketing. 创作一张接近16:9的中文横版图书海报。以真实《编程启蒙：思维与代码》白底效果图为书籍参考，保留黑金书封、黄家宝作者名和封面身份。构图：金色循环轨道，for、while 为标签，黑金书籍位于右侧。主标题：重复的事，交给循环。副文案：理解重复，写得更从容。独立书名：《编程启蒙：思维与代码》。图片内全部文字直接由imagegen生成；配色使用暖金、墨黑、琥珀、奶油；文字清晰、留白充足。不得添加虚构销售数据、效果承诺、价格、二维码或无关内容。
```

记录文件：`source/material-10-16-briefs.json`

## material-series/14-functions.png （补录设计说明）

```text
Use case: ads-marketing. 创作一张接近16:9的中文横版图书海报。以真实《编程启蒙：思维与代码》白底效果图为书籍参考，保留黑金书封、黄家宝作者名和封面身份。构图：金色模块与 function 结构隐喻，暖纸色背景，书籍立体陈列。主标题：把常用步骤，写成函数。副文案：让代码有组织，让思路更清楚。独立书名：《编程启蒙：思维与代码》。图片内全部文字直接由imagegen生成；配色使用暖金、墨黑、琥珀、奶油；文字清晰、留白充足。不得添加虚构销售数据、效果承诺、价格、二维码或无关内容。
```

记录文件：`source/material-10-16-briefs.json`

## material-series/15-think-before-code.png （补录设计说明）

```text
Use case: ads-marketing. 创作一张接近16:9的中文横版图书海报。以真实《编程启蒙：思维与代码》白底效果图为书籍参考，保留黑金书封、黄家宝作者名和封面身份。构图：横向思维与代码两部分构图，书籍作为连接与核心。主标题：先想清楚，再写代码。副文案：上篇·思维；下篇·Python 入门。独立书名：《编程启蒙：思维与代码》。图片内全部文字直接由imagegen生成；配色使用暖金、墨黑、琥珀、奶油；文字清晰、留白充足。不得添加虚构销售数据、效果承诺、价格、二维码或无关内容。
```

记录文件：`source/material-10-16-briefs.json`

## material-series/16-guided-learning.png （补录设计说明）

```text
Use case: ads-marketing. 创作一张接近16:9的中文横版图书海报。以真实《编程启蒙：思维与代码》白底效果图为书籍参考，保留黑金书封、黄家宝作者名和封面身份。构图：观察、思考、动手的阶梯路径，奶油金色空间与黑金书籍。主标题：让每一步，都想明白。副文案：引导式学习，从思维走向代码。独立书名：《编程启蒙：思维与代码》。图片内全部文字直接由imagegen生成；配色使用暖金、墨黑、琥珀、奶油；文字清晰、留白充足。不得添加虚构销售数据、效果承诺、价格、二维码或无关内容。
```

记录文件：`source/material-10-16-briefs.json`

## 17-another-way.png （原始调用提示词）

```text
Use case: ads-marketing. Create one polished landscape Chinese book poster, request 16:9 1672x941 format. Input image 1 is an exact reference for the real book, faithfully reproduce black and gold cover, title 编程启蒙：思维与代码, author 黄家宝 and recognizable original cover artwork. Refined publishing art direction. A warm cream editorial scene with several wide folded-paper roads in muted gold and ivory leading from a small warm brown circle toward a large standing book on far left, symbolize new possibilities in solving problems. Realistic paper shadows, premium quiet tactile materials. Main immense Chinese serif headline on right in espresso, separate into '多一种思路' and '多一种可能'. Subtitle in smaller readable clean Chinese type '为解决问题，储备新的方法'. Footer exact book title '《编程启蒙：思维与代码》' and small 'AI悦创 · 黄家宝'. Use harmonious black-gold book, cream, amber, muted brown, no cyan/purple/neon. All Chinese lettering must be image-generated accurately, no additional copy, no claims or price or QR. Ensure generous margin and typography optical balance. Book remains prominent but does not overlap text.
```

记录文件：`source/material-17-18.json`

## 18-open-the-book.png （原始调用提示词）

```text
Use case: ads-marketing. Create one final 16:9 landscape Chinese book campaign poster 1672x941 request. Reference image is the authentic black-gold book 编程启蒙：思维与代码 by 黄家宝, preserve exact recognizable cover and readable title without redesign. Warm golden-hour desk scene, a single large faithful book upright near left center on an understated brass rectangular pedestal, cream wall, real gentle paper texture, broad calm negative space right. Elegant mature premium publication style with amber and warm black, no generic blue tech graphics. Immense dark espresso Chinese serif title at right, on two lines '翻开书' and '让想法开始运行'. Small legible warm-brown subtitle '从思维到代码，从理解到实践'. Underneath the title a restrained gold printed line and '《编程启蒙：思维与代码》'. Bottom-right small exact URL 'bornforthis.cn'. All pictured lettering must be generated directly, accurate Simplified Chinese and Latin. No QR, no sales figures, no price, no made-up endorsement, no extra logo, no fake publisher design. High clarity, generous margins, clean elegant framing and realistic book geometry.
```

记录文件：`source/material-17-18.json`

## 01-esther-thinking.png （原始调用提示词）

```text
Use case: ads-marketing
Asset type: landscape book campaign poster, a finished raster PNG including all Chinese typography, horizontal 16:9, ideally 1536×864.
Input images: Image 1 is the actual book product reference; accurately preserve its recognizable black and gold original cover, large exact Chinese title 编程启蒙：思维与代码 and author 黄家宝. Image 2 is the author brand's crayon illustration reference; optional small friendly portrait detail, keep face/hair/headphones identity recognizable, interpret its blue crayon strokes in dark brown to fit campaign.
Style: Esther design-system editorial art direction, adapted from template-cards: premium warm paper, Noto Serif SC-style heavy serif Chinese headlines and clean Noto Sans SC-style sans serif supporting text; huge typographic scale contrast, hand-drawn wax-pencil annotations, asymmetric magazine composition, carefully judged generous negative space. It must feel designed, warm, thoughtful, literary and inviting.
Color palette: warm ivory paper #FEFCF6 background, deep chocolate brown #3B3025 dominant graphic color, ochre gold #D7AF52 emphasis, tiny muted vermilion #AB5142 accent. Approximate 60/30/10 colored-ink balance. The source book's real black-gold cover remains unchanged. Subtle paper fibers and pencil grain.
Constraints: all requested text must be rendered by image generation with clear correct simplified Chinese characters. Main book title also as a legible separate text line, not only on the book cover. Footer credit in clean tiny but readable type, exact: “设计系统：ESTHER不二 · CC BY-NC-SA 4.0”. No other invented copy, claims, sales numbers, badges, publishers or endorsements. No QR code. No website/app frame, no grids of cards, no cyan/neon, no blue-purple gradient, no glass effects, no large black background, no synthetic light bloom outside the actual book cover. No added watermarks. Keep every text inside generous safe margins.

Composition: Bold headline fills left half in three naturally grouped lines with extreme size contrast; right half features a tall realistic actual book from Image 1, slightly angled, sitting on a small irregular ochre crayon pedestal shape. A hand-drawn muted red underline runs below the key Chinese word, one elegant brown pencil swoosh connects headline to book. A tiny author portrait from Image 2 and name at lower left. Small editorial English word in italic serif at upper left. The cover is the visual hero and must stay faithful.
Text (verbatim), only these besides faithful original cover:
“THINK & CODE”
“把思考，
写成代码”
“《编程启蒙：思维与代码》”
“AI悦创 · 黄家宝”
“设计系统：ESTHER不二 · CC BY-NC-SA 4.0”

```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg", "/Users/bornforthis/Github/WebSite/brand-studio/data/我的 IP 角色相关/Brclio-IP.png"]

记录文件：`source/esther-01-05.json`

## 02-esther-two-parts.png （原始调用提示词）

```text
Use case: ads-marketing
Asset type: landscape book campaign poster, a finished raster PNG including all Chinese typography, horizontal 16:9, ideally 1536×864.
Input images: Image 1 is the actual book product reference; accurately preserve its recognizable black and gold original cover, large exact Chinese title 编程启蒙：思维与代码 and author 黄家宝. Image 2 is the author brand's crayon illustration reference; optional small friendly portrait detail, keep face/hair/headphones identity recognizable, interpret its blue crayon strokes in dark brown to fit campaign.
Style: Esther design-system editorial art direction, adapted from template-cards: premium warm paper, Noto Serif SC-style heavy serif Chinese headlines and clean Noto Sans SC-style sans serif supporting text; huge typographic scale contrast, hand-drawn wax-pencil annotations, asymmetric magazine composition, carefully judged generous negative space. It must feel designed, warm, thoughtful, literary and inviting.
Color palette: warm ivory paper #FEFCF6 background, deep chocolate brown #3B3025 dominant graphic color, ochre gold #D7AF52 emphasis, tiny muted vermilion #AB5142 accent. Approximate 60/30/10 colored-ink balance. The source book's real black-gold cover remains unchanged. Subtle paper fibers and pencil grain.
Constraints: all requested text must be rendered by image generation with clear correct simplified Chinese characters. Main book title also as a legible separate text line, not only on the book cover. Footer credit in clean tiny but readable type, exact: “设计系统：ESTHER不二 · CC BY-NC-SA 4.0”. No other invented copy, claims, sales numbers, badges, publishers or endorsements. No QR code. No website/app frame, no grids of cards, no cyan/neon, no blue-purple gradient, no glass effects, no large black background, no synthetic light bloom outside the actual book cover. No added watermarks. Keep every text inside generous safe margins.

Composition: A gigantic elegant pale ochre serif numeral “2” spans the left third, integrated into the paper, not a badge. On the middle column, two large editorial headings aligned to separate thin hand-drawn horizontal dividers describe the book's two parts. A medium actual black-gold book stands at far right with subdued natural contact shadow. The composition should read as an artfully typeset book prospectus with sparse pencil brackets and exactly one muted red crayon dot at the tip of a short arrow; no repeated cards. No person required.
Text (verbatim), only these besides faithful original cover:
“2”
“从思维，到代码”
“上篇 · 思维”
“下篇 · 代码”
“《编程启蒙：思维与代码》”
“AI悦创 · 黄家宝”
“设计系统：ESTHER不二 · CC BY-NC-SA 4.0”

```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg", "/Users/bornforthis/Github/WebSite/brand-studio/data/我的 IP 角色相关/Brclio-IP.png"]

记录文件：`source/esther-01-05.json`

## 03-esther-question-process.png （原始调用提示词）

```text
Use case: ads-marketing
Asset type: landscape book campaign poster, a finished raster PNG including all Chinese typography, horizontal 16:9, ideally 1536×864.
Input images: Image 1 is the actual book product reference; accurately preserve its recognizable black and gold original cover, large exact Chinese title 编程启蒙：思维与代码 and author 黄家宝. Image 2 is the author brand's crayon illustration reference; optional small friendly portrait detail, keep face/hair/headphones identity recognizable, interpret its blue crayon strokes in dark brown to fit campaign.
Style: Esther design-system editorial art direction, adapted from template-cards: premium warm paper, Noto Serif SC-style heavy serif Chinese headlines and clean Noto Sans SC-style sans serif supporting text; huge typographic scale contrast, hand-drawn wax-pencil annotations, asymmetric magazine composition, carefully judged generous negative space. It must feel designed, warm, thoughtful, literary and inviting.
Color palette: warm ivory paper #FEFCF6 background, deep chocolate brown #3B3025 dominant graphic color, ochre gold #D7AF52 emphasis, tiny muted vermilion #AB5142 accent. Approximate 60/30/10 colored-ink balance. The source book's real black-gold cover remains unchanged. Subtle paper fibers and pencil grain.
Constraints: all requested text must be rendered by image generation with clear correct simplified Chinese characters. Main book title also as a legible separate text line, not only on the book cover. Footer credit in clean tiny but readable type, exact: “设计系统：ESTHER不二 · CC BY-NC-SA 4.0”. No other invented copy, claims, sales numbers, badges, publishers or endorsements. No QR code. No website/app frame, no grids of cards, no cyan/neon, no blue-purple gradient, no glass effects, no large black background, no synthetic light bloom outside the actual book cover. No added watermarks. Keep every text inside generous safe margins.

Composition: A long confident ochre hand-drawn arrow runs across the landscape from lower left to upper right, connecting three large serif Chinese action words “提问”, “拆解”, “实践” as a flowing learning path. Each word has a small simple graphite sketch (a question mark, modular puzzle pieces, a pencil writing) below it. Headline is compact at top left. The actual black-gold book from Image 1 is positioned at the endpoint of the arrow, far right, tilted slightly outward. Keep the three action words and book visually separated and balanced without card containers. A tiny portrait based on Image 2 in lower left. Irregular muted-red hand-drawn circle around the middle word for focus. Large empty paper gaps allow this arrow-driven composition to breathe.
Text (verbatim), only these besides faithful original cover:
“让想法，一步步落地”
“提问”
“拆解”
“实践”
“《编程启蒙：思维与代码》”
“AI悦创”
“设计系统：ESTHER不二 · CC BY-NC-SA 4.0”

```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg", "/Users/bornforthis/Github/WebSite/brand-studio/data/我的 IP 角色相关/Brclio-IP.png"]

记录文件：`source/esther-01-05.json`

## 04-esther-understand-first.png （原始调用提示词）

```text
Use case: ads-marketing
Asset type: landscape book campaign poster, a finished raster PNG including all Chinese typography, horizontal 16:9, ideally 1536×864.
Input images: Image 1 is the actual book product reference; accurately preserve its recognizable black and gold original cover, large exact Chinese title 编程启蒙：思维与代码 and author 黄家宝. Image 2 is the author brand's crayon illustration reference; optional small friendly portrait detail, keep face/hair/headphones identity recognizable, interpret its blue crayon strokes in dark brown to fit campaign.
Style: Esther design-system editorial art direction, adapted from template-cards: premium warm paper, Noto Serif SC-style heavy serif Chinese headlines and clean Noto Sans SC-style sans serif supporting text; huge typographic scale contrast, hand-drawn wax-pencil annotations, asymmetric magazine composition, carefully judged generous negative space. It must feel designed, warm, thoughtful, literary and inviting.
Color palette: warm ivory paper #FEFCF6 background, deep chocolate brown #3B3025 dominant graphic color, ochre gold #D7AF52 emphasis, tiny muted vermilion #AB5142 accent. Approximate 60/30/10 colored-ink balance. The source book's real black-gold cover remains unchanged. Subtle paper fibers and pencil grain.
Constraints: all requested text must be rendered by image generation with clear correct simplified Chinese characters. Main book title also as a legible separate text line, not only on the book cover. Footer credit in clean tiny but readable type, exact: “设计系统：ESTHER不二 · CC BY-NC-SA 4.0”. No other invented copy, claims, sales numbers, badges, publishers or endorsements. No QR code. No website/app frame, no grids of cards, no cyan/neon, no blue-purple gradient, no glass effects, no large black background, no synthetic light bloom outside the actual book cover. No added watermarks. Keep every text inside generous safe margins.

Composition: An elegant desk-note editorial collage seen straight-on, on a cream lightly squared notebook-paper background with no dark border. A very large two-line serif heading at the top right “先理解， / 再动手” fills more than half the width. At left, the actual black-gold book cover is rendered as a large physical book leaning against the paper with authentic natural shadow; one small ochre torn paper tab above its edge. Delicate hand-drawn dark brown pencil annotation marks, a vermilion underline under “理解”, tiny crayon stars, one callout connected to an empty rough sketched speech-cloud shape (keep it empty). A small paper swatch along bottom right carries the full book title. Include a very small portrait from Image 2 near the author signature. Premium tactile stationery, asymmetry, not a UI or generic cards.
Text (verbatim), only these besides faithful original cover:
“先理解，
再动手”
“思维与代码，从这里开始”
“《编程启蒙：思维与代码》”
“AI悦创 · 黄家宝”
“设计系统：ESTHER不二 · CC BY-NC-SA 4.0”

```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg", "/Users/bornforthis/Github/WebSite/brand-studio/data/我的 IP 角色相关/Brclio-IP.png"]

记录文件：`source/esther-01-05.json`

## 05-esther-new-perspective.png （原始调用提示词）

```text
Use case: ads-marketing
Asset type: landscape book campaign poster, a finished raster PNG including all Chinese typography, horizontal 16:9, ideally 1536×864.
Input images: Image 1 is the actual book product reference; accurately preserve its recognizable black and gold original cover, large exact Chinese title 编程启蒙：思维与代码 and author 黄家宝. Image 2 is the author brand's crayon illustration reference; optional small friendly portrait detail, keep face/hair/headphones identity recognizable, interpret its blue crayon strokes in dark brown to fit campaign.
Style: Esther design-system editorial art direction, adapted from template-cards: premium warm paper, Noto Serif SC-style heavy serif Chinese headlines and clean Noto Sans SC-style sans serif supporting text; huge typographic scale contrast, hand-drawn wax-pencil annotations, asymmetric magazine composition, carefully judged generous negative space. It must feel designed, warm, thoughtful, literary and inviting.
Color palette: warm ivory paper #FEFCF6 background, deep chocolate brown #3B3025 dominant graphic color, ochre gold #D7AF52 emphasis, tiny muted vermilion #AB5142 accent. Approximate 60/30/10 colored-ink balance. The source book's real black-gold cover remains unchanged. Subtle paper fibers and pencil grain.
Constraints: all requested text must be rendered by image generation with clear correct simplified Chinese characters. Main book title also as a legible separate text line, not only on the book cover. Footer credit in clean tiny but readable type, exact: “设计系统：ESTHER不二 · CC BY-NC-SA 4.0”. No other invented copy, claims, sales numbers, badges, publishers or endorsements. No QR code. No website/app frame, no grids of cards, no cyan/neon, no blue-purple gradient, no glass effects, no large black background, no synthetic light bloom outside the actual book cover. No added watermarks. Keep every text inside generous safe margins.

Composition: Oversized elegant golden opening quotation marks in the upper left bleed partly beyond the top crop, then a huge generous left-aligned serif quote fills left and center, occupying 60% of the canvas. The key phrase “多一种思路” is lightly highlighted by a rough gold wax-pencil horizontal swash behind it with a short muted-red pencil underline. Right third shows the actual black and gold book at a subtle angle; warm ivory background, naturally cast contact shadow, one gentle hand drawn pencil arc echoing the quotation marks. Very small author portrait based on Image 2 at lower center with signature. Footer is a fine bottom-aligned line with much whitespace above; avoid a border frame.
Text (verbatim), only these besides faithful original cover:
“为解决问题，
多一种思路”
“《编程启蒙：思维与代码》”
“AI悦创 · 黄家宝”
“设计系统：ESTHER不二 · CC BY-NC-SA 4.0”

```

参考图：["/Users/bornforthis/Github/WebSite/brand-studio/data/《编程启蒙：思维与代码》/白底-效果图.jpg", "/Users/bornforthis/Github/WebSite/brand-studio/data/我的 IP 角色相关/Brclio-IP.png"]

记录文件：`source/esther-01-05.json`

## esther-series/06-esther-roadmap.png （原始调用提示词）

```text
Use case: ads-marketing.
Asset type: finished landscape book poster, exactly 16:9, 1536×864 px if supported. Generate the entire poster including ALL Chinese typography in the image, sharp enough to read.
Input image 1: source photograph of the actual book, supporting compositing input. Retain the book's original black-and-gold cover design, golden beam, Chinese title “编程启蒙：思维与代码”, author 黄家宝, and publisher marking faithfully; the existing glow is only on the printed book cover.
Input image 2: source of the Brclio personal-brand character, supporting identity input. Preserve the young male character's short spiky hair, headphones, friendly face and crayon line quality, but reinterpret blue strokes as dark brown and bright yellow as muted gold to harmonize with the book. Do not copy its square yellow background.
Art direction adapted from the ESTHER不二 design system: warm cream paper #FEFCF6, dark brown #3B3025 dominant, muted gold #D7AF52 highlight, tiny brick-red #AB5142 accent. Of chromatic graphic elements use brown/gold/red in roughly 60/30/10 proportions. Chinese main titles are very bold literary serif in the spirit of Noto Serif SC; smaller text clean sans serif. Extreme scale contrast; intentional asymmetrical magazine composition; handcrafted pencil and crayon touches, natural grain, precise spacing. Warm, clever, adult editorial design.
Constraints: no QR code, no invented sales claims, no blue/purple/neon or multicolor gradients, no glass panels, no generic card grids, no unnecessary glow, no random filler text. Keep all essential type at least 60 px inside image edges. Render Chinese characters exactly without misspellings.
Composition/framing: distinctive learning-map layout on cream paper. Very large headline in two balanced lines in upper left, an understated oversized pale gold “06” upper right. A broad winding hand-drawn gold path moves horizontally along the lower center with exactly five numbered stops, each a bold Chinese label with a restrained pencil icon; do not make identical cards. Use curved brown arrows clearly connecting 01 through 05. Place the original black-and-gold book upright at the far right, taking about 27% width, with enough room for fifth stop. A small crayon version of the source character is walking beside the start on the left. Avoid clutter and tangles.
Text (verbatim):
Main title: “把知识，连成路线”
Small top label: “PYTHON · LEARNING MAP”
Path stop labels in order: “01 变量” / “02 数据类型” / “03 条件” / “04 循环” / “05 函数”
Book-name line: “《编程启蒙：思维与代码》”
Bottom author line: “AI悦创 · 黄家宝”
Bottom-right credit, readable small print: “设计系统：ESTHER不二 · CC BY-NC-SA 4.0”
The path is an editorial introduction route, do not add unrequested chapter numbers or make claims about official table of contents.
```

参考图：[{"path": "data/《编程启蒙：思维与代码》/白底-效果图.jpg", "role": "book cover and product compositing reference"}, {"path": "data/我的 IP 角色相关/Brclio-IP.png", "role": "character identity and crayon style reference; recolored brown and muted gold"}]

记录文件：`source/esther-06-10.json`

## esther-series/07-esther-everyday.png （原始调用提示词）

```text
Use case: ads-marketing.
Asset type: finished landscape book poster, exactly 16:9, 1536×864 px if supported. Generate the entire poster including ALL Chinese typography in the image, sharp enough to read.
Input image 1: source photograph of the actual book, supporting compositing input. Retain the book's original black-and-gold cover design, golden beam, Chinese title “编程启蒙：思维与代码”, author 黄家宝, and publisher marking faithfully; the existing glow is only on the printed book cover.
Input image 2: source of the Brclio personal-brand character, supporting identity input. Preserve the young male character's short spiky hair, headphones, friendly face and crayon line quality, but reinterpret blue strokes as dark brown and bright yellow as muted gold to harmonize with the book. Do not copy its square yellow background.
Art direction adapted from the ESTHER不二 design system: warm cream paper #FEFCF6, dark brown #3B3025 dominant, muted gold #D7AF52 highlight, tiny brick-red #AB5142 accent. Of chromatic graphic elements use brown/gold/red in roughly 60/30/10 proportions. Chinese main titles are very bold literary serif in the spirit of Noto Serif SC; smaller text clean sans serif. Extreme scale contrast; intentional asymmetrical magazine composition; handcrafted pencil and crayon touches, natural grain, precise spacing. Warm, clever, adult editorial design.
Constraints: no QR code, no invented sales claims, no blue/purple/neon or multicolor gradients, no glass panels, no generic card grids, no unnecessary glow, no random filler text. Keep all essential type at least 60 px inside image edges. Render Chinese characters exactly without misspellings.
Composition/framing: a giant warm-paper open book dominates the central-right two-thirds of the poster, its pages depicted as generous simple blank paper planes. The actual supplied closed black-and-gold book stands smaller, layered over the right page, showing its cover faithfully. A large hand-drawn source character peeks playfully from the extreme lower-left edge of the giant page, only head, headphones and hands visible, keeping friendly identity. Huge dark-brown Chinese headline sits across the left and center, with the word “算法” highlighted by one rough gold crayon underline. The giant page has a sparse pencil grocery checklist icon and a tiny directional arrow as everyday sequence metaphors, no illegible page text. Upper-left tiny italic “Everyday thinking”; airy asymmetric literary-editorial feel, very fine paper grain. A restrained tiny brick-red bookmark makes the only bright accent. Do not draw multiple cards.
Text (verbatim):
Main title line 1: “从生活中，”
Main title line 2: “发现算法”
Subline: “观察 · 拆解 · 表达”
Book-name line: “《编程启蒙：思维与代码》”
Bottom author line: “AI悦创 · 黄家宝”
Bottom credit, readable small print: “设计系统：ESTHER不二 · CC BY-NC-SA 4.0”
Decorative page number: “07”
```

参考图：[{"path": "data/《编程启蒙：思维与代码》/白底-效果图.jpg", "role": "book cover and product compositing reference"}, {"path": "data/我的 IP 角色相关/Brclio-IP.png", "role": "character identity and crayon style reference; recolored brown and muted gold"}]

记录文件：`source/esther-06-10.json`

## esther-series/08-esther-python.png （原始调用提示词）

```text
Use case: ads-marketing.
Asset type: finished landscape book poster, exactly 16:9, 1536×864 px if supported. Generate the entire poster including ALL Chinese typography in the image, sharp enough to read.
Input image 1: source photograph of the actual book, supporting compositing input. Retain the book's original black-and-gold cover design, golden beam, Chinese title “编程启蒙：思维与代码”, author 黄家宝, and publisher marking faithfully; the existing glow is only on the printed book cover.
Input image 2: source of the Brclio personal-brand character, supporting identity input. Preserve the young male character's short spiky hair, headphones, friendly face and crayon line quality, but reinterpret blue strokes as dark brown and bright yellow as muted gold to harmonize with the book. Do not copy its square yellow background.
Art direction adapted from the ESTHER不二 design system: warm cream paper #FEFCF6, dark brown #3B3025 dominant, muted gold #D7AF52 highlight, tiny brick-red #AB5142 accent. Of chromatic graphic elements use brown/gold/red in roughly 60/30/10 proportions. Chinese main titles are very bold literary serif in the spirit of Noto Serif SC; smaller text clean sans serif. Extreme scale contrast; intentional asymmetrical magazine composition; handcrafted pencil and crayon touches, natural grain, precise spacing. Warm, clever, adult editorial design.
Constraints: no QR code, no invented sales claims, no blue/purple/neon or multicolor gradients, no glass panels, no generic card grids, no unnecessary glow, no random filler text. Keep all essential type at least 60 px inside image edges. Render Chinese characters exactly without misspellings.
Composition/framing: an inventive typographic staircase layout. The source book stands tall at the left (about one-third poster width), emphasizing the authentic spine alongside the readable front cover. Four broad warm-cream paper steps climb from lower center toward upper right, drawn with pencil-edge perspective and restrained gold surfaces. The main headline follows the ascending rhythm in three large typographic placements “一步一步，” then “读懂” then “Python”. Only three headline placements, all readable and composed as one statement; do not fragment Chinese words. The small source character, rendered in brown-gold crayon, sits on the upper-right stair with an open notebook, looking thoughtful and friendly. Tiny pencil arrows connect the steps. A pale oversized “08” partially bleeds behind the lower-left book as secondary design. Large ivory negative spaces and asymmetric print-design quality. No big floor cast shadows.
Text (verbatim):
Main headline: “一步一步，读懂Python”
Small caption above staircase: “THINK · WRITE · UNDERSTAND”
Three step labels in small clean sans: “理解概念” / “动手练习” / “反复思考”
Book-name line: “《编程启蒙：思维与代码》”
Bottom author line: “AI悦创 · 黄家宝”
Bottom credit, readable small print: “设计系统：ESTHER不二 · CC BY-NC-SA 4.0”
No extra text beyond these and the existing text of the source book.
```

参考图：[{"path": "data/《编程启蒙：思维与代码》/白底-效果图.jpg", "role": "book cover and product compositing reference"}, {"path": "data/我的 IP 角色相关/Brclio-IP.png", "role": "character identity and crayon style reference; recolored brown and muted gold"}]

记录文件：`source/esther-06-10.json`

## esther-series/09-esther-curiosity.png （原始调用提示词）

```text
Use case: ads-marketing.
Asset type: finished landscape book poster, exactly 16:9, 1536×864 px if supported. Generate the entire poster including ALL Chinese typography in the image, sharp enough to read.
Input image 1: source photograph of the actual book, supporting compositing input. Retain the book's original black-and-gold cover design, golden beam, Chinese title “编程启蒙：思维与代码”, author 黄家宝, and publisher marking faithfully; the existing glow is only on the printed book cover.
Input image 2: source of the Brclio personal-brand character, supporting identity input. Preserve the young male character's short spiky hair, headphones, friendly face and crayon line quality, but reinterpret blue strokes as dark brown and bright yellow as muted gold to harmonize with the book. Do not copy its square yellow background.
Art direction adapted from the ESTHER不二 design system: warm cream paper #FEFCF6, dark brown #3B3025 dominant, muted gold #D7AF52 highlight, tiny brick-red #AB5142 accent. Of chromatic graphic elements use brown/gold/red in roughly 60/30/10 proportions. Chinese main titles are very bold literary serif in the spirit of Noto Serif SC; smaller text clean sans serif. Extreme scale contrast; intentional asymmetrical magazine composition; handcrafted pencil and crayon touches, natural grain, precise spacing. Warm, clever, adult editorial design.
Constraints: no QR code, no invented sales claims, no blue/purple/neon or multicolor gradients, no glass panels, no generic card grids, no unnecessary glow, no random filler text. Keep all essential type at least 60 px inside image edges. Render Chinese characters exactly without misspellings.
Composition/framing: the entire poster is a premium literary magazine spread with a large softly irregular oval reading window on the left, outlined by a broad muted-gold crayon band, warm paper inside the window. Inside this oval, a friendly brown-gold crayon version of the supplied character is reading the actual supplied black-and-gold book; show the authentic cover facing the viewer legibly, held naturally in both hands. The lower body can disappear below the oval's cropped lower edge; retain distinctive short hair and headphones. On the right, an enormous dark-brown serif Chinese headline occupies two carefully spaced lines “给好奇心，” and “一个起点”. Underline “起点” with a single rough gold pencil stroke. Place a tiny brick-red hand-drawn asterisk beside the heading. Sparse warm paper grain. The oval is an illustration window, never a rounded rectangular card. Small pale “09” near the upper margin.
Text (verbatim):
Headline line 1: “给好奇心，”
Headline line 2: “一个起点”
Small top label: “A PLACE TO BEGIN”
Subline: “从一个问题，到一段代码”
Book-name line: “《编程启蒙：思维与代码》”
Bottom author line: “AI悦创 · 黄家宝”
Bottom credit, readable small print: “设计系统：ESTHER不二 · CC BY-NC-SA 4.0”
No extra text beyond these and the existing text of the source book.
```

参考图：[{"path": "data/《编程启蒙：思维与代码》/白底-效果图.jpg", "role": "book cover and product compositing reference"}, {"path": "data/我的 IP 角色相关/Brclio-IP.png", "role": "character identity and crayon style reference; recolored brown and muted gold"}]

记录文件：`source/esther-06-10.json`

## esther-series/10-esther-start.png （原始调用提示词）

```text
Use case: ads-marketing.
Asset type: finished landscape book poster, exactly 16:9, 1536×864 px if supported. Generate the entire poster including ALL Chinese typography in the image, sharp enough to read.
Input image 1: source photograph of the actual book, supporting compositing input. Retain the book's original black-and-gold cover design, golden beam, Chinese title “编程启蒙：思维与代码”, author 黄家宝, and publisher marking faithfully; the existing glow is only on the printed book cover.
Input image 2: source of the Brclio personal-brand character, supporting identity input. Preserve the young male character's short spiky hair, headphones, friendly face and crayon line quality, but reinterpret blue strokes as dark brown and bright yellow as muted gold to harmonize with the book. Do not copy its square yellow background.
Art direction adapted from the ESTHER不二 design system: warm cream paper #FEFCF6, dark brown #3B3025 dominant, muted gold #D7AF52 highlight, tiny brick-red #AB5142 accent. Of chromatic graphic elements use brown/gold/red in roughly 60/30/10 proportions. Chinese main titles are very bold literary serif in the spirit of Noto Serif SC; smaller text clean sans serif. Extreme scale contrast; intentional asymmetrical magazine composition; handcrafted pencil and crayon touches, natural grain, precise spacing. Warm, clever, adult editorial design.
Constraints: no QR code, no invented sales claims, no blue/purple/neon or multicolor gradients, no glass panels, no generic card grids, no unnecessary glow, no random filler text. Keep all essential type at least 60 px inside image edges. Render Chinese characters exactly without misspellings.
Composition/framing: an emphatic closing poster built around extremely large literary serif Chinese type, set asymmetrically across the entire left two-thirds. Three semantic lines “翻开书，” / “让想法” / “开始运行”. First two lines deep warm brown; last line deep warm brown on a freehand rough gold broad highlight, never a gradient. The source actual black-and-gold book stands in three-quarter view at right, with cover title readable. A small source crayon character peeks from the lower-right of the book and gives a thumbs-up, adapted to warm brown and muted gold. A thin charcoal pencil line travels from the book toward the large typography as a metaphor for starting an idea. Very large pale italic “start” in the background at only 10% visibility, only upper center. Bottom edge has three separate solid color blocks brown/gold/brick-red in 6:3:1 widths, 40px tall, with the text credits ABOVE that strip, never on it. No border on other edges. Refined, punchy, warm with generous breathing room.
Text (verbatim):
Main headline lines: “翻开书，” / “让想法” / “开始运行”
Small top label: “START WITH A PAGE”
Book-name line: “《编程启蒙：思维与代码》”
Bottom author line: “AI悦创 · 黄家宝”
Website: “bornforthis.cn”
Bottom credit, readable small print: “设计系统：ESTHER不二 · CC BY-NC-SA 4.0”
No extra text beyond these and the existing text of the source book.
```

参考图：[{"path": "data/《编程启蒙：思维与代码》/白底-效果图.jpg", "role": "book cover and product compositing reference"}, {"path": "data/我的 IP 角色相关/Brclio-IP.png", "role": "character identity and crayon style reference; recolored brown and muted gold"}]

记录文件：`source/esther-06-10.json`
