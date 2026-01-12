# postcss-preset-env

CSS 兼容不用版本早期的浏览器。

PostCSS Preset Env lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments.    &#x20;

[https://github.com/csstools/postcss-plugins](https://github.com/csstools/postcss-plugins "https://github.com/csstools/postcss-plugins")

```javascript
const postcssPresetEnv = require('postcss-preset-env');

const yourConfig = {
	plugins: [
		/* other plugins */
		/* remove autoprefixer if you had it here, it's part of postcss-preset-env */
		postcssPresetEnv({
			/* pluginOptions */
			features: {},
		})
	]
}
```

​
