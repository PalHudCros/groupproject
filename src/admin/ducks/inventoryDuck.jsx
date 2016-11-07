import axios from "axios";

const INVENTORY_PROCESS = "inventory/INVENTORY_PROCESS";
const INVENTORY_SUCCESS = "inventory/INVENTORY_SUCCESS";
const INVENTORY_FAILURE = "inventory/INVENTORY_FAILURE";

const ADD_WINE_PROCESS = "inventory/ADD_WINE_PROCESS";
const ADD_WINE_SUCCESS = "inventory/ADD_WINE_SUCCESS";
const ADD_WINE_FAILURE = "inventory/ADD_WINE_FAILURE";

const GET_COUNTS_PROCESS = "inventory/GET_COUNTS_PROCESS";
const GET_COUNTS_SUCCESS = "inventory/GET_COUNTS_SUCCESS";
const GET_COUNTS_FAILURE = "inventory/GET_COUNTS_FAILURE";

const SEND_WINE_TO_DISTRIBUTOR_STAGE = "inventory/SEND_WINE_TO_DISTRIBUTOR_STAGE";
const REMOVE_ONE_WINE_FROM_DISTRIBUTOR_STAGE = "inventory/REMOVE_ONE_WINE_FROM_DISTRIBUTOR_STAGE";

const initialState = {
    wines: []
    , inventoryList: []
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
      , stagedWines: []
}

export default function reducer(state = initialState, action) {
    switch ( action.type ) {
        case INVENTORY_PROCESS:
            return Object.assign({}, state, {status: "Fetching Distributor Inventory"});
        case INVENTORY_SUCCESS:
            return Object.assign({}, state, {wines: action.wines}, {status: "Distributor Inventory Received!"})
        case INVENTORY_FAILURE:
            return Object.assign({}, state, {status: "Error", error: action.error});
        case GET_COUNTS_PROCESS:
            return Object.assign({}, state, {status: "Fetching Counts"});
        case GET_COUNTS_SUCCESS:
            return Object.assign({}, state, {categories: action.counts}, {status: "Counts Received!"})
        case GET_COUNTS_FAILURE:
            return Object.assign({}, state, {status: "Error", error: action.error});
        case ADD_WINE_PROCESS:
            return Object.assign({}, state, {status: "Adding Wine"});
        case ADD_WINE_SUCCESS:
            const newState = state;
            for (let i = 0; i < newState.categories.length; i++) {
                if (action.wine.Varietal.Id === newState.categories[i]._id) {
                    newState.categories[i].qty++;
                }
                if (action.wine.Varietal.WineType.Id === newState.categories[i]._id) {
                    newState.categories[i].qty++;
                }
            }
            newState.inventoryList.push(action.wine);
            return Object.assign({}, newState, {status: "Wine Added!"});
        case ADD_WINE_FAILURE:
            return Object.assign({}, state, {status: "Error", error: action.error});
        case SEND_WINE_TO_DISTRIBUTOR_STAGE:
          let updatedStagedWines = state.stagedWines.slice();
          updatedStagedWines.push( action.wine );
          return Object.assign( {}, state, {status: "Wine added to distributor stage", stagedWines: updatedStagedWines } );
        case REMOVE_ONE_WINE_FROM_DISTRIBUTOR_STAGE:
          updatedStagedWines = state.stagedWines.slice();
          for ( let i = 0; i < updatedStagedWines.length; i++ ) {
            if ( updatedStagedWines[i].Id === action.wine.Id ) {
              updatedStagedWines.splice( i, 1 );
            }
          }
          return Object.assign( {}, state, {status: "Wine removed from distributor stage", stagedWines: updatedStagedWines } );
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

function addWineSuccess(wine) {
    return {type: ADD_WINE_SUCCESS, wine};
}

function addWineFailure(error) {
    return {type: ADD_WINE_FAILURE, error}
}

function getCountsProcess() {
    return {type: GET_COUNTS_PROCESS}
}

function getCountsSuccess(counts) {
    return {type: GET_COUNTS_SUCCESS, counts}
}

function getCountsFailure(err) {
    return {type: GET_COUNTS_FAILURE, err}
}

export function sendWineToDistributorStage( wine ) {
  return {type: SEND_WINE_TO_DISTRIBUTOR_STAGE, wine};
}

export function removeOneWineFromDistributorStage( wine ) {
  return {type: REMOVE_ONE_WINE_FROM_DISTRIBUTOR_STAGE, wine};
}

export function getWinesFromInventory(itemId) {
    let filter = "";
    if (itemId) filter += "?Varietal.Id=" + itemId;
    return dispatch => {
        dispatch(inventoryProcess());
        return axios.get("/api/wines/inventory" + filter)
            .then(results => {
                dispatch(inventorySuccess(results.data));
            })
            .catch(error => {
                dispatch(inventoryFailure(error))
            })
        }
}

export function addWineToInventory(wine) {
    console.log("Wine from Duck: ", wine);
    return dispatch => {
        dispatch(addWineProcess());
         return axios.post("/api/wines/inventory", wine)
            .then(results => {
                dispatch(addWineSuccess(results.data));
            })
            .catch(error => {
                dispatch(addWineFailure(error))
            })
        }
}

export function getCategoryCounts() {
    return dispatch => {
        dispatch(getCountsProcess());
        return axios.get("/api/wines/inventory/counts")
            .then(results => {
                dispatch(getCountsSuccess(results.data));
            })
            .catch(error => {
                dispatch(getCountsFailure(error));
            })
    }
}
