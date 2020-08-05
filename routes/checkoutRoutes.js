const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Delivery = require('../models/Delivery');

router.post('/delivery', async (req, res, next) => {
  try {
    const addedDetails = new Delivery(req.body);
    res.send(await addedDetails.save());
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post('/cart', async (req, res, next) => {
  try {
    const addedCartItems = new Cart(req.body);
    res.send(await addedCartItems.save());
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
