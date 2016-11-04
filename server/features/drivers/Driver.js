import mongoose from 'mongoose';

const Driver = new mongoose.Schema( {
  name: {
    type: String
    , required: true
    , trim: true
  }
  , photo: {
    type: String
    , default: 'http://www.clker.com/cliparts/m/3/I/C/c/2/grey-silhouette-of-man.svg'
  }
  , address: {
    type: String
    , default: "Dallas, Texas"
  }
  , vehicle: {
    type: String
    , default: "Mazda MX-5 Miata"
  }
  , license_plate: {
    type: String
    , default: "DLVRY PRSN"
  }
  , orders: [ {
    type: mongoose.Schema.Types.ObjectId
    , ref: "Order"
    , default: ""
  } ]
} );

module.exports = mongoose.model( "Driver", Driver );
