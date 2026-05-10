// server/routes/authRoutes.js
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Ganti dengan kredensial yang aman
  if (username === 'admin' && password === 'green123') {
    res.json({ success: true, token: 'secret-token-123' });
  } else {
    res.status(401).json({ success: false, message: 'Login Gagal' });
  }
});

module.exports = router;