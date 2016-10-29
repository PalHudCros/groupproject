import axios from 'axios';
import config from '../../../config/config';
import Wine from './Wine';

const baseUrl = 'http://services.wine.com/api/beta/service.svc/json/catalog?offset=0&size=100&apikey=' + config.wineAPI.key + '&filter=rating(85%7C100)&sort=popularity%7Cascending'

module.exports = {
    getWines(req, res) {
        axios.get(baseUrl)
          .then(result => {
            return res.status(200).json(result.data);
          })
          .catch( error => {
            return res.status(500).json(error);
          })
    }
}
