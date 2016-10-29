import mongoose from 'mongoose';

const Wine = new mongoose.Schema({
    id: {type: Number, required: true}
    , name: {type: String, required: true}
    , description: {type: String}
    , GeoLocation: {
        latitude: {type: Number}
        , longitude: {type: Number}
        , url: {type: String}
    }
    , year: {type: String}
    , appellation: {
        id: {type: String}
        , name: {type: String} 
    }
    , varietal : {
        id: {type: Number}
        , name: {type: String}
        , wineType: {
            id: {type: String}
            , name: {type: String}
        }
    }
    , vineyard: {
        id: {type: Number}
        , name: {type: String}
    }
    , productAttributes: [{type: String}]
});

module.exports = mongoose.model('Wine', Wine);