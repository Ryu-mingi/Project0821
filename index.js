const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 기본 라우트 설정 (views 폴더의 index.html 파일 제공)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 다른 페이지 라우트 설정 예시
app.get('/another-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'another-page.html'));
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
