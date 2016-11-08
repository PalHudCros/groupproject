import User from '../users/User'

module.exports = {
  getCartSession( req, res, next ){
    console.log(req.user)

    return res.status(200)
  }
  , setCartSession(req, res, next){
    if (req.session.cart) {
      req.session.cart = searchCartAddToExistingWine(req.session.cart, req.body);
    } else {
      req.session.cart = [];
      req.session.cart.push(req.body)
    }
    next();
  }
  , updateCart(req, res, next){
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
