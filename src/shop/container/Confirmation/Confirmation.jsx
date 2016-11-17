import React from "react";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import io from 'socket.io-client';
import {connect} from "react-redux";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {getOrders} from "../../ducks/cartDuck"

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getOrders());
        const socket = io.connect("/");
        socket.on("order_status", order => {
            this.props.dispatch(getOrders());
        })

    }
    render() {
        const orders = this.props.cart.orders.map((order, index) => { 
            let status;
            console.log(order.delivered.status);
            if (order.delivered.status) status = "Order Delivered"
            else if (order.filled.status) status ="Order Filled"
            else status = "Order Placed" 
            return (
            <ListItem
                key={order._id}
                  primaryText={order.ordered.slice(0, 15)}
                  secondaryText={`Total: ${order.cartTotal}, Status: ${status}`}                    
                  initiallyOpen={false}
                  primaryTogglesNestedList={true}                  
                  nestedItems={order.products.map((product, idx) => (
                    <ListItem
                      key={idx}
                      primaryText={product.item.Name}
                      secondaryText={`Qty: ${product.quantity}`}>
                      </ListItem>
                  ))

                  }
            />
        )})
        return (
            <div>
                <MuiThemeProvider>
                <List>
                    {orders}
                </List>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default connect(state => ({cart: state.cart}))(Confirmation)