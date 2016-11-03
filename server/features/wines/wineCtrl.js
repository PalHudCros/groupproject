import axios from 'axios';
import config from '../../../config/config';
import Wine from './Wine';

const baseUrl = 'http://services.wine.com/api/beta/service.svc/json/catalog?offset=0&size=100&apikey=' + config.wineAPI.key + '&sort=popularity%7Cascending&state=TX'

module.exports = {
    getWines(req, res) {
      let query = "";
      if (req.query.filter) query += '&filter=' + req.query.filter;      
      else query += "rating(85%7C100)";
      console.log(baseUrl + query);  
        axios.get(baseUrl + query)
          .then(result => {
            return res.status(200).json(result.data);
          })
          .catch( error => {
            return res.status(500).json(error);
          })
    }

    , addWine(req, res) {
        console.log("Endpoint: ", req.body);
        Wine.create(req.body, (err, wine) => {
          if (err) return res.status(500).json(err);          
          return res.status(200).json(wine);
        })
          
    }
}
