import driverCtrl from './driverCtrl.js';

module.exports = app => {

  app.route( '/api/driver/:driverId/order/:orderId' )
    .get( driverCtrl.getOneOrderOnDriver )
    .delete( driverCtrl.removeOrderFromDriver );

  app.route( '/api/driver/:driverId/order' )
    .post( driverCtrl.addOrderToDriver );

  app.route( '/api/driver/:id' )
    .get( driverCtrl.getOneDriver )
    .put( driverCtrl.updateDriver )
    .delete( driverCtrl.removeDriver );

  app.route( '/api/driver/' )
    .get( driverCtrl.getDrivers )
    .post( driverCtrl.addDriver );

};
