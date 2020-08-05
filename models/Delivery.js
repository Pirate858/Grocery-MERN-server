const mongoose = require('mongoose');

const { Schema } = mongoose;

const deliveryDetailsSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
    minlength: 10,
  },
});

module.exports = mongoose.model('DeliveryDetails', deliveryDetailsSchema);
