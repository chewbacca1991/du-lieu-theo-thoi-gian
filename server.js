const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối tới MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối MongoDB thành công!'))
  .catch(err => console.error('Kết nối MongoDB thất bại:', err));

app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với ứng dụng Dữ liệu Theo Thời Gian!');
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
});
