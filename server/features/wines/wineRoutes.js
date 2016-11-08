import wineCtrl from './wineCtrl';

module.exports = app => {
    app.get('/api/wines/global', wineCtrl.getWinesFromAPI);
    app.get('/api/wines/distribution', wineCtrl.getWinesFromDistribution);
    app.get('/api/wines/inventory', wineCtrl.getWinesFromInventory);
    app.get('/api/wines/distribution/counts', wineCtrl.getDistributionCategoryCounts);
    app.get('/api/wines/inventory/counts', wineCtrl.getInventoryCategoryCounts);

    app.post('/api/wines/distribution', wineCtrl.sendAPIWinesToDistributor);
    app.post('/api/wines/inventory', wineCtrl.addWineToInventory);
}