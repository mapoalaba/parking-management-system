// Express 애플리케이션의 진입점 파일입니다. 서버 설정과 라우트를 연결합니다.

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // CORS 미들웨어 추가
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Enable CORS
app.use(cors()); // 모든 도메인에서의 요청을 허용

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(port, () => console.log(`Server running on port ${port}`));

