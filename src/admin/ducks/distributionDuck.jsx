import axios from "axios";

const DISTRIBUTION_PROCESS = "distribution/DISTRIBUTION_PROCESS";
const DISTRIBUTION_SUCCESS = "distribution/DISTRIBUTION_SUCCESS";
const DISTRIBUTION_FAILURE = "distribution/DISTRIBUTION_FAILURE";

const ADD_WINE_PROCESS = "distribution/ADD_WINE_PROCESS";
const ADD_WINE_SUCCESS = "distribution/ADD_WINE_SUCCESS";
const ADD_WINE_FAILURE = "distribution/ADD_WINE_FAILURE";

const GET_COUNTS_PROCESS = "distribution/GET_COUNTS_PROCESS";
const GET_COUNTS_SUCCESS = "distribution/GET_COUNTS_SUCCESS";
const GET_COUNTS_FAILURE = "distribution/GET_COUNTS_FAILURE";

const initialState = {
    wines: []
    , distributionList: []
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

export default function reducer(state = initialState, action) {
    switch ( action.type ) {
        case DISTRIBUTION_PROCESS:
            return Object.assign({}, state, {status: "Fetching Distribution List"});
        case DISTRIBUTION_SUCCESS:
            return Object.assign({}, state, {wines: action.wines}, {status: "Distribution List Received!"})
        case DISTRIBUTION_FAILURE:
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
            newState.distributionList.push(action.wine);
            return Object.assign({}, newState, {status: "Wine Added!"});
        case ADD_WINE_FAILURE:
            return Object.assign({}, state, {status: "Error", error: action.error});
        default:
            return state;
    }
}

function distributionProcess() {
    return {type: DISTRIBUTION_PROCESS};
}

function distributionSuccess(wines) {
    return {type: DISTRIBUTION_SUCCESS, wines};
}

function distributionFailure(error) {
    return {type: DISTRIBUTION_FAILURE, error}
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

export function getWinesFromAPI(itemId) {
    let filter = "";
    if (itemId) filter += "?filter=categories(" + itemId + ")"
    return dispatch => {
        dispatch(distributionProcess());
        return axios.get("/api/wines/global" + filter)
            .then(results => {
                dispatch(distributionSuccess(results.data.Products.List));
            })
            .catch(error => {
                dispatch(distributionFailure(error))
            })  
        }
}

export function addWineToDistribution(wine) {
    return dispatch => {
        dispatch(addWineProcess());
         return axios.post("/api/wines/distribution", wine)
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
        return axios.get("/api/wines/distribution/counts")
            .then(results => {
                dispatch(getCountsSuccess(results.data));
            })
            .catch(error => {
                dispatch(getCountsFailure(error));
            })
    }
}