// import InventoryItem from '../wines/InventoryItem'
const InventoryItem = require('../wines/InventoryItem');
// import Order from './Order'
const Order = require('./Order');
// import User from '../users/User'
const User = require('../users/User');
// import Cart from '../carts/Cart'
const Cart = require('../carts/Cart');
// import Driver from '../drivers/Driver'
const Driver = require('../drivers/Driver');
// import mongoose from 'mongoose'
const mongoose = require('mongoose');

module.exports = {
  findProductsAndSubtractFromInventory(req, res, next){
    req.body.products.forEach((ele)=>{
        InventoryItem.findByIdAndUpdate(ele.item, {$inc: {Quantity: -ele.quantity}}, (err, quantity)=>{
          if (err) return res.status(500).json(err)
        })
    })
    next();
  }
  , addAddressToUser(req, res, next) {
      User.findOneAndUpdate({sub: req.user.sub}, {orderAddress: req.body.orderAddress}, (err, user) => {
        if (err) return res.status(501).json(err);
      })
    next();
  }
  , makeOrder(req, res, next){
      User.findOne({sub:req.user.sub}, (err, user) => {
        if (err) return res.status(502).json(err)
        new Order({
          user: user._id,
          products:req.body.products,
          subTotal:req.body.totals.subTotal,
          cartQuantity: req.body.totals.cartQuantity,
          cartTip: req.body.totals.cartTip,
          deliveryFee: req.body.totals.deliveryFee,
          cartTax: req.body.totals.cartTax,
          cartTotal:req.body.totals.cartTotal
        }).save((err, order)=> {
          if (err) return res.status(503).json(err)
        })
      })
      next()
  }
  , deleteCartAndSession(req, res, next){
      req.session.destroy();
      User.findOneAndUpdate({sub:req.user.sub}, {$set: {cart:[]}}, {new:true}, (err, user) => {
        if (err) return res.status(504).json(err)
      })
      next()
  }
  , getOneOrder(req, res){
      User.findOne({sub: req.user.sub}, (err, user) => {
        if (err) return res.status(505).json(err)
        Order.findOne({user:user._id})
        .populate("user products.item")
        .exec()
        .then(( order, err ) => {
          if (err) return res.status(506).json(err);
          return res.status(200).json(order);
        })
      })
  }
  , getOrders(req, res){
    Order.find({})
    .populate("user products.item")
    .exec((err, orders) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(orders)
    })
  }
   , addDriverToOrder( req, res, next ) {
     console.log("Req.body: ", req.body)
    Order.findByIdAndUpdate( req.body.orderId, { $push: { "filled.driver": req.body.driverId }, $set: {"filled.status": true} }, {new: true}, ( err, order ) => {
      console.log("Order: ", order, "Err: ", err)
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      next();
    } );
  }
  , getUnfilledOrders(req, res){
    Order.find({"filled.status":false})
    .populate("user products.item")
    .exec((err, orders)=>{
      if (err) return res.status(500).json(err)
      if(orders) return res.status(200).json(orders)
    })
  }
  , getFilledOrder(req, res){
    Order.find({"filled.status":true, "delivered.status": false})
    .populate("user products.item")
    .exec((err, orders)=>{
      console.log("Err", err)
      console.log("Order", orders)
      if (err) return res.status(500).json(err)
      if(orders) return res.status(200).json(orders)
    })
  }
  , getUndeliveredOrders(req, res){
    Order.find({"delivered.status":false})
    .populate("user products.item")
    .exec((err, orders)=>{
      if (err) return res.status(500).json(err)
      if(orders) return res.status(200).json(orders)
    })
  }
  , getDeliveredOrders(req, res){
    Order.find({"delivered.status":true})
    .populate("user products.item")
    .exec((err, orders)=>{
      if (err) return res.status(500).json(err)
      if(orders) return res.status(200).json(orders)
    })
  }
  , getOrderByDriver( req, res ){
    Driver.find({sub:req.user.sub}, (err, driver)=>{
      if (err) return res.status(500).json(err)
        Order.find({driver:driver._id, "delivered.status": false})
        .populate("user products.item")
        .exec((err, orders)=>{
          if (err) return res.status(500).json(err)
          if(orders) return res.status(200).json(orders)
        })
    })
  }
  , getOrderByCustomer( req, res ){
      User.find({sub:req.user.sub}, (err, user)=> { 
        if (err) return res.status(500).json(err);
        console.log("USER FIND Error: ", err)
        console.log("User: ", user)
        Order.find({"user._id": user._id})
        .populate("user products.item")
        .exec((err, orders)=>{
          console.log("ORDER FIND ERROR: ", err);
          console.log("ORDER: ", orders);

          if (err) return res.status(500).json(err)
          if(orders) return res.status(200).json(orders)
        })
      })
  }
  , setDeliveredStatus(req, res, next) {
    Order.findByIdAndUpdate(req.body.order, {$set: {"delivered.status": true}}, {new: true}, (err, order)=> {
      if (err) return res.status(500).json(err);
      next();
    })
  }
}
