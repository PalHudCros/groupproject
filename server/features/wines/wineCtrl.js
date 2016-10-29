import axios from 'axios';
import config from '../../../config/config';
import Wine from './Wine';

const baseUrl = 'http://services.wine.com/api/beta2/service.svc/filter=categories(490+124)&size=5&apikey=' + config.wineAPI.key;

module.exports = {
    getWines(req, res) {
        axios.get(baseUrl).then(result => {
            return result.data;
        })
    }
}