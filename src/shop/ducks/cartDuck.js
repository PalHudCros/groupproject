import axios from 'axios';
import { browserHistory } from "react-router";


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

const UPDATE_TOTALS_SUCCESS = "UPDATE_TOTALS_SUCCESS"

// Action Creators
export function addProductProcess() {
  return { type: ADD_PRODUCT_PROCESS, isFetching: true };
}
export function addProductSuccess(cart) {
  return Object.assign({}, { type: ADD_PRODUCT_SUCCESS, isFetching: false, cart }, createTotals(cart))
}
export function addProductFailure(error) {
  return { type: ADD_PRODUCT_FAILURE, isFetching: false, error };
}

export function updateProductProcess(cart) {

  return Object.assign({}, { type: UPDATE_PRODUCT_PROCESS, isFetching: true, cart }, createTotals(cart))
}
export function updateProductSuccess(cart) {

  return Object.assign({}, { type: UPDATE_PRODUCT_SUCCESS, isFetching: false, cart }, createTotals(cart))
}

export function updateProductFailure(error) {
  return { type: UPDATE_PRODUCT_FAILURE, isFetching: false, error };
}

export function checkoutProcess() {
  return { type: CHECKOUT_PROCESS, isFetching: true };
}

export function checkoutSuccess(order){
  return Object.assign({}, { type:CHECKOUT_SUCCESS, isFetching: false, order });
}

export function checkoutFailure(error) {
  return { type: CHECKOUT_FAILURE, isFetching: false, error };
}

export function getCartProcess(){
return { type: GET_CART_PROCESS, isFetching: true }
}

export function getCartSuccess(cart){
	return Object.assign({}, { type: GET_CART_SUCCESS, isFetching: false, cart  }, createTotals(cart))
}

export function getCartFailure(error){
	return { type: GET_CART_FAILURE, isFetching: true, error }
}

export function updateTotals(totals){
  return {type: UPDATE_TOTALS_SUCCESS, totals }
}

function removeItemsWithZeroQty(cart){
  return cart.filter(ele =>{
     return ele.quantity > 0
   })
}


function createTotals(input){

  if (!input) return {totals:{}}

  let subTotal = Math.round((input.reduce( (total, sum) => total + (sum.price/1 * sum.quantity/1), 0))*100)/100;
  let cartQuantity = input.reduce( (prev, curr) => (prev + curr.quantity), 0);
  let cartTip = Math.round((subTotal * .10897994769)*100)/100;
  let deliveryFee = 5
  let cartTax = Math.round(((subTotal + deliveryFee) * .0875)*100)/100;
  let cartTotal = Math.round((subTotal + cartTip + deliveryFee + cartTax)*100)/100;

  return {totals:{subTotal, cartQuantity, cartTip, deliveryFee, cartTax, cartTotal}}
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
	if (localStorage.getItem('id_token')){
		var location = '/api/cart'
	} else {
		var location = '/api/cart/session'
	}
	return dispatch => {
		dispatch(updateProductProcess(removeItemsWithZeroQty(cart.cart)))
		const idToken = localStorage.getItem('id_token')

		const config = {
			headers:{
			'Accept': 'application/json'
			, 'Content-Type': 'application/json'
			, 'Authorization': `Bearer ${idToken}`
		}}

		return axios.put(location, removeItemsWithZeroQty(cart.cart), config)
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
	 dispatch(updateProductProcess([]))
	 return axios.delete('/api/cart/session')
	 	.then( results => {
			dispatch(updateProductSuccess([]))
		})
		.catch( error => {
			dispatch(updateProductFailure(error))
		})

 }
}

export function postOrder(cart){
  return dispatch => {
    dispatch(checkoutProcess())

    const idToken = localStorage.getItem('id_token')
    const config = {
      headers:{
      'Accept': 'application/json'
      , 'Content-Type': 'application/json'
      , 'Authorization': `Bearer ${idToken}`
    }}
    return axios.post('/api/order', cart, config )
      .then( results => {
				browserHistory.push("confirmation")
        dispatch(checkoutSuccess(results.data))
      })
      .catch( error => {
        dispatch(checkoutFailure(error))
      })
  }
}

// Inital State
const initialState = {
	cart: []
	, runningTotal: 0
  , totals: {
    cartQuantity:0
  }
	, order: {}
}

// Reducer
export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT_PROCESS:
			return Object.assign({}, state, action.isFetching)
		case ADD_PRODUCT_SUCCESS:
			return Object.assign({}, state, action.isFetching, {cart:action.cart}, {totals:action.totals})
		case ADD_PRODUCT_FAILURE:
			return Object.assign({}, state, action.error)
		case UPDATE_PRODUCT_PROCESS:
			return Object.assign({}, state, action.isFetching, {cart:action.cart}, {totals:action.totals})
		case UPDATE_PRODUCT_SUCCESS:
			return Object.assign({}, state, action.isFetching, {cart:action.cart}, {totals:action.totals})
		case UPDATE_PRODUCT_FAILURE:
			return Object.assign({}, state, action.error)
		case CHECKOUT_PROCESS:
			return Object.assign({}, state, action.isFetching)
		case CHECKOUT_SUCCESS:
			return Object.assign({}, initialState, {order: action.order}, action.isFetching)
		case CHECKOUT_FAILURE:
			return Object.assign({}, state, action.error)
		case GET_CART_PROCESS:
			return Object.assign({}, state, action.isFetching)
		case GET_CART_SUCCESS:
			return Object.assign({}, state, action.isFetching,  {cart:action.cart}, {totals:action.totals});
		case GET_CART_FAILURE:
			return Object.assign({}, state, action.error)
    // case UPDATE_TOTALS_SUCCESS:
    //   const bob = Object.assign({}, state, {totals:action.totals})
    //   return bob
    default: return state;
  }
}
