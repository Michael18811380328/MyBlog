# grunt

​

<https://github.com/gruntjs/grunt>

grunt 是 js 的任务运行器，可以自动化执行压缩，打包，测试等。实际项目使用不多，了解即可。

Why use a task runner? In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it through a Gruntfile, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

类似 webpack，这里需要配置一个 Gruntfile.js 文件，然后运行进行编译打包

```javascript
module.exports = function(grunt) {
  // 初始化配置
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jshint']);
};

```

​
