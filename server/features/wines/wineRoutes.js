import wineCtrl from './wineCtrl';

module.exports = app => {
    app.get('/api/wines/global', wineCtrl.getWinesFromAPI);
    app.get('/api/wines/distribution', wineCtrl.getWinesFromDistribution);
    app.get('/api/wines/inventory', wineCtrl.getWinesFromInventory);
    app.get('/api/wines/distribution/counts', wineCtrl.getCategoryCounts);

    app.post('/api/wines/distribution', wineCtrl.addWineToDistribution);
    app.post('/api/wines/inventory', wineCtrl.addWineToInventory);
}