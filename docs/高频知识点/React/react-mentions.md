# react-mentions

react 组件：评论框组件，输入 @ 符号可以给用户发送通知功能

[https://www.npmjs.com/package/react-mentions](https://www.npmjs.com/package/react-mentions "https://www.npmjs.com/package/react-mentions")

[https://github.com/signavio/react-mentions](https://github.com/signavio/react-mentions "https://github.com/signavio/react-mentions")

不足：上次发布还是2年前，基本功能正常，可能有一些小的 bug

```javascript
import { MentionsInput, Mention } from 'react-mentions'

<MentionsInput value={this.state.value} onChange={this.handleChange}>
  <Mention
    trigger="@"
    data={this.props.users}
    renderSuggestion={this.renderUserSuggestion}
  />
  <Mention
    trigger="#"
    data={this.requestTag}
    renderSuggestion={this.renderTagSuggestion}
  />
</MentionsInput>
```

​
