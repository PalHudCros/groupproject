import axios from 'axios';
import config from '../../../config/config';
import Wine from './Wine';
import InventoryItem from './InventoryItem';


const baseUrl = 'http://services.wine.com/api/beta/service.svc/json/catalog?offset=0&size=100&apikey=' + config.wineAPI.key + '&sort=popularity%7Cascending&state=TX'

module.exports = {
    getWinesFromAPI(req, res) {
      let query = "";
      let test = req.query.filter
      console.log( "req.query.filter ", req.query.filter );
      if (req.query.filter) {
        query += '&filter=' + req.query.filter;
      } else if ( req.query.term ) {
        console.log( "TERM TERM TERM" );
        query += '&term=' + req.query.term;
      }
      else query += "rating(85%7C100)";
      console.log( "query ",query );
        axios.get(baseUrl + query)
          .then(result => {
            return res.status(200).json(result.data);
          })
          .catch( error => {
            return res.status(500).json(error);
          })
    }

    , getWinesFromDistribution(req, res) {
      console.log( "HAM: ", req.query );
        Wine.find(req.query, (err, wines) => {
          if (err) return res.status(500).json(err);
          if (wines === null && req.query.Name) {
            let updatedQuery = {};
              updatedQuery.Varietal.Name = req.query.Name;
          }
          return res.status(200).json(wines);
        })
    }

    , getWinesFromInventory(req, res) {
        InventoryItem.find(req.query, (err, wines) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(wines);
        })
    }
    , addWineToDistributor(req, res) {
        Wine.findOneAndUpdate({Id: req.body.Id}, { $inc: { Quantity: req.body.Quantity } }, (err, updatedWine) => {
          if (err) {
            return res.status(500).json(err);
          }
          else if (updatedWine) {
            console.log( `Updated ${req.body.Name.slice(0,15)}'s Quantity to ${updatedWine.Quantity + req.body.Quantity}` );
            return res.status(200).json(updatedWine);
          }
          else {
            new Wine(req.body).save( (err, newWine) => {
              if (err) {
                return res.status(500).json(err);
              }
              console.log( `Created new wine: ${req.body.Name.slice(0,15)}` );
              return res.status(200).json(newWine);
            } );
          }
        } );
    }

    , addWineToInventory(req, res) {
      InventoryItem.findOneAndUpdate({Id: req.body.Id}, { $inc: { Quantity: req.body.Quantity } }, (err, updatedWine) => {
        if (err) {
          return res.status(500).json(err);
        }
        else if (updatedWine) {
          console.log( `inv Updated ${req.body.Name.slice(0,15)}'s Quantity to ${updatedWine.Quantity + req.body.Quantity}` );
          return res.status(200).json(updatedWine);
        }
        else {
          new InventoryItem(req.body).save( (err, newWine) => {
            if (err) {
              return res.status(500).json(err);
            }
            console.log( `inv Created new wine: ${req.body.Name.slice(0,15)}` );
            return res.status(200).json(newWine);
          } );
        }
      } );
    }

    , getDistributionCategoryCounts(req, res) {
        Wine.aggregate([{$group: {_id: "$Varietal.Id", varietal: {$first: "$Varietal.Name"}, qty: {$sum: "$Quantity"}}}], (err, results) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(results);
          });
    }

    , getInventoryCategoryCounts(req, res) {
        InventoryItem.aggregate([{$group: {_id: "$Varietal.Id", varietal: {$first: "$Varietal.Name"}, qty: {$sum: "$Quantity"}}}], (err, results) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(results);
          });
    }
}
