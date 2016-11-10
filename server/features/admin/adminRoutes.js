import jwt from 'express-jwt' 
import config from '../../../config/config'
import adminCtrl from './adminCtrl.js';
import driverCtrl from '../drivers/driverCtrl.js'

module.exports = app => {

  app.route( '/api/admin/' )
    .post( jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience})
      , (req, res, next) => {
          console.log("Admin: ", req.body);
          next()
        }
      , adminCtrl.getAdmin, adminCtrl.saveAdmin);
  
  app.route( '/api/admin/drivers')
    .post( jwt({secret: new Buffer(config.auth0.secret, 'base64'), audience: config.auth0.audience})
      , adminCtrl.createDriverAccount, driverCtrl.addDriver );
};
