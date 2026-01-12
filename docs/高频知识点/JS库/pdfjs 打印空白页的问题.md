# pdfjs 打印空白页的问题

项目中使用了 pdfjs 处理 PDF 文件预览和打印（火狐团队的第三方库）当 pdf 只有一张，谷歌浏览器打印会出现两章，第二页是空白的。

解决：**`page-break-after`** CSS 属性调整当前元素之后的分页符。把原来的 always 改成 auto 即可避免打印空白页。目前还没有测试到其他副作用。

```css
.container {
	page-break-after: 'auto';
}

```

<https://developer.mozilla.org/zh-CN/docs/Web/CSS/page-break-after> 

<https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside> 

<https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-inside> 


