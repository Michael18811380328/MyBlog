# @svgr/webpack

svg 文件的 webpack loader

用途：把 svg 文件转换成 React 组件进行使用（Transform SVGs into React components）的 loader

[https://github.com/gregberge/svgr/tree/main](https://github.com/gregberge/svgr/tree/main "https://github.com/gregberge/svgr/tree/main")

<https://www.npmjs.com/package/@svgr/webpack>

```javascript
import Star from './star.svg'

const App = () => (
  <div>
    <Star />
  </div>
)
```

webpack 配置

```javascript
{
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        native: true,
      },
    },
  ],
}
```

可以和其他 file-loader, url-loader 结合使用，具体看官方配置
