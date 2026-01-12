# jison

jison：An API for creating parsers in JavaScript，语法解析器

<https://www.npmjs.com/package/jison> 

这个库6年前写的，最近4年没有更新，周下载量8万

jison 是一个语法解析器，可以直接把 '1+ 2 + 3' 这样的字符串解析转换成数学结果返回 6，具体语法类似 Bison

本地环境基本使用

1 全局安装 \`npm install jison -g\` 安装成功后，全局环境可以使用 jison 这个指令

2 获取解析规则 jison 格式的文件（这里可以从官方下载 \`git://github.com/zaach/jison.git/examples\`，或者自己写这个规则，例如脚本解析器的内容比较简答，公式解析器内容就比较复杂，具体涉及编译原理，暂时不展开）下面是部分 jison 文件

```
/* eslint-disable */
/* lexical grammar */
%lex
%%
\s+                                                                                             {/* skip whitespace */}
and|AND                                                                                         {return '&';}

```

3 使用 jison 工具创建编译器 `jison calculator.jison`， 然后就在当前目录下面生成一个 \`calculator.js\` 的文件，对外会暴露一个 Parser 类

4 准备一个计算的字符串 \`echo "1 + 2 + 3" > MichaelTest\`,写入文件

5 使用解析器处理这个字符串，可以获取结果 `node calculator.js MichaelTest `


