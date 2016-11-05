// Initial state
const initialState = {
    username: ""
    , isAuthenticated: false
    , profile: {}
    , token: ""
    , status: {}
}

// Actions
const SHOW_LOCK = 'SHOWLOCK'
const LOCK_SUCCESS = 'LOCK_SUCCESS'
const LOCK_ERROR = 'LOCK_ERROR'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

// Auth0 Config
const lock = new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN, options);
const options = {
    theme: {
        logo: 'https://example.com/assets/logo.png',
        primaryColor: 'red'
    }
};

// Action Creators
// Synchronous Action Creators

function showLock(){
  return {
    type:SHOW_LOCK
  }
}

function lockSuccess(profile, token){
  return {
    type: LOCK_SUCCESS,
    isAuthenticated: true,
    profile,
    token
  }
}

function lockError(err){
  return {
    type: LOCK_ERROR,
    err
  }
}

export function logout(){
  // Clear user token and profile data from localStorage
  localStorage.removeItem('id_token');
  localStorage.removeItem('profile');
  return {
    type: LOGOUT_SUCCESS
  }
}

// Asynchronous Action Creators
export function login(){
 return dispatch => {
   lock.show()
   return dispatch(showLock)
 }
}

export function doAuthentication(){
  return dispatch => {
    lock.on('authenticated', function(authResult){
      lock.getProfile(authResult.idToken, function(err, profile){
        if (err) {
          return dispacth(lockError(err))
        }
        localStorage.setItem('profile', JSON.stringify(profile))
        localStorage.setItem('id_token', authResult.idToken)
        return dispatch(lockSuccess(profile))
      })
    })
  }
}

// Reducer
export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_LOCK:
        return Object.assign({}, state, {status: "Logging In"})
    case LOCK_SUCCESS:
        return Object.assign({}, state, action.profile, action.isAuthenticated)
    case LOCK_ERROR:
        return Object.assign({}, state, {status: action.err})
    case LOGOUT_SUCCESS:
        return 
    default:
        return state
  }
}
