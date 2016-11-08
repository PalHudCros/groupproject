import User from '../users/User'

module.exports = {
  getCartSession( req, res, next ){
    return res.status(200).json({cart:req.session.cart})
  }
  , setCartSession(req, res){
    // validate the object...
    if (req.session.cart) {
      req.session.cart = searchCartAddToExistingWine(req.session.cart, req.body);
    } else {
      req.session.cart = [];
      req.session.cart.push(req.body)
    }
    return res.status(200).json(req.session.cart)
  }
  , addOneToCart(req, res, next){
      // User.findOne({sub:req.user.sub}, {_id: 0, cart: 1}, (err, cart) =>{
      //   req.session.cart = searchCartAddToExistingWine(req.session.cart, cart.cart);
      // })

      if (req.session.cart) {
        req.session.cart = searchCartAddToExistingWine(req.session.cart, req.body);
      } else {
        req.session.cart = [];
        req.session.cart.push(req.body)
      }

      User.findOneAndUpdate({sub: req.user.sub}, {cart:req.session.cart}, {new:true}, (err, user) => {
        if (err) return res.status(500).json(err);
        next();
      })
  }
  , getCart(req, res){
    User.findOne({sub: req.user.sub}, {_id: 0, cart:1}, (err, cart) => {
      if (err) return res.status(500).json(err)
      if (cart) return res.status(200).json(cart)
    })
  }
  , updateCart(req, res, next){

    console.log('not session',req.body);
    req.session.cart = req.body.cart

    User.findOneAndUpdate({sub: req.user.sub}, {cart:req.session.cart}, {new:true}, (err, user) => {
      if (err) return res.status(500).json(err);
      next();
    })
  }
  , updateCartSession(req, res){

    console.log('cart session',req.body)

    req.session.cart = req.body.cart

    return res.send(200).json(req.session.cart)
  }
}

function searchCartAddToExistingWine(cart, newWine){
  if (Array.isArray(newWine)){
    newWine.forEach(elem => {
    	// console.log(elem)
     let found = false;
     cart.forEach(ele=>{
        if (ele.item === elem.item){
          ele.quantity = parseInt(ele.quantity) + parseInt(elem.quantity)
          found = true
        }
      });
      if (!found) cart.push(elem)
    })

  } else {
  	let found = false;
    cart.forEach(ele=>{
      if (ele.item === newWine.item){
        ele.quantity = parseInt(ele.quantity) + parseInt(newWine.quantity)
        found = true
      }
    });
    if (!found) cart.push(newWine)
  }
  return cart
}
