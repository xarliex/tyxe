const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String, 
  surname: String,
  username: String,
  email: String, 
  password: String,
  cash: Number,
  funds: Number,
  holdings: [],
  orders: []
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;