import axios from 'axios';
import config from '../../../config/config';
import Driver from './Driver.js';

module.exports = {

  getOneOrderOnDriver( req, res ) {
    // GET /api/driver/order/:id
  }

  , getOrdersOnDriver( req, res ) {
    // GET /api/driver/order
  }

  , getOneDriver( req, res ) {
    // GET /api/driver/:id
    Driver.findOne( { _id: req.params.id }, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( response );
    } );
  }

  , getDrivers( req, res ) {
    // GET /api/driver
    Driver.find( {}, ( err, drivers ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( drivers );
    } );
  }

  , addOrderToDriver( req, res ) {
    // POST /api/driver/order
  }


  , addDriver( req, res ) {
    // POST /api/driver
    new Driver( req.body ).save( ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( response );
    } );
  }

  , updateOrderOnDriver( req, res ) {
    // PUT /api/driver/order/:id
  }

  , updateDriver( req, res ) {
    // PUT /api/driver/:id

  }

  , removeOrderFromDriver( req, res ) {
    // DELETE /api/driver/order/:id
  }

  , removeDriver( req, res ) {
    // DELETE /api/driver

  }

}
