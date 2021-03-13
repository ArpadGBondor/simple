const express = require('express');
const fs = require('fs');
const router = express.Router();

const names = require('../names/names');

router.get('/users', (req, res) => {
  console.log(`Names: ${names}`);

  // render here the page that displays the names
});

module.exports = router;
