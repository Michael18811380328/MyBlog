# emotion

[https://emotion.sh/](https://emotion.sh/ "https://emotion.sh/")

Emotion是JS库中一个高效灵活的CSS。基于JS库中的许多其他CSS，它允许您使用字符串或对象样式快速设置应用程序的样式。它具有可预测的组成，以避免CSS的特殊性问题。凭借源代码映射和标签，Emotion在生产环境中具有出色的开发人员体验和出色的性能，并具有大量缓存。

Emotion is a performant and flexible CSS-in-JS library. Building on many other CSS-in-JS libraries, it allows you to style apps quickly with string or object styles. It has predictable composition to avoid specificity issues with CSS. With source maps and labels, Emotion has a great developer experience and great performance with heavy caching in production.

npm install --save @emotion/react

```javascript
import { jsx } from '@emotion/react'

let SomeComponent = props => {
  return (
    <div
      css={{
        color: 'hotpink'
      }}
      {...props}
    />
  )
}
```

​
