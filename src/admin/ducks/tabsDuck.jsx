const SET_TAB_TITLES = "admin/SET_TAB_TITLES";
const WHICH_TAB_IS_ACTIVE = "admin/WHICH_TAB_IS_ACTIVE";

const initialState = {
    titles: []
    , whichTab: 1
}

export default function tabs(state = initialState, action) {
    switch ( action.type ) {
        case SET_TAB_TITLES:
          return Object.assign({}, state, { titles: action.titles, routes: action.routes, tabName: action.tabName });
        default:
          return state;
    }
}

export function setTabTitles( titles, routes, tabName ) {
    return {type: SET_TAB_TITLES, titles, routes, tabName};
}
