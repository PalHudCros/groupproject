import orderCtrl from './orderCtrl'
import jwt from 'express-jwt'
import config from '../../../config/config';

export default function(app) {
  app.route('/api/order')
    .post(
      jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience}),
      orderCtrl.findProductsAndSubtractFromInventory
      , orderCtrl.addAddressToUser
      , orderCtrl.makeOrder
      , orderCtrl.deleteCartAndSession
      , orderCtrl.getOneOrder
    )

    .get(
      jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience}),
      orderCtrl.getOrders      
    )

  app.route('/api/order/driver')
    .put(
      jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience}),
      orderCtrl.addDriverToOrder      
    )
}
