import React from "react";
import {connect} from "react-redux";
import {getOrders, addDriverToOrder} from "../../ducks/orderDuck";
import {updateDrivers} from "../../ducks/driverDuck";
import io from 'socket.io-client';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Orders extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
        console.log("Props: ", props);
    }

    componentWillMount() {
        const socket = io.connect("/");
        socket.on("order", order => {
            console.log("Admin log: ", order);
            this.props.dispatch(getOrders());
        });
        socket.on("driverPosition", driver => {
            console.log("Admin log: ", driver);
            this.props.dispatch(updateDrivers(driver));
        });
        this.props.dispatch(getOrders())
    }

    selectDriver(event, index, value) {
        console.log("Value: ", value)
        this.setState({value})
    }

    submitDriver(orderId) {
        this.props.dispatch(addDriverToOrder({orderId, driverId: this.state.value}))
    }

    render() {
        const driverList = this.props.drivers.enRouteList.map((driver, index) => (
            <MenuItem value={index} primaryText={driver.name}></MenuItem>
        ))
        console.log("DRIVER LIST: ", driverList);
        const orderList = this.props.orders.orderList.filter(order => !order.filled.status).map((order, index) => {
            console.log("ORDER IN MAP: ", order);
            return ( 
                <tr>
                    <td>{order._id}</td>
                    <td><SelectField value={this.state.value} onChange={this.selectDriver}>{driverList}</SelectField></td>
                    <td><button onTouchTap={this.submitDriver.bind(this, order._id)}>Submit</button></td>
                    
                </tr>
            )}
        )
        console.log("ORDER LIST: ", orderList);
        return (
                <MuiThemeProvider><table><tbody>{orderList}</tbody></table></MuiThemeProvider>
        )

    }
}

export default connect(state => ({orders: state.orders, drivers: state.drivers}))(Orders);