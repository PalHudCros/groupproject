import axios from 'axios';
import config from '../../../config/config';
import Wine from './Wine';

const baseUrl = 'http://services.wine.com/api/beta/service.svc/json/catalog?offset=0&size=100&apikey=' + config.wineAPI.key + '&sort=popularity%7Cascending&state=TX'

module.exports = {
    getWines(req, res) {
      let query = "";
      if (req.query) query = '&filter=categories' + req.query.filter; 
        axios.get(baseUrl + query)
          .then(result => {
            return res.status(200).json(result.data);
          })
          .catch( error => {
            return res.status(500).json(error);
          })
    }
}
