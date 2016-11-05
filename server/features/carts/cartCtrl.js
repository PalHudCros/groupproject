import User from '../users/User'

module.exports = {
  updateCart(req, res){
      User.findOneAndUpdate({sub: req.user.sub}, {cart:req.body}, {new:true}, (err, user) => {
        if (err) return res.status(500).json(err);
        next();
      })
  }
  , getCart(req, res){
    User.findOne({sub: req.user.sub}, {_id: 0, cart:1} (err, cart) => {
      if (err) return res.status(500).json(err)
      if (cart) return res.status(200).json(cart)
    })
  }
}
