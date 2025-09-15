// Placeholder route untuk admin
const express = require('express');
const router = express.Router();

router.get('/requests', (req, res) => {
  res.send({ message: 'Admin requests placeholder' });
});

router.get('/history', (req, res) => {
  res.send({ message: 'Admin history placeholder' });
});

module.exports = router;