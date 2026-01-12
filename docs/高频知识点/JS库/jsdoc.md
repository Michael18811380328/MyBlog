# jsdoc

根据 js 代码自动写文档

An API documentation generator for JavaScript.

[https://jsdoc.app/about-getting-started.html](https://jsdoc.app/about-getting-started.html "https://jsdoc.app/about-getting-started.html")

[https://github.com/photonstorm/phaser3-docs/blob/master/package.json](https://github.com/photonstorm/phaser3-docs/blob/master/package.json "https://github.com/photonstorm/phaser3-docs/blob/master/package.json")

可以根据需求生成 md 或者 HTML 格式的文档等

```text
"build": "./node_modules/.bin/jsdoc *.js",
"gen": "node --max_old_space_size=8192 node_modules/jsdoc/jsdoc.js -c jsdoc.conf.json -R ../phaser/README.md",
"json": "jsdoc -c jsdoc.data.json"
```

在源代码中增加注释（函数注释和类注释）

```javascript
/**
 * check the param is an array
 * @param {array} arr - input parameter
 * @returns boolean
 */
const isArray = (arr) => {
  return Array.isArray(arr);
};

export { isArray };

```

```javascript
import isArray from './utils';

/** This is a description of the foo function. */
function foo() {
}

/**
 * Represents a book.
 * @constructor
 */
function Article(title, author) {
  console.log(isArray(title));
  return title + author;
}

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
class Book {
  constructor(props) {
    this.title = props.title;
    this.author = props.author;
  }
  /**
   * say hi to someone
   * @param {string} name - The user name.
   */
  sayHi(name) {
    console.log('Hi ' + name);
  }
}

```

具体配置文件

```json
{
  "tags": {
      "allowUnknownTags": true
  },
  "source": {
      "include": [
          "../phaser/src/",
          "../phaser/plugins/fbinstant"
      ],
      "exclude": [
          "../phaser/src/phaser-arcade-physics.js",
          "../phaser/src/phaser-core.js",
          "../phaser/src/physics/matter-js/poly-decomp/",
          "../phaser/src/physics/matter-js/lib",
          "../phaser/src/polyfills",
          "../phaser/src/phaser-ie9.js"
      ],
      "includePattern": ".+\\.js?$",
      "excludePattern": "(^|\\/|\\\\)_"
  },
  "plugins": [
      "jsdoc-plugins/typedef",
      "jsdoc-plugins/this"
  ],
  "opts": {
      "debug": false,
      "destination": "./json/phaser.json",
      "encoding": "utf8",
      "outputSourceFiles": false,
      "outputSourcePath": true,
      "recurse": true,
      "private": false,
      "lenient": true,
      "sourceType": "script",
      "template": "node_modules/jsdoc-json"
  }
}
```

​
