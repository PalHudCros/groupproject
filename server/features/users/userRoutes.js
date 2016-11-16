// import jwt from 'express-jwt'
const jwt = require('express-jwt');
// import config from '../../../config/config'
const config = require('../../../config/config');
// import userCtrl from './userCtrl';
const userCtrl = require('./userCtrl');

module.exports = app => {
  app.post('/api/user', jwt({
      secret: new Buffer(config.auth0.secret, 'base64')
      , audience: config.auth0.audience
    }), (req, res, next) => {
      next()
    },
    userCtrl.getUser, userCtrl.saveUser)
}
