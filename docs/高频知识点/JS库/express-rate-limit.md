# express-rate-limit

请求次数限制，避免一个IP占用太多服务器性能

Basic rate-limiting middleware for [Express](http://expressjs.com/). Use to limit repeated requests to public APIs and/or endpoints such as password reset. Plays nice with [express-slow-down](https://www.npmjs.com/package/express-slow-down) and [ratelimit-header-parser](https://www.npmjs.com/package/ratelimit-header-parser).

```javascript
import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)
```

​
