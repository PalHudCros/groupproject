// import userRoutes from "./users/userRoutes";
const userRoutes = require('./users/userRoutes');
// import driverRoutes from "./drivers/driverRoutes";
const driverRoutes = require('./drivers/driverRoutes');
// import adminRoutes from "./admin/adminRoutes";
const adminRoutes = require('./admin/adminRoutes');
// import wineRoutes from "./wines/wineRoutes";
const wineRoutes = require('./wines/wineRoutes');
// import cartRoutes from "./carts/cartRoutes";
const cartRoutes = require('./carts/cartRoutes');
// import orderRoutes from './orders/orderRoutes';
const orderRoutes = require('./orders/orderRoutes');

module.exports = app => {
    userRoutes(app);
    driverRoutes(app);
    adminRoutes(app);
    wineRoutes(app);
    cartRoutes(app);
    orderRoutes(app);
};
