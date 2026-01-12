## 106-path 和 re_path

In Django, both path and re\_path are used to define URL patterns, but they have different use cases based on how they match URLs:

1. path:

   * path is used for simpler, human-readable URL patterns.

   * It uses a simpler syntax for defining URL patterns and is suitable for capturing variable parts of the URL using angle brackets <>.

   * Example: path('articles/\<int:year>/', views.year\_archive) captures an integer from the URL.

2. re\_path:

   * re\_path is used for more complex URL patterns that require regular expressions.

   * It allows for more flexible and powerful pattern matching, useful when the URL structure is complex or when you need to match specific patterns with regex.

   * Example: re\_path(r'^articles/(?P\<year>\[0-9]{4})/\$', views.year\_archive) uses a regex to capture a 4-digit year from the URL.

In summary, use path for simpler and more readable URL patterns, and re\_path when you need the power of regular expressions for complex pattern matching.

​

在Django中，path和re\_path都用于定义URL模式，但根据它们匹配URL的方式，它们有不同的用例：

path:path用于更简单、人类可读的URL模式。它使用更简单的语法来定义URL模式，适用于使用尖括号<>捕获URL的可变部分。示例：path（'articles/\<int:year>/'，views.year\_archive）从URL中捕获一个整数。

re\_path:re\_path用于需要正则表达式的更复杂的URL模式。它允许更灵活和强大的模式匹配，在URL结构复杂或需要用正则表达式匹配特定模式时非常有用。示例：re\_path（r'^articles/（？P\<year>\[0-9]{4}）/\$'，views.year\_archive）使用正则表达式从URL中捕获4位年份。

总之，使用path可以获得更简单、更可读的URL模式，而当您需要正则表达式的强大功能来进行复杂的模式匹配时，可以使用re\_path。
