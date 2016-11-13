import react from "react";
import {connect} from "react-redux";
import {} from "../../ducks/driverDuck";
import io from 'socket.io-client';

function Orders(props) {
    
    const socket = io.connect("/");
    socket.on("order", order => {
        console.log("Admin log: ", order);
        // this.props.dispatch(updateDrivers(driver));
      });
    

    return (
        <div>Orders</div>
    )
}

export default connect(state => ({orders: state.orders}))(Orders);