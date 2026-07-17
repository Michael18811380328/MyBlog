# JS笔记 

 2026-7-17

 原始笔记链接：https://cloud.seatable.cn/dtable/external-links/59b453a8639945478de2/

 
## 0003 防抖和节流


防抖表示某一个事件多次高频触发之后，等时间结束后的几百毫秒再触发函数

节流表示当某一个事件高频触发之后，每隔几百毫秒触发一次函数

一般运用于界面滚动等时间触发比较频繁的

```javascript
/*
 * @des                               防抖函数
 * @param  {Number}    delay          延迟时间（ms），不传默认200ms
 * @param  {Function}  callback       回调函数
 * @param  {Boolen}    false          触发时是否立即执行一次，默认不执行
 * @return {Function}                 A new debounce function
 */

```

```javascript
const debounce = (callback, delay = 200, im = false) => {
  let timeoutID = null
  return function() {
    // 第一次触发时是否立即执行
    if (im && !timeoutID) {
      callback.apply(this, arguments)
    }
    // 避免开启过多计时器
    if (timeoutID) clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      // 借用外部第一个普通函数的this和arguments对象
      callback.apply(this, arguments)
      // 执行后将timeoutID置为null
      timeoutID = null
    }, delay)
  }
}

/*
 * @des                               节流函数
 * @param  {Number}    delay          延迟时间（ms），不传默认200ms
 * @param  {Function}  callback       回调函数
 * @param  {Boolen}    false          触发时是否立即执行第一次，默认不执行
 * @return {Function}                 A new throttle function
 */
const throttle = (callback, delay = 200, im = false) => {
  let timeoutID = null
  return function() {
    // 第一次触发时是否立即执行
    if (im && !timeoutID) {
      // 立即执行
      callback.apply(this, arguments)
      // 执行后立即关闭
      im = false
    }
    if (!timeoutID) {
      timeoutID = setTimeout(() => {
        // 外部第一个普通函数this和arguments对象
        callback.apply(this, arguments)
        // 执行后将timeoutID置为null
        timeoutID = null
      }, delay)
    }
  }
}

```



   
## 0004 Set和map的区别方法


Set是一个类数组，可以 add delete has


Map是一个类对象，可以 get set has delete


这两个用于处理某一个没有特定含义的对象或者数组，例如可以用来数据去重复


没有数组的复杂的API，所以说不是很方便存储实际的数据



   
## 0008 SetTimeOut Promise async await 的区别


这个也涉及到宏任务和微任务

setTimeout

Promise(resolve, reject)

async function() { await xxx() }



   
## 0009 Async和await如何实现同步和异步？


如果函数内部有异步操作，使用 async await 表示异步函数。

当代码执行到 await 一行时，需要等异步操作返回结果后，再继续向下执行，例如

```javascript
  async fn() {
    try {
      let res1 = await this.api.getUser();
      let res2 = await this.api.getUser();
      let res3 = await this.api.getUser();
    } catch (error) {
      console.log(error);
    }
  }

```

​

   
## 0010 异步函数执行结果，任务队列或for循环


​

```javascript
for (var i = 0; i < 10; i ++ ) {
	setTimeout(() => console.log(i), 0);
}
```

这里考察的是打印什么？因为 console 或者函数内部是异步执行的，那么先循环10次后，i 变成10，就打印10个10

改变方法是 var 改成 let，变量作用域不同

```javascript
for (let i = 0; i < 10; i ++ ) {
	setTimeout(() => console.log(i), 0);
}
```

​

   
## 0011 高维数组降维、去重、排序


arr.flat(Infinity) 实现高维数组降维，或者手动实现递归降维

去重 new Set（）

排序 sort 实现

官方实现：Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b })



   
## 0012 JS 异步有几个方法


setTimeout

setInterval

Promise.then

async

await

setState

   
## 0013 Promise 构造函数是同步执行还是异步执行，那么 then 方法呢


Promise 中代码是同步执行的，then 是异步执行的？



   
## 0014 如何实现一个 new 创建类


手写一个 new

1. 创建一个新的空对象。

2. 将这个新对象的原型指向构造函数的原型。

3. 将构造函数的 `this` 指向这个新对象，并执行构造函数。

4. 如果构造函数返回的是一个对象，那么返回这个对象，否则返回新创建的对象。

```javascript
function myNew(constructor, ...args) {
    // 1. 创建一个新的空对象
    const obj = {};

    // 2. 将这个新对象的原型指向构造函数的原型
    Object.setPrototypeOf(obj, constructor.prototype);

    // 3. 将构造函数的 this 指向这个新对象，并执行构造函数
    const result = constructor.apply(obj, args);

    // 4. 如果构造函数返回的是一个对象，那么返回这个对象，否则返回新创建的对象
    return result instanceof Object ? result : obj;
}

// 测试
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = myNew(Person, 'Alice', 30);
console.log(person.name); // Alice
console.log(person.age);  // 30
console.log(person instanceof Person); // true
```

​

   
## 0021 判断数组的三种方法；方法的区别


第1种 Object.prototype.toString.call(val) 

第2种 instanceof

第3种 Array.isArray

第1种 把变量转换成对象，然后把对象调用转换成字符串。这样可以处理各种类型的数据结果进行判断，是否是数组，兼容性比较好，但是判断代码比较繁琐。

```
Object.prototype.toString.vall({}) == '[object Object]'
Object.prototype.toString.vall([]) == '[object Array]'

```

第2种 instance of 判断传入的对象或数组的原型上是否有对应的 array or object

```
[] instanceof Array == true
[] instanceof Object == true

```

第三种是ES5新加的语法。这个语法比较简单，但是存在兼容问题

```
Array.isArray([])

```



   
## 0023 观察者模式和订阅发布者模式


订阅发布者模式，需要有一个中介对象，来处理整体的订阅和发布；这个对象支持复用

观察者模式不需要中介，只是两个对象之间的观察与被观察；

如果是少数组件关系简单，那么可以使用观察者模式即可完成功能。

如果是多个组件关系复杂，互相发送消息监听事件，那么使用订阅发布者模式更合适——简化代码。



   
## 0027 声明变量的几个关键词和区别


var 声明变量直接绑定在全局作用当中，直接通过 window.x 可以获取对应的值。

let const 声明的变量都在局部的作用域中, 并没有绑定到全局变量当中，所以在全局变量上无法访问对应的变量。

全名

let: 允许你声明一个作用域被限制在块级中的变量、语句或者表达式 let 绑定不受变量提升的约束，这意味着let声明不会被提升到当前，该变量处于从块开始到初始化处理的"暂存死区"。

var: 声明变量的作用域限制在其声明位置的上下文中，而非声明变量总是全局的, 由于变量声明（以及其他声明）总是在任意代码执行之前处理的，所以在代码中的任意位置声明变量总是等效于在代码开头声明。

const 声明创建一个值的只读引用 (即指针)，

这里就要介绍下 JS 常用类型: String、Number、Boolean、Array、Object、Null、Undefined。其中基本类型有 Undefined、Null、Boolean、Number、String，保存在栈中；复合类型 有 Array、Object ，保存在堆中； 基本数据当值发生改变时，那么其对应的指针也将发生改变，故造成 const申明基本数据类型时，再将其值改变时，将会造成报错， 例如 const a = 3 ; a = 5 时 将会报错；但是如果是复合类型时，如果只改变复合类型的其中某个Value项时， 将还是正常使用；



   
## 0031 setTimeout 中 var 和 let 区别


setTimeout 当中对于 var let 的区别

setTimeout 函数的第3个参数会作为回调函数的第一个函数传入。

* `var` 声明的变量在循环中会导致闭包问题，因为它具有函数作用域或全局作用域。

* `let` 声明的变量在循环中不会导致闭包问题，因为它具有块作用域，每次迭代都会创建一个新的块作用域。

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// 输出结果：3 3 3

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// 输出结果：0 1 2
```

​

   
## 0033 闭包和 IIFE


闭包内部执行函数：闭包内部无法访问到全局变量，所以只能打印当前函数对应的函数名称。

闭包打印变量：闭包中可以有局部的内容，然后进行打印也可以直接新生成声明变量，然后再进行打印。

实际当中开发当中使用的情况不多。

​

闭包是 JavaScript 中一个重要的概念，常常出现在面试和考题中。以下是一些常见的闭包考点：

#### 1. 闭包的定义

闭包是指一个函数能够记住并访问它的词法作用域，即使这个函数在其词法作用域之外执行。

#### 2. 闭包的创建

闭包通常在函数内部定义另一个函数时创建。内部函数可以访问外部函数的变量，即使外部函数已经执行完毕。

```javascript
function outerFunction() {
    let outerVariable = 'I am outside!';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

const closure = outerFunction();
closure(); // 输出: I am outside!
```

#### 3. 闭包的应用场景

**数据隐藏和封装**：通过闭包可以创建私有变量和方法。

```javascript
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 输出: 1
console.log(counter.decrement()); // 输出: 0
```

**模拟块级作用域**：在 ES6 之前，JavaScript 没有块级作用域，可以通过闭包来模拟。

**回调函数**：闭包常用于回调函数中，特别是在异步编程中。

​

#### 4. 闭包的内存管理

由于闭包会保留对其词法作用域的引用，可能会导致内存泄漏。需要注意在不再需要闭包时，手动解除引用。

​

#### 5. 常见面试题

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// 输出: 3 3 3
```

改成

```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// 输出: 0 1 2
```

或者&#x20;

```javascript
for (var i = 0; i < 3; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    })(i);
}
// 输出: 0 1 2
```

​

   
## 0035 浏览器几种缓存的使用场景


浏览器有几种缓存，使用场景有哪些？

Cookie 主要用于身份验证和用户数据持久性。Cookie 与请求一起发送到服务器，并在响应时发送到客户端；因此，cookies 数据在每次请求时都会与服务器交换。服务器可以使用 cookie 数据向用户发送个性化内容。

localStorage：用于存储持久数据，除非用户手动将其从浏览器中删除，否则数据将终身存储。即使用户关闭窗口或选项卡，它也不会过期；

sessionStorage：用于存储临时会话数据，页面重新加载后仍然存在，关闭浏览器选项卡时数据丢失。

IndexedDB：类似 NoSQL 的 key/value 数据库，它可以存储大量结构化数据，甚至是文件和 blob

更多参考：<https://zhuanlan.zhihu.com/p/581426460>

   
## 0041 闭包的作用域，和函数中变量的提升


在一个函数内部变量声明的话，会提升到函数的开头，但是不会赋值，所以打印会出现 undefined 

```
function fn() {
	console.log(a);
	let a = 10;
}

```

函数内部直接访问的是函数作用域中的变量，如果没有找到这个属性的话，就是访问全局变量下的一个属性，所以说需要看 console.log 的结果是函数作用域，还是全局作用域。



   
## 0042 如何实现sleep函数？


核心思路是写一个sleep函数，参数是n表示时间，内部返回一个new promise，然后reserve reject Reserve当中设置一个set time out实现延迟执行

Sleep函数外部可以使用then或者async await实现具体的下一步操作

```javascript
function sleep(fn, times) {
	return new Promise(() => {
	    setTimeout(() => fn(), times)
	})
}

```



   
## 0043 sort 函数直接排序的问题


sort 函数，如果不传递任何函数，默认会把比较的项都转换成字符串，进行比较，然后不同的数字，首先转换成字符串，进行 UTF-16 的比较，所以说这个比较的结果不一定满足实际需求

   
## 0046 一个对象写入length和数组的方法能否变成数组？


如果对象写入数组的 length 长度，然后写入 push 和 pop 的方法，是可以变成一个伪数组

但是和真实的数组不一样

push方法的核心 推入一个具体的元素，同时 length+1。

如果默认对象的 length 是一个固定的值，然后继续执行 push pop 操作，只会在后面的元素上面加入，前面的引用都是 null 



   
## 0051 Object.defineProperty


<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty>

Object.defineProperty 用于给对象增加或者更改一个新的属性（可以读写，可以只读），例如

```javascript
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// Throws an error in strict mode

console.log(object1.property1);
// Expected output: 42
```

实际开发中使用不多，主要在框架中使用

   
## 0056 设计题设计一个对象具有很多的方法。可以进行链式调用


类似中间件的设置原则，对象中的方法，对这个对象进行操作后，返回这个对象

执行对象的方法时，是原地算法（迭代对象的属性）并返回这个对象

```
class Person()class Person {

  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.value = props.value || 0;
  }

  sayHello = () => {
    console.log('Hello ' + this.name);
    return this;
  }

  sayHi = () => {
    console.log('Hi ' + this.name);
    return this;
  }

  add = (number) => {
    this.value = this.value + parseInt(number);
    return this;
  }

  delete = (number) => {
    this.value = this.value - parseInt(number);
    return this;
  }

  getValue = () => {
    console.log(this.value);
    return this;
  }
}

let p = new Person({ name: 'Mike', age: 20, value: 10 });
p.sayHello().sayHi();
p.add(4).add(20).delete(10).getValue();

```

 



   
## 0058 箭头函数和普通函数的区别是什么？构造函数又是什么


构造函数：ES5早期语法用构造函数创建一个组件，es6 使用类进行创建，函数名需要大写。

箭头函数：ES6 中类中的箭头函数，改变了实例中 this 的指向。默认 this 指向调用方法的对象，使用 箭头函数，可以让 this 始终指向原始的类（进一步获取其中的属性和方法）

   
## 0075 获取数组中第1个和第1万个项的时间


JS 的数组实际上是对象，那么获取第1个和第10000个，都是通过对象的索引实现查找的，耗时基本相同。

其他语言中数组是真实的数组，获取的时间不一样。



   
## 0076 对象的属性转换


JS 对象的属性，只能使用 字符串 或者 Symbol

如果设置其他为对象的属性，那么先转换成字符串 toString 然后进行变成对象的属性

Symbol 处理魔法字符串的问题，生成唯一的一个字符串便于处理对象的属性

```javascript
let key = Symbol('Mike')
let dict = {};
dict[key] = 20;
```

​

   
## 0079 input 处理防抖和中文输入


防抖：键盘事件结束300ms后，再触发对应的提交函数-或者搜索函数，避免频繁输入造成的搜索性能下降

处理中文输入：onCompositionStart 等事件，等 onCompositionEnd 后就是中文输入结束，此时再处理输入框中的内容

   
## 0080 Promise.all 原理


Promise.all() 中全部请求返回结果后，才能执行后续的操作，适合很多个请求并行执行

Promise.race() 赛跑，多个请求中，任意一个执行结束，就完成后续的操作

类似数组中 every 和 some 的逻辑



   
## 0084 函数连续执行 add(1)(2)(3, 4)


函数 currying 实现

关键是返回值是函数，需要测试，看的不太懂

```javascript
    function currying(fn, length) {
      length = length || fn.length;
      return function(...args) {
        return args.length >= length ? fn.apply(this.args) : currying(fn.bind(this, ...args), length - args.length);
      }
    }

```



   
## 0086 判断一个网址是否是正确的


使用 new URL() 构造函数传参，然后捕获错误，就能判断是否正常了



   
## 0089 Promise.race() 如何实现


多个 Promise 执行，只要有一个返回，那么立即执行后面的代码



   
## 0090 实现模糊查询并关键词高亮


第一输入时防抖

第二查询是同步还是异步？是否需要网络请求？

是否通过记忆化查找

高量结果主要使用正则表达式进行处理。满足某个搜索条件，使用正则进行替换，替换后使用 span className="highlight" 包裹一下，显示高亮的背景色即可



   
## 0092 找出一个DOM节点所有父节点


获取当前节点，然后 while 循环，对每一个父节点判断 ID

数据结构：从叶子结点，递归找到路径上的全部节点。

```javascript
while (dom) {
  console.log(dom.id);
  dom = dom.parentNode;
  if (!dom) return;
}
```

​

   
## 0095 实现一个深拷贝考虑对象的自引用


深拷贝对象时，如果存在互相引用，也就是深拷贝一个图

每次拷贝一个节点，把节点存储在字典中，下次遍历到节点，就不需要拷贝了，这样实现了深拷贝



   
## 0096 前端加密有哪些方法？


用户输入时，密码传输（界面验证，验证长度和有效性，是否满足字母数字特殊符号）

发送网络请求时，数据网络传输（HTTPS，POST，加密，JWT token）

数据库存储等（密码加盐，不显示真实信息）

界面展示数据加密，避免爬虫获取信息等



   
## 0098 函数传参过程中深复制和浅复制


函数传参过程中，普通变量直接复制，对象是浅复制

函数内部可以实现原地算法，直接在参数的基础上修改



   
## 0100 console.log 同步还是异步


console.log 是同步执行的

如果打印的是字符串（简单类型数据），没问题。

如果打印的是对象（引用类型数据），可能出错。console.log 只保存指针，当从控制台中展开对象时，才显示对象的详情，可能数据不一致的问题。

解决：

1、直接在代码中打断点，断点时刻的复杂对象是最新的。

2、把对象转换成字符串打印（JSON.stringify(obj)）

   
## 0106 事件流和event loop是什么


<https://juejin.cn/post/7020328988715270157> 

事件队列和事件循环



   
## 0108 自己如何实现promise？


<https://juejin.cn/post/6844903625769091079>

通过 promise 的基本使用，说明这是一个类，并且有 then 方法

```
let p = new Promise();
p.then(() => {}, () => {})
```

参考链接，简化版本的代码如下（不考虑链式调用，finally, Promise.all）

   
## 0130 DOM 性能优化


DOM 的性能问题（PC端性能不影响，移动端影响很大）

设计层面：移动端屏幕小，设计层面不建议进行大量 DOM 展示和操作

代码层面：

* DOM 渲染耗时 => 减少无用的DOM节点

* DOM 会拖累 JS 渲染 => DOM 和 JS请求异步处理

* 浏览器是单线程 => 未来开发多线程浏览器

* DOM使用CPU，不能使用GPU加速 => 使用 canvas 等代替复杂图形和用户交互

未来移动端巨头是主流，类似微信内嵌QQ浏览器，使用内部小程序完成传统界面设计。

国内移动端浏览器网页最终会没落，现在基本是流量入口+内嵌小程序或者网页（安卓端和 ios 类似会没落）。

   
## 0132 import 导入命令


​

```javascript
import { fn1, fn2, fn3 } from 'lodash';

import { fn1, fn2, fn3 as $ } from 'lodash';

import { * as lodash } from 'lodash';

// 如果一个模块对外暴露很多的方法，可以使用第一行的命令引入几个方法

// 可以使用第二行的几个命令，把其中的几个方法封装成对象 （$）然后调用其中的某个方法 $.fn1 $.fn2 使用

// 第三个是直接把全部的方法封装成一个对象，然后调用对象的方法

// 这个写法适应于函数式编程（对外暴露很多函数，然后使用测试很方便）
```

​

   
## 0144 JS上下文执行栈和闭包


几个概念把，esc、上下文：作用域链，AO/VO，this。esc存储执行的上下文

主要是创建和执行。假设有一个A函数，过程是这样的创建全局执行上下文、压入esc、全局上下文初始化、执行A函数、创建A函数执行上下文，压入esc，A函数上下文初始化，这个初始化过程是这样的：创建作用域链、emm我上面提漏了一个A函数被创建全局上下文被保存到scope中的过程，是复制scpoe创建作用域链,用arguments创建活动对象，初始化活动对于，将活动对象压入链顶，执行完毕，上下文弹出。

“但是全局上下文一直在栈底，而VO和AO的确认，我感觉是取决是是否可访问的。”

“而闭包就是上下文链中上下文scope被销毁了，但因为保持了对scope中某个变量的引用，这应该就是你上面说的回收原理的根节点实现的这个东西把，导致没销毁干净，留存在了内存中，完成了闭包”



   
## 0147 事件绑定有哪些情况


某一个节点绑定事件，或者全局绑定事件（document.addeventListener）

适合于不同场景

打开通常在某一个按钮，那么就在节点绑定事件

关闭可能在全屏点击，那么就在 document 绑定事件

事件冒泡和事件捕获，顺序分别是从内部到外部，和从外部到内部



   
## 0148 iframe.contentDocument 和 iframe.contentWindow


1、这两个都是通过 iframe 获取内部的 document，兼容性不一样，参考下面

<https://stackoverflow.com/questions/17197084/difference-between-contentdocument-and-contentwindow-javascript-iframe-frame-acc>

<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#scripting>

```text
iframe.contentDocument || iframe.contentWindow.document
```

2、如何监听 iframe 下载完成？默认使用这个方法

原理：当执行下载后，循环判断 iframe 的下载状态是否完成；如果完成，移除 iframe，然后执行回调函数

```javascript
let iframe = document.createElement('iframe');
iframe.src = path;
iframe.style.display = 'none';
document.body.appendChild(iframe);
const timer = setInterval(() => {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    if (iframeDoc.readyState == 'complete' || iframeDoc.readyState == 'interactive') {
        document.body.removeAttribute(iframe);
        clearInterval(timer);
        resolve('success');
    }
}, 1000);

```

如果高频触发函数（<1000），可能有 iframe 多次创建并卸载，然后 iframe.contentWindow 是 null 报错的情况，可能性较小。最好在循环外部判断一下是否存在，或者尽量避免使用这个函数。

   
## 0149 script 脚本阻塞下载问题


非重点题目

项目中遇到一个问题：

默认下载图片通过 iframe ，然后302重定向下载完毕。当初始化加载10多个JS脚本时，界面用户点击下载图片 iframe 下载，那么下载时显示跨域，无法下载

查阅资料：浏览器并行下载时，script 下载执行会阻塞其他操作，所以造成图片下载失败。

解决：首先避免大量并行下载脚本，从根源上减少script的代码量。然后可以在界面初始化完成后，异步下载这部分脚本，避免脚本和其他功能互相干扰。

<https://www.dandelioncloud.cn/article/details/1509921575058092034> 

<https://blog.csdn.net/caihaijiang/article/details/6666520> 

<https://stackoverflow.com/questions/1869095/dns-lookup-vs-http-parallel-downloads/1869126#1869126> 



   
## 0171 数组 reduce 怎么使用


reduce

第一个参数是函数，表示对每一项执行的函数，返回值作为下一个项计算的基础值

第二个参数是初始值，表示初始是0

```javascript
[1,2,4,5].reduce((a, b) => a + b, 0)
```

​

   
## 0177 原生拖拽事件有哪些?


1、如何设置拖拽对象：设置 div draggable 属性

2、被拖动的元素有哪些事件：dragstart drag dragend 三个事件，分别对应开始拖动，拖动中（高频），拖动结束

3、被释放的元素有哪些事件：dragenter dragover dragleave drop 四个事件

4、从桌面拖动到浏览器的事件：没有 dragstart dragend 事件

5、如何通过拖拽传递数据：

5.1 当一个元素被拖动时，ondragstart, 设置 e.datatransfer.setDate 设置数据

5.2 当元素在另一个对象上释放时，onDrop 事件，获取 e.datatransfer.files 拿到数据，这里可能是某个文件数组，或者是某个字符串。如果是拖动桌面文件并上传到浏览器，那么获取 files 数组（文件路径），然后通过 FileReader 对象，浏览器读取到文件内容，进一步实现上传。



   
## 0180 阻止事件冒泡的两个方法


stopImmediatePropagation 函数和 stopPropagation 函数的区别



event.stopImmediatePropagation() 方法阻止剩下的事件处理程序被执行。该方法阻止事件在 DOM 树中向上冒泡。停止当前节点，和所有后续节点的事件处理程序的运行。



stopPropagation 会阻止事件向上层元素冒泡。如果同一个元素绑定了多个事件（addEventListener），那么不会阻止其他事件的执行。



stopImmediatePropagation() 会阻止同层级事件的冒泡。

```javascript
div.addEventListener("click" , function(){
  alert("第一次执行");
  stopImmediatePropagation();
} , true);

div.addEventListener("click" , function(){
  alert("第二次执行");
} , true); 

// 点击div，第二次执行不会触发

```



   
## 0181 ES6 之前使用 prototype 实现继承


Object.create() 会创建一个 “新” 对象，然后将此对象内部的 \[\[Prototype]] 关联到你指定的对象（Foo.prototype）。

Object.create(null) 创建一个空 \[\[Prototype]] 链接的对象，这个对象无法进行委托。

​

```javascript
function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function () {
  return this.name;
}

// 继承属性，通过借用构造函数调用
function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

// 继承方法，创建备份
Bar.prototype = Object.create(Foo.prototype);

// 必须设置回正确的构造函数，要不然在会发生判断类型出错
Bar.prototype.constructor = Bar;

 // 必须在上一步之后
Bar.prototype.myLabel = function () {
  return this.label;
}

var a = new Bar("a", "this is label");

a.myName(); // "a"
a.myLabel(); // "this is label"

```

​

   
## 0185 promise 的特性、优缺点，内部是如何实现的


Promise基本特性

* 1、Promise有三种状态：pending(进行中)、fulfilled(已成功)、rejected(已失败)

* 2、Promise对象接受一个回调函数作为参数,  该回调函数接受两个参数，分别是成功时的回调resolve和失败时的回调reject；另外resolve的参数除了正常值以外，  还可能是一个Promise对象的实例；reject的参数通常是一个Error对象的实例。

* 3、then方法返回一个新的Promise实例，并接收两个参数onResolved(fulfilled状态的回调)；onRejected(rejected状态的回调，该参数可选)

* 4、catch方法返回一个新的Promise实例

* 5、finally方法不管Promise状态如何都会执行，该方法的回调函数不接受任何参数

* 6、Promise.all()方法将多个多个Promise实例，包装成一个新的Promise实例，该方法接受一个由Promise对象组成的数组作为参数(Promise.all()方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例)，注意参数中只要有一个实例触发catch方法，都会触发Promise.all()方法返回的新的实例的catch方法，如果参数中的某个实例本身调用了catch方法，将不会触发Promise.all()方法返回的新实例的catch方法

* 7、Promise.race()方法的参数与Promise.all方法一样，参数中的实例只要有一个率先改变状态就会将该实例的状态传给Promise.race()方法，并将返回值作为Promise.race()方法产生的Promise实例的返回值

* 8、Promise.resolve()将现有对象转为Promise对象，如果该方法的参数为一个Promise对象，Promise.resolve()将不做任何处理；如果参数thenable对象(即具有then方法)，Promise.resolve()将该对象转为Promise对象并立即执行then方法；如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为fulfilled，其参数将会作为then方法中onResolved回调函数的参数，如果Promise.resolve方法不带参数，会直接返回一个fulfilled状态的 Promise 对象。需要注意的是，立即resolve()的 Promise 对象，是在本轮“事件循环”（event  loop）的结束时执行，而不是在下一轮“事件循环”的开始时。

* 9、Promise.reject()同样返回一个新的Promise对象，状态为rejected，无论传入任何参数都将作为reject()的参数

```javascript
function myPromise(constructor){
  let self=this;
  self.status="pending" //定义状态改变前的初始状态 
  self.value=undefined;//定义状态为resolved的时候的状态 
  self.reason=undefined;//定义状态为rejected的时候的状态 
  
  function resolve(value){
    //两个==="pending"，保证了了状态的改变是不不可逆的 
    if(self.status==="pending"){
      self.value=value;
      self.status="resolved"; 
    }
  }
  
  function reject(reason){
     //两个==="pending"，保证了了状态的改变是不不可逆的
     if(self.status==="pending"){
        self.reason=reason;
        self.status="rejected"; 
      }
  }
  
  //捕获构造异常 
  try{
      constructor(resolve,reject);
  }catch(e){
    reject(e);
    } 
}

myPromise.prototype.then=function(onFullfilled,onRejected){ 
  let self=this;
  switch(self.status){
    case "resolved": onFullfilled(self.value); break;
    case "rejected": onRejected(self.reason); break;
    default: 
  }
}

// 测试
var p=new myPromise(function(resolve,reject){resolve(1)}); 
p.then(function(x){console.log(x)})
//输出1
```

​

   
## 0196 eventBus 实现原理


原理：事件绑定和派发。预先全局声明一个事件和对应的处理函数，然后在另一个地方出发事件，执行函数。

使用场景：用于不同层级的组件执行函数，例如两个相隔较远的前端组件执行函数，不能使用 props，可以使用这个方案。

实现代码

```javascript
// 这个可以基本实现事件派发
class EventBus {

  eventMap = {};

  subscribe(key, fn) {
    this.eventMap[key] = fn;
  }

  dispatch(key, ...params) {
    let fn = this.eventMap[key];
    if (fn) {
      return fn(...params);
    }
  }
}

let eventBus = new EventBus();
eventBus.subscribe('onclick', (a, b) => { console.log(a, b) });
eventBus.dispatch('onclick', 1, 2);
```

多个事件的版本

```javascript
// 上面代码的不足，一个事件只能对应一个函数，不能对应多个函数；下面是多个函数的版本。
class EventBus {
  subscribers = {};


  subscribe(type, handler) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }


    const handlers = this.subscribers[type];
    handlers.push(handler);


    return () => {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    };
  }

  dispatch(type, ...data) {
    const handlers = this.subscribers[type];
    if (Array.isArray(handlers)) {
      handlers.forEach(handler => handler(...data));
    }
  }
}
```

​

   
## 0340 正则表达式的特殊符号区别


对比 \`/^\[a-z0-9]\[a-z]+$/\`和 \`/^\[a-z0-9]\[a-z]\*$/\`的区别？

也就是 + 和 \* 的区别

星号表示：匹配前面的子表达式零次或多次。

加号表示：匹配前面的子表达式一次或多次。

点表示：匹配除换行符 \\n 之外的任何单字符。

详细参考：<https://www.runoob.com/regexp/regexp-syntax.html> 

这些知识点都记过，最好熟练使用。



   
## 0352 jsonp 如何跨域


jsonp 的核心原理：利用script标签没有同源限制的方式，可以发送跨域的get请求（只能发送get请求）。

script标签中的src属性，将请求参数和当前请求的回调函数名。拼接在链接上。

最终由服务端接收到请求之后，拼接成前端可执行的字符串的形式返回。

这个结果字符串，最终会在前端的 script 标签中解析并执行。

   
## 0354 export 有多少情况


<https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/statements/export> 

<https://zh-hans.react.dev/learn/importing-and-exporting-components> 

组件的导出方式决定了其导入方式。默认导出和具名导出。

| 语法     | 导出语句                                | 导入语句                                  |
| :----- | :---------------------------------- | :------------------------------------ |
| 导出默认组件 | export default function Button() {} | import Button from './Button.js';     |
| 导出具名组件 | export function Button() {}         | import { Button } from './Button.js'; |



   
## 0262 字符串的编码格式有哪些


### 字符编码问题

常见字符串的编码格式：ASCII 码，Unicode，UTF-8 编码，GB2312 编码，这几个的区别

前端和编码相关的函数：escape() encodeURI() encodeURIComponent() 和对应的三个解密函数，区别和适应情况

四种类型编码简单理解：

\- ASCII 码是最早的英文和控制码对应的编码，0-127，需要记住大写A-Za-z对应的编码范围(065到090，097到122) 不支持中文

\- Unicode：因为 ASCII 无法表示各种编码，所以出现了 Unicode，大概有几万，可以代表世界上很多的语言表情符号等等，有对应的官方介绍全部的编码，也有不少的标准

\- UTF-8：是 Unicode 的一个类似子集，也有 UTF-16 UTF-32 等编码。文件声明部分会写 coding=utf-8

\- GB2313 是简体字的编码，还有繁体字等等，前端使用不多

前端三个字符串转换函数和加密函数：因为浏览器 URL 中不允许某些特殊符号，所以需要把特殊符号转换成编码，例如 ; 等

根据 MDN 介绍和知乎高赞总结：

\- escape 转义字符串，不推荐使用，未来可能废弃

\- encodeURI 转义特殊字符串（不转换某些符号，例如 http\:// 不转换）

\- encodeURIComponent 转义特殊字符串（特殊符号全部转换，例如 http\:// 会转换）

\- 具体使用：我们在发送请求时，URL 中可能有参数含有特殊符号（例如文件名用户名等用户输入）需要使用 encodeURIComponent 转义，然后拼接成 URL

<https://www.zhihu.com/question/21861899>

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/escape>

<https://www.cnblogs.com/luckyuns/p/6396701.html>

<https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html>

   
## 0268 JSON 的格式和方法


JSON 的三种格式

1 普通的数值、字符串、布尔值（很少使用）

2 对象（双引号，最后一个键值对不能加逗号）

3 数组（数组每一项可以是简单或者复杂的数据结构）

常用方法：

JSON.parse 把 JSON 转换成 JS

JSON.stringify 把 JS 数据类型转换成 JSON（字符串）

```javascript
JSON.stringify([1,2,3,4,5]);

JSON.parse('[1,2,3,4,5]');
```

注意，JSON.parse 需要 try-catch 避免数据格式错误

   
## 0269 搜索框中英文搜索


使用下面的函数，根据字符串的 unicode，判断是字母，符号，还是汉字，然后返回实际占用的字节个数。

```javascript
// 获取字符串实际占用的字节长度
export const getValueLength = (str) => {
  let code;
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    if (code === 10) { //solve enter problem
      len += 2;
    }
    else if (code < 0x007f) {
      len += 1;
    }
    else if (code >= 0x0080 && code <= 0x07ff) {
      len += 2;
    }
    // 汉字 unicode 9968到40869
    else if (code >= 0x0800 && code <= 0xffff) {
      len += 3;
    }
  }
  return len;
};
```

统一码（Unicode），包括字符集、编码方案等，它为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求。

   
## 0271 中文输入法 onChange 事件处理


问题：输入中文时，会频繁触发 onChange 事件，如果每次事件都触发 API，性能很差

需求：连续输入中文过程中，不处理；完成输入后，处理

使用 compositionStart 和 compositionEnd 事件，处理中文输入的开始和结束

注意 Chrome 浏览器的兼容性问题

```javascript
let isComposition = false
const isChrome = navigator.userAgent.indexOf('Chrome') > -1
 
const Input = () => {

  const handleComposition = (e) => {
    if (e.type === 'compositionend') {
      isComposition = false
      if (isChrome) {
        handleChange(e)
      }
    } else {
      isComposition = true
    }
  }
  
  const handleChange = (e) => {
    if (!isComposition) {
      const inputValue = e.target.value
      console.log(inputValue) // send API request
    }
  }
  
  return (
    <input
      type="text"
      onCompositionStart={handleComposition}
      onCompositionEnd={handleComposition}
      onChange={handleChange}
    />
  )
}
 
export default Input
```

参考链接：<https://blog.csdn.net/xjun0812/article/details/128440372>

   
## 0307 JS 数据类型


基本类型：Number、Boolean、String、null、undefined

引用类型：Object，对象子类型（Array，Function）

symbol（ES6 新增的）: 表示独一无二的值，主要用于对象的属性，避免属性冲突，避免魔法字符串。

```javascript
let s = Symbol();
let obj = {};
obj.s = 10;
```

BigInt（ES2020） 它提供了一种方法来表示大于 `2^53 - 1` 的整数，详见另一个知识点

参考链接

<https://juejin.im/post/5b2b0a6051882574de4f3d96>

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures>

   
## 0327 BigInt 是什么？


BigInt（ES2020） 它提供了一种方法来表示大于 `2^53 - 1` 的整数（大于 9007 1992 5474 0991）

可以用在一个整数字面量后面加 `n` 的方式定义一个 `BigInt` ，如：`10n`，或者调用函数 `BigInt()`（但不包含 `new` 运算符）并传递一个整数值或字符串值。

```javascript
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

BigInt 在某些方面类似于 Number ，但是也有几个关键的不同点：不能用于 Math 对象中的方法；不能和任何 Number 实例混合运算，两者必须转换成同一种类型。

在两种类型来回转换时要小心，因为 `BigInt` 变量在转换成 Number 变量时可能会丢失精度。

参考链接

<https://developer.mozilla.org/zh-CN/docs/Glossary/BigInt>

实际项目还没有用到这么大的数字

   
## 0309 js 加载时 async、defer 的区别


如果依赖其他脚本和 DOM 结果，使用 defer，先下载完所有defer再依次执行

如果与 DOM 和其他脚本依赖不强时，使用 async，先下载完先执行

<https://mp.weixin.qq.com/s/pw5lfFeNagmjFj45ygl2dQ> 

<https://zhuanlan.zhihu.com/p/622763093> 



   
## 0310 如何判断一个对象是不是空对象


判断对象是否为空

```javascript
Object.keys(obj).length === 0

```

```javascript
// jquery

/**
 * Check whether the object is empty.
 * The true will be returned if the "obj" is invalid.
 * @param {object} obj
 * @returns bool
 */
const isEmptyObject = (obj) => {
  let name;
  // eslint-disable-next-line
  for (name in obj) {
    return false;
  }
  return true;
};

```



   
## 0312 原型链和原型链的继承


标准答案

什么是原型链：当对象查找一个属性的时候，如果没有在自身属性中找到，那么就会查找自身的原型，如果原型还没有找到，那么会继续查找原型的原型，直到找到 Object.prototype 的原型时，此时原型为 null，查找停止。 这种通过原型链接的逐级向上的查找链，被称为原型链。

什么是原型继承：一个对象可以使用另外一个对象的属性或者方法，就称之为继承。具体是通过将这个对象的原型设置为另外一个对象，这样根据原型链的规则，如果查找一个对象属性且在自身不存在时，就会查找另外一个对象，相当于一个对象可以使用另外一个对象的属性和方法了。

实际案例，class App extents React.Component 这样 APP 对象可以使用 Component 原型链的属性和方法

<https://zhuanlan.zhihu.com/p/35790971> 

其他补充：

所有普通的 \[\[Prototype]] 链最终都会指向内置的 Object.prototype，其包含了 JavaScript 中许多通用的功能

为什么能创建 “类”，借助一种特殊的属性：所有的函数默认都会拥有一个名为 prototype 的共有且不可枚举的属性，它会指向另外一个对象，这个对象通常被称为函数的原型

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.constructor = Person;

```

\- 在发生 new 构造函数调用时，会将创建的新对象的 \[\[Prototype]] 链接到 Person.prototype 指向的对象，这个机制就被称为原型链继承

\- 方法定义在原型上，属性定义在构造函数上

\- 首先要说一下 JS 原型和实例的关系：每个构造函数 （constructor）都有一个原型对象（prototype），这个原型对象包含一个指向此构造函数的指针属性，通过 new 进行构造函数调用生成的实例，此实例包含一个指向原型对象的指针，也就是通过 \[\[Prototype]] 链接到了这个原型对象

\- 然后说一下 JS 中属性的查找：当我们试图引用实例对象的某个属性时，首先查找实例对象上是否有这个属性，如果没有找到，就去构造这个实例对象的构造函数的 prototype 所指向的对象上去查找，如果还找不到，就从这个 prototype 对象所指向的构造函数的 prototype 原型对象上去查找

\- 什么是原型链：这样逐级查找形似一个链条，且通过 \[\[Prototype]] 属性链接，所以被称为原型链

\- 什么是原型链继承，类比类的继承：当有两个构造函数 A 和 B，将一个构造函数 A 的原型对象的，通过其 \[\[Prototype]] 属性链接到另外一个 B 构造函数的原型对象时，这个过程被称之为原型继承。



   
## 0321 快速的让一个数组乱序


乱序数组（伪随机排序）

```javascript
[1,2,3,4,5,6,7,8,9,10].sort(function(){
    return Math.random() - 0.5;
});
```

​

   
## 0382 URLSearchParams 是什么


<https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams> 

URLSearchParams 是 JS 内置对象

可以取代 qs 第三方库，管理查询字符串

```javascript
var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true

searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"

searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"

searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"

```



   
## 0386 如何判断一个对象或者数组是空


判断对象是否为空

```javascript
Object.keys(obj).length === 0;

JSON.stringify(obj).length === 2;
```

判断数组是否为空，直接判断长度即可（已知参数必须为数组的前提）

   
## 0391 Event.isTrusted 是什么


Event 接口的 **isTrusted** 属性是一个只读属性，它是一个布尔值。

当事件是由用户真实行为生成的时候，这个属性的值为 `true` 

而当事件是由脚本创建、修改、通过 EventTarget.dispatchEvent() 派发的时候，这个属性的值为 `false` 。

   
## 0393 dbClick 不支持 IOS 设备怎么办


iOS 兼容性问题，不支持 dbClick 事件，可以用两次单击事件模拟双击事件。

```javascript
  onMobileDoubleClick = (event) => {
    // 清空之前的定时器（200内点击，清空第一次的定时器）
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    // 如果是JS模拟事件，直接返回
    if (!event.isTrusted) {
      return;
    }

    // 获取当前点击的坐标
    const { pageX, pageY } = event;

    // 如果已经点了一次（等待第二次点击）
    if (this.isWaitingForDoubleClick) {
      this.isWaitingForDoubleClick = false;

      // 判断前后两次点击的位置，如果点击同一个位置，就认为是双击
      const diffX = Math.abs(pageX - this.prevPosition.x);
      const diffY = Math.abs(pageY - this.prevPosition.y);
      if (diffX < 5 && diffY < 5) {
        this.onCellDoubleClick(event);
      }
    } else {
      // 如果刚开始点击，记录下第一次的位置
      this.prevPosition = { x: pageX, y: pageY };
      event.stopPropagation();
      this.isWaitingForDoubleClick = true;

      // 如果 200ms 内没有再次点击，那么清空第一次的点击事件，就认为是单击
      this.timer = setTimeout(() => {
        this.isWaitingForDoubleClick = false;
      }, 200);
    }
  }
```


   
## 0411 setSelectionRange


setSelectionRange 可以从一个被 focused 的 input 元素中，选中特定范围的内容。

例如下面选中 input 中的第2-5个字符

```javascript
input.setSelectionRange(2, 5);
```

​

   
## 0420 判断对象的某个属性是否存在


如果给定一个对象 obj，判断某个属性 name 是否存在?

方法1 直接获取对象的属性是否为空

```javascript
let value = obj['name'];

// 但是复杂的值需要处理
if (!value && value !== 0 && value !== null && value !== false) {
    console.log('不存在')
}
```


方法2 Object.prototype.hasOwnProperty.call 判断某个属性是否存在

避免判断对象中的值是 null undefined, 0 false ‘’ 这几种情况

```javascript
let obj = { a: null, b : '', c : false, d: undefined, e: 0 };

Object.prototype.hasOwnProperty.call(obj, 'name');
```

如果是简单对象使用方法1，如果复杂对象使用方法2更好

   
## 0429 正则表达式怎么使用


开始符号，结束符号 ^\$

通配符 ？.

\[0-9]\[a-z]\[A-Z] 匹配等

正则表达式，这里循序渐进给出几个题目：<https://regexone.com/lesson/repeating_characters>

正则表达式查询：<https://regexr.com/>

如何避免正则表达式报错？

使用构造函数，创建正则表达式，如果传参有特殊符号，可能报错 ’invalid-regular-expression‘

解决：先把字符串中的特殊符号转义，然后创建正则表达式

```javascript
// The special symbols should not be used as wildcards in regular expressions, need to be escaped into normal symbols
const escapeRegExp = (value) => {
  if (typeof value !== 'string') return '';
  return value.replace(/[.\\[\]{}()|^$?*+]/g, '\\$&');
};

let value = '[]'
let reg = new RegExp(escapeRegExp(value), 'ig');
console.log(reg); // /\[\]/gi
```

​

   
## 0443 字符串正则表达式相关 API


获取一个字符串中满足条件的全部子字符串（exec） reg.exec(str) 这里的 reg 需要先设置好，不需要每次新建

如果有满足的结果，那么继续循环查看下一个；否则返回 null

```javascript
var str = "我今年25岁明年26岁后年27岁前年24岁";
var reg = /\d+/g;
var tmp;
while (tmp = reg.exec(str)) {
  console.log(tmp[0])
}
```

一共有6种方法（看字符串中是否有指定的子字符串）具体看另一篇笔记（判断字符串中是否包含某个字符串）

* str.indexOf() return index

* str.includes() return boolean

* str.search(str) return index

* str.match(str) return array or null

* reg.test(str) return boolean

* reg.exec(str) return array or null

#### 字符串查找的 6 个 API

indexOf / lastIndexOf 返回满足的第一个或者最后一个的索引，未找到返回 -1

```javascript
// str.indexOf(str) === number
'Hello'.indexOf('e') === 1
'Hello'.lastIndexOf('l') === 3
```

includes 返回布尔值

```javascript
// str.includes(str) === bool
'Hello'.includes('lo') === true
```

str.search(str | regexp) 返回满足条件的字符的索引

```javascript
// str.search(str|reg) === number
'Hello'.search('e') === 1
'Hello'.search(/ll/) === 2
```

str.match(str | regexp)

字符串和正则的返回值不同

```javascript
'Helo Hello'.match('Hel') 
// ['Hel', index: 0, input: 'Helo Hello', groups: undefined]

'Helo Hello'.match(/HEL/ig) 
// ['Hel', 'Hel']
```

str.matchAll(str | reg) 注意：返回值是一个迭代器，可以使用for…of…，扩展符(…)或Array.from() 处理

```javascript
const str = 'hello javascript hello css';
console.log(Array.from(str.matchAll(/hello/g)));
// ['hello', index: 0, input: 'hello javascript hello css', groups: undefined],
// ['hello', index: 17, input: 'hello javascript hello css', groups: undefined],
```

regexp.test(str)

```javascript
/hel/ig.test('Hello') === true
```

regexp.exec(str)

```javascript
/hel/ig.exec('Hello') === ['Hel', index: 0, input: 'Hello', groups: undefined]
```

小结：

* indexOf lastIndexOf includes 是一组，字符串中找另一个字符串

* search match 是字符串的方法，可以传字符串或者正则，一个返回 index，一个返回具体的结果

* test 和 exec 是正则表达式的方法，返回布尔值或者具体的结果

* match 和 exec 返回值一致，参数和方法换位

​

   
## 0444 动画性能 requestAnimationFrame


为什么使用：默认的动画使用 setInterval 处理，然后浏览器渲染的频率是 60 次每秒，所以代码如下。

```javascript
this.timer = setInterval(() => {
  fn();
}, 1000 / 60);

// 停止动画
clearInterval(this.timer);
```

这样写，JS 实际执行的间隔，和浏览器渲染重排的时间不一定完全吻合，性能可能不好。

所以我们引入了 requestAnimationFrame，这样可以让JS执行的时间和浏览器渲染的时间一致，性能增加。

```javascript
function fn() {
  // 动画逻辑 this.div.left = this.div.left + 10
  if (time < 2000) {
    this.timer = requestAnimationFrame(fn);
  	// 两秒内，动画函数内部循环执行动画
  }
}
fn();

// 也可以外部强制关闭动画（键盘鼠标事件触发）
cancel = () => {
  cancelAnimationFrame(this.timer);
}
```

```javascript
startAnimation = () => {
  render();
  requestAnimFrame(startAnimation);
}
```

参考：

<https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame>

<https://www.jianshu.com/p/fa5512dfb4f5>

<http://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html>

<https://javascript.ruanyifeng.com/htmlapi/requestanimationframe.html>

在某些老电脑上，requestAnimationFrame 是 60Hz 进行渲染，那么就是 16.67ms渲染一次，部分设备会卡，可以手动设置渲染时间。

参考：<http://zhangchen915.com/index.php/archives/675/> &#x20;

```javascript
class AnimationFrame {
  constructor(fps = 60, animate) {
    this.requestID = 0;
    this.fps = fps;
    this.animate = animate;
  }

  start() {
    let then = performance.now();
    const interval = 1000 / this.fps;
    const tolerance = 0.1;

    const animateLoop = (now) => {
      this.requestID = requestAnimationFrame(animateLoop);
      const delta = now - then;

      if (delta >= interval - tolerance) {
        then = now - (delta % interval);
        this.animate(delta);
      }
    };
    this.requestID = requestAnimationFrame(animateLoop);
  }

  stop() {
    cancelAnimationFrame(this.requestID);
  }
}
```

​

   
## 0445 循环中异步函数


循环 forEach map 中，如果有异步函数，需要异步函数的结果，怎么实现？

我们写一个node异步读取文件的例子，使用 async 的语法

```javascript
var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

var asyncReadFile = async function (){
  var f1 = await readFile('/tmp/b.sh');
  var f2 = await readFile('/tmp/a.sh');
  console.log(f1.toString(), f2.toString());
};
```

循环中使用异步方式，有两种方法

第一个：改成 for 循环，内部使用 async await 实现——这个方式更好

```javascript
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  for (let doc of docs) {
    await db.post(doc);
  }
}
```

第二种：使用 Promise.all 实现

```javascript
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));
  let results = await Promise.all(promises);
}

// 或者使用下面的写法
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));
  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
}
```

参考链接：<http://www.ruanyifeng.com/blog/2015/05/async.html>

   
## 0450 stringify 函数


作用：把JS对象或者数组，转换成字符串格式

参数：

value是必选参数，表示需要转换的对象或者数组；

replacer 是可选参数，表示把对象转换成JSON的转换函数，可以选择null；

space 表示JSON的缩进或者空格（数字表示空格数量，或者非数字\t）

```javascript
JSON.stringify(value[, replacer[, space]])
```

​

   
## 0455 转换欧洲数字格式设置


[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global\_Objects/Intl/NumberFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat")

```javascript
Intl.NumberFormat(locale, option).format(10000);
```

这个内置方法，可以把一个数字转换成不同格式的货币，分隔符，单位，有效数字等。

第一个参数是 locale 语言，例如传入德国，那么小数点和逗号是相反的设置。

第二个参数是 option 可选参数，配置对象。对象的属性有 style currency unit 可以设置货币数字分隔符等。

实际案例：

```javascript
const number = 123456.789;

// 货币格式
new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(number);
// 123.456,79 €

// 日元不使用小数
new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(number,);
// ￥123,457

// 限制三位有效数字
new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(number,);
// 1,23,000

// 带有单位的格式化
new Intl.NumberFormat("pt-PT", {
  style: "unit",
  unit: "kilometer-per-hour",
}).format(50);
// 50 km/h

  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
// 16 litres
```

​

   
## 0466 For-in 和 for-of


For-in 和 for-of 区别

官方文档：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of>

传统的 for 有局限，forEach 和 map 适应数组的循环，所以有了for in 和 for of 循环。

for...of... 循环：可以循环可枚举对象（数组，对象，Map， set， 伪数组，构造器等），循环获取内部元素，可以使用break跳出，不能循环可枚举对象原型链上的属性和方法。

for...in... 可以对象（对象、数组、函数）（包括原型链上的属性），使用前需要注意

结论：遍历数组优先使用 for forEach map 处理，遍历对象优先使用 for...of... 获取对象的属性

hasOwnProperty 可以过滤掉原型链上的属性。

```javascript
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}
```

参考：[https://blog.csdn.net/tyxjolin/article/details/130091368](https://blog.csdn.net/tyxjolin/article/details/130091368 "https://blog.csdn.net/tyxjolin/article/details/130091368")

   
## 0476 web worker 多线程


参考这里：<https://juejin.cn/post/7139718200177983524>

#### 原生语法实现

src/app.js

```javascript
  const myWorker = new Worker('./worker.js');

  myWorker.addEventListener('message', (e) => {
    console.log(e.data);
  });

  // 给 worker 传递一个较大的数值，用于计算
  myWorker.postMessage(table);
```

打包后放到 static/bundle.js 目录中

然后 static/worker.js 代码如下

```javascript
self.addEventListener('message', (e) => {
  self.postMessage('worker is starting');
  const table = e.data;

  // 模拟大运算量（对象转换）
  console.time();
  let resultArr = [];
  for (let i = 0; i < 10000; i++) {
    resultArr[i] = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(table))))
  }
  console.timeEnd();

  self.postMessage('worker is ending');
});
```

可以通过浏览器看到实际的计算过程。

注意1：这里 app.js 和 worker.js 是单独打包后到 static 目录下面，打包后的代码互相引用才行，打包前不能直接引用（不能直接放在 src 目录下，否则提示错误）

注意2：只能在浏览器中使用，Node 中不支持会报错，ReferenceError: Worker is not defined

#### 第三方库 comlink 实现

[https://github.com/GoogleChromeLabs/comlink](https://github.com/GoogleChromeLabs/comlink "https://github.com/GoogleChromeLabs/comlink")

#### 集成到 react-webpack 开发环境

webpack 4和更早的版本，需要 webpack 对应的 worker-loader 实现。webpack5 版本已经不需要 worker-loader，直接使用即可，编译后也正常使用，示例代码如下（self eslint 会报错，不能使用全局变量，忽略这个报错即可）

参考：[https://webpack.js.org/guides/web-workers/](https://webpack.js.org/guides/web-workers/ "https://webpack.js.org/guides/web-workers/")

index.js

```javascript
const worker = new Worker(new URL('./deep-thought.js', import.meta.url));

worker.postMessage({ question });

worker.onmessage = ({ data: { answer } }) => {
  console.log(answer);
};
```

deep-thought.js

```javascript
self.onmessage = ({ data: { question } }) => {
  self.postMessage({
    answer: 42,
  });
};
```

在浏览器控制条中，可以看到主线程和工作线程的执行情况（下面模拟大量运算）

![](https://cloud.seatable.cn/workspace/32/asset/e82c7317-556e-45c4-8b5d-092331cd8977/images/auto-upload/image-1720078532322.png)

注：import.meta 是全局变量，给 JavaScript 模块暴露特定上下文的元数据属性的对象

参考MDN [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta")

   
## 0658 鼠标双击事件


前端监听鼠标双击事件，有的同事监听两次 onClick 事件，计算点击的间隔，判断是否是双击，实际上没有必要。

原生 JS 中，参考 MDN，dblclick 直接可以获取事件对象

[https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent "https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent")

[https://developer.mozilla.org/zh-CN/docs/Web/API/Element/dblclick\_event](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/dblclick_event "https://developer.mozilla.org/zh-CN/docs/Web/API/Element/dblclick_event")

```javascript
document.getElementById('buttonId').addEventListener('dblclick', function() {
    alert('双击按钮');
});
```

React 中，可以获取合成事件 onDoubleClick

```html
<div onDoubleClick={handleDoubleClick}>Double click me!</div>
```

备注：

双击事件不生效可能的问题：如果某个DOM上同时绑定了单击事件和双击事件，那么可能存在影响，造成双击事件无法生效。不同操作系统和浏览器，对双击的间隔灵敏度，双击前单击的次数处理不一样，可能造成不一致，所以不建议同一个元素同时监听单击和双击事件。详见：

One more suggested read is jQuery's [dblclick handler](https://api.jquery.com/dblclick/):

> It is inadvisable to bind handlers to both the click and dblclick events for the same element. The sequence of events triggered varies from browser to browser, with some receiving two click events before the dblclick and others only one. Double-click sensitivity (maximum time between clicks that is detected as a double click) can vary by operating system and browser, and is often user-configurable.

[https://stackoverflow.com/questions/25777826/onclick-works-but-ondoubleclick-is-ignored-on-react-component](https://stackoverflow.com/questions/25777826/onclick-works-but-ondoubleclick-is-ignored-on-react-component "https://stackoverflow.com/questions/25777826/onclick-works-but-ondoubleclick-is-ignored-on-react-component")

   
## 0874 substr 废弃方法的替代


substr()：自 ES6 起被标记为已弃用，建议优先使用 slice() 或 substring()。

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global\_Objects/String/substr](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr")
![](https://cloud.seatable.cn/workspace/32/asset/e82c7317-556e-45c4-8b5d-092331cd8977/images/2025-05/image-1748509919736.jpg)

substr(start, length)

substring(start, end)

slice(start, end)

如果替换，直接把 substr() 改成 substring(start, start + length) 即可，然后需要测试

   
## 0905 new AbortController() 是什么意思


`new AbortController()` 是 JavaScript 中用于**取消异步操作**的一个核心 API

它是 ES2017 引入的标准特性，最常见的场景就是取消网络请求（比如 fetch）

```javascript
// 1. 创建 AbortController 实例
const controller = new AbortController();

// 2. 获取控制器的信号（用于绑定异步操作）
const signal = controller.signal;

// 3. 发起带取消信号的网络请求
fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
  .then(response => response.json())
  .then(data => console.log('请求成功:', data))
  .catch(error => {
    // 4. 捕获取消请求的异常（关键：区分「取消」和「其他错误」）
    if (error.name === 'AbortError') {
      console.log('请求被主动取消了');
    } else {
      console.log('请求出错:', error);
    }
  });

// 5. 模拟「500毫秒后取消请求」（比如用户点击了「取消」按钮）
setTimeout(() => {
  controller.abort(); // 调用 abort 方法，触发取消操作
}, 500);
```

常用 API

```javascript
const controller = new AbortController();

controller.signal
// 一个 AbortSignal 对象，作为「信号载体」传递给异步操作，异步操作会监听这个信号的状态。

controller.abort()
// 调用后会将 signal 的状态标记为「已中止」，并触发绑定的异步操作取消。
// 取消后会抛出 AbortError 异常，需要在 catch 中判断并处理（避免和普通错误混淆）。
```

​

  