// import jwt from 'express-jwt'
const jwt = require('express-jwt');
// import config from '../../../config/config'
const config = require('../../../config/config');
// import driverCtrl from './driverCtrl.js';
const driverCtrl = require('./driverCtrl');

module.exports = app => {

  app.route( '/api/driver/:id' )
    .get( driverCtrl.getOneDriver )
    .put( driverCtrl.updateDriver )
    .delete( driverCtrl.removeDriver );

  app.route( '/api/driver/' )
    .get( driverCtrl.getDrivers )
    .post( driverCtrl.getOneDriver );

  app.route( '/api/create_driver')
    .post(
      jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience})
      , driverCtrl.createDriverAccount, driverCtrl.addDriver
    );

};
