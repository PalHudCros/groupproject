import axios from 'axios';
import io from 'socket.io-client';
import fs from 'fs';

const socket = io.connect("/")
navigator.geolocation.watchPosition(position => {
  if (localStorage.getItem("driver_profile")) {
    const driverInfo = JSON.parse(localStorage.getItem("driver_profile"));
    driverInfo.position = {
      lat: position.coords.latitude
      , lng: position.coords.longitude
    } 
    socket.emit("driverPosition", driverInfo);
  }
})

// Initial state
const initialState = {
    status: {}
}

// Actions
const SHOW_LOCK = 'SHOWLOCK'
const LOCK_SUCCESS = 'LOCK_SUCCESS'
const LOCK_ERROR = 'LOCK_ERROR'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

// Auth0 Config
const options = {
      allowedConnections: ['Username-Password-Authentication']
    , closable: false
    , theme: {
        logo: 'http://i3.kym-cdn.com/photos/images/original/000/073/120/20745_1184056969280_1463924314_3042.jpg',
        primaryColor: '#ec423d'
    }
};
const lock = new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN, options);

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
  localStorage.removeItem('driver_id_token');
  localStorage.removeItem('driver_profile');
  lock.show();
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
      lock.hide();
      lock.getProfile(authResult.idToken, function(err, profile){
          // Handle auth error
          if (err) {
            return dispatch(lockError(err))
          }
          // Handle auth success
          // Set token and profile in local storage
          localStorage.setItem('driver_id_token', authResult.idToken)
          localStorage.setItem('driver_profile', JSON.stringify(profile))
          
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
    return axios.post('/api/driver', profile, config)
      .then(results => {
        dispatch(lockSuccess(results.data))
      })
      .catch(error => {
        localStorage.removeItem('driver_id_token')
        localStorage.removeItem('driver_profile')
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
        return Object.assign({}, initialState, {status: "Logged Out"}); 
    default:
        return state
  }
}
