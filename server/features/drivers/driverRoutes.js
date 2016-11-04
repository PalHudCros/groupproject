import driverCtrl from './driverCtrl.js';

module.exports = app => {

  app.route( '/api/driver/order/:id' )
    .get( driverCtrl.getOneOrderOnDriver )
    .put( driverCtrl.updateOrderOnDriver )
    .delete( driverCtrl.removeOrderFromDriver );

  app.route( '/api/driver/order' )
    .get( driverCtrl.getOrdersOnDriver )
    .post( driverCtrl.addOrderToDriver );

  app.route( '/api/driver/:id' )
    .get( driverCtrl.getOneDriver )
    .put( driverCtrl.updateDriver )
    .delete( driverCtrl.removeDriver );

  app.route( '/api/driver/' )
    .get( driverCtrl.getDrivers )
    .post( driverCtrl.addDriver );

};
