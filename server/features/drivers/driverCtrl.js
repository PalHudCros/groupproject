// import axios from 'axios';
const axios = require('axios');
// import config from '../../../config/config';
const config = require('../../../config/config');
// import Driver from './Driver.js';
const Driver = require('./Driver');
// import Order from '../orders/Order.js'
const Order = require('../orders/Order');

import {createHeaders} from "../../../src/utils/jwtHelper"

module.exports = {

 getOneDriver( req, res, next ) {
		Driver.findOne({sub: req.body.user_id})
      .exec( ( err, driver ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }
        if ( driver ) {
          return res.status( 200 ).json( driver );
        }
      });
  }

  , getDrivers( req, res ) {
    // GET /api/driver
    Driver.find( {} )
      .exec( ( err, drivers ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( drivers );
    } );
  }

	, createDriverAccount(req, res, next) {
		let token = config.auth0.create_token;
		let options = {headers: {
      'Content-Type': 'application/json'
      , 'Authorization': `Bearer ${token}`
    }}
    let newDriver = {
      "connection": "Username-Password-Authentication"
      , "email": req.body.email
      , "password": req.body.password
    }
		axios.post("https://hudson.auth0.com/api/v2/users", newDriver, options)
			.then(result => {
        req.user = result.data;
        next()
			})
      .catch(err => {
        res.status(500).json(err)
      })
	}

  , addDriver( req, res ) {
    // POST /api/driver
    const newDriver = {
      sub: req.user.user_id
      , name: req.body.name
      , email: req.body.email
      , picture: req.user.picture
      , vehicle: req.body.car
      , license_plate: req.body.licensePlate
      , updated_at: req.user.updated_at
    }
    new Driver( newDriver ).save( ( err, driverCreated ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( driverCreated );
    } );
  }

  , updateDriver( req, res ) {
    // PUT /api/driver/:id
    Driver.findByIdAndUpdate( req.params.id, req.body, ( err, driverUpdated ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( driverUpdated );
    } );
  }

  , removeDriver( req, res ) {
    // DELETE /api/driver/:id
    Driver.findByIdAndRemove( req.params.id, ( err, driverDeleted ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( driverDeleted );
    } );

  }

};
