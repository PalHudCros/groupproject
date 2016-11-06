import cartCtrl from './orderCtrl'
import jwt from 'express-jwt'

export default function(app) {
 app.use('/api/cart')
  .get(cartCtrl.getcart)
  // .use(jwt({
  //   secret: new Buffer('', 'base64')
  //   , audience: ''
  // }))
  .post(cartCtrl.updateCart, cartCtrl.getCart)

}
