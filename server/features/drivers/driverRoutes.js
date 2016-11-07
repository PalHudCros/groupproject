import jwt from 'express-jwt' 
import config from '../../../config/config'
import driverCtrl from './driverCtrl.js';

module.exports = app => {

  app.route( '/api/driver/:driverId/order/:orderId' )
    .get( driverCtrl.getOneOrderOnDriver )
    .delete( driverCtrl.removeOrderFromDriver );

  app.route( '/api/driver/order/all' )
    .delete( driverCtrl.removeAllOrdersFromDriver );

  app.route( '/api/driver/:driverId/order' )
    .post( driverCtrl.addOrderToDriver );

  app.route( '/api/driver/:id' )
    .get( driverCtrl.getOneDriver )
    .put( driverCtrl.updateDriver )
    .delete( driverCtrl.removeDriver );

  app.route( '/api/driver/' )
    .get( driverCtrl.getDrivers )
    .post( jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience})
      , (req, res, next) => {
          console.log("Driver: ", req.body);
          next()
        }
      , driverCtrl.getOneDriver, driverCtrl.addDriver);

};
