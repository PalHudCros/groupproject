import axios from 'axios';

// Initial state
const initialState = {
    status: 'Logged Out'
}

// Actions
const SHOW_LOCK = 'SHOW_LOCK'
const LOCK_SUCCESS = 'LOCK_SUCCESS'
const LOCK_ERROR = 'LOCK_ERROR'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

// Auth0 Config
const lock = new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN, options);
const options = {
    theme: {
        logo: 'https://example.com/assets/logo.png',
        primaryColor: '#ec423d'
    }
};

// Action Creators
// Synchronous Action Creators

function showLock(){
  return {
    type:SHOW_LOCK
  }
}

function lockSuccess(user){
  return {
    type: LOCK_SUCCESS,
    isAuthenticated: true,
    user
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
          // Handle auth error
          if (err) {
            return dispatch(lockError(err))
          }
          // Handle auth success
          // Set token and profile in local storage
          localStorage.setItem('id_token', authResult.idToken)
          localStorage.setItem('profile', JSON.stringify(profile))
          dispatch(getExistingUser( authResult.idToken, profile))
          // Set headers for authentication
      })
    })
  }
}

export function getExistingUser(token, profile) {
  return dispatch => {
    const config = {
      headers:{
      'Accept': 'application/json'
      , 'Content-Type': 'application/json'
      , 'Authorization': `Bearer ${token}`
    }}
    // Send user profile to database for user
    return axios.post('/api/user', profile, config)
      .then(results => {
        dispatch(lockSuccess(results.data))
      })
      .catch(error => {
        localStorage.removeItem('id_token')
        localStorage.removeItem('profile')
        dispatch(lockError(error));
      })
  }
}

// Reducer
export default function userReducer(state = initialState, action) {

  switch(action.type) {
    case SHOW_LOCK:
        return Object.assign({}, state, {status: "Logging In"})
    case LOCK_SUCCESS:
        return Object.assign({}, state, action.user, {status: "Logged In"})
    case LOCK_ERROR:
        return Object.assign({}, state, {status: action.err})
    case LOGOUT_SUCCESS:
        return initialState
    default:
        return state
  }
}
