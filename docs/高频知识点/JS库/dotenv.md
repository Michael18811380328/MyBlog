# dotenv

[https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv "https://www.npmjs.com/package/dotenv")

Dotenv is a zero-dependency module that loads environment variables from a `.env` file into [process.env](https://nodejs.org/docs/latest/api/process.html#process_process_env).

可以把环境变量从 .env 文件中读出来，然后在代码中判断不同的环境，执行不同的逻辑。

```text
S3_BUCKET="YOURS3BUCKET"

SECRET_KEY="YOURSECRETKEYGOESHERE"
```

在项目代码中

```text
require('dotenv').config()

console.log(process.env)
```

​
