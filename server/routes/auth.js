// Placeholder route untuk auth
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.send({ message: 'Login route placeholder' });
});

router.post('/register', (req, res) => {
  res.send({ message: 'Register route placeholder' });
});

router.get('/verify/:token', (req, res) => {
  res.send({ message: 'Verify email route placeholder' });
});

module.exports = router;