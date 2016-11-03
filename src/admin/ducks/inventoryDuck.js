import axios from "axios";

const INVENTORY_PROCESS = "inventory/INVENTORY_PROCESS";
const INVENTORY_SUCCESS = "inventory/INVENTORY_SUCCESS";
const INVENTORY_FAILURE = "inventory/INVENTORY_FAILURE";

const ADD_WINE_PROCESS = "inventory/ADD_WINE_PROCESS";
const ADD_WINE_SUCCESS = "inventory/ADD_WINE_SUCCESS";
const ADD_WINE_FAILURE = "inventory/ADD_WINE_FAILURE";


const initialState = {
    wines: []
    , inventoryList: []
    , categories: [
        {id: 124, varietal: "Red Wine", qty: 0},
        {id: 125, varietal: "White Wine", qty: 0},
        {id: 123, varietal: "Champagne & Sparkling", qty: 0},
        {id: 126, varietal: "Rosé Wine", qty: 0},
        {id: 128, varietal: "Dessert, Sherry & Port", qty: 0},
        {id: 134, varietal: "Saké", qty: 0},
        {id: 139, varietal: "Cabernet Sauvignon", qty: 0},
        {id: 140, varietal: "Chardonnay", qty: 0},
        {id: 151, varietal: "Sauvignon Blanc", qty: 0},
        {id: 194, varietal: "Pinot Gris/Grigio", qty: 0},
        {id: 144, varietal: "Bordeaux Blends", qty: 0},
        {id: 143, varietal: "Pinot Noir", qty: 0},
        {id: 145, varietal: "Other Red Blends", qty: 0},
        {id: 163, varietal: "Sangiovese", qty: 0},
        {id: 146, varietal: "Syrah/Shiraz", qty: 0},
        {id: 10082, varietal: "Rhône Blends", qty: 0},
        {id: 136, varietal: "Albarino", qty: 0},
        {id: 172, varietal: "Barbera", qty: 0},
        {id: 197, varietal: "Cabernet Franc", qty: 0},
        {id: 10081, varietal: "Carmenere", qty: 0},
        {id: 165, varietal: "Chenin Blanc", qty: 0},
        {id: 183, varietal: "Dolcetto", qty: 0},
        {id: 150, varietal: "Gamay", qty: 0},
        {id: 166, varietal: "Gewurztraminer", qty: 0},
        {id: 10080, varietal: "Grenache", qty: 0},
        {id: 10087, varietal: "Gruner Veltliner", qty: 0},
        {id: 198, varietal: "Junmai", qty: 0},
        {id: 127, varietal: "Junmai-Daiginjo", qty: 0},
        {id: 199, varietal: "Junmai-Ginjo", qty: 0},
        {id: 154, varietal: "Madeira", qty: 0},
        {id: 10079, varietal: "Malbec", qty: 0},
        {id: 138, varietal: "Merlot", qty: 0},
        {id: 10083, varietal: "Mourvedre", qty: 0},
        {id: 173, varietal: "Muscat", qty: 0},
        {id: 170, varietal: "Nebbiolo", qty: 0},
        {id: 10086, varietal: "Nero d'Avola", qty: 0},
        {id: 182, varietal: "Non-Vintage", qty: 0},
        {id: 176, varietal: "Petite Sirah", qty: 0},
        {id: 168, varietal: "Pinot Blanc", qty: 0},
        {id: 10085, varietal: "Pinotage", qty: 0},
        {id: 10084, varietal: "Primitivo", qty: 0},
        {id: 155, varietal: "Port", qty: 0},
        {id: 153, varietal: "Riesling", qty: 0},
        {id: 147, varietal: "Rosé", qty: 0},
        {id: 157, varietal: "Sherry", qty: 0},
        {id: 177, varietal: "Semillon", qty: 0},
        {id: 169, varietal: "Tempranillo", qty: 0},
        {id: 209, varietal: "Torrontes", qty: 0},
        {id: 156, varietal: "Vermouth", qty: 0},
        {id: 181, varietal: "Vintage", qty: 0},
        {id: 162, varietal: "Viognier", qty: 0},
        {id: 175, varietal: "White Zinfandel", qty: 0},
        {id: 141, varietal: "Zinfandel", qty: 0},
        {id: 221, varietal: "Bordeaux White Blends", qty: 0},
        {id: 10113, varietal: "Rhône White Blends", qty: 0}
      ]
}

export default function reducer(state = initialState, action) {
    switch ( action.type ) {
        case INVENTORY_PROCESS:
            return Object.assign({}, state, {status: "Fetching Inventory"});
        case INVENTORY_SUCCESS:
            return Object.assign({}, state, {wines: action.wines}, {status: "Success!"})
        case INVENTORY_FAILURE:
            return Object.assign({}, state, {status: "Error", error: action.error});
        case ADD_WINE_PROCESS:
            return Object.assign({}, state, {status: "Adding Wine"});
        case ADD_WINE_SUCCESS:
            const newState = state;
            for (let i = 0; i < newState.categories.length; i++) {
                if (action.wine.Varietal.Id === newState.categories[i].id) {
                    newState.categories[i].qty++;
                }
                if (action.wine.Varietal.WineType.Id === newState.categories[i].id) {
                    newState.categories[i].qty++;
                }
            }
            newState.inventoryList.push(action.wine);
            return newState;
        case ADD_WINE_FAILURE:
            return Object.assign({}, state, {status: "Error", error: action.error});
        default:
            return state;
    }
}

function inventoryProcess() {
    return {type: INVENTORY_PROCESS};
}

function inventorySuccess(wines) {
    return {type: INVENTORY_SUCCESS, wines};
}

function inventoryFailure(error) {
    return {type: INVENTORY_FAILURE, error}
}

function addWineProcess() {
    return {type: ADD_WINE_PROCESS};
}

function addWineSuccess(inventoryList) {
    return {type: ADD_WINE_SUCCESS, inventoryList};
}

function addWineFailure(error) {
    return {type: ADD_WINE_FAILURE, error}
}

export function getInventory(itemId) {
    let filter = "";
    if (itemId) filter += "?filter=categories(" + itemId + ")"
    return dispatch => {
        dispatch(inventoryProcess());
        return axios.get("/api/wines" + filter)
            .then(results => {
                dispatch(inventorySuccess(results.data.Products.List));
            })
            .catch(error => {
                dispatch(inventoryFailure(error))
            })
        }
}

export function addWine(wine) {
    return dispatch => {
        dispatch(addWineProcess());
         return axios.post("/api/wines", wine)
            .then(results => {
                dispatch(addWineSuccess(results.data));
            })
            .catch(error => {
                dispatch(addWineFailure(error))
            })
        }
}
