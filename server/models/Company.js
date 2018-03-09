const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const companySchema = new Schema({
  tickerName: String,
  tickerImg: { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=100&h=100" },
  tickerDescription: String,
  mktCap: Number, 
  totalShares: Number, 
  percentage: Number, 
  avbShares: Number, 
  tickerPrice: Number, 
  pastPrices: [{
    price: Number,
    date: Date
  }],
  pastOrders: [],
  pendingOrders: [],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;