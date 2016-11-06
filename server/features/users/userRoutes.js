import jwt from 'express-jwt' 
import config from '../../../config/config'
import userCtrl from './userCtrl';


module.exports = app => {
  app.post('/api/user', jwt({
      secret: new Buffer(config.auth0.secret, 'base64')
      , audience: config.auth0.audience  
    }), (req, res, next) => {
      next()
    },  
    userCtrl.getUser, userCtrl.saveUser)
}
