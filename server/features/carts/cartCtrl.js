import User from '../users/User'

module.exports = {
  getCartSession( req, res, next ){
console.log('getcarsession');
    return res.status(200).json(req.session.cart)
  }
  ,setCart( req, res, next){
    // validate the object...
    if (req.session.cart) {
      req.session.cart = searchCartAddToExistingWine(req.session.cart, req.body);
    } else {
      req.session.cart = [];
      req.session.cart.push(req.body)
    }
    next();
  }
  , setCartSession(req, res){
    // validate the object...
    if (req.session.cart) {
      req.session.cart = searchCartAddToExistingWine(req.session.cart, req.body);
    } else {
      req.session.cart = [];
      req.session.cart.push(req.body)
    }
    console.log(req.session.cart);
    return res.status(200).json(req.session.cart)
  }
  , updateCart(req, res, next){
      User.findOneAndUpdate({sub: req.user.sub}, {cart:req.session.cart}, {new:true}, (err, user) => {
        if (err) return res.status(500).json(err);
        console.log(user);
        next();
      })
  }
  , getCart(req, res){
    User.findOne({sub: req.user.sub}, {_id: 0, cart:1}, (err, cart) => {
      if (err) return res.status(500).json(err)
      if (cart) return res.status(200).json(cart)
    })
  }
}

function searchCartAddToExistingWine(cart, newWine){
	let found = false;
	cart.forEach(ele=>{
		if (ele.item === newWine.item){
			found = true;
			ele.quantity = parseInt(ele.quantity) + parseInt(newWine.quantity)
		}
	});
	if (!found)cart.push(newWine);
	return cart
}
