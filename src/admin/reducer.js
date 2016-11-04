// Admin

import { combineReducers } from "redux";

import user from "./ducks/userDuck";
import tabs from "./ducks/tabsDuck";
import distribution from "./ducks/distributionDuck";
import inventory from "./ducks/inventoryDuck";

export default combineReducers({
    user
    , tabs
    , inventory
    , distribution
});
