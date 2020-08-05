const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = new Schema({
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],

  deliveryDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DeliveryDetails',
    required: true,
  },

  isDelivered: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Cart', cartSchema);
