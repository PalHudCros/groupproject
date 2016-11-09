import axios from 'axios';

// Actions
const ADD_PRODUCT_PROCESS = 'ADD_PRODUCT_PROCESS';
const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

const UPDATE_PRODUCT_PROCESS = 'UPDATE_PRODUCT_PROCESS';
const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

const CHECKOUT_PROCESS = 'CHECKOUT_PROCESS';
const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

const GET_CART_PROCESS = 'GET_CART_PROCESS';
const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
const GET_CART_FAILURE = 'GET_CART_FAILURE';

// Action Creators
export function addProductProcess() {
  return { type: ADD_PRODUCT_PROCESS, isFetching: true };
}
export function addProductSuccess(cart) {
  return { type: ADD_PRODUCT_SUCCESS, isFetching: false, cart };
}
export function addProductFailure(error) {
  return { type: ADD_PRODUCT_FAILURE, isFetching: false, error };
}

export function updateProductProcess(cart) {
  return { type: UPDATE_PRODUCT_PROCESS, isFetching: true, cart  };
}
export function updateProductSuccess(cart) {
  return { type: UPDATE_PRODUCT_SUCCESS, isFetching: false, cart };
}
export function updateProductFailure(error) {
  return { type: UPDATE_PRODUCT_FAILURE, isFetching: false, error };
}

export function checkoutProcess() {
  return { type: CHECKOUT_PRODUCT_PROCESS, isFetching: true };
}
export function checkoutSuccess(cart){
  return { type:CHECKOUT_PRODUCT_SUCCESS, isFetching: false, cart };
}
export function checkoutFailure(error) {
  return { type: CHECKOUT_PRODUCT_FAILURE, isFetching: false, error };
}

export function getCartProcess(){
return { type: GET_CART_PROCESS, isFetching: true }
}
export function getCartSuccess(cart){
	return { type: GET_CART_SUCCESS, isFetching: false, cart  }
}
export function getCartFailure(error){
	return { type: GET_CART_FAILURE, isFetching: true, error }
}



// Async Actions
export function getCart(){
	if (localStorage.getItem('id_token')){
		var location = '/api/cart'
	} else {
	 	var location = '/api/cart/session'
	}
	const idToken = localStorage.getItem('id_token')
	const config = {
		headers:{
		'Accept': 'application/json'
		, 'Content-Type': 'application/json'
		, 'Authorization': `Bearer ${idToken}`
	}}
	return dispatch => {
		dispatch(getCartProcess())
		return axios.get(location, config)
			.then(results => {
				dispatch(getCartSuccess(results.data))
			})
			.catch(error => {
				dispatch(getCartFailure(error))
			})
	}
}

export function postCart(wine){
	if (localStorage.getItem('id_token')){
		var location = '/api/cart'
	} else {
		var location = '/api/cart/session'
	}
	return dispatch => {
		dispatch(addProductProcess())
		const idToken = localStorage.getItem('id_token')

		const config = {
			headers:{
			'Accept': 'application/json'
			, 'Content-Type': 'application/json'
			, 'Authorization': `Bearer ${idToken}`
		}}

		return axios.post(location, wine, config)
			.then(results => {
				dispatch(addProductSuccess(results.data))
			})
			.catch(error => {
				dispatch(addProductFailure(error))
			})
	}
}

export function putCart(cart){
	console.log(cart.cart, 'fix this before you remove...... double cart.cart');
	if (localStorage.getItem('id_token')){
		var location = '/api/cart'
	} else {
		var location = '/api/cart/session'
	}
	return dispatch => {
		dispatch(updateProductProcess(cart.cart))
		const idToken = localStorage.getItem('id_token')

		const config = {
			headers:{
			'Accept': 'application/json'
			, 'Content-Type': 'application/json'
			, 'Authorization': `Bearer ${idToken}`
		}}

		return axios.put(location, cart.cart, config)
			.then(results => {
				dispatch(updateProductSuccess(results.data))
			})
			.catch(error => {
				dispatch(updateProductFailure(error))
			})
	}
}

export function deleteCartSession(){
 return dispatch => {
	 dispatch(updateProductProcess())

	 return axios.delete('/api/cart/session')
	 	.then( results => {
			dispatch(updateProductSuccess(results.data))
		})
		.catch( error => {
			dispatch(updateProductFailure(error))
		})

 }
}

// Inital State
const initialState = {
	cart: []
	, runningTotal: 0
}

// Reducer
export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT_PROCESS:
			return Object.assign({}, state, action.isFetching)
		case ADD_PRODUCT_SUCCESS:
			const runningTotal = action.cart.reduce( (total, sum) => total + (sum.price/1 * sum.quantity/1), 0);
			return Object.assign({}, state, action.isFetching, {cart:action.cart}, {runningTotal})
		case ADD_PRODUCT_FAILURE:
			return Object.assign({}, state, action.error)

		case UPDATE_PRODUCT_PROCESS:
			return Object.assign({}, state, action.isFetching, {cart:action.cart})
		case UPDATE_PRODUCT_SUCCESS:
		const runningTotalUpdate = action.cart.reduce( (total, sum) => total + (sum.price/1 * sum.quantity/1), 0);
			return Object.assign({}, state, action.isFetching, {cart:action.cart}, {runningTotal:runningTotalUpdate})
		case UPDATE_PRODUCT_FAILURE:
			return Object.assign({}, state, action.error)
		case CHECKOUT_PROCESS:
			return Object.assign({}, state, action.isFetching)
		case CHECKOUT_SUCCESS:
			const bob = Object.assign({}, state, action.isFetching)
			return bob
		case CHECKOUT_FAILURE:
			return Object.assign({}, state, action.error)

		case GET_CART_PROCESS:
			return Object.assign({}, state, action.isFetching)
		case GET_CART_SUCCESS:
			const runningTotalGet = action.cart.reduce( (total, sum) => total + (sum.price/1 * sum.quantity/1), 0);
				let steve = Object.assign({}, state, action.isFetching,  {cart:action.cart}, {runningTotal:runningTotalGet});
			return steve
		case GET_CART_FAILURE:
			return Object.assign({}, state, action.error)
    default: return state;
  }
}
