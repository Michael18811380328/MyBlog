# react-select

新版 react 选择器组件

[https://www.npmjs.com/package/react-select](https://www.npmjs.com/package/react-select "https://www.npmjs.com/package/react-select")

[https://github.com/JedWatson/react-select/tree/master](https://github.com/JedWatson/react-select/tree/master "https://github.com/JedWatson/react-select/tree/master")

支持不同类型的选择器组件

#### 使用案例

类组件

```javascript
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class App extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
```

函数组件

```javascript
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
```

#### 自定义组件

很多场景下，我们需要改变内部组件的样式（例如产品需要去掉某个图标，改变颜色等）

可以参考这里 [https://react-select.com/styles#inner-components](https://react-select.com/styles#inner-components "https://react-select.com/styles#inner-components") 调整内部组件的样式

```text
clearIndicator
container
control
dropdownIndicator
group
groupHeading
indicatorsContainer
indicatorSeparator
input
loadingIndicator
loadingMessage
menu
menuList
menuPortal
multiValue
multiValueLabel
multiValueRemove
noOptionsMessage
option
placeholder
singleValue
valueContainer
```

实际案例

```javascript
const UserSelectStyle = {
  option: (provided, state) => {
    const { isDisabled, isFocused } = state;
    return ({
      ...provided,
      cursor: isDisabled ? 'default' : 'pointer',
      backgroundColor: isFocused ? '#f5f5f5' : '#fff',
    });
  },
  control: (provided) => ({
    ...provided,
    fontSize: '14px',
    cursor: 'pointer',
    lineHeight: '1.5',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  clearIndicator: () => ({
    display: 'none',
  }),
  // multi select style
  multiValue: (provided) => {
    return {
      ...provided,
      display: 'inline-flex',
      alignItems: 'center',
      background: '#eaeaea',
      borderRadius: '10px',
      margin: '0 10px 0 0',
      padding: '0 0 0 2px',
    };
  },
  multiValueLabel: (provided) => {
    return {
      ...provided,
      padding: '0px',
    };
  },
  multiValueRemove: (provided) => {
    return {
      ...provided,
      color: '#666',
      ':hover': {
        backgroundColor: 'transparent',
        color: '#555555',
      }
    };
  },
  // single select style
  singleValue: (provided) => {
    return {
      ...provided,
    };
  },
};
```

然后传入 select 组件

```javascript
<ReactSelect styles={UserSelectStyle}>
```

如果上述某些不支持，可以从css中改变

```css
.true__value-container .true__multi-value__label {
  padding: 0px;
}

.true__value-container .select-module-name {
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1;
  line-height: 20px;
  margin-left: 5px;
}

.true__control.true__control--is-focused,
.true__control.true__control--is-focused:hover {
  background-color: #ffffff;
  border-color: #1991eb;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(70, 127, 207, 0.25);
}
```

#### 版本说明

早期版本是 2.x 曾经整理过一篇教程：[https://blog.csdn.net/weixin\_41697143/article/details/129011586](https://blog.csdn.net/weixin_41697143/article/details/129011586 "https://blog.csdn.net/weixin_41697143/article/details/129011586")
