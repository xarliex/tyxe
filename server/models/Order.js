const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const orderSchema = new Schema({
    orderer: user_id,
    orderTck: company_id,
    orderPrice: company_tickerPrice,
    orderQty: Number,
    orderValue: Number, 
    flag: Boolean,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;