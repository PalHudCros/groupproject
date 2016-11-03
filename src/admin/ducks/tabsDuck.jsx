const SET_TAB_TITLES = "admin/SET_TAB_TITLES";
const WHICH_TAB_IS_ACTIVE = "admin/WHICH_TAB_IS_ACTIVE";

const initialState = {
    titles: []
    , whichTab: 1
}

export default function reducer(state = initialState, action) {
    switch ( action.type ) {
        case SET_TAB_TITLES:
          return { titles: action.titles, whichTab: state.whichTab };
        case WHICH_TAB_IS_ACTIVE:
          return { titles: state.titles, whichTab: action.tabNum };
        default:
          return state;
    }
}

export function setTabTitles( titles ) {
    return {type: SET_TAB_TITLES, titles};
}

export function whichTabIsActive( tabNum ) {
  return {type: WHICH_TAB_IS_ACTIVE, tabNum}
}
