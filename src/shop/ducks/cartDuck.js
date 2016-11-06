import axios from 'axios';

// Actions
const ADD_PRODUCT_PROCESS = 'ADD_PRODUCT_PROCESS';
const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

const REMOVE_PRODUCT_PROCESS = 'REMOVE_PRODUCT_PROCESS';
const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
const REMOVE_PRODUCT_FAILURE = 'REMOVE_PRODUCT_FAILURE';

const CHECKOUT_PROCESS = 'CHECKOUT_PROCESS';
const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';


// Action Creators
export function addProductProcess() {
	console.log('process');
  return { type: ADD_PRODUCT_PROCESS, isFetching: true };
}
export function addProductSuccess(product) {
	console.log('success', product);
  return { type: ADD_PRODUCT_SUCCESS, isFetching: false, product };
}
export function addProductFailure(error) {
  return { type: ADD_PRODUCT_FAILURE, isFetching: false, error };
}

export function removeProductProcess() {
  return { type: REMOVE_PRODUCT_PROCESS, isFetching: true  };
}
export function removeProductSuccess(product) {
  return { type: REMOVE_PRODUCT_SUCCESS, isFetching: false, product };
}
export function removeProductFailure(error) {
  return { type: REMOVE_PRODUCT_FAILURE, isFetching: false, error };
}

export function checkoutProcess() {
  return { type: CHECKOUT_PRODUCT_PROCESS, isFetching: true };
}
export function checkoutSuccess(product) {
  return { type:CHECKOUT_PRODUCT_SUCCESS, isFetching: false, product };
}
export function checkoutFailure(error) {
  return { type: CHECKOUT_PRODUCT_FAILURE, isFetching: false, error };
}



// Async Actions
// export function getCart(){
// 	return dispatch => {
// 		dispatch(process())
// 		return axios.get('/api/cart')
// 			.then(results => {
//
// 			})
// 			.catch(error => {
//
// 			})
// 	}
// }

export function postCart(wine){
	return dispatch => {
		dispatch(addProductProcess())
		console.log('wine', wine);

		if (!localStorage.getItem('profile')){
			localStorage.setItem('profile', {cart:wine})
		} else {
			let profile = JSON.parse(localStorage.getItem('profile'))
				if (!profile.cart){
					let newProfile = Object.assign({}, profile, {cart:[wine]})
					localStorage.removeItem('profile')
					localStorage.setItem('profile', JSON.stringify(newProfile))
				} else {
					console.log(profile.cart)
					profile.cart.push(wine)
					localStorage.setItem('profile', JSON.stringify(profile))
				}
		}


	if (!localStorage.getItem('id_token')){

		let wineCart = JSON.parse(localStorage.getItem('profile')).cart
		dispatch(addProductSuccess(wineCart))

	} else {
		const idToken = localStorage.getItem('id_token')
		const config = {
			headers:{
			'Accept': 'application/json'
			, 'Content-Type': 'application/json'
			, 'Authorization': `Bearer ${idToken}`
		}}

		let wineCart = JSON.parse(localStorage.getItem('profile')).cart

		return axios.post('/api/cart', wineCart, config)
			.then(results => {
				console.log(ADD_PRODUCT_SUCCESS, results.data);
				dispatch(addProductSuccess(results.data))
			})
			.catch(error => {
				console.log(ADD_PRODUCT_FAILURE, error)
				dispatch(addProductFailure(error))
			})
	}



	}
}

// Inital State
const initialState = {
	productsInCart: []
	, runningTotal: 0
}

// Reducer
export default function cartReducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case 'ADD_PRODUCT_PROCESS':
		const body = Object.assign({}, state, action.isFetching)
		console.log(body);
			return body;
		case ADD_PRODUCT_SUCCESS:
			return state
		case ADD_PRODUCT_FAILURE:
			return state
		case REMOVE_PRODUCT_PROCESS:
			return state
		case REMOVE_PRODUCT_SUCCESS:
			return state
		case REMOVE_PRODUCT_FAILURE:
			return state
		case CHECKOUT_PROCESS:
			return state
		case CHECKOUT_SUCCESS:
			return state
		case CHECKOUT_FAILURE:
			return state
    default: return state;
  }
}
