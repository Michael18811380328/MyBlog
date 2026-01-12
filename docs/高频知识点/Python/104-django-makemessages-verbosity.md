## 104-django-makemessages-verbosity

[https://docs.djangoproject.com/zh-hans/4.1/ref/django-admin/#makemessages](https://docs.djangoproject.com/zh-hans/4.1/ref/django-admin/#makemessages "https://docs.djangoproject.com/zh-hans/4.1/ref/django-admin/#makemessages")

django-admin makemessages --verbosity

`django-admin makemessages --verbosity` 是一个用于Django框架的命令，它用于收集那些需要翻译的文本信息。

`--verbosity`选项用于控制命令的详细程度，可以设置为0、1、2或3。verbosity 冗长

解决方案：

\--verbosity 0

这个命令会以最少的输出信息运行，只输出错误和关键信息。

\--verbosity 1

这个命令会提供更多的输出信息，包括基本的操作信息和错误信息。

\--verbosity 2（实际使用）

这个命令会提供更详细的输出信息，包括每个文件处理的详细信息。

\--verbosity 3

这个命令会提供最详细的输出信息，包括每个文件中找到的每个可翻译字符串。

注意：`--verbosity`选项必须在`makemessages`命令之后，不能单独使用。例如，你不能只输入`django-admin --verbosity 1`。

注意版本：目前有 3 4 5 版本，文档可能过时。
