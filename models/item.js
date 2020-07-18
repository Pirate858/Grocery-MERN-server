const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: false,
  },
  photo: {
    type: String,
    required: true,
  },
  maxAvailable: {
    type: Number,
  },
  unitMeasured: {
    type: String,
    default: 'kg',
    enum: ['kg', 'gm', 'ltr', 'nos'],
  },
});

module.exports = mongoose.model('Item', itemSchema);
