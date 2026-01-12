# sharp

[https://www.npmjs.com/package/sharp](https://www.npmjs.com/package/sharp "https://www.npmjs.com/package/sharp")

nodejs 中图片工具库，可以生成图片（批量生成随机图片），或者图片格式转换等等，用处很多

除了调整图像大小外，还可以进行旋转、提取、合成和伽玛校正等操作。

问题是现在还没有正式版本，还是 0.34.1

```javascript
// 下面是批量生成随机图片的案例
// npm install sharp

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const util = require('util');
 
const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);
 
const IMAGE_WIDTH = 800; // 图片宽度
const IMAGE_HEIGHT = 600; // 图片高度
const IMAGE_COUNT = 1000; // 图片数量
const OUTPUT_DIR = 'random_images'; // 输出目录
 
async function createRandomImage(filename) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
 
  const image = await sharp({
    create: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      channels: 4,
      background: { r: red, g: green, b: blue, alpha: 255 }
    }
  });
 
  await image.toFile(filename);
}
 
async function main() {
  try {
    await mkdir(OUTPUT_DIR, { recursive: true });
 
    for (let i = 0; i < IMAGE_COUNT; i++) {
      const filename = path.join(OUTPUT_DIR, `${i}.png`);
      await createRandomImage(filename);
    }
  } catch (error) {
    console.error(error);
  }
}
 
main();
```

转换图片

```javascript
const semiTransparentRedPng = await sharp({
  create: {
    width: 48,
    height: 48,
    channels: 4,
    background: { r: 255, g: 0, b: 0, alpha: 0.5 }
  }
})
  .png()
  .toBuffer();
```

​
