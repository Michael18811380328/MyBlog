## 205-pyjwt

[https://github.com/jpadilla/pyjwt](https://github.com/jpadilla/pyjwt "https://github.com/jpadilla/pyjwt")

JSON Web Token implementation in Python

A Python implementation of RFC 7519.

```python
import jwt

encoded = jwt.encode({"some": "payload"}, "secret", algorithm="HS256")

print(encoded)

# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb21lIjoicGF5bG9hZCJ9.4twFt5NiznN84AWoo1d7KO1T_yoc0Z6XOpOVswacPZg

jwt.decode(encoded, "secret", algorithms=["HS256"])

# {'some': 'payload'}
```

​
