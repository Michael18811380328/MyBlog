# tesseract

Tesseract 是一款由 Google 开发的开源 OCR（光学字符识别）库。它可以识别图片中的文字，并将其转换为可编辑的文本格式。

如果您想要使用 Tesseract 识别图片并将输出重定向到另一个文件，您可以使用命令行界面来执行这个操作。基本的命令行示例，它演示了如何使用 Tesseract 识别图片并将结果保存到文本文件中：

```
tesseract input.png output -l eng --oem 3 --psm 3 && echo "OCR Completed."

tesseract 1.png output -l chi_sim --psm 6 && cat ./output.txt
```

在这个命令中：

* input.png 是需要进行 OCR 处理的图片文件。

* output 是输出文本文件的文件名，不需要带有 .txt 扩展名，Tesseract 会自动添加。

* -l eng 指定使用英文训练数据。

* \--oem 3 启用老式布局分析模式（LSTM-only）。OEM：OCR Engine Mode：引擎模式，取值 0123。 0：3.x以前的识别引擎 1：神经网络LSTM的识别引擎 2：混合模式，传统+LSTM 3：默认，那种支持就用那种

* \--psm 3 设置页面分割模式，这里设置为只有文本。PSM：Page Segmentation Mode，对每页文档进行结构化分析，默认的PSM的选项参数位PSM\_AUTO=3

参考：[https://cloud.tencent.com/developer/article/2205370](https://cloud.tencent.com/developer/article/2205370 "https://cloud.tencent.com/developer/article/2205370")

如果您想将输出重定向到一个文件

```
tesseract input.png output -l eng --oem 3 --psm 3 > newfile.txt && echo "OCR Completed."
```

在这两个示例中，输出都会被重定向到指定的文件，而不是打印到控制台。如果您想同时将输出保存到文件并在控制台上查看，可以使用 tee 命令。

```
tesseract input.png output -l eng --oem 3 --psm 3 | tee output.txt && echo "OCR Completed."
```

请确保您的系统上安装了 Tesseract-OCR，并且可以通过命令行访问 tesseract 命令。

1、brew install

2、下载中文识别包 brew install tesseract-lang

其他参考：

<https://blog.csdn.net/s_ongfei/article/details/136500069>

<https://blog.csdn.net/qq_39522120/article/details/135503159>

本地测试可以这样弄，然后写一个 bash 脚本循环

```text
tesseract input.png output -l chi_sim --psm 3
```

#### 使用 Tesseract 进行前端 ORM

嵌入 React 应用中

```text
"tesseract.js": "^5.1.0",
```

```javascript
import { createWorker } from 'tesseract.js';

const URLS = [
  'https://cloud.seatable.cn/seafhttp/files/628ad059-0a07-4dc4-a675-7ae2a1f15d81/image-1720508732396.png',
];

export default function Contact() {

  (async () => {
    const worker = await createWorker('chi_sim');
    for (let i = 0; i < URLS.length; i++) {
      const URL = URLS[i];
      const ret = await worker.recognize(URL);
      console.log(i);
      console.log(ret.data.text.replace(/[\s]/ig, ''));
    }
    await worker.terminate();
  })();

  return (
    <div id="contact"></div>
  );
}
```

nodejs 脚本

```javascript
import { createWorker } from 'tesseract.js';

const URLS = [
  'https://cloud.seatable.cn/seafhttp/files/628ad059-0a07-4dc4-a675-7ae2a1f15d81/image-1720508732396.png',
];

(async () => {
  const worker = await createWorker('chi_sim');
  for (let i = 0; i < URLS.length; i++) {
    const URL = URLS[i];
    const ret = await worker.recognize(URL);
    console.log(i);
    console.log(ret.data.text.replace(/[\s]/ig, ''));
  }
  await worker.terminate();
})();
```

nodejs 批量 OCR 结果

```javascript
const fs = require('fs');
const { exec } = require('child_process');

// 批量 ORM 图片文件(默认图片，识别效率不太高)
var runNodes = async function(files, father_path) {
  for (let i = 0; i < files.length; i++) {
    const URL = father_path + '/' + files[i];
    const command = `tesseract ${URL} output -l chi_sim --oem 3 --psm 3 && cat output.txt > ${i}.md`
    await exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`执行的错误: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
    });
  }
}

const path = './images';

// check path valid (user input path may not valid)
if (!fs.existsSync(path)) {
  console.log(`${path} is invalid`);
  return;
}

var files = fs.readdirSync(path);

runNodes(files, path);

```

python 脚本

```python
import pytesseract
from pathlib import Path
from PIL import Image

def ocr(filename):
    pth = Path(filename)
    image = Image.open(filename)

    # 图片二值化
    image = image.convert('L')
    # 可以定义阈值
    threshold = 200
    table = []
    for i in range(256):
        if i < threshold:
            table.append(0)
        else:
            table.append(1)
    # 识别图片
    curdir = pth.parent

    tessdata_dir_config = f'--tessdata-dir "{curdir}"'
    content = pytesseract.image_to_string(
        image, lang='chi_sim', config=tessdata_dir_config,)  # 使用简体中文解析图片
    print(content)
    
ocr('/root/dev/gotoolkits/figures/python-ocr-02.png')
```

#### 问题和不足

如果识别清晰的截图，准确率能到 100%

如果截图中有其他的画笔颜色，或者图形比较多，那么准确率不太高，这种还需要手动处理
