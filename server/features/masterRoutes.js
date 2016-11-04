import userRoutes from "./users/userRoutes";
import wineRoutes from "./wines/wineRoutes";
import driverRoutes from "./drivers/driverRoutes";

module.exports = app => {
    userRoutes(app);
    wineRoutes(app);
    driverRoutes(app);
};
