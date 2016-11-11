import React, {Component} from "react";
import {connect} from "react-redux";
import {getOrders} from "../../ducks/orderDuck";

class OrderList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }
    }
    componentWillMount() {
        this.props.dispatch(getOrders());
    }

    componentWillReceiveProps(props) {
        console.log(props.orders);
    }
    
    render() {
        const orders = this.props.orders.orderList.map((order, index) => (
            <tbody key={order._id}>
                <tr>
                    <td>{order.user.name}</td>
                    <td>{order.user.orderAddress[0].street}</td>
                </tr>
                <tr>
                    <td>{order.products[0]._id}</td>
                    <td>{order.products[0].quantity}</td>
                </tr>
            </tbody>

        ))
        return (
            <div className="col-xs-6">
                <h2>Order List</h2>
                <table>{orders}</table>

            </div>
        )
    }
} 

export default connect(state => ({orders: state.orders}))(OrderList);