import axios from 'axios';

export function getWines() {
    return axios.get('/api/wines');
}