import InventoryItem from '../wines/InventoryItem'
import Order from './Order'
import User from '../users/User'
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
        if (err) return res.status(500).json(err);
      })
    next();
  }

  , makeOrder(req, res, next){
      User.findOne({sub:req.user.sub}, (err, user) => {
        if (err) return res.status(500).json(err)
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
          if (err) return res.status(500).json(err)
        })
      })
      next()
  }

  , deleteCartAndSession(req, res, next){
      User.findOneAndUpdate({sub:req.user.sub}, {cart: []}, (err, user) => {
        if (err) return res.status(500).json(err)
      })
      next()
  }

  , getOneOrder(req, res){
      User.findOne({sub: req.user.sub}, (err, user) => {
        if (err) return res.status(500).json(err)
        Order.findOne({user:user._id})
        .populate("user products.item")
        .exec()
        .then(( order, err ) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(order);
        })
      })
  }
}
