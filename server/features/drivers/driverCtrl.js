import axios from 'axios';
import config from '../../../config/config';
import Driver from './Driver.js';

module.exports = {

  getDrivers( req, res ) {
    // GET /api/drivers
    Driver.find( {}, ( err, drivers ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( drivers );
    } );
  }

  , getOneDriver( req, res ) {
    // GET /api/drivers/:id
    Driver.findOne( { _id: req.params.id }, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( response );
    } );
  }

  , addDriver( req, res ) {
    // POST /api/drivers
    new Driver( req.body ).save( ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( response );
    } );
  }

  , updateDriver( req, res ) {
    // PUT /api/drivers

  }

  , removeDriver( req, res ) {
    // DELETE /api/drivers
    
  }

}
