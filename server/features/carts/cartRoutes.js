import cartCtrl from './cartCtrl'
import jwt from 'express-jwt'
import config from '../../../config/config';

export default function(app) {
 app.route('/api/cart')
  .get(cartCtrl.getCart)
  .all(jwt({
    secret: new Buffer(config.auth0.secret, 'base64')
    , audience: config.auth0.audience
  }))
  .post(cartCtrl.updateCart, cartCtrl.getCart)

}
