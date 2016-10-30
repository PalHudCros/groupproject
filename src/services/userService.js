import axios from 'axios';

export function getUser() {
    return axios.get('/api/user');
}

export function login() {
    axios.get('auth/facebook');    
}