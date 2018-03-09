const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const orderSchema = new Schema({
    orderer: {type: Schema.Types.ObjectId, ref: 'User'},
    orderco: {type: Schema.Types.ObjectId, ref: 'Company'},
    orderQty: Number,
    orderValue: Number, 
    statusflag: Boolean,
    typeflag: Boolean,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;