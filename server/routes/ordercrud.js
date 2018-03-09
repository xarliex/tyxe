const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const debug = require("debug")("server:ordercrud");
const executor = require("../config/executor");
console.log("dff");
console.log(executor);

// router.get("/locals", (req, res, next) => {

//   const orderer = res.locals.user._id;
//   return orderer;
// });

//CREATE NEW BUY ORDER
router.post("/newbuyorder", (req, res, next) => {
  console.log(req.body);
  const { orderer, orderco, orderQty, orderValue } = req.body;
  // if (!orderer || !orderco || !orderQty || !orderValue) return res.status(400).json({ message: "All details must be filled" });

  const newbuy = new Order({
    orderer,
    orderco,
    orderQty,
    orderValue,
    statusflag: false,
    typeflag: true
  });

  newbuy
    .save()
    .then(order => {
      debug(`Registered order ${order._id} with orderer: ${order.orderer}`);
      res.status(200).json(req.order);
    })
    .catch(e => res.status(500).json(e));
});

//CREATE NEW SELL ORDER

router.post("/newsellorder", (req, res, next) => {
  const empresaID = req.body.orderco;
  var arrayEmpresaSell = [];
  var arrayEmpresaBuy = [];
  var vuelta;
  const { orderer, orderco, orderQty, orderPrice, orderValue } = req.body;
  // if ( !orderco || !orderQty || !orderPrice || !orderValue) return res.status(400).json({ message: "All details must be filled" });

  const newsell = new Order({
    orderer,
    orderco,
    orderQty,
    orderValue,
    statusflag: false,
    typeflag: false
  });

  newsell.save().then(order => {
    Order.find().then(all => {
      all.forEach(e => {
        if (e.orderco == empresaID) {
          if (e.typeflag === false) {
            arrayEmpresaSell.push(e);
          }
          if (e.typeflag === true) {
            arrayEmpresaBuy.push(e);
          }
        }
      });
    }).then(res=>{
      vuelta = executor(arrayEmpresaSell, arrayEmpresaBuy)();
    });
      
        // do something asynchronous which eventually calls either:
        //
        //   resolve(someValue); // fulfilled
        // or
        //   reject("failure reason"); // rejected
    
    

      //Guardacr el return
    
  });
})
  
    ////Comprobar que vuelta existe
    //Dropear la collection
    //forEach del array devuelto salvar cada uno de los objetos e.save()
//     .then(vuelta => {
//       //debug(`Registered order ${order._id} with orderer: ${order.orderer}`);
//       res.status(200).json(vuelta);
//     })
//     .catch(e => res.status(500).json(e));
// });

// RETRIEVE
// Retrieve all orders
router.get("/list", function(req, res, next) {
  debug(`Retrieving all`);
  Order.find()
    .then(list => {
      console.log(list);
      res.status(200).json(list);
    })
    .catch(e => {
      res.status(500).json(e);
    });
});

// Retrieve one order
router.get("/:id", function(req, res, next) {
  debug(`Retrieving id: ${req.params.id}`);
  Order.findById(req.params.id)
    .then(list => res.status(200).json(list))
    .catch(e => res.status(500).json(e));
});

/* U => UPDATE */

router.put("/update/:id", (req, res, next) => {
  Order.findById(req.params.id, (err, order) => {
    let updates = {
      orderer: req.body.orderer,
      orderco: req.body.orderco,
      orderQty: req.body.orderQty,
      orderValue: req.body.orderValue,
      statusflag: req.body.flag,
      typeflag: req.body.flag
    };

    Order.findByIdAndUpdate(req.params.id, updates, { new: true })
      .then(neworder =>
        res.status(200).json({ message: "Buy order updated successfully" })
      )
      .catch(e => res.status(500).json(e));
  });
});

// DELETE

router.get("/delete/:id", function(req, res, next) {
  Order.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json({ message: "Buy order removed" }))
    .catch(e => res.status(500).json(e));
});

module.exports = router;

// Order.findById(id).populate('orderco').then((foundOrder) => console.log(foundOrder))
