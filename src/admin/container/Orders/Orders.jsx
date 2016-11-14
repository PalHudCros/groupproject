import React, {Component} from "react";
import {connect} from "react-redux";
import {getOrders, addDriverToOrder} from "../../ducks/orderDuck";
import {updateDrivers} from "../../ducks/driverDuck";
import io from 'socket.io-client';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {getUnfilledOrders} from "../../ducks/orderDuck";

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
            this.props.dispatch(getOrders());
        });
        socket.on("driverPosition", driver => {
            this.props.dispatch(updateDrivers(driver));
        });
        this.props.dispatch(getUnfilledOrders())
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
        this.props.dispatch(addDriverToOrder({orderId, driverId: this.state[`listItem${index}Value`]}))
    }

    render() {
        const driverList = this.props.drivers.enRouteList.map((driver, index) => (
            <MenuItem value={driver._id} primaryText={driver.name}></MenuItem>
        ))

        const orderList = this.props.orders.unfilledOrderList.filter(order => !order.filled.status).map((order, index) => {
            return (
                <tr>
                    <td>{order._id}</td>
                    <td><SelectField value={this.state[`listItem${index}Value`]} onChange={this.selectDriver.bind(this, index)} floatingLabelText="Select a Driver" floatingLabelFixed={false}>{driverList}</SelectField></td>
                    <td><button onTouchTap={this.submitDriver.bind(this, order._id, index)}>Submit</button></td>
                </tr>
            )
        })

        return (
                <MuiThemeProvider><table><tbody>{orderList}</tbody></table></MuiThemeProvider>
        )

    }
}

export default connect(state => ({orders: state.orders, drivers: state.drivers}))(Orders);
