import cartCtrl from './cartCtrl'
import jwt from 'express-jwt'
import config from '../../../config/config';

export default function(app) {
 app.route('/api/cart')
  .get(cartCtrl.getCart)
  // .all( (req, res, next) => {
  //   console.log('first', req.body);
  //   next();
  // })
  .all(jwt({
    secret: new Buffer(config.auth0.secret, 'base64')
    , audience: config.auth0.audience
  }))
  // .all( (req, res, next) => {
  //   console.log('last', req.body);
  //   next();
  // })
  .post(cartCtrl.updateCart, cartCtrl.getCart)

}
