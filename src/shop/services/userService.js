import axios from 'axios';

export function getUser() {
    return axios.get('/api/user').then(result => result.data);
}

export function login() {
    axios.get('auth/facebook');    
}