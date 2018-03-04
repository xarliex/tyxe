const mongoose = require('mongoose');
const Review = require('../models/Review');
const {dbURL} = require('../config');
mongoose.connect(dbURL).then(() => console.log("Conectado a seeds!"));

const companies = [
    {
        tickerName: "Ironhack",
        mktCap: 1000000, 
        totalShares: 10000, 
        weight: (5*10000)/1000000, 
        availableShares: 10000, 
        tickerPrice: 5, 
        pastPrices: [], 
        pastOrders: [],
        pendingOrders: [],
    },
    {
        tickerName: "Wallapop",
        mktCap: 3000000, 
        totalShares: 10000, 
        weight: (10*10000)/3000000, 
        availableShares: 10000, 
        tickerPrice: 10, 
        pastPrices: [], 
        pastOrders: [],
        pendingOrders: [],
        }]

Company.collection.drop();

companies.forEach(c =>{
    let co = new Company(c);
    co.save((err,c)=>{
        if(err){
            throw err;
        }
        console.log(`Commento guardado ${c}`);
    })
})

module.exports = reviews;