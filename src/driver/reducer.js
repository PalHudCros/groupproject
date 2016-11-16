// Driver

import { combineReducers } from "redux";

import user from "./ducks/userDuck";
import orders from "./ducks/orderDuck";

export default combineReducers({
    user
    , orders
});
