import React, {Component} from "react";
import {connect} from "react-redux";
import {getOrders, addDriverToOrder} from "../../ducks/orderDuck";
import {updateDrivers} from "../../ducks/driverDuck";
import io from 'socket.io-client';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';

import {getUnfilledOrders, getFilledOrders} from "../../ducks/orderDuck";


class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderList: null
        }
    }

    componentWillMount() {
        const socket = io.connect("/");
        socket.on("order", order => {
            this.props.dispatch(getUnfilledOrders());
        });
        socket.on("driverPosition", driver => {
            this.props.dispatch(updateDrivers(driver));
        });
        socket.on("order_status", order => {
            this.props.dispatch(getFilledOrders());
        })
        this.props.dispatch(getUnfilledOrders());
        this.props.dispatch(getFilledOrders());
    }

    componentWillReceiveProps(props) {
        const assignPropsToState = props.orders.unfilledOrderList.filter(order => !order.filled.status).map((order, index) => {
            this.setState(Object.assign({}, this.state, {[`listItem${index}Value`]: 0}))
        })
    }

    selectDriver(index, event, fakeIndex, value) {
        this.setState({[`listItem${index}Value`]: value})
    }

    submitDriver(orderId, index) {
        const socket = io.connect('/');
        socket.emit("order_status", {order: orderId, driverId: this.state[`listItem${index}Value`], status: "Filled"})
        this.props.dispatch(addDriverToOrder({orderId, driverId: this.state[`listItem${index}Value`]}))
    }

    render() {
        const driverList = this.props.drivers.enRouteList.map((driver, index) => (
            <MenuItem value={driver._id} primaryText={driver.name}></MenuItem>
        ))

        const unfilledOrderList = this.props.orders.unfilledOrderList.filter(order => !order.filled.status).map((order, index) => {
            return (
                <div>
                    <ListItem
                        key={order._id}
                        primaryText={order.user.orderAddress[0].street}
                        secondaryText={`${order.user.orderAddress[0].city}, ${order.user.orderAddress[0].state}`}                    
                        nestedItems={order.products.map((product, idx) => (
                        <ListItem
                            key={product._id}
                            primaryText={product.item.Name}
                            secondaryText={`Qty: ${product.quantity}`}>
                            </ListItem>
                        ))
                        }
                    >
                    </ListItem>
                    <h3>Select a Driver:</h3>
                    <SelectField value={this.state[`listItem${index}Value`]} onChange={this.selectDriver.bind(this, index)} >{driverList}</SelectField>
                    <FlatButton onClick={this.submitDriver.bind(this, order._id, index)}>Submit</FlatButton>
                </div>
            )
        })

        const filledOrderList = this.props.orders.filledOrderList.filter(order => !order.filled.status).map((order, index) => {
            return (
                <ListItem
                    key={order._id}
                    primaryText={order.user.orderAddress[0].street}
                    secondaryText={`${order.user.orderAddress[0].city}, ${order.user.orderAddress[0].state}`}                    
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
                >
                </ListItem>
            )
        })

        return (
            <div className="row">
                <div className="col-xs-6">
                    <MuiThemeProvider><List><Subheader>Unfilled Orders</Subheader>{unfilledOrderList}</List></MuiThemeProvider>
                </div>
                <div className="col-xs-6">
                    <MuiThemeProvider><List><Subheader>Filled Orders</Subheader>{filledOrderList}</List></MuiThemeProvider>
                </div>
            </div>
        )

    }
}

export default connect(state => ({orders: state.orders, drivers: state.drivers}))(Orders);
