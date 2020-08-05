const express = require('express');
const router = express.Router();

const Item = require('../models/item');

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get('/category', async (req, res, next) => {
  try {
    res.send(Item.schema.path('category').enumValues);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const addedItem = new Item(req.body);
    res.send(await addedItem.save());
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
