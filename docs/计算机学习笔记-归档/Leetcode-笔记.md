# Leetcode
### 0000-readme
Leetcode 题目众多，实际上前 100题已经可以代表 90%的情况，把前 100 题目做好做透，就有质的提升

后面几千题考点类似


### 0001-two-sum.js
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

```javascript
// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 使用哈希表
// 68 ms, 在所有 javascript 提交中击败了85.69%
function twoSum2(nums, target) {
  const len = nums.length;
  const hash = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    const index = hash[`${item}`];
    if (index > -1) {
      return [index, i];
    }
    hash[`${target - item}`] = i;
  }
}

```

​


### 0002-addTwoNumbers.js
02-addTwoNumbers.js

给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

```javascript
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
// 特殊情况
// [9, 9], [9] => [8, 0, 1]
// [5], [5] => [0, 1]

// 思路1：112 ms, 在所有 JavaScript 提交中击败了82.57%
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 如果当前节点是10，那么判断下一个节点是否存在，把当前节点变成1，然后下一个节点加1
// 优化：应该判断大于10
function handleTen(node) {
  if (node.val === 10) {
      if (node.next) {
        node.val = 0;
        node.next.val++;
        handleTen(node.next);
      } else {
        node.val = 0;
        node.next = new ListNode(1);
      }
  }
}

// 递归计算两个链表的每一项的和，并返回到 result 中
function addTwoNumbers(l1, l2) {
  // 处理两个链表不存在的情况
  if (!l1 && !l2) {
    return null;
  }
  if (!l1) {
    handleTen(l2);
    return l2;
  }
  if (!l2) {
    handleTen(l1);
    return l1;
  }

  let value = l1.val + l2.val;
  if (value > 9) {
    if (l1.next) {
      l1.next.val++;
    } else {
      l1.next = new ListNode(1);
    }
    value -= 10;
  }
  const result = new ListNode(value);
  result.next = addTwoNumbers(l1.next, l2.next);
  return result;
}

// 思路2
// 112 ms, 在所有 JavaScript 提交中击败了82.57%
const addTwoNumbers2 = function (l1, l2) {
  // 辅助函数
  const getVal = function (list1, list2, plus = 0) {
    const val1 = list1 && list1.val;
    const val2 = list2 && list2.val;
    const total = val1 + val2 + plus;
    return {
      val: total % 10,
      next: parseInt(total / 10, 10),
    };
  };
  let l = null;
  let plus = 0;
  // 辅助函数
  // eslint-disable-next-line no-shadow
  function setNode(vm, l1, l2) {
    if (!l1 && !l2 && !plus) {
      return vm;
    }
    const totalObj = getVal(l1, l2, plus);
    if (totalObj.next) {
      plus = totalObj.next;
    } else {
      plus = 0;
    }
    if (!l) {
      l = new ListNode(totalObj.val);
      vm = l;
    } else {
      vm.next = new ListNode(totalObj.val);
      vm = vm.next;
    }
    if ((l1 && l1.next) || (l2 && l2.next) || plus) {
      return setNode(vm, l1 && l1.next, l2 && l2.next);
    }
  }
  setNode(l, l1, l2);
  return l;
};

export { addTwoNumbers, addTwoNumbers2 };

```

​


### 0003-lengthOfLongestSubstring.js
\[3] 无重复字符的最长子串

```javascript
// 初步思路：双指针（快慢指针实现）
// 两个指针移动，然后不断判断子序列内部是否重复，然后累计计算当前最长的距离。
// 1、循环获取子串 ——双指针
// 2、如何判断一个子串是否有重复字符？——这个直接IndexOf行不行
// 如果这个方法不好，那么使用对象判断是否重复

function lengthOfLongestSubstring(s) {

  // 辅助函数：true 没有重复字符串（有没有更好的办法）
  const checkStr = (str) => {
    const len = str.length;
    for (let i = 0; i < len; i++) {
      const current = str[i];
      if (str.lastIndexOf(current) !== str.indexOf(current)) {
        return false;
      }
    }
    return true;
  };

  const len = s.length;
  // 处理特殊情况（如果长度是0或者是1，那么直接返回长度）
  if (len <= 1) {
    return len;
  }
  // 设置初始值
  let start = 0;
  let end = 1;
  let num = 1;

  // 循环
  while (end <= len - 1) {
    const sub = s.slice(start, end + 1);
    // result 这个变量名不好，可以改成是否有重复的子字符串
    const result = checkStr(sub);
    if (result) {
      // 如果不重复，累积最大值，快指针加一
      end++;
      num = num > sub.length ? num : sub.length;
    } else {
      // 如果重复，重新开始
      if (end === len - 1) {
        return num;
      }
      start++;
      end++;
    }
  }
  return num;
}

export { lengthOfLongestSubstring };
```

​


### 0004-findMedianSortedArrays.js
04

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。(如果有一个是空的情况)

```javascript
// 思路：双指针：把排序数组的最小的一个放在第三个数组中，如果一个是空，那么就放另一个，如果结果数组的长度大于index2，那么返回结果数组的最后两项

// 尝试用双指针解决: 这个本地单元测试通过，严格逻辑可能有问题，需要注意——算法逻辑不太好
function findMedianSortedArrays(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const middle = (len1 + len2) / 2;
  let index1 = null;
  let index2 = null;
  // 这里判断奇数还是偶数
  if (middle % 1 !== 0) {
    index1 = middle - 0.5;
  } else {
    index1 = middle - 1;
    index2 = middle;
  }
  // len 是长度，index 是数组下标，需要减一；先处理1个数组是0的情况
  if (len1 === 0) {
    if (index2) {
      return (nums2[index1] + nums2[index2]) / 2;
    }
    return nums2[index1];
  }
  if (len2 === 0) {
    if (index2) {
      return (nums1[index1] + nums1[index2]) / 2;
    }
    return nums1[index1];
  }
  if (len1 === 1 && len2 === 1) {
    return (nums1[0] + nums2[0]) / 2;
  }
  // 处理两个数组都不是空的情况，使用第三个数组和双指针
  if (index2) {
    // 偶数，需要获取两个数并计算平均数
    let i = 0; let j = 0;
    const sum = [];
    // 能否改成一个变量？这里不需要数组，直接使用一个临时变量，记录上一个参数是多少就行
    while (i + j <= index2) {
      if (nums1[i] <= nums2[j] && nums1[i] !== ) {
        sum.push(nums1[i]);
        i++;
      } else if (nums2[j] !== ) {
        sum.push(nums2[j]);
        j++;
      } else {
        if (i + 1 === len1) {
          // 第一个数列结束了，第二个剩余
          const tmp = index2 - i;
          return ((nums2[tmp] + nums2[tmp - 1]) / 2);
        }
        // 第二个结束了，第一个剩余
        const tmp = index2 - j;
        return ((nums1[tmp] + nums1[tmp - 1]) / 2);
      }
      if (i + j - 1 === index2) {
        return ((sum[i + j - 1] + sum[i + j - 2]) / 2);
      }
    }
  } else {
    // 奇数，计算当时的那个中位数即可
    let i = 0;
    let j = 0;
    while (i + j <= index1) {
      if (nums1[i] <= nums2[j] && nums1[i] !== ) {
        i++;
      } else if (nums2[j] !== ) {
        j++;
      } else {
        if (i + 1 === len1) {
          return nums2[index1 - i];
        }
        return nums1[index1 - j];
        // 一个已经结束，另一个还有很多
        // i + j < index1 其中一个已经循环结束了
        // 那么直接返回剩余的一个数组的 index1 - i 即可
      }
      if (i + j === index1) {
        if (nums1[i] === ) return nums2[j];
        if (nums2[j] === ) return nums1[i];
        return nums1[i] < nums2[j] ? nums1[i] : nums2[j];
      }
    }
  }
}


// 思路二：把排序后的数组合并到一起，然后重新排序，获取中位数即可，想法最简单，性能有点差
// 156 ms, 在所有 javascript 提交中击败了48.38%
function findMedianSortedArrays2(nums1, nums2) {
  const arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);
  const len = arr.length;
  const middle = len / 2;
  let index1 = null;
  let index2 = null;
  if (middle % 1 !== 0) {
    index1 = middle - 0.5;
  } else {
    index1 = middle - 1;
    index2 = middle;
  }
  if (index2) {
    return (arr[index1] + arr[index2]) / 2;
  }
  return arr[index1];
}

export { findMedianSortedArrays, findMedianSortedArrays2 };
```

​


### 0005-longestPalindrome.js
​

```javascript
const longestPalindrome = function(s) {
  // 辅助函数：判断子字符串是否是回文
  // 循环一半字符串即可
  const checkPalindrome = (start, end) => {
    const subLen = Math.ceil((end - start) / 2);
    for (let i = 0; i <= subLen; i++) {
      if (s[start + i] !== s[end - i]) {
        return false;
      }
    }
    return true;
  };
  const len = s.length;
  for (let i = len - 1; i > 0; i--) {
    // 这是当前子字符串的长度
    const currentLen = i;
    // 内部循环，遍历全部的情况（获取开始节点和结束节点的指针）
    for (let j = 0; j < len - currentLen; j++) {
      const start = j;
      const end = j + currentLen;
      // 判断两个指针构成的子字符串，是否是回文的
      // 注意指针的边界判断
      if (checkPalindrome(start, end)) {
        return s.slice(start, end + 1);
      }
    }
  }
  return s[0];
};

export { longestPalindrome };

```

​


### 0006-convertZ.js
​

```javascript
/**
 * [6] Z 字形变换
 * @lc app=leetcode.cn id=6 lang=javascript
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  // 注意处理 num是1-2的情况
  if (numRows === 1) return s;
  // 建一个对象，设置不同的键，然后每一个numRows是空字符串
  const dict = {};
  for (let key = 1; key <= numRows; key++) {
    dict[key] = '';
  }
  // 如果当前的序号是 0 或者是 numRows.length - 1
  let current = 1;
  let direction = true;
  for (let i = 0; i < s.length; i++) {
    // 获取当前的字符串，并加入到字典中
    const item = s[i];
    dict[current] = dict[current] + item;
    // 当循环到第一个或者最后一个，换向
    if (current === numRows) {
      direction = false;
    } else if (current === 1) {
      direction = true;
    }
    // 当前的序号增加或者减少
    if (direction) {
      current++;
    } else {
      current--;
    }
  }
  let result = '';
  for (let i = 1; i <= numRows; i++) {
    const item = dict[i];
    result += item;
  }
  return result;
  // 然后遍历完，把对应的字符串从对象中拿出
  // 然后再拼接成新的字符串
};

export { convert };

```

​


### 0007-reverse.js
​

```javascript
// 07-整数反转
// 给出一个32位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 方法1：使用数组和字符串反转数字
// 难点：没有看清楚整数溢出说明，前两次调试错误
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
// 时间复杂度不好，128 ms 35.8 MB weak
/**
 * @param {number[]} x
 * @return {number[]}
 */
function reverse1(x) {
  const isMinus = x < 0;
  const arr = String(Math.abs(x)).split('').reverse();
  const result = Number(arr.join(''));
  if (result >= (2 ** 31) - 1 || result <= ((-2) ** 31) + 1) {
    return 0;
  }
  return isMinus ? -result : result;
}

// 算法二：遍历这个数字，依次获取个位数并放在新的数中。96 ms 较好
function reverse(x) {
  if (x === 0) return x;
  const isMinus = x < 0;
  let result = 0;
  x = Math.abs(x);
  while (x > 0) {
    const a = x % 10;
    result = result * 10 + a;
    x = (x - a) / 10;
  }
  if (result >= (2 ** 31) - 1 || result <= ((-2) ** 31) + 1) {
    return 0;
  }
  return isMinus ? -result : result;
}

export { reverse, reverse1 };

```

​


### 0008-transform-string.js
​

```javascript
// 08 字符串转化成数值（特殊情况很多）
// 请你来实现一个 atoi 函数，使其能将字符串转换成整数。

/**
 *
首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。
注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。
在任何情况下，若函数不能进行有效的转换时，请返回 0。
假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。
*/

/**
 * @param {string} str
 * @return {number}
 */
// const myAtoi = function(str) {
//   const number = Number(str);
//   if (isNaN(number)) {
//     let result = 0;
//     while (str.length > 0) {
//       if (str.slice(0, 1) === ' ') break;
//       const first = 1 * str.slice(0, 1);
//       if (isNaN(first)) break;
//       result = result * 10 + first;
//       str = str.substring(1);
//     }
//     return result;
//   }
//   // handle number max and min
//   const max = Math.pow(2, 31);
//   const min = Math.pow(-2, 31);
//   return number > max ? max : ( number < min ? min : number);
// };

// 标准答案都会使用正则表达式，直接使用字符串API无法处理复杂情况
// 更快的答案直接把最值计算转化成具体的数值比较
// 尽快巩固常见的正则表达式，日常使用正则表达式不多

function myAtoi(str) {
  str = str.trim();
  // [+|-] 表示一个或者多个字符
  // d+ 表示一个或者多个数值
  const reg = new RegExp(/^[+|-]?\d+/);
  if (!reg.test(str)) {
    return 0;
  }
  const val = parseInt(str.match(reg), 0);
  const min = -(2 ** 31);
  const max = -min - 1;
  return Math.max(Math.min(val, max), min);
}

export { myAtoi };

```

​


### 0009-isPalindrome.js
​

```javascript
// 09-判断回文数
// https://leetcode.com/problems/palindrome-number/description/
// 如果是0，是回文数
// 如果是0结尾，一定不是回文数；如果是负数，一定不是回文数
// 如果是小数，一定不是回文数（输入整数，不考虑这个情况）
// 执行用时: 220 ms 45.2 MB
function isPalindrome(x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  // 其他的进入循环判断
  const arr = String(x).split('');
  for (let i = 0, len = arr.length; i < len / 2; i++) {
    if (arr[i] !== arr[len - i - 1]) {
      return false;
    }
  }
  return true;
}

// 方法二
// 判断回文数：原数字取反相同即可
// 204 ms 46.8 MB
function isPalindrome2(x) {
  if (x < 0) return false;
  if (x === 0) return true;
  let a = x;
  let b = 0;
  while (a > 0) {
    b = b * 10 + (a % 10);
    a = (a - (a % 10)) / 10;
  }
  return b === x;
}

export { isPalindrome, isPalindrome2 };

```

​


### 0010-isMatch.js
​

```javascript
/*
 * @lc app=leetcode.cn id=10 lang=javascript
 * [10] 正则表达式匹配
 */
// 思路：
// 从左向右匹配比较复杂，从右向左匹配
// 这个是动态规划：F(n)= n && F(n - 1)
// 具体就是：一个字符串是否满足 === 最后一个字符是否满足 && 前面的字串是否满足，然后迭代实现
// 参考链接：https://leetcode.cn/problems/regular-expression-matching/solution/shou-hui-tu-jie-wo-tai-nan-liao-by-hyj8/
// 这个比较难，未来多做几次
// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  if (s == null || p == null) {
    return false;
  }

  const sLen = s.length;
  const pLen = p.length;

  const dp = new Array(sLen + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(pLen + 1).fill(false);
  }

  // 基本情况
  dp[0][0] = true;
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] == '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // 迭代（动态规划）
  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      // 1.如果最后一个字符相等，或者最后一个是通配符. 满足匹配下一个
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      }
      // 2. 如果最后一个是 *，分情况
      else if (p[j - 1] == '*') {
        // 2.1 如果前一位相等，或者是通配符
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          // 下面三种情况满足一种即可（这里没有考虑到）
          // 这个情况比较复杂
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        }
        // 2.2 如果前一位不相等，呢么等于前面两位的字符串
        else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  // 返回对应的匹配结果
  return dp[sLen][pLen];
};

export { isMatch };

```

​


### 0011-maxArea.js
​

```text
// 11
// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，
// 垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。
// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49

// 方法1：两次循环，逐步比较计算最大值
// 两次循环性能不好：1868 ms, 在所有 javascript 提交中击败了5.11%
function maxArea(height) {
  if (height.length === 2) {
    return height[0] > height[1] ? height[1] : height[0];
  }
  let max = 0;
  const { length } = height;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (height[j + 1] && height[j + 1] > height[j]) {
        continue;
      }
      const area = (height[i] > height[j] ? height[j] : height[i]) * (j - i);
      if (area > max) {
        max = area;
      }
    }
  }
  return max;
}

// 方法2：双指针逼近最大值
// 84 ms, 在所有 JavaScript 提交中击败了82.20%
// 一次循环实现（算法复杂度满足）
function maxArea2(height) {
  const len = height.length;
  if (len === 2) {
    return Math.min(height[0], height[1]);
  }
  let left = 0;
  let right = len - 1;
  let max = Math.min(height[left], height[right]) * (right - left);
  while (left !== right) {
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    const curr = Math.min(height[left], height[right]) * (right - left);
    if (curr > max) {
      max = curr;
    }
  }
  return max;
}

export { maxArea, maxArea2 };

```

​


### 0012-intToRoman.js
​

```text
// 12-罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

// 这几种情况特殊处理
// 不断取余数，然后存放在数组中，最后遍历数组，转化成字符串输出
// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

// 148 ms, 在所有 javascript 提交中击败了94.84%
function intToRoman(num) {
  const res = [];
  res[0] = (num - (num % 1000)) / 1000;
  num %= 1000;
  res[1] = (num - (num % 500)) / 500;
  num %= 500;
  res[2] = (num - (num % 100)) / 100;
  num %= 100;
  res[3] = (num - (num % 50)) / 50;
  num %= 50;
  res[4] = (num - (num % 10)) / 10;
  num %= 10;
  res[5] = (num - (num % 5)) / 5;
  num %= 5;
  res[6] = num;
  // 1994 [ 1, 1, 4, 1, 4, 0, 4 ] M CM XC IV
  // if null , ''
  let result = '';

  // 1000
  while (res[0] > 0) {
    result += 'M';
    res[0]--;
  }

  // 100
  if (res[2] === 4) {
    result = res[1] === 1 ? `${result}CM` : `${result}CD`;
  } else {
    // while (res[1] > 0) {
    //   result += 'D';
    //   res[1]--;
    // }
    if (res[1] === 1) {
      result += 'D';
    }
    while (res[2] > 0) {
      result += 'C';
      res[2]--;
    }
  }

  // 10
  if (res[4] === 4) {
    result = res[3] === 1 ? `${result}XC` : `${result}XL`;
  } else {
    // while (res[3] > 0) {
    //   result += 'L';
    //   res[3]--;
    // }
    if (res[3] === 1) {
      result += 'L';
    }
    while (res[4] > 0) {
      result += 'X';
      res[4]--;
    }
  }

  // 1
  if (res[6] === 4) {
    result = res[5] === 1 ? `${result}IX` : `${result}IV`;
  } else {
    // while (res[5] > 0) {
    //   result += 'V';
    //   res[5]--;
    // }
    if (res[5] === 1) {
      result += 'V';
    }
    while (res[6] > 0) {
      result += 'I';
      res[6]--;
    }
  }
  return result;
}

export { intToRoman };

```

​


### 0013-romanToInt.js
​

```javascript
// 罗马字符串转化成数值
// https://leetcode.com/problems/roman-to-integer/description/
// https://en.wikipedia.org/wiki/Roman_numerals

// 思路1：不同字符串对应不同的数值，这里使用一个Map存储对应表；
// 首先把字符串转化一个数值（while字符串长度大于0）
// 如果当前的值比后面的大，直接转化后加入数值；如果当前的值和后面的相等，直接加入这个数值（这两个情况属于一类）
// 如果当期的值比后面的小（XV）,使用后面的减去前面的值，字符串减去2；
// 168 ms, 在所有 JavaScript 提交中击败了 94.41% 的用户
function romanToInt(s) {
  const dir = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  while (s.length > 0) {
    const s0 = s.charAt(0);
    const s1 = s.charAt(1);
    if (s1 === '' || s0 === s1 || dir[s0] > dir[s1]) {
      result += dir[s0];
      s = s.substring(1);
    } else if (dir[s0] < dir[s1]) {
      result = result - dir[s0] + dir[s1];
      s = s.substring(2);
    }
  }
  return result;
}

// 方案2
// 上面的方案中，遇到4和9直接减法
// 这个方案，直接获取4和9存放到对象中，然后进行相加(这样可以减少一定的加法计算)
// 可以不使用数组存放，两种方法的复杂度都是N
function romanToInt2(s) {
  const romanLetters = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  const arr = s.split('');
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    if (key !== 'V' || key !== 'M') {
      if (romanLetters[key + arr[i + 1]]) {
        num += romanLetters[key + arr[i + 1]];
        i += 1;
        continue;
      }
    }
    num += romanLetters[key];
  }
  return num;
}

export { romanToInt, romanToInt2 };

```

​


### 0014-longestCommonPrefix.js
​

```text
// 14-编写一个函数来查找字符串数组中的最长公共前缀。
// 给定一个字符串数组，返回公共前缀(字符串都是小写)
// Write a function to find the longest common prefix string amongst an array of strings.
// https://leetcode.com/problems/longest-common-prefix/description/

// 方案1
// 执行用时 : 60 ms, 在所有 JavaScript 提交中击败了 99.08% 的用户
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) {
    return strs[0];
  }
  // 如果长度大于1，那么需要获取公共字符串前缀
  let commonPrefix = '';
  for (let i = 0, len = strs[0].length; i < len; i++) {
    const str = strs[0].charAt(i);
    for (let j = 0; j < strs.length; j++) {
      if (str !== strs[j].charAt(i)) {
        return commonPrefix;
      }
    }
    commonPrefix += str;
  }
  return commonPrefix;
}

// 方案2：减少第一次的对比（j=1，获取一次字符串的长度）
// 64 ms, 在所有 javascript 提交中击败了 94.05%
// 两次测试时间不同。原理上第二次更简单
function longestCommonPrefixPro(strs) {
  const { length } = strs;
  if (length === 0) return '';
  if (length === 1) {
    return strs[0];
  }
  // 如果长度大于1，那么需要获取公共字符串前缀
  let commonPrefix = '';
  for (let i = 0, len = strs[0].length; i < len; i++) {
    const str = strs[0].charAt(i);
    for (let j = 1; j < length; j++) {
      if (str !== strs[j].charAt(i)) {
        return commonPrefix;
      }
    }
    commonPrefix += str;
  }
  return commonPrefix;
}

// 方案3
function findLongestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }
  let key = '';
  const fn = function (str) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].indexOf(str) !== 0) {
        return false;
      }
    }
    return true;
  };
  let j = 0;
  while (key !== strs[0]) {
    const q = (key + strs[0][j++]);
    if (!fn(q)) {
      break;
    }
    key = q;
  }
  return key;
}

export { longestCommonPrefix, longestCommonPrefixPro, findLongestCommonPrefix };

```

​


### 0015-threeSum.js
​

```text
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 思路1 超时
// 现在这种方法超出时间限制（数组长度是1000，那么两层循环性能不好）
const threeSumTmp = function (nums) {
  const resultArr = [];
  const len = nums.length;
  // 把数组先排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    // 当前的值是 current，那么剩下两个值的和应该是 -current;
    const current = nums[i];
    const target = current * -1;
    const hash = {};
    for (let j = i + 1; j < len; j++) {
      const item = nums[j];
      if (hash[item] > -1) {
        const result = [nums[i], nums[j], nums[hash[item]]];
        resultArr.push(result);
      }
      hash[target - item] = j;
    }
  }
  // 现在的结果有重复
  // [[-1,1,0],[-1,2,-1],[-1,1,0]]
  // 最后结果数组去重
  let tmp = [];
  resultArr.forEach((item) => {
    const str = item.join(',');
    tmp.push(str);
  });
  tmp = [...new Set(tmp)];
  const res = [];
  tmp.forEach((item) => {
    const arr = item.split(',');
    res.push(arr);
  });
  // [ -4, -1, -1, 0, 1, 2 ]
  return res;
};

// 思路二：可以实现，性能不好
// 820 ms , 在所有 JavaScript 提交中击败了5.09%的用户
const threeSum = function (nums) {
  const resultArr = [];
  const len = nums.length;
  // 把数组先排序
  nums.sort((a, b) => a - b);
  // 排序后，如果第一个元素大于0，或者最后一个元素小于0，那么无解，返回空数组
  if (nums[0] > 0 || nums[len - 1] < 0) {
    return [];
  }
  const hash = {};
  for (let i = 0; i < len; i++) {
    // 当前的值是 current，那么剩下两个值的和应该是 -current;
    const current = nums[i];
    const target = current * -1;
    // 使用双指针实现
    let start = i + 1;
    let end = len - 1;
    while (start < end) {
      if (nums[start] + nums[end] === target) {
        const hs = [nums[i], nums[start], nums[end]];
        // 因为现在已经是排序的，写一个哈希表，避免重复数据
        const key = `${nums[i]}+${nums[start]}+${nums[end]}`;
        if (!hash[key]) {
          resultArr.push(hs);
          hash[key] = true;
        }
        start++;
        // 这里性能不好，处理重复数据会消耗大量时间[00000000]
      } else if (nums[start] + nums[end] < target) {
        start++;
      } else if (nums[start] + nums[end] > target) {
        end--;
      }
    }
  }
  return resultArr;
};

export { threeSum, threeSumTmp };

```

​


### 0017-letterCombinations.js
​

```text
// 17 电话号码九键字母组合
// 在九键按键电话，写短信需要对应（2-9分别对应字母）
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 思路一：如果每一个数值遍历一次，那么时间复杂度是2N次方（不好）

// 思路二：用空间换时间
// 数字的遍历是必须的，那么结果数组中，使用新的数组迭代旧数组，这样会用到 n 个中间变量
// 1 遇到第一个2，创建一个长度是3的数组，每一个填充[abc]
// 2 遇到3，遍历上面的数组，复制每一条信息，插入对应的三条 splice(i, 1, newArray) [ad,ae,af,...];
// 执行用时 : 64 ms , 在所有 JavaScript 提交中击败了90.94% 的用户
// 内存消耗 : 33.8 MB , 在所有 JavaScript 提交中击败了23.48% 的用户

function letterCombinations(digits) {
  let resultArr = [];
  if (digits.length === 0) return resultArr; // 处理传入为空
  const dir = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  // 循环数字
  while (digits.length > 0) {
    // 获取当前数字对应的字符串
    const firstNumber = digits.slice(0, 1);
    digits = digits.slice(1, digits.length);
    const firstStr = dir[firstNumber];
    // 把这个字符串加入到结果数组中
    const newResultArr = [];
    if (resultArr.length === 0) {
      resultArr = firstStr.split('');
    } else {
      for (let i = 0; i < resultArr.length; i++) {
        const item = resultArr[i];
        newResultArr.push(item + firstStr[0], item + firstStr[1], item + firstStr[2]);
        // 处理一下特殊的7和9
        if (firstStr[3]) newResultArr.push(item + firstStr[3]);
      }
      // 使用新的结果数组迭代旧的结果数组
      resultArr = newResultArr;
    }
  }
  return resultArr;
}

export { letterCombinations };

```

​


### 0018-fourSum.js
​

```text
// 18 四数之和
// 给定一个包含 n 个整数的数组 nums（有重复值） 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。答案中不可以包含重复的四元组。

// 思路一：暴力循环4次，这样可以数组的内部四个数的全部子集。时间复杂度极高，不使用
// 思路二：四个数的和，分解成两个数的和，两个数的和。这两个和加起来的目标就是4。
// 这样先进行n2遍历，获取前两个数的和，然后计算余下的 n - 2 个数，获取两个，然后输出。
// 1748 ms, 在所有 JavaScript 提交中击败了 6.30% 的用户
// 时间复杂度的问题：主要是大量的数据转化，以及多重循环

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  // 先计算两个数的和数组，把四个数的和问题转化成两个数的和问题，降维减少时间复杂度
  const twoSumArr = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const obj = {};
      obj.x = i;
      obj.y = j;
      obj.twoSum = nums[i] + nums[j];
      // 这里最好过滤一下，如果和已有的重复，就不需要加入
      twoSumArr.push(obj);
    }
  }
  // 遍历这个和矩阵，如果和是目标，那么把对应的项数放到一个新的数组中
  const resultArr = [];
  const len2 = twoSumArr.length;
  for (let i = 0; i < len2; i++) {
    for (let j = i; j < len2; j++) {
      if ((twoSumArr[i].twoSum + twoSumArr[j].twoSum) === target) {
        const set = new Set([twoSumArr[i].x, twoSumArr[i].y, twoSumArr[j].x, twoSumArr[j].y]);
        if (set.size === 4) {
          // 这四个数都不等，才不会重用数字;现在可以保证项数不重复；但是原始数组中可能有重复的元素，例如0出现了两次
          const arr = [nums[twoSumArr[i].x], nums[twoSumArr[i].y], nums[twoSumArr[j].x], nums[twoSumArr[j].y]];
          // 然后，二维数组排序后，转化成字符串去重
          const arrStr = arr.sort().join(',');
          if (!resultArr.includes(arrStr)) {
            resultArr.push(arrStr);
          }
        }
      }
    }
  }
  // 结果数组转化成二维数组（升维）
  for (let i = 0; i < resultArr.length; i++) {
    resultArr[i] = resultArr[i].split(',').map(Number);
    // array.map(Number) 把字符串数组转化成数值类型
  }
  return resultArr;
}

export { fourSum };

```

​


### 0020-valid-parenthese.js
​

```text
// 检测括号有效性
// 如果是左半部分，不用管，直接放在另一个字符串；
// 如果是右半部分，必须在左边找到这个对应的字符串，位置需要正确，然后删除，否则返回false
// 如果最后结果字符串长度是0，那么就是有效的括号字符串
// 2019年：56 ms , 在所有提交中击败了 99.60% 的用户
// 2020-01-11：92 ms, 在所有提交中击败了16.05%
function isValid(s) {
  let result = '';
  const left = ['(', '[', '{'];
  for (let i = 0, len = s.length; i < len; i++) {
    if (left.includes(s.charAt(i))) {
      result += s.charAt(i);
    } else if ((s.charAt(i) === ')' && result.charAt(result.length - 1) === '(') || (s.charAt(i) === ']' && result.charAt(result.length - 1) === '[') || (s.charAt(i) === '}' && result.charAt(result.length - 1) === '{')) {
      result = result.substr(0, result.length - 1);
    } else {
      return false;
    }
  }
  return result.length === 0;
}

// 优化方法 不需要数组
// 68 ms, 在所有提交中击败了60.38%
function isValid2(s) {
  let result = '';
  for (let i = 0, len = s.length; i < len; i++) {
    const item = s.charAt(i);
    if (item === '(' || item === '[' || item === '{') {
      result += item;
    } else if ((item === ')' && result.charAt(result.length - 1) === '(') || (item === ']' && result.charAt(result.length - 1) === '[') || (item === '}' && result.charAt(result.length - 1) === '{')) {
      result = result.substr(0, result.length - 1);
    } else {
      return false;
    }
  }
  return result.length === 0;
}

export { isValid, isValid2 };

```

​


### 0095-generateTrees.js
0095\. 不同的二叉搜索树

95 不同的二叉搜索树（以1-N为节点，可以建立多少个不同的二叉搜索树？）

问题关键是：二叉搜索树左子树小于当前节点，右子树大于当前节点。那么遍历1-N作为根节点，然后设置 1——1-i是左子树，i+1 —— n 是右子树，然后递归遍历子树的情况。最后把左右子树双重循环即可找到全部的结果。注意：如果一个位置是空的，也需要返回 Null 节点。


### 0097-isInterleave.js
0097\. 交错字符串

97 交错字符串：

思路一，使用DFS递归字符串，并先判断是否全部字符的个数相同，这样可以实现，性能比较差。

思路二：使用动态规划，从开头一直递推到最后的一个值。

思路三：回溯算法+三指针+字典记忆化


### 0098-isValidBST.js
0098\. 验证二叉搜索树

98 验证二叉搜索树

二叉搜索树的性质是，节点值大于左子树最大值，节点值小于右子树最小值。

思路一：使用递归方法，先构建一个递归函数 checkTree(node, small, large)，判断每一个子树的最大最小值。只需要判断当前节点，在递归中判断子节点即可.

思路二：二叉搜索树的中序遍历结果，是一个升序数组，那么根据这个性质，遍历二叉树。如果不是升序数组，就不是二叉搜索树。


### 0103-zigzagLevelOrder.js
0103\. 二叉树的锯齿形层序遍历

题目 0103 难度简单，认真一次性可以做出来

锯齿状层序遍历二叉树（先把二叉树 BFS 层序遍历，然后加一个层序号属性；然后把列表根据层序号再转换成二维数组即可）

时间复杂度是O(n) 遍历全部树节点，然后遍历一下临时的一维列表。

空间复杂度是多出的一个临时数组存放节点的值和层数。

```javascript
const zigzagLevelOrder = function(root) {
  if (!root) return [];
  // 先把二叉树层序遍历(广度优先遍历)，同时增加layer层数
  const res = [];
  const list = [];
  list.push({
    node: root,
    layer: 0,
  });
  while (list.length > 0) {
    const tmp = list.shift();
    res.push({ val: tmp.node.val, layer: tmp.layer });
    const layer = tmp.layer;
    const left = tmp.node.left;
    const right = tmp.node.right;
    if (left) {
      list.push({ node: left, layer: layer + 1 });
    }
    if (right) {
      list.push({ node: right, layer: layer + 1 });
    }
  }
  // 再次遍历数组，把每一层的结果都放入临时数组，然后返回
  const result = [];
  let flagLayer = 0;
  let tmpArr = [];
  for (let i = 0; i < res.length; i++) {
    const { layer, val } = res[i];
    if (layer === flagLayer) {
      tmpArr.push(val);
    } else {
      // 这里需要根据层数，决定是否取反
      if (flagLayer % 2 === 0) {
        result.push([...tmpArr]);
      } else {
        result.push([...tmpArr].reverse());
      }
      tmpArr = [];
      tmpArr.push(val);
      flagLayer = layer;
    }
  }
  // 最后还需要处理一层
  if (flagLayer % 2 === 0) {
    result.push([...tmpArr]);
  } else {
    result.push([...tmpArr].reverse());
  }
  return result;
};

```

​


### 0105-buildTree.js
0105\. 从前序遍历和中序遍历数组中恢复二叉树

从前序遍历和中序遍历数组中（无重复元素），恢复二叉树.找到根元素和左右子树，然后递归即可

```javascript
const buildTree = function(preorder, inorder) {
  // 如果根节点不存在，直接返回空树节点
  if (!preorder || preorder.length === 0) {
    return new TreeNode(null);
  }
  // 如果只有一个根节点，那么直接返回这个节点（没有子树）
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }
  const rootVal = preorder[0];
  const index = inorder.indexOf(rootVal);

  const rootNode = new TreeNode(rootVal);

  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);

  const leftPreOrder = preorder.slice(1, index + 1);
  const rightPreOrder = preorder.slice(index + 1);

  if (leftPreOrder.length > 0) {
    rootNode.left = buildTree(leftPreOrder, leftInorder);
  }
  if (rightPreOrder.length > 0) {
    rootNode.right = buildTree(rightPreOrder, rightInorder);
  }
  return rootNode;
};
```

​


### 0106-buildTree.js
0106.从中序遍历和后续遍历中恢复二叉树

```javascript
const buildTree = function(inorder, postorder) {

  // 如果根节点不存在，直接返回空树节点
  if (!postorder || postorder.length === 0) {
    return new TreeNode(null);
  }

  // 如果只有一个根节点，那么直接返回这个节点（没有子树）
  if (postorder.length === 1) {
    return new TreeNode(postorder[0]);
  }

  const rootVal = postorder[postorder.length - 1];
  const index = inorder.indexOf(rootVal);

  const rootNode = new TreeNode(rootVal);

  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);

  const leftPostOrder = postorder.slice(0, index);
  const rightPostOrder = postorder.slice(index, postorder.length - 1);

  if (leftPostOrder.length > 0) {
    rootNode.left = buildTree(leftInorder, leftPostOrder);
  }

  if (rightPostOrder.length > 0) {
    rootNode.right = buildTree(rightInorder, rightPostOrder);
  }

  return rootNode;
};
```

​


### 0109-sortedListToBST.js
0109\. 有序链表转换成二叉搜索树

题目109

有序链表转换成二叉搜索树

1、思路：先把有序链表转换成有序数组，然后转换成二叉搜索树。

2、官方思路：使用快慢指针，获取有序链表的中点，然后左右分别作为开始和结束，转换成子树作为树节点。关键是记录开始节点和结束节点的位置（链表中记录位置的方案）

二叉搜索树的核心：就是找到中位数作为根节点

1、可以使用快慢指针，获取排序链表的中位数。当快指针到达最后一位时，慢指针正好是中位数

2、设置中位数的是根节点，然后左子树和右子树的边界

可以确定，递归左右子树即可注意：链表找到元素的索引

```javascript
const sortedListToBST = function(head) {
  // 先把有序列表转换成有序数组
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  // 然后把有序数组转换成二叉搜索树
  function arr2Tree(start, end) {
    if (start > end) {
      return null;
    } else if (start === end) {
      return new TreeNode(arr[start]);
    } else {
      const middle = Math.floor((start + end) / 2);
      const node = new TreeNode(arr[middle]);
      node.left = arr2Tree(start, middle - 1);
      node.right = arr2Tree(middle + 1, end);
      return node;
    }
  }
  return arr2Tree(0, arr.length - 1);
};

```

​


### 0114-flatten.js
0114\. 二叉树展开为链表

题目114 简单

二叉树展开为链表

先把二叉树先序遍历成数组，然后遍历数组，给数组的每一个元素增加引用，实现单链表


### 0116-connect.js
0116\. 完美二叉树中填充每个节点的next指针

116 完美二叉树中，填充每个节点的next指针，下一个右侧节点。实际上就是先把二叉树层序遍历成矩阵，然后遍历每一个子数组，设置指针指向下一个节点即可。


### 0135-candy.js
0135\. 分糖果

困难

关键是双向贪心算法

```javascript
const candy = function(ratings) {
  let result = Array(ratings.length).fill(1);
  // 从左向右遍历
  for (let i = 1; i < result.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      result[i] = result[i - 1] + 1;
    }
  }
  // 从右向左遍历（技巧点）
  for (let i = result.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      result[i] = Math.max(result[i], result[i + 1] + 1);
    }
  }
  // 计算结果
  return result.reduce((a, b) => a + b, 0);
};
```

​


### 0152-maxProduct.js
0152\. 最大乘积子数组

最大乘积子数组：动态规划思路，和最大和子数组类似。Fx = F(x-1) 的递推式。如果全部是正数，那么完全一致。如果有正数有负数，当前的最大值，可能是前面的最小值和当前值的乘积，所以需要维护两个数组，分别存放最大值和最小值的递推式。


### 0164-maximumGap.js
0164\. 最大间距

最大间距：常规的思路：数组快速排序，然后循环一次，获取最大间距（快速排序是N\*logN）。

因为题目要求是N，这个方法严格上不合适。

官方给出的思路是基数排序或者桶排序。实际中直接使用内置的排序即可。


### 0166-fractionToDecimal.js
0166\. 分数到小数

166 分数到小数（需要细心）

关键点：

1、两个整数相除，结果可能是整数，小数，或者循环小数。不可能是无限不循环小数，这个是数学原理。

2、如何判断是循环小数？每次计算，如果余数出现相同，那么就是循环小数，所以适应一个对象记录出现的余数，使用一个数组记录出现的位置，即可把循环的部分获取到。


### 0174-calculateMinimumHP.js
0174\. 地下城与勇士

困难，二维矩阵反向动态规划，每一个单元格条件判断。

如果使用递归，需要加入记忆化搜索（缓存）

```javascript
var calculateMinimumHP2 = function (dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;

  // 初始化一个二维数组来存储所需的最小生命值
  const dp = Array.from({ length: m }, () => new Array(n));

  // 初始化右下角单元格
  dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);

  // 初始化最右侧一列
  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - dungeon[i][n - 1]);
  }

  // 初始化最下面一行
  for (let j = n - 2; j >= 0; j--) {
    dp[m - 1][j] = Math.max(1, dp[m - 1][j + 1] - dungeon[m - 1][j]);
  }

  // 填充其余的单元格
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      const minNext = Math.min(dp[i + 1][j], dp[i][j + 1]);
      dp[i][j] = Math.max(1, minNext - dungeon[i][j]);
    }
  }
  return dp[0][0];
}
```

​


### 0199-rightSideView.js
0199\. 二叉树的右视图

二叉树的右视图：先把二叉树层序遍历，然后获取每一层的最后一个元素即可

```javascript
const rightSideView = function(root) {
  // 复用102代码(层序遍历)
  const matrix = [];
  if (!root) return [];
  // 辅助函数：二叉树层序遍历
  const runTree = function(node, layer) {
    if (!node) return;
    if (!matrix[layer]) {
      matrix[layer] = [];
    }
    matrix[layer].push(node.val);
    runTree(node.left, layer + 1);
    runTree(node.right, layer + 1);
  };
  const layer = 0;
  if (!matrix[layer]) {
    matrix[layer] = [];
  }

  matrix[layer].push(root.val);
  runTree(root.left, layer + 1);
  runTree(root.right, layer + 1);
  return matrix.map((arr) => arr[arr.length - 1]);
};
```

​


### 1052-maxSatisfied.js
1052.爱生气的书店老板

困难，运行通过

<https://leetcode.cn/problems/grumpy-bookstore-owner/>

```javascript
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 * 最大顾客数 = 各种情况下都不生气的顾客（staticValue） + 老板心情好时不生气的顾客（slide window, max）
 */

```

```javascript
var maxSatisfied = function(customers, grumpy, minutes) {
  const len = customers.length;
  // 各种情况下都不生气的顾客（固定值）
  let staticValue = 0;
  for (let i = 0; i < len; i++) {
    // 不生气 0 时，有效的顾客
    if (grumpy[i] === 0) {
      staticValue += (customers[i]);
    }
  }
  // 计算窗口初始化的最大值
  let max = 0;
  let curr = 0;
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) {
      curr += customers[i];
    }
  }
  // 这是窗口初始化的最大值
  max = curr;
  // 滑动窗口开始
  for (let i = minutes; i < len; i++) {
    if (grumpy[i] === 1) {
      curr += customers[i];
    }
    if (grumpy[i - minutes] === 1) {
      curr -= customers[i - minutes];
    }
    if (curr > max) {
      max = curr;
    }
  }
  return staticValue + max;
};

```

单元测试

```
// console.log(maxSatisfied([4,10,10], [1,1,0], 2) === 24);
// console.log(maxSatisfied([3], [1], 1) === 3);
// console.log(maxSatisfied([1], [1], 1) === 1);
// console.log(maxSatisfied([1,0,1,2,1,1,2,5,2,2,2,1], [0,1,0,1,0,1,0,1,0,0,1,1], 5) === 17);
// console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3) === 16);
// console.log(maxSatisfied([2,6,6,9], [0,0,1,1], 1) === 17);

// python 解答 https://zhuanlan.zhihu.com/p/352407806

```

​


### 1146-SnapshotArray.js
1146\. 快照数组 SnapshotArray

困难

<https://leetcode.cn/problems/snapshot-array/solutions/2016347/zhi-ji-lu-xiu-gai-by-masx200-zguh/>

因为操作比较多，需要综合考虑空间复杂度和时间复杂度，所以需要字典存储+二分查找

```javascript
// 解法三：优化，字典数组+二分查找（时间复杂度和空间复杂度都可以满足）
// https://leetcode-cn.com/problems/snapshot-array/solution/zi-jie-leetcode1146kuai-zhao-shu-zu-by-user7746o/

let SnapshotArray = function(length) {
  // 这里必须 fill 否则 map 会跳过
  this.arr = new Array(length).fill(0).map(() => new Map());
  this.snapId = 0;
};

SnapshotArray.prototype.set = function(index, val) {
  this.arr[index].set(this.snapId, val);
};

SnapshotArray.prototype.snap = function() {
  this.snapId++;
  return this.snapId - 1;
};

SnapshotArray.prototype.get = function(index, snap_id) {
  // 找到这个数的所有记录
  let snapIds = [...this.arr[index].keys()]
  // 二分查找，找到 <= snap_id 的值
  let start = 0;
  let end = snapIds.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (snapIds[mid] < snap_id) {
      start = mid + 1;
    } else if (snapIds[mid] > snap_id) {
      end = mid - 1;
    } else if (snapIds[mid] === snap_id) {
      return this.arr[index].get(snap_id);
    }
  }
  return this.arr[index].get(snapIds[start - 1]) || null;
};

```

​


### 1267-countServers.js
1267\. 统计参与通信的服务器

简单：循环矩阵，哈希表计数，一次可以写出来

<https://leetcode.cn/problems/count-servers-that-communicate/description/>

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 * BFD 或者 DFS 都可以实现，当然也可以用其他思路
 * 先获取每行每列中是 1 的个数，构成两个字典
 * 然后遍历全部的节点，如果在字典中任意一个大于1，那么就可以通信
 * 这个可以实现，性能略有点差
 */

```

```javascript
var countServers = function(grid) {
    let rowDict = {};
    let columnDict = {};
    // 循环全部节点，获取出现的次数，写入到对应的字典中
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                rowDict[row] = (rowDict[row] || 0) + 1;
                columnDict[col] = (columnDict[col] || 0) + 1;
            }
        }
    }
    let result = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1 && (rowDict[row] > 1 || columnDict[col] > 1)) {
                result++;
            }
        }
    }
    return result;
};

```

​


### 2682-circularGameLosers.js
2682\. 找出转圈游戏输家

中等，运行通过

数组循环，注意特殊情况就行

<https://leetcode.cn/problems/find-the-losers-of-the-circular-game/description/>

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    let dict = {};
    dict[1] = true;
    let index = 1; // 当前球的位置
    // 循环，直到某个朋友接到球
    // 中间某个人接到球，就记录在字典中
    for (let i = 1; i < 10000; i++) {
        let time = i * k;
        index = (index + time) % n;
        // 如果转了一圈，就是最后一个数字
        if (index === 0) {
            index = n;
        }
        // 有人第二次接到球，游戏结束
        if (dict[index]) {
            break;
        } else {
            dict[index] = true;
        }
    }
    // 把全部字典的键遍历一次，然后求差值，就是结果数组
    let result = [];
    for (let i = 2; i <= n; i++) {
        if (!dict[i]) {
            result.push(i);
        }
    }
    return result;
};

// console.log(circularGameLosers(5, 2)); // [4,5]
// console.log(circularGameLosers(4, 4)); // [2,3,4]
// console.log(circularGameLosers(2, 1)); // []
// console.log(circularGameLosers(5, 3)); // [2,3]
```

​


### 2703-argumentsLength.js
​

```text
/**
 * @return {number}
 */
const argumentsLength = function(...args) {
  return args.length;
};

/**
* argumentsLength(1, 2, 3); // 3
*/

export { argumentsLength };

```

​


### 2704-expect.js
​

```javascript
/**
 * @param {string} val
 * @return {Object}
 */
const expect = function(val) {
  return {
    toBe: (value) => {
      if (val === value) {
        return true;
      }
      throw new Error('Not Equal');
    },
    notToBe: (value) => {
      if (val !== value) {
        return true;
      }
      throw new Error('Equal');
    },
  };
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/

// () => expect(5).toBe(null)
// {"error":"Not Equal"}

export { expect };

```

​


### 2705-compactObject.js
​

```javascript
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject1 = function (obj) {
  // 基本思路：DFS 递归对象; 复杂对象超时
  const dfs = (node) => {
    if (typeof obj !== 'object') {
      return obj;
    }
    if (Array.isArray(node)) {
      for (let i = 0; i < node.length; i++) {
        if (!node[i]) {
          // 数组 splice 耗时
          node.splice(i, 1);
          i--;
        }
        // 如果是对象，直接递归
        else {
          dfs(node[i]);
        }
      }
    } else {
      // 这里存在性能问题
      for (const key in node) {
        if (!node[key]) {
          // 删除对象的键耗时
          delete node[key];
        }
        if (typeof node[key] === 'object') {
          dfs(node[key]);
        }
      }
    }
  };
  dfs(obj);
  return obj;
};

// https://leetcode.cn/problems/compact-object/description/
// 现在还是超时，需要看一下官方的方案是什么，自己哪一步存在性能问题

// console.log(compactObject([null, 0, false, 1]));
// 输出：[1]
// console.log(compactObject({ a: null, b: [false, 1] }));
// 输出：{"b": [1]}
// console.log(compactObject([null, 0, 5, [0], [false, 16]]));
// 输出：[5, [], [16]]

// 思路2
const compactObject2 = function (obj) {
  if (obj == null) {
    return obj;
  }
  if (typeof obj !== 'object') {
    return obj;
  }
  // 改进后的方法，新建一个数组和对象，然后向内部填充
  if (Array.isArray(obj)) {
    const res = [];
    for (const value of obj) {
      const val = compactObject(value);
      if (val) {
        res.push(val);
      }
    }
    return res;
  } else {
    const res = {};
    for (const key of Object.keys(obj)) {
      const val = compactObject(obj[key]);
      if (val) {
        res[key] = val;
      }
    }
    return res;
  }
};

export { compactObject1, compactObject2 };

```

​


### 2706-buyChoco.js
​

```javascript
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
const buyChoco = function(prices, money) {
  prices = prices.sort((a, b) => a > b ? 1 : -1);
  if (prices[0] + prices[1] > money) {
    return money;
  }
  return money - prices[0] - prices[1];
};

export { buyChoco };

```

​


### 2710-removeTrailingZeros.js
​

```javascript
/**
 * @param {string} num
 * @return {string}
 */
const removeTrailingZeros = function(num) {
  return num.replace(/0+$/, '');
};

export { removeTrailingZeros };
```

​


### 2722-join.js
​

```javascript
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function(arr1, arr2) {
  // 1 把 arr1 转换成 map
  const dict = {};
  arr1.forEach((item) => {
    dict[item.id] = item;
  });
  // 2 遍历 arr2 如果不重复，直接放入 map; 如果 ID 重复，那么 Object.assign() 合并属性
  arr2.forEach((item) => {
    const id = item.id;
    if (!dict[id]) {
      dict[id] = item;
    } else {
      dict[id] = { ...dict[id], ...item };
    }
  });
  // 3 遍历 map-key 转换成数组，然后根据 ID 排序输出
  let arr3 = [];
  for (const key in dict) {
    arr3.push(dict[key]);
  }
  arr3 = arr3.sort((a, b) => {
    return a.id > b.id ? 1 : -1;
  });
  return arr3;
};

export { join };
```

​


### 2723-addTwoPromises.js
​

```javascript
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function(promise1, promise2) {
  return await promise1 + await promise2;
};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/

export { addTwoPromises };
```

​


### 2724-sortBy.js
test

```javascript
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function(arr, fn) {
  return arr.sort((a, b) => {
    return fn(a) > fn(b) ? 1 : -1;
  });
};

export { sortBy };

```

​


### 2725-cancellable.js
test

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function(fn, args, t) {
  // 0s 先执行一次函数
  fn(...args);
  // 间隔 t 执行一次函数
  const timer = setInterval(() => {
    fn(...args);
  }, t);
  // 返回取消定时器的函数
  return () => { clearInterval(timer); };
};

export { cancellable };

```

​


### 2726-Calculator.js
test

```javascript
class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.value = value;
    this.error = false;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    if (!this.error) this.value = this.value + value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    if (!this.error) this.value = this.value - value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    if (!this.error) this.value = this.value * value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (!this.error) {
      if (value === 0) {
        this.value = 'Division by zero is not allowed';
        this.error = true;
        return this;
      }
      this.value = this.value / value;
    }
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    if (!this.error) this.value = this.value ** value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    if (this.error) {
      return 'Division by zero is not allowed';
    }
    return this.value;
  }
}

export { Calculator };

```

​


### 2727-isEmpty.js
简单

```javascript
/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
const isEmpty = function(obj) {
  return Object.keys(obj).length === 0;
};

export { isEmpty };

```

​


### 2778-sumOfSquares.js
2778\. 特殊元素平方和

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */

var sumOfSquares = function(nums) {
    const len = nums.length;
    let result = 0;
    for (let i = 0; i < len; i++) {
        if (len % (i + 1) === 0) {
            result += (nums[i] * nums[i]);
        }
    }
    return result;
};

```

​


### 2784-isGood.js
2784\. 检查数组是否是好的

```javascript
var isGood = function(nums) {
    const len = nums.length;
    nums = nums.sort((a, b) => a > b ? 1 : -1);
    for (let i = 0; i < len; i++) {
        if (i === len - 1) {
            if (nums[i] !== nums[i - 1]) {
                return false;
            }
        } else {
            if (nums[i] !== i + 1) {
                return false;
            }
        }
    }
    return true;
};

```

​


### 2798-numberOfEmployeesWhoMetTarget.js
test

```javascript
const numberOfEmployeesWhoMetTarget = function(hours, target) {
  let num = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) {
      num++;
    }
  }
  return num;
};

export { numberOfEmployeesWhoMetTarget };

```

​


### 2811-canSplitArray.js
2811\. 判断是否能拆分数组

困难

<https://leetcode.cn/problems/check-if-it-is-possible-to-split-array/description/>

考点：动态规划，贪心算法（脑筋急转弯一般想不出来），难度中等（自己尝试几遍，想到了正确思路，然后做出来了，可能有点费时间）

思路1：先使用贪心算法，但是可能不满足一些情况，不成立

```javascript
var canSplitArray = function(nums, m) {
    // 思路：先求数组的和，然后双指针（前后指针分别向中间靠拢），然后和逐渐减少
    // 如果左右同时满足，那么减去左右中最小的一个（贪心算法？）
    const len = nums.length;
    if (len < 3) {
        return true;
    }
    let sum = nums.reduce((a, b) => { return a + b; }, 0);
    let left = 0;
    let right = len - 1;
    // left right
    // 如果这样的思路，不满足实例3——这需要动态规划？
    while (sum >= m && left + 1 < right) {
        // 左边的小于右边的，且减去左边后还满足条件
        if (nums[left] < nums[right] && sum - nums[left] > m) {
            sum = sum - nums[left];
            left++;
        }
        // 左边的大于右边的，且减去右边后还满足条件
        else if (nums[left] < nums[right] && sum - nums[right] > m) {
            sum = sum - nums[right];
            right--;
        }
        // 两边都不满足，直接跳出循环
        else {
            break;
        }
    }
    if (left + 1 === right) {
        return true;
    } else {
        return false;
    }
};

```

思路2：动态规划（递归调用，超时了），思路基本正确，代码需要改进

递推公式

Fn(start, end) = Fn(start + 1, end) || Fn(start, end - 1)

F(1, 3) = (a1 + a2) >= m || (a2 + a3) >= m;

```javascript
var canSplitArray = function(nums, m) {
    const len = nums.length;
    if (len < 3) {
        return true;
    }
    let dict = {};
    function fn(a, b) {
        // 从缓存中获取结果，避免大量递归
        let key = `${a}-${b}`;
        if (dict[key]) {
            return dict[key];
        }
        let result;
        if (a + 2 === b) {
            result = (nums[a] + nums[a + 1]) >= m || (nums[a + 1] + nums[a + 2]) >= m;
        } else {
            result = fn(a + 1, b) || fn(a, b - 1);
        }
        dict[key] = result;
        return result;
    }
    return fn(0, nums.length - 1);
};

```

思路3：动态规划改进版

```javascript
var canSplitArray = function(nums, m) {
    const len = nums.length;
    if (len < 3) {
        return true;
    }
    if (len === 3) {
        return (nums[0] + nums[1]) >= m || (nums[1] + nums[2]) >= m;
    }
    // 先计算每个三元数对的值
    let dict = {};
    for (let i = 0; i < len; i++) {
        if (nums[i] && nums[i + 2]) {
            let result = (nums[i] + nums[i + 1]) >= m || (nums[i + 1] + nums[i + 2]) >= m;
            dict[`${i}-${i+2}`] = result;
        }
    }
    // 然后循环长度，计算最终的结果
    for (let length = 3; length < len; length++) {
        for (let start = 0; start < len; start++) {
            if (nums[start] && nums[start+length]) {
                let result = dict[`${start+1}-${start+length}`] || dict[`${start}-${start+length-1}`];
                dict[`${start}-${start+length}`] = result;
            }
        } 
    }
    return dict[`${0}-${len - 1}`];
};

```

继续优化代码（减少了两层 if 判断，但是时间复杂度提升不大）

```javascript
var canSplitArray = function(nums, m) {
    const len = nums.length;
    if (len < 3) {
        return true;
    }
    if (len === 3) {
        return (nums[0] + nums[1]) >= m || (nums[1] + nums[2]) >= m;
    }
    // 先计算每个三元数对的值
    let dict = {};
    for (let i = 0; i < len - 2; i++) {
        let result = (nums[i] + nums[i + 1]) >= m || (nums[i + 1] + nums[i + 2]) >= m;
        dict[`${i}-${i+2}`] = result;
    }
    // 然后循环长度，计算最终的结果
    for (let length = 3; length < len; length++) {
        for (let start = 0; start < len - length; start++) {
            let result = dict[`${start+1}-${start+length}`] || dict[`${start}-${start+length-1}`];
            dict[`${start}-${start+length}`] = result;
        } 
    }
    return dict[`${0}-${len - 1}`];
};

```

可以参考高赞答案，这个确实没有想到，性能差距很大

深度搜索 + 记忆化 + 前缀和;

<https://leetcode.cn/problems/check-if-it-is-possible-to-split-array/solutions/2375201/todoline-shen-du-sou-suo-ji-yi-hua-qian-mqn2a/>

或者是脑筋急转弯

<https://leetcode.cn/problems/check-if-it-is-possible-to-split-array/solutions/2375178/nao-jin-ji-zhuan-wan-by-endlesscheng-0l19/>


### 2815-maxSum.js
2815\. 数组中的最大数对和

简单：考点：数组循环+哈希表，可以直接做出来

<https://leetcode.cn/problems/max-pair-sum-in-an-array/description/>

思路：第一次循环，计算每一个数字的位数最大值，并存放在哈希表中。第二次直接双重循环数组，判断每一个数对是否满足条件；如果满足条件就求和，然后计算和的最大值。时间复杂度是 N^2 。这个思路比较好理解。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    // 基本思路：
    let dict = {};
    let max = -1;
    // 辅助函数：获取某个数位最大的值
    function getMax(num) {
        let result = num % 10;
        num = (num - num % 10) / 10;
        while (num > 0) {
            let curr = num % 10;
            result = curr > result ? curr : result;
            num = (num - num % 10) / 10;
        }
        return result;
    }
    // 第一次循环数组，把数字和对应的最大位数拿到，然后写入哈希表中
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        dict[item] = getMax(item);
    }
    // 第二次直接循环两次数组，找到每一个数对，然后看最大是否满足，满足的话求和
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (dict[nums[i]] === dict[nums[j]]) {
                let currMax = nums[i] + nums[j];
                if (currMax > max) {
                    max = currMax;
                }
            }
        }
    }
    return max;
};

```

其他大神有一次循环做出来的，类似桶排序，不是很好理解，思路如下。

<https://leetcode.cn/problems/max-pair-sum-in-an-array/solutions/2385996/yi-ci-bian-li-by-endlesscheng-6zt9/>


### 2624-snail
实现  `snail(rowsCount，colsCount)` 方法，该方法将 1D 数组转换为以蜗牛排序的模式的 2D 数组。无效的输入值应该输出一个空数组。当 `rowsCount * colsCount !==``nums.length` 时。这个输入被认为是无效的。

这个逻辑不太难，注意一维数组转换成二维矩阵，index 和 xy 值如何计算，然后就是反向填充

```javascript
// https://leetcode.cn/problems/snail-traversal/
/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  // 和其他题目类似，把一维数组转换成 Z 自行二维数组输出
  // 注意点：转换前后的 index 怎么处理；计数列反向填充
  // 1、处理特殊情况
  const arrLen = this.length;
  if (arrLen !== rowsCount * colsCount) {
      return [];
  }
  // 2、新建目标空数组
  let matrix = new Array(rowsCount).fill(1);
  matrix = matrix.map(col => new Array(colsCount));
  // 3、循环原始数组，根据 index 计算出新的 matrix 的 xy 值，然后填入即可
  for (let i = 0; i < arrLen; i++) {
      let colIndex = Math.floor(i / rowsCount);
      let rowIndex = (i - colIndex * rowsCount);
      // 偶数列正向填充，奇数列反向填充
      if (colIndex % 2 === 1) {
          // 反向
          matrix[rowsCount - 1 - rowIndex][colIndex] = this[i];
      } else {
          // 正向
          matrix[rowIndex][colIndex] = this[i];
      }
  }
  return matrix;
}

/**
* const arr = [1,2,3,4];
* arr.snail(1,4); // [[1,2,3,4]]
*/

```

​


### 2631-groupBy
编写一段可应用于所有数组的代码，使任何数组调用 `array. groupBy(fn)` 方法时，它返回对该数组 **分组后** 的结果。

数组 **分组** 是一个对象，其中的每个键都是 `fn(arr[i])` 的输出的一个数组，该数组中含有原数组中具有该键的所有项。

提供的回调函数 `fn` 将接受数组中的项并返回一个字符串类型的键。

每个值列表的顺序应该与元素在数组中出现的顺序相同。任何顺序的键都是可以接受的。

请在不使用 lodash 的 `_.groupBy` 函数的前提下解决这个问题。

```javascript
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  let resultObj = {};
  for (let i = 0; i < this.length; i++) {
    let item = this[i];
    let key = fn(item);
    if (!resultObj[key]) {
      resultObj[key] = [];
    }
    resultObj[key].push(item);
  }
  return resultObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
```

​


### 2629-compose
请你编写一个函数，它接收一个函数数组 `[f1, f2, f3，…， fn]` ，并返回一个新的函数 `fn` ，它是函数数组的 **复合函数** 。

`[f(x)， g(x)， h(x)]` 的 **复合函数** 为 `fn(x) = f(g(h(x)))` 。

一个空函数列表的 **复合函数** 是 **恒等函数** `f(x) = x` 。

你可以假设数组中的每个函数接受一个整型参数作为输入，并返回一个整型作为输出。

```javascript
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  if (!functions || functions.length === 0) {
    return function(x) {
      return x;
    }
  }
  // 把最后一个函数拿出来执行，然后递归前面的函数
  let fn = functions.pop();
  return function(x) {
    return compose(functions)(fn(x));
  }
};

export { compose };

```

​


### 2824-countPairs.js
2824\. 统计和小于目标的下标对数目

JS

```javascript
var countPairs = function(nums, target) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) < target) {
                result++;
            }
        }
    }
    return result;
};

```

TS

```javascript
function countPairs(nums: number[], target: number): number {
    let result: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) < target) {
                result++;
            }
        }
    }
    return result;
};

```

python3

```python
class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        result = 0
        for i in range(0, len(nums)):
            for j in range(i + 1, len(nums)):
                if (nums[i] + nums[j]) < target:
                    result = result + 1
        return result

```

​


