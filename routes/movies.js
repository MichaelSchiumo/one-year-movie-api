const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Create a movie');
});

router.put('/:id', (req, res) => {
  res.send('update movie');
});

module.exports = router;
