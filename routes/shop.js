const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  const ip = req.ip.split(':').slice(-1)[0];
  console.log(ip);
  res.render('shop', { pageTitle: 'Shop', ip: ip });
});

module.exports = router;
