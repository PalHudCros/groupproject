import mongoose from 'mongoose';
import Wine from "./Wine";

const DistributionWine = new mongoose.Schema(Object.assign({}, Wine, {
    Quantity: {type: Number, default: 0}
    , UnitsSold: {type: Number, default: 0} 
}));

module.exports = mongoose.model('DistributionWine', DistributionWine);