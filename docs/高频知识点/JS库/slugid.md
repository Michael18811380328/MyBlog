# slugid

生成 UUID 主要用于 nodejs，这个星标比较少，慎重使用

[https://www.npmjs.com/package/slugid](https://www.npmjs.com/package/slugid "https://www.npmjs.com/package/slugid")

A node.js module for generating v4 UUIDs and encoding them into 22 character URL-safe base64 slug representation (see [RFC 4648 sec. 5](http://tools.ietf.org/html/rfc4648#section-5)).

Slugs are url-safe base64 encoded v4 uuids, stripped of base64 `=` padding. They are generated with the [uuid package](https://www.npmjs.com/package/uuid) which is careful to use a cryptographically strong random number generator on platforms that make one available.

There are two methods for generating slugs - `slugid.v4()` and `slugid.nice()`.

The `slugid.v4()` method returns a slug from a randomly generated v4 uuid. The `slugid.nice()` method returns a v4 slug which conforms to a set of "nice" properties. At the moment the only "nice" property is that the slug starts with \[A-Za-f], which in turn implies that the first (most significant) but of its associated uuid is set to 0.

The purpose of the `slugid.nice()` method is to support having slugids which can be used in more contexts safely. Regular slugids can safely be used in urls, and for example in AMQP routing keys. However, slugs beginning with `-` may cause problems when used as command line parameters.

```javascript
const slugid = require('slugid');

// Generate URL-safe base64 encoded UUID version 4 (random)
const slug = slugid.v4();

// Get UUID on the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
const uuid = slugid.decode(slug);

// Compress to slug again
assert(slug == slugid.encode(uuid));
```

一个node.js模块，用于生成v4 UUID并将其编码为22个字符的URL安全base64 slug表示

slug是url安全的base64编码的v4 uuid，去掉了base64=填充。它们是使用uuid包生成的，uuid包在提供密码强的随机数生成器的平台上谨慎使用。

有两种方法可以生成slugid.v4（）和slugid.nice（）。

slugid.v4（）方法从随机生成的v4 uuid返回一个slug。slugid.nice（）方法返回一个符合一组“nice”属性的v4 slug。目前，唯一“好”的属性是slug以\[A-Za-f]开头，这反过来意味着其关联uuid的第一个（最重要的）但被设置为0。

slugid.nice（）方法的目的是支持在更多上下文中安全使用slugid。常规slugid可以安全地用于url，例如AMQP路由密钥。但是，以-开头的slug在用作命令行参数时可能会导致问题。
