// Actions
const ADD_PRODUCT = 'cart/ADD_PRODUCT';
const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT';
const CHECKOUT = 'cart/CHECKOUT';

const initialState = { 
	productsInCart: []
	, runningTotal: 0
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case ADD_PRODUCT:
        return {
            productsInCart: [...state.productsInCart, action.product]
            , runningTotal: state.runningTotal + action.product.price
        } 
    case REMOVE_PRODUCT: 
        return {
            productsInCart: state.productsInCart.filter(product => product._id !== action.product._id)
            , runningTotal: state.runningTotal - action.product.price
        }
        return initialState;          
    case CHECKOUT: 
            return initialState; 
    default: return state;
  }
}

// Action Creators
export function addProduct(product) {
  return { type: ADD_PRODUCT, product };
}

export function removeProduct(product) {
  return { type: REMOVE_PRODUCT, product };
}

export function checkout() {
    return { type: CHECKOUT }
}