import mongoose from "mongoose";
import Cart from '../carts/Cart'

const User = new mongoose.Schema({
  sub: {type: String, required: true, unique: true}
  , family_name: {type: String}
  , given_name: {type: String}
  , name: {type: String}
  , ofAge: {type: Boolean, default: false}
  , nickname: {type: String}
  , gender: {type: String}
  , email: {type: String}
  , cart: [Cart]
  , email_verified: {type: Boolean}
  , picture: {type: String, default: 'http://www.clker.com/cliparts/m/3/I/C/c/2/grey-silhouette-of-man.svg'}
  , created_at: {type: Date}
  , updated_at: {type: Date}
});

module.exports = mongoose.model("User", User);
