import { combineReducers } from "redux";

import user from "./ducks/userDuck";
import cart from "./ducks/cartDuck";
import wines from "./ducks/wineDuck";

export default combineReducers({
    user
    , cart
    , wines
});
