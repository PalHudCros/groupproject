// import orderCtrl from './orderCtrl'
const orderCtrl = require('./orderCtrl');
// import jwt from 'express-jwt'
const jwt = require('express-jwt');
// import config from '../../../config/config';
const config = require('../../../config/config');

module.exports = (app) => {
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
      orderCtrl.addDriverToOrder, orderCtrl.getUnfilledOrders
    )
    .get(
      jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience}),
      orderCtrl.getOrderByDriver
    )
  app.route('/api/orders/unfilled')
    .get(
      jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience}),
      orderCtrl.getUnfilledOrders
    )
  // app.route('/api/orders/unfilled/driver')

  app.route('/api/orders/filled')
    .get(
      jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience}),
      orderCtrl.getFilledOrder
    )
  app.route('/api/orders/undelivered')
    .get(
      jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience}),
      orderCtrl.getUndeliveredOrders
    )
  app.route('/api/orders/delivered')
    .get(
      jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience}),
      orderCtrl.getDeliveredOrders
    )

}
