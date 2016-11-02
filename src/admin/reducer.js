// Admin

import { combineReducers } from "redux";

import user from "./ducks/userDuck";
import inventory from "./ducks/inventoryDuck";
import tabs from "./ducks/tabsDuck";

export default combineReducers({
    user
    , tabs
    , inventory
});
