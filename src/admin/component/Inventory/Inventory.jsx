import React, {Component} from 'react';

export default function Inventory( props ) {

    return (

        <div className="inventory-content-outer-wrapper admin">

          { props.children }

        </div>
    );

}
