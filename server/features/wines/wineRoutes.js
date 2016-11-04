import wineCtrl from './wineCtrl';

module.exports = app => {
    app.get('/api/wines/global', wineCtrl.getWinesFromAPI);
    app.post('/api/wines/distribution', wineCtrl.addWineToDistribution);
    app.get('/api/wines/distribution/counts', wineCtrl.getCategoryCounts);
}