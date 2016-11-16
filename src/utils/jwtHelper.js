// import decode from 'jwt-decode';
const decode = require('jwt-decode');

module.exports ={
  
getTokenExpirationDate(token){
  const decoded = decode(token)
  if(!decoded.exp) {
    return null
  }

  const date = new Date(0) // The 0 here is the key, which sets the date to the epoch
  date.setUTCSeconds(decoded.exp)
  return date
},

isTokenExpired(token){
  const date = getTokenExpirationDate(token)
  const offsetSeconds = 0
  if (date === null) {
    return false
  }
  return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
},
// Contact GitHub API Training Shop Blog About
// © 2016 GitHub, Inc. Terms Privacy Security Status

 getDriverToken(){
  return localStorage.getItem('driver_id_token')
},
 createHeaders(token) {
  return {
      headers:
      {
      'Accept': 'application/json'
      , 'Content-Type': 'application/json'
      , 'Authorization': `Bearer ${token}`
      }
  }
}
}
