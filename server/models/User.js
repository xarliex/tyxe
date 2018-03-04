const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  profilePic: { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=100&h=100" },
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