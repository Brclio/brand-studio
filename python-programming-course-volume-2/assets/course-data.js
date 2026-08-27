window.courseVolumes = [
  {
    id: 'v1',
    label: '卷一',
    title: '编程思维',
    summary: '从计算机历史与生活案例出发，建立抽象、分解、归纳和算法意识。',
    modules: [
      {
        id: 'v1-module-01',
        index: '01',
        kicker: 'Volume I · Foundations',
        title: '第一章｜何为编程思维？',
        railTitle: '何为编程思维',
        tone: 'blue',
        summary: '理解学习编程的意义，认识编程思维作为通用问题解决能力的价值。',
        items: [
          { title: '01-为什么要学习编程？', summary: '从现实需求与创造过程理解学习编程的意义。', tag: '启程' },
          { title: '02-编程思维：让你受益终身的解决问题能力', summary: '认识分解、抽象与按步骤解决问题的思考方式。', tag: '思维' }
        ]
      },
      {
        id: 'v1-module-02',
        index: '02',
        kicker: 'Volume I · History',
        title: '第二章｜最简单的编程史',
        railTitle: '最简单的编程史',
        tone: 'yellow',
        summary: '从早期自动机械、差分机与分析机到密码破译，认识程序与计算思想的发展轨迹。',
        items: [
          { title: '03-那艘会演奏音乐的船，其实藏着最早的“程序”', summary: '从早期自动机械理解“预先写好指令”的雏形。', tag: '历史' },
          { title: '04-从差分机到分析机：计算机思想的源起', summary: '认识差分机、分析机与通用计算思想的起点。', tag: '历史' },
          { title: '05-他没上战场，却让二战提前两年结束', summary: '了解图灵、密码分析与计算机器在战争中的作用。', tag: '人物' }
        ]
      },
      {
        id: 'v1-module-03',
        index: '03',
        kicker: 'Volume I · Ways of Thinking',
        title: '第三章｜编程思维，教你思考',
        railTitle: '编程思维教你思考',
        tone: 'red',
        summary: '从图像、归纳演绎、抽象与二进制出发，理解机器学习、图灵测试与计算机分析问题的方式。',
        items: [
          { title: '06-从像素到美颜：计算机如何“看”图像', summary: '从像素与图像处理理解计算机如何表示视觉信息。', tag: '表示' },
          { title: '07-用归纳与演绎，让计算机看懂狗', summary: '用归纳与演绎理解机器识别的基本思路。', tag: '推理' },
          { title: '08-抽象的力量：让计算机理解世界的第一步', summary: '学习忽略细节、保留关键特征的抽象方法。', tag: '抽象' },
          { title: '09-用两位数，搞定全世界：计算机的二进制魔法', summary: '理解二进制如何用两种状态表示数字与信息。', tag: '二进制' },
          { title: '10-从“开关”到“计算”：计算机的另一种思维方式', summary: '从开关与逻辑组合认识计算机完成运算的方式。', tag: '逻辑' },
          { title: '11-会“听话”的机器是怎么来的？', summary: '理解指令、规则与机器执行之间的关系。', tag: '指令' },
          { title: '12-计算机的“自我学习课”', summary: '认识机器从数据和反馈中调整判断的基本概念。', tag: '学习' },
          { title: '13-如何识破伪装成人类的机器人？从图灵测试谈起', summary: '从图灵测试理解判断机器智能的经典问题。', tag: '图灵测试' },
          { title: '14-你能分清人和机器人吗？', summary: '通过人机辨识问题讨论行为与智能的关系。', tag: '辨识' },
          { title: '15-智能较量的开端：当人类遇上“思考”机器', summary: '回看早期人机智能较量与机器推理的发展。', tag: '人机' },
          { title: '16-智能对决：两场棋盘上的世纪较量', summary: '从棋类对决理解搜索、计算与策略选择。', tag: '搜索' },
          { title: '17-一个餐馆的秘密：原来背后藏着编程思维！', summary: '借餐馆分工理解拆解任务、职责分配与流程协作。', tag: '分解' }
        ]
      },
      {
        id: 'v1-module-04',
        index: '04',
        kicker: 'Volume I · Algorithms',
        title: '第四章｜用算法，解决生活难题',
        railTitle: '算法解决生活难题',
        tone: 'blue',
        summary: '通过估算、并行、决策、灰度测试、文本分析、寻路、搜索与推荐，把算法用于真实问题。',
        items: [
          { title: '18-用撒米的方法计算 π，你信吗？', summary: '用随机试验与估算方法理解 π 的近似计算。', tag: '估算' },
          { title: '19-4分钟炒蛋的秘密：并行计算初体验', summary: '从炒蛋案例理解任务拆分与并行处理。', tag: '并行' },
          { title: '20-一种不纠结的神奇决策术', summary: '把选择条件转成清晰规则，练习结构化决策。', tag: '决策' },
          { title: '21-2038年世界会毁灭吗？', summary: '认识数据表示范围、时间存储与溢出问题。', tag: '边界' },
          { title: '22-灰度测试：让错误止步于小范围的“防火墙”', summary: '理解小范围验证、逐步发布与风险控制。', tag: '测试' },
          { title: '23-《红楼梦》档案X：消失的作者与代码侦探', summary: '用文本特征与数据线索理解计算分析方法。', tag: '分析' },
          { title: '24-在没有光的地方，蚂蚁靠什么找到回家的路？', summary: '从蚂蚁寻路理解局部规则与路径搜索。', tag: '寻路' },
          { title: '25-面向对象编程：用“对象”来整理世界', summary: '用对象、属性和行为组织现实世界的信息。', tag: '对象' },
          { title: '26-像谷歌一样思考：让知识织成一张网', summary: '理解搜索、关联与知识网络如何组织信息。', tag: '搜索' },
          { title: '27-谁在了解你？——推荐算法的秘密', summary: '认识推荐系统根据行为与相似性筛选内容的思路。', tag: '推荐' }
        ]
      },
      {
        id: 'v1-module-05',
        index: '05',
        kicker: 'Volume I · AI Futures',
        title: '第五章｜人工智能未来',
        railTitle: '人工智能未来',
        tone: 'yellow',
        summary: '围绕知识机器、战争机器人、密码安全、自动驾驶与弱人工智能，讨论 AI 的能力边界、风险与责任。',
        items: [
          { title: '28-一台懂知识的机器，会不会成为“教授”？', summary: '讨论知识表示、问答能力与机器理解的差别。', tag: '知识' },
          { title: '29-战争机器人靠谱吗？', summary: '分析自动决策在复杂环境中的可靠性与责任。', tag: '责任' },
          { title: '30-密码背后的较量：你真的安全吗？', summary: '认识密码、攻击与安全防护之间的基本较量。', tag: '安全' },
          { title: '31-别急着撒手！自动驾驶，还在路上', summary: '理解感知、判断和现实环境给自动驾驶带来的挑战。', tag: '驾驶' },
          { title: '32-机器能叛变吗？别怕，它们还太弱了！', summary: '区分想象中的强智能与现实中的弱人工智能。', tag: '边界' }
        ]
      }
    ]
  },
  {
    id: 'v2',
    label: '卷二',
    title: 'Python 小咖养成',
    summary: '从开发环境与数据类型进入流程控制、函数、类、文件、异常与综合练习。',
    modules: [
      {
        id: 'v2-module-00', index: '00', kicker: 'Volume II · Warm Up', title: '课前准备 · 环境搭建', railTitle: '课前准备', tone: 'red',
        summary: '配置 Python 开发环境，并完成新项目的创建准备。',
        items: [
          { title: '00-环境搭建&新建项目', summary: '安装并确认 Python 开发工具，完成项目初始化。', tag: '准备' }
        ]
      },
      {
        id: 'v2-module-01', index: '01', kicker: 'Volume II · Variables & Types', title: '第一章 · 变量和数据类型', railTitle: '变量与类型', tone: 'blue',
        summary: '认识变量与基础数据类型，并通过章节测试梳理核心概念。',
        items: [
          { title: '第一节丨变量', summary: '理解变量命名、赋值与数据引用。', tag: '基础' },
          { title: '第二节丨初识数据类型', summary: '认识常见数据类型及各自的基本用途。', tag: '基础' },
          { title: '第三节丨章节测试一', summary: '综合检查变量与数据类型的基础概念。', tag: '测试', kind: 'test' },
          { title: '第四节丨答案', summary: '对照解题思路，定位概念与代码中的问题。', tag: '答案', kind: 'answer' }
        ]
      },
      {
        id: 'v2-module-02', index: '02', kicker: 'Volume II · Data Types I', title: '第二章 · 数据类型（上）', railTitle: '数据类型（上）', tone: 'yellow',
        summary: '学习数值、字符串与迭代概念，并结合问答式简历进行练习。',
        items: [
          { title: '第一节丨数值', summary: '学习整数、浮点数与常见数值运算。', tag: '数据' },
          { title: '第二节丨字符串', summary: '掌握字符串表示、索引与常见处理思路。', tag: '数据' },
          { title: '作业一丨问答式简历', summary: '用输入、变量与字符串组织一份互动简历。', tag: '项目', kind: 'project' },
          { title: '第三节丨章节测试二', summary: '检查数值、字符串与基础操作的理解。', tag: '测试', kind: 'test' },
          { title: '第四节丨答案', summary: '对照答案复盘数据处理中的常见错误。', tag: '答案', kind: 'answer' },
          { title: '第五节丨何为迭代？', summary: '理解可迭代对象与逐项处理的基本含义。', tag: '概念' }
        ]
      },
      {
        id: 'v2-module-03', index: '03', kicker: 'Volume II · Data Types II', title: '第三章 · 数据类型（中）', railTitle: '数据类型（中）', tone: 'red',
        summary: '认识列表与元组两种序列结构，并完成对应测试。',
        items: [
          { title: '第一节丨列表', summary: '学习列表的创建、访问与增删改操作。', tag: '序列' },
          { title: '第二节丨元组', summary: '理解元组的有序结构与不可变特点。', tag: '序列' },
          { title: '第三节丨章节测试三', summary: '检查列表与元组的使用和差异。', tag: '测试', kind: 'test' },
          { title: '第四节丨答案', summary: '对照答案梳理序列操作与边界问题。', tag: '答案', kind: 'answer' }
        ]
      },
      {
        id: 'v2-module-04', index: '04', kicker: 'Volume II · Data Types III', title: '第四章 · 数据类型（下）', railTitle: '数据类型（下）', tone: 'blue',
        summary: '学习字典和集合的基础特点，并通过测试整理相关知识。',
        items: [
          { title: '第一节丨字典', summary: '用键值对应关系组织、读取与更新数据。', tag: '映射' },
          { title: '第二节丨集合', summary: '理解去重、成员关系与集合运算。', tag: '集合' },
          { title: '第三节丨章节测试四', summary: '检查字典与集合的结构和常见操作。', tag: '测试', kind: 'test' },
          { title: '第四节丨答案', summary: '对照答案复盘映射与集合操作。', tag: '答案', kind: 'answer' }
        ]
      },
      {
        id: 'v2-module-05', index: '05', kicker: 'Volume II · Decision Making', title: '第五章 · if 条件判断', railTitle: 'if 条件', tone: 'yellow',
        summary: '从布尔表达式进入 if 条件判断，理解程序的分支逻辑。',
        items: [
          { title: '第一节丨布尔表达式', summary: '理解真假值、比较关系与逻辑组合。', tag: '逻辑' },
          { title: '第二节丨if 条件判断', summary: '用条件分支控制程序执行不同路径。', tag: '分支' },
          { title: '第三节丨章节测试五', summary: '检查布尔逻辑与条件分支的组合运用。', tag: '测试', kind: 'test' },
          { title: '第四节丨答案', summary: '对照答案分析条件遗漏与分支顺序。', tag: '答案', kind: 'answer' }
        ]
      },
      {
        id: 'v2-module-06', index: '06', kicker: 'Volume II · While Loop', title: '第六章 · while 循环', railTitle: 'while 循环', tone: 'red',
        summary: '学习 while 循环的基本结构、条件控制与执行逻辑。',
        items: [
          { title: '第一节丨while 循环', summary: '用持续条件组织重复执行，并关注终止条件。', tag: '循环' },
          { title: '第二节丨章节测试六', summary: '检查循环条件、更新步骤与执行次数。', tag: '测试', kind: 'test' },
          { title: '第三节丨答案', summary: '对照答案定位死循环与边界问题。', tag: '答案', kind: 'answer' }
        ]
      },
      {
        id: 'v2-module-07', index: '07', kicker: 'Volume II · For Loop', title: '第七章 · for 循环', railTitle: 'for 循环', tone: 'blue',
        summary: '学习 for 循环，并结合运势预测软件练习遍历与组合。',
        items: [
          { title: '第一节丨for 循环', summary: '使用 for 对序列或范围进行逐项遍历。', tag: '循环' },
          { title: '作业二丨运势预测软件', summary: '组合输入、条件与循环完成一个小型程序。', tag: '项目', kind: 'project' },
          { title: '第二节丨章节测试七', summary: '检查遍历、范围与循环体的理解。', tag: '测试', kind: 'test' },
          { title: '第三节丨答案', summary: '对照答案复盘遍历逻辑与循环边界。', tag: '答案', kind: 'answer' }
        ]
      },
      {
        id: 'v2-module-08', index: '08', kicker: 'Volume II · Functions', title: '第八章 · 函数', railTitle: '函数', tone: 'yellow',
        summary: '认识函数的基本概念，以及用函数组织和复用代码的方式。',
        items: [
          { title: '第一节丨函数', summary: '学习定义、调用、参数与返回值的基本结构。', tag: '封装' },
          { title: '第二节丨章节测试八', summary: '检查函数调用、参数传递与结果返回。', tag: '测试', kind: 'test' },
          { title: '第三节丨答案', summary: '对照答案梳理函数边界与数据流。', tag: '答案', kind: 'answer' }
        ]
      },
      {
        id: 'v2-module-09', index: '09', kicker: 'Volume II · Object-Oriented', title: '第九章 · 类', railTitle: '类', tone: 'red',
        summary: '认识面向对象与类，并通过对话式对战游戏设计进行综合实践。',
        items: [
          { title: '第一节丨面向对象', summary: '理解类、对象、属性与方法之间的关系。', tag: '对象' },
          { title: '第二节丨章节测试九', summary: '检查类与对象的建模及调用方式。', tag: '测试', kind: 'test' },
          { title: '第三节丨答案', summary: '对照答案复盘对象职责与代码组织。', tag: '答案', kind: 'answer' },
          { title: '项目作业丨对话式对战游戏设计', summary: '用类组织角色、状态和交互流程。', tag: '项目', kind: 'project' }
        ]
      },
      {
        id: 'v2-module-10', index: '10', kicker: 'Volume II · File I/O', title: '第十章 · 文件操作', railTitle: '文件操作', tone: 'blue',
        summary: '学习 Python 文件操作的基础内容，让程序能够读取与保存数据。',
        items: [
          { title: '第一节丨文件操作', summary: '认识文件路径、打开模式、读取、写入与关闭。', tag: '文件' }
        ]
      },
      {
        id: 'v2-module-11', index: '11', kicker: 'Volume II · Errors & Exceptions', title: '第十一章 · 错误与异常', railTitle: '错误与异常', tone: 'yellow',
        summary: '认识程序中的错误、异常及基础处理思路。',
        items: [
          { title: '第一节丨错误与异常', summary: '区分常见错误，并用异常处理保护程序流程。', tag: '排错' }
        ]
      },
      {
        id: 'v2-module-final', index: '✓', kicker: 'Volume II · Final Check', title: '第十*章 · 结业测试', railTitle: '结业测试', tone: 'red',
        summary: '通过结业测试回顾卷二涉及的 Python 基础内容。',
        items: [
          { title: '第一节丨结业测试', summary: '综合检查数据、流程控制、函数、类与文件基础。', tag: '测试', kind: 'test' },
          { title: '第二节丨答案', summary: '对照答案形成卷二知识复盘清单。', tag: '答案', kind: 'answer' }
        ]
      },
      {
        id: 'v2-module-other', index: '+', kicker: 'Volume II · Other', title: 'Other · 补充资源', railTitle: '补充资源', tone: 'blue',
        summary: '收录课程待优化事项、杂项题与补充练习。',
        items: [
          { title: 'Python 系统教程待做优化', summary: '记录课程结构与内容仍需整理的事项。', tag: '规划', kind: 'extra' },
          { title: 'Python 杂物题', summary: '汇集不便归入单一章节的补充问题。', tag: '补充', kind: 'extra' },
          { title: 'Python 练习题', summary: '提供额外题目用于自主练习与复盘。', tag: '练习', kind: 'extra' }
        ]
      }
    ]
  }
];
