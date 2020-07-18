const express = require('express');
const router = express.Router();

const Item = require('../models/item');

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const addedItem = new Item(req.body);
    res.json(await addedItem.save());
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
