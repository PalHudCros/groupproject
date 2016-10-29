import React from "react";

export default function Product() {
    return (
        <div className="product-wrapper">
            <img src={ this.props.image } />
            <h2>{ this.props.name }</h2>
            <h3>{ this.props.varietal }</h3>
            <button onClick={ this.props.addToCart }>Add to Cart</button>
        </div>
    )
}

