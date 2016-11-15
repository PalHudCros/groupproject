// Admin
import { combineReducers } from "redux";

import user from "./ducks/userDuck";
import tabs from "./ducks/tabsDuck";
import distribution from "./ducks/distributionDuck";
import inventory from "./ducks/inventoryDuck";
import drivers from "./ducks/driverDuck";
import orders from "./ducks/orderDuck";

export default combineReducers({
    user
    , tabs
    , inventory
    , distribution
    , drivers
    , orders
});
