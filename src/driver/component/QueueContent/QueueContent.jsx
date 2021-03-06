import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {getOrdersByDriver, deliverOrder} from '../../ducks/orderDuck'
import io from 'socket.io-client';

class QueueContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getOrdersByDriver());
    const socket = io.connect('/');
    socket.on('order_status', order => {
      console.log("orders")
      this.props.dispatch(getOrdersByDriver());
    })
  }

  formatDate(date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dateFormat = new Date(date);
    return `${days[dateFormat.getDay()]}, ${dateFormat.getMonth()}/${dateFormat.getDate()} ${dateFormate.getHours() + 1}:${dateFormat.getMinutes()}`;  
  }

  setDelivered(orderId) {
    const socket = io.connect('/');
    socket.emit("order_status", {order: orderId, status: "Delivered"});
    this.props.dispatch(deliverOrder(orderId));
  }

  render() {

    return (
        <section className="row queuecontent driver">
            <div className="user-profile col-xs-12">
              <div className="header col-xs-12">
                <div>
                  <MuiThemeProvider>
                    <Avatar size={50} className="avatar" src={this.props.user.picture} />
                  </MuiThemeProvider>
                </div>
                <div className="user-info">
                  <h2 className="user-name">{this.props.user.name}</h2>
                  <h3>{this.props.user.vehicle}</h3>
                  <h4>{this.props.user.license_plate}</h4>
                </div>
              </div>
              <div className="update-button">
                <MuiThemeProvider>
                <FlatButton
                    label={"Update Profile"}
                    primary={true}
                    onTouchTap={() => {this.setState({openProfile: true})}}
                />
                </MuiThemeProvider>
              </div>
            </div>
            <h2>Orders: </h2>
            <div className="order-snapshot col-xs-12">
              <MuiThemeProvider>
              <List>
              { this.props.orders.orderList.length 
                ? 
                this.props.orders.orderList.map((order, index) => (
              <ListItem
                  primaryText={order.user.orderAddress[0].street}
                  secondaryText={`${order.user.orderAddress[0].city}, ${order.user.orderAddress[0].state}`}                    
                  initiallyOpen={false}
                  leftCheckbox={<Checkbox onCheck={this.setDelivered.bind(this, order._id)} />}
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
              ))
              : <div></div>
              }
              </List>
              </MuiThemeProvider>

            </div>

        </section>
    );
  }
 


}

export default connect(state => ({orders: state.orders, user: state.user}))(QueueContent)
