# react-codemirror

代码预览编辑高亮

```javascript
var React = require('react');
var CodeMirror = require('react-codemirror');
 
var App = React.createClass({
    getInitialState: function() {
        return {
            code: "// Code",
        };
    },
    updateCode: function(newCode) {
        this.setState({
            code: newCode,
        });
    },
    render: function() {
        var options = {
            lineNumbers: true,
        };
        return (
            <CodeMirror
                value={this.state.code}
                onChange={this.updateCode}
                options={options}
            />
        )
    }
});
 
React.render(<App />, document.getElementById('app'));
```

​
