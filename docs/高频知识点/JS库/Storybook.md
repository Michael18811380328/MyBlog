# Storybook

[https://storybook.js.org/](https://storybook.js.org/ "https://storybook.js.org/")

帮助一个 UI 组件库用于演示如何使用的工具。最新版本是 8，项目中使用的版本是 7。

可能官方文档和现在的配置不一样 [https://storybook.js.org/docs/get-started/react-vite](https://storybook.js.org/docs/get-started/react-vite "https://storybook.js.org/docs/get-started/react-vite")

下面是项目的配置（7）

#### 安装

```text
    "@storybook/addon-actions": "7.6.17",
    "@storybook/addon-docs": "7.6.17",
    "@storybook/addon-essentials": "7.6.17",
    "@storybook/addon-interactions": "7.6.17",
    "@storybook/addon-knobs": "7.0.2",
    "@storybook/addon-links": "7.6.17",
    "@storybook/addon-onboarding": "1.0.11",
    "@storybook/blocks": "7.6.17",
    "@storybook/preset-create-react-app": "7.6.17",
    "@storybook/react": "7.6.17",
    "@storybook/react-webpack5": "7.6.17",
    "@storybook/test": "7.6.17",
```

#### 配置

.storybook/main.js

```javascript
module.exports = {
  stories: ['../stories/**/*.stories.js'],
  staticDirs: ['../public'],
  // 插件
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      }
    }
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  }
};
```

.storybook/preview\.js

```javascript
import React from 'react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: '',
        order: [],
        locales: '',
      }
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
        </>
      ),
    }
  },
};

export default preview;
```

#### 开启服务

```text
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build -c .storybook -o docs",
```

#### 使用 UI 组件

stories/components/cell-editor/text-editor.stories.js

```javascript
import React from 'react';
import { action } from '@storybook/addon-actions';
import TextEditor from '../../../src/TextEditor';

const meta = {
  title: 'Editors/text-editor',
  component: TextEditor,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      return (
        <div>
          {context.parameters.title && <h1>{context.parameters.title}</h1>}
          {context.parameters.subTitle && <p className='storybook-sub'>{context.parameters.subTitle}</p>}
          <Story />
        </div>
      );
    }
  ],
  parameters: {
    title: '',
    subTitle: '',
  }
};

export default meta;

export const Demo1 = {
  args: {
    isReadOnly: false,
    value: value,
    column: column,
    onCommit: (updated) => { action('onCommit')(updated); },
  },
  parameters: {
    subTitle: ''
  }
};
```

