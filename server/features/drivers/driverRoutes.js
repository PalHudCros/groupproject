import driverCtrl from './driverCtrl.js';

module.exports = app => {

  app.route( '/api/drivers/' )
    .get( driverCtrl.getDrivers )
    .post( driverCtrl.addDriver )
    .put( driverCtrl.updateDriver )
    .delete( driverCtrl.removeDriver );

  app.route( '/api/driver/:id' ) {
    .get( driverCtrl.getOneDriver );
  }
};
