import InventoryItem from '../wines/InventoryItem'
import Order from './Order'
import User from '../users/User'
import Cart from '../carts/Cart'

import mongoose from 'mongoose'

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
          console.log("503: ", err);
          if (err) return res.status(503).json(err)
        })
      })
      next()
  }

  , deleteCartAndSession(req, res, next){
      req.session.destroy();
      User.findOneAndUpdate({sub:req.user.sub}, {$set: {cart:[]}}, {new:true}, (err, user) => {
        console.log('find one and update',user.cart, req.session)
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
}
