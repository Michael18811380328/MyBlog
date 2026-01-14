let fs = require('fs');

// 自动获取 markdown 文件路径脚本
let runNodes = function(files, father_path) {
  if (!Array.isArray(files)) {
    return;
  }
  for (let i = 0; i < files.length; i++) {
    if (files[i] === '.DS_Store') {
      continue;
    }
    let newPath = father_path + '/' + files[i];
    let isDirectory = fs.statSync(newPath).isDirectory();
    if (isDirectory) {
      let newFiles = fs.readdirSync(newPath);
      res.push(newPath.slice(7));
      runNodes(newFiles, newPath);
    } else if (files[i].includes('.md')) {
      res.push(newPath);
    }
  }
}

let path = './docs';
let files = fs.readdirSync(path);
let res = [];
runNodes(files, path);

let result = '';
for (let i = 0; i < res.length; i++) {
  if (res[i][0] === '.') {
    let curr = res[i];
    curr = curr.replace(path + '/', '');
    let right = curr;
    let left = curr.slice(curr.lastIndexOf('/') + 1).replace('.md', '');
    let all = `        - '${left}': '${right}'\n`;
    result += all;
  } else {
    if (res[i].length > 0) {
      result += (`\n    - '${res[i]}':\n`).replace(/[\']/ig, '');
    }
  }
}

fs.writeFileSync('docs.md', result);
