import React from "react";
import { connect } from "react-redux";

import Product from "./Product";
import { getWines } from "../services/wineService";
import { addProduct } from "../ducks/cartDuck";

class Shop extends React.Component {
	addToCart( product ) {
		this.props.dispatch( addProduct( product ) )
	}

	render() {
		const products = getWines().then(result => {
            debugger;
            return result;
        });        

		return (
			<div className="shop-wrapper">
				{ products }
			</div>
		);
	}
}

export default connect( state => ( { cart: state.cart } ) )( Shop );