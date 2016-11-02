// Admin

import { combineReducers } from "redux";

import user from "./ducks/userDuck";
import inventory from "./ducks/inventoryDuck";

export default combineReducers({
    user,
    inventory
});
