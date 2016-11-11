import axios from 'axios';
import config from '../../../config/config';
import Driver from './Driver.js';
import Order from '../orders/Order.js'

import {createHeaders} from "../../../src/utils/jwtHelper" 

module.exports = {

  getOneOrderOnDriver( req, res ) {
    // GET /api/driver/:driverId/order/:orderId
    Driver.findById( req.params.driverId )
      // .populate( "orders" )
      .exec( ( err, driver ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }

        let order = driver.orders.filter( order => {
          return order._id === req.params.orderId;
        } );
        order = order[0];

        return res.status( 200 ).json( order );
      } );
  }

  , getOneDriver( req, res, next ) {
		Driver.findOne({sub: req.body.user_id})
      .populate( "orders" )
      .exec( ( err, driver ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }
        if ( driver ) {
          return res.status( 200 ).json( driver );
        } 
        next();
      });
  }

  , getDrivers( req, res ) {
    // GET /api/driver
    Driver.find( {} )
      .populate( "orders" )
      .exec( ( err, drivers ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( drivers );
    } );
  }

  , addOrderToDriver( req, res ) {
    // POST '/api/driver/:driverId/order'
    // Pass the order object from front-end
    Driver.findByIdAndUpdate( req.params.driverId, { $push: { orders: req.body._id } }, ( err, orderAdded ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( orderAdded );
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
    console.log("REQ: ", req)
    console.log("RES: ", res)
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
        console.log(err)
        return res.status( 500 ).json( err );
      }
      console.log("Success: ", driverCreated)
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

  , removeOrderFromDriver( req, res ) {
    // DELETE /api/driver/:driverId/order/:orderId
    Driver.findByIdAndUpdate( req.params.driverId, { $pull: { orders: req.params.orderId } }, ( err, orderRemoved ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( orderRemoved );
    } );
  }

  , removeAllOrdersFromDriver( req, res ) {
    // DELETE '/api/driver/order/all'
    Driver.findByIdAndUpdate( req.body._id, { $set: { orders: "" } }, ( err, allOrdersRemoved ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( allOrdersRemoved );
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
