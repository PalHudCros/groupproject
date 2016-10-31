const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const AUTHENTICATING = "user/AUTHENTICATING";

const initialState = {
    username: ""
    , email: ""
    , loggedIn: false
    , authenticating: false
}

export default function reducer(state = initialState, action) {
    switch ( action.type ) {
        case LOGIN:
            return Object.assign({}, action.user, {loggedIn: true, authenticating: false});
        case LOGOUT:
            return initialState;
        case AUTHENTICATING:
            return {username: "", email: "", loggedIn: false, authenticating: true};
        default:
            return state;
    }
}

export function login(user) {
    return {type: LOGIN, user};
}

export function authenticating() {
    return {type: AUTHENTICATING}
}

export function logout() {
    return {type: LOGOUT};
}