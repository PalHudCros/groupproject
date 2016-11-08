import cartCtrl from './cartCtrl'
import jwt from 'express-jwt'
import config from '../../../config/config';

export default function(app) {
 app.route('/api/cart')
  .get(cartCtrl.getCartSession, jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience}), cartCtrl.getCart)
  .post(cartCtrl.setCartSession, jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience}), cartCtrl.updateCart, cartCtrl.getCart)

}
