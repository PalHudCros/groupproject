const SET_TAB_TITLES = "admin/SET_TAB_TITLES";
const WHICH_TAB_IS_ACTIVE = "admin/WHICH_TAB_IS_ACTIVE";

const initialState = {
    titles: []
    , routes: []
    , sectionName: ""
}

export default function tabs(state = initialState, action) {
    switch ( action.type ) {
        case SET_TAB_TITLES:
          return Object.assign({}, state, { titles: action.titles, routes: action.routes, sectionName: action.sectionName });
        default:
          return state;
    }
}

export function setTabTitles( titles, routes, sectionName ) {
    return {type: SET_TAB_TITLES, titles, routes, sectionName };
}
