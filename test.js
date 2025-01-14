const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// 秘钥（请确保在实际应用中妥善保管）
const secretKey = 'your_secret_key';
// 中间件：解析JSON请求体
app.use(bodyParser.json());
// 路由：生成Token
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // 在这里进行用户名和密码的验证（示例中省略）
  // 假设验证成功，生成Token
  if (username && password) {
    const userData = {
      id: 1,
      username,
    };
    const token = jwt.sign(userData, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
// 路由：受保护的资源
app.get('/protected', (req, res) => {
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token is invalid or expired' });
    }
    // Token有效，返回受保护的数据
    res.json({ message: 'Welcome to the protected route', user: decoded });
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

console.log(new Date().getTime(), '1736745322'.length);
