import axios from "axios";

// Intial state
const initialState = {
    wines: []
    , selectedWine: {}
    , categories: [
        {_id: 124, varietal: "Red Wine", qty: 0},
        {_id: 125, varietal: "White Wine", qty: 0},
        {_id: 123, varietal: "Champagne & Sparkling", qty: 0},
        {_id: 126, varietal: "Rosé Wine", qty: 0},
        {_id: 128, varietal: "Dessert, Sherry & Port", qty: 0},
        {_id: 134, varietal: "Saké", qty: 0},
        {_id: 139, varietal: "Cabernet Sauvignon", qty: 0},
        {_id: 140, varietal: "Chardonnay", qty: 0},
        {_id: 151, varietal: "Sauvignon Blanc", qty: 0},
        {_id: 194, varietal: "Pinot Gris/Grigio", qty: 0},
        {_id: 144, varietal: "Bordeaux Blends", qty: 0},
        {_id: 143, varietal: "Pinot Noir", qty: 0},
        {_id: 145, varietal: "Other Red Blends", qty: 0},
        {_id: 163, varietal: "Sangiovese", qty: 0},
        {_id: 146, varietal: "Syrah/Shiraz", qty: 0},
        {_id: 10082, varietal: "Rhône Blends", qty: 0},
        {_id: 136, varietal: "Albarino", qty: 0},
        {_id: 172, varietal: "Barbera", qty: 0},
        {_id: 197, varietal: "Cabernet Franc", qty: 0},
        {_id: 10081, varietal: "Carmenere", qty: 0},
        {_id: 165, varietal: "Chenin Blanc", qty: 0},
        {_id: 183, varietal: "Dolcetto", qty: 0},
        {_id: 150, varietal: "Gamay", qty: 0},
        {_id: 166, varietal: "Gewurztraminer", qty: 0},
        {_id: 10080, varietal: "Grenache", qty: 0},
        {_id: 10087, varietal: "Gruner Veltliner", qty: 0},
        {_id: 198, varietal: "Junmai", qty: 0},
        {_id: 127, varietal: "Junmai-Daiginjo", qty: 0},
        {_id: 199, varietal: "Junmai-Ginjo", qty: 0},
        {_id: 154, varietal: "Madeira", qty: 0},
        {_id: 10079, varietal: "Malbec", qty: 0},
        {_id: 138, varietal: "Merlot", qty: 0},
        {_id: 10083, varietal: "Mourvedre", qty: 0},
        {_id: 173, varietal: "Muscat", qty: 0},
        {_id: 170, varietal: "Nebbiolo", qty: 0},
        {_id: 10086, varietal: "Nero d'Avola", qty: 0},
        {_id: 182, varietal: "Non-Vintage", qty: 0},
        {_id: 176, varietal: "Petite Sirah", qty: 0},
        {_id: 168, varietal: "Pinot Blanc", qty: 0},
        {_id: 10085, varietal: "Pinotage", qty: 0},
        {_id: 10084, varietal: "Primitivo", qty: 0},
        {_id: 155, varietal: "Port", qty: 0},
        {_id: 153, varietal: "Riesling", qty: 0},
        {_id: 147, varietal: "Rosé", qty: 0},
        {_id: 157, varietal: "Sherry", qty: 0},
        {_id: 177, varietal: "Semillon", qty: 0},
        {_id: 169, varietal: "Tempranillo", qty: 0},
        {_id: 209, varietal: "Torrontes", qty: 0},
        {_id: 156, varietal: "Vermouth", qty: 0},
        {_id: 181, varietal: "Vintage", qty: 0},
        {_id: 162, varietal: "Viognier", qty: 0},
        {_id: 175, varietal: "White Zinfandel", qty: 0},
        {_id: 141, varietal: "Zinfandel", qty: 0},
        {_id: 221, varietal: "Bordeaux White Blends", qty: 0},
        {_id: 10113, varietal: "Rhône White Blends", qty: 0}
      ]
}

// Actions
const PROCESS = "wines/PROCESS";
const SUCCESS = "wines/SUCCESS";
const FAILURE = "wines/FAILURE";
const SELECT = "wines/SELECT";

// Action Creators
export function process() {
    return {type: PROCESS};
}

export function success(wineList) {
    return {type: SUCCESS, wines: wineList};
}

export function failure() {
    return {type: FAILURE}
}

export function selectWine(wine) {
    return {type: SELECT, selectedWine: wine}
}

//Reducer
export default function wine(state = initialState, action) {
    switch ( action.type ) {
        case PROCESS:
            return Object.assign({}, state, {status: "fetching"});
        case SUCCESS:
            return Object.assign({}, {wines: action.wines, selectedWine: {}}, {status: "fetched"})
        case FAILURE:
            return Object.assign({}, state, {status: "error"});
        case SELECT:
            return Object.assign({}, state, {selectedWine: action.selectedWine});
        default:
        console.log( "THING" );
            return state;
    }
}

// Async Actions
export function getWines(itemId) {
    let filter = "";
    if (itemId) filter += "?Varietal.Id=" + itemId;
    return dispatch => {
        dispatch(process());
        return axios.get("/api/wines/inventory" + filter)
            .then(results => {
                dispatch(success(results.data));
            })
            .catch(error => {
                dispatch(failure(error))
            })
        }
}
