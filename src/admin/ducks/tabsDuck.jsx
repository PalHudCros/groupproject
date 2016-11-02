const SET_TAB_TITLES = "admin/SET_TAB_TITLES";

const initialState = {
    titles: []
}

export default function reducer(state = initialState, action) {
    switch ( action.type ) {
        case SET_TAB_TITLES:
            return { titles: action.titles };
        default:
            return state;
    }
}

export function setTabTitles( titles ) {
    return {type: SET_TAB_TITLES, titles};
}
