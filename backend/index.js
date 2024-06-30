// Expressフレームワークをインポート
const express = require('express');
const app = express();
const port = 5000;

// ミドルウェアの設定
app.use(express.json());

// ルートハンドラーの設定
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// APIエンドポイントの設定
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
