# Ant Design

蚂蚁集团 UI 组件库

[https://ant.design/](https://ant.design/ "https://ant.design/")

[https://ant-design.antgroup.com/index-cn](https://ant-design.antgroup.com/index-cn "https://ant-design.antgroup.com/index-cn")

[https://github.com/ant-design/ant-design-mobile](https://github.com/ant-design/ant-design-mobile "https://github.com/ant-design/ant-design-mobile")

An enterprise-class UI design language and React UI library

Ant Design 5.0 使用 CSS-in-JS 技术以提供动态与混合主题的能力。

不足：国内主要是阿里企业内部实现，对外发布的文档可能不完善，同时不同版本迭代后出现大型更新比较多，造成升级改造比较困难。还有就是国内阿里人员变动比较多，新人写代码和已有的全部不兼容很多，会造成一些问题。

国内短线项目使用 ant-design 系列没问题，如果是国外长线项目，慎重考虑。

```javascript
import { Button, DatePicker } from 'antd';

export default () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
  </>
);
```

​
