import userRoutes from "./users/userRoutes";
import wineRoutes from "./wines/wineRoutes";

module.exports = app => {
    // userRoutes(app);
    wineRoutes(app);
};
