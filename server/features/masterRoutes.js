import userRoutes from "./users/userRoutes";
import driverRoutes from "./drivers/driverRoutes";
import adminRoutes from "./admin/adminRoutes";
import wineRoutes from "./wines/wineRoutes";
import cartRoutes from "./carts/cartRoutes";
module.exports = app => {
    userRoutes(app);
    driverRoutes(app);
    adminRoutes(app);
    wineRoutes(app);
    cartRoutes(app);
};
