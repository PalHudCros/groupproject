import wineCtrl from './wineCtrl';

module.exports = app => {
    app.get('/api/wines', wineCtrl.getWines);
    app.post('/api/wines', wineCtrl.addWine);
}