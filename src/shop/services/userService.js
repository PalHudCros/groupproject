import axios from 'axios';

export function getUser(resolve, reject) {
    return axios.get('/api/user').then(result => {
        return resolve(result)
    });
    
}