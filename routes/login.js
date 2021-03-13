const express = require('express');
const names = require('../names/names');
const fs = require('fs');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', function (req, res) {
  const username = req.body.username;
  console.log(`username: ${username}`);
  names.push(username);

  // render a page here, to confirm that the username has been added.
});

module.exports = router;
