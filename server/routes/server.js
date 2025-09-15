// Placeholder route untuk server
const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  res.send({ message: 'Server list placeholder' });
});

router.post('/create', (req, res) => {
  res.send({ message: 'Create server placeholder' });
});

module.exports = router;