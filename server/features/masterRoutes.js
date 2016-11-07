import userRoutes from "./users/userRoutes";
import wineRoutes from "./wines/wineRoutes";
import driverRoutes from "./drivers/driverRoutes";
import cartRoutes from "./carts/cartRoutes";
module.exports = app => {
    userRoutes(app);
    wineRoutes(app);
    driverRoutes(app);
    cartRoutes(app);
};
