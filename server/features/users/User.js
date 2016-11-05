import mongoose from "mongoose";
import Cart from '../carts/Cart'

const User = new mongoose.Schema({
  facebook_id: {type: String, required: true, unique: true}
  , name: {type: String, required: true}
  , email: {type: String}
  , photo: {type: String, default: 'http://www.clker.com/cliparts/m/3/I/C/c/2/grey-silhouette-of-man.svg'}
  , cart: [Cart]
});

module.exports = mongoose.model("User", User);
