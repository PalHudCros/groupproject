import axios from 'axios';
import config from '../../../config/config';
import Wine from './Wine';

const baseUrl = 'http://services.wine.com/api/beta/service.svc/json/catalog?offset=0&size=100&apikey=' + config.wineAPI.key + '&sort=popularity%7Cascending&state=TX'

module.exports = {
    getWinesFromAPI(req, res) {
      let query = "";
      if (req.query.filter) query += '&filter=' + req.query.filter;      
      else query += "rating(85%7C100)";
        axios.get(baseUrl + query)
          .then(result => {
            return res.status(200).json(result.data);
          })
          .catch( error => {
            return res.status(500).json(error);
          })
    }

    , addWineToDistribution(req, res) {
         Wine.findOne({Id: req.body.Id}, (err, wine) => {
          if (err) {
              new Wine(req.body).save((err, wine) => {
              if (err) return res.status(500).json(err);
              return res.status(200).json(wine);
            })
          }
          if (wine) {
            Wine.findOneAndUpdate({Id: wine.Id}, { $set: { Quantity: wine.Quantity + 1 }}, (err, success) => {
              if (err) return res.status(500).json(err);
              return res.status(200).json(success);
            }) 
          }
        });          
    }
}
