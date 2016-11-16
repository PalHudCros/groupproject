import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow, DirectionsRenderer } from 'react-google-maps';
import io from 'socket.io-client';
import fs from 'fs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import config from "../../../../config/config.js";
import {getOrdersByDriver} from "../../ducks/orderDuck";

export class DriverMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      directions: null
      , center: { lat: 32.7821, lng: -96.797 }
      , position: {}
      , zoom: 15
      , orders: []
      , openWindow: false
    }
  }

  componentWillMount() {
    this.props.dispatch(getOrdersByDriver());
    const socket = io.connect("/");
    socket.on("driverPosition", driver => {
      this.setState({position: driver.position, center: driver.position})      
    });    
  }

  componentWillReceiveProps(props) {
    this.setState({orders: props.orders.orderList});
  }

  handleClick() {
    if (this.props.orders.orderList.length) {
      if (!this.state.position) {
        navigator.geolocation.getCurrentPosition(position => {
          let origin= {lat: position.coords.latitude, lng: position.coords.longitude}
        })
      }
      let addresses = this.props.orders.orderList.map(order => {
        return `${order.user.orderAddress[0].street}, ${order.user.orderAddress[0].city}, ${order.user.orderAddress[0].state}`
      })
      let DirectionsService = new google.maps.DirectionsService();
            // let waypoints = [];
            // if (this.selectedDriver.destinations.length > 1) {
            //   for (let i = 1; i < this.state.selectedDriver.destinations.length; i++) {
            //     waypoints.push({location: this.state.selectedDriver.destinations[i]});
            //   }
            // }            
      DirectionsService.route({
        origin: this.state.position || origin || this.state.center,
        destination: addresses[0],
        // waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }

  }

  render() {
  const mapContainer = ( <div style={{height: "100%", width: "100%"}}></div> );
    return (
     <GoogleMapLoader
        containerElement={mapContainer}
        googleMapElement={
            <GoogleMap
                ref={(map) => this._mapComponent = map}
                zoom={this.state.zoom}
                center={this.state.center}
                options={{streetViewControl: false, mapTypeControl: false}}
                >
                {this.state.directions && 
                  <DirectionsRenderer directions={this.state.directions} />}
                {this.state.position.lat && 
                  
                <Marker
                    position={this.state.position || this.state.center}
                    onClick={() => {this.setState({openWindow: !this.state.openWindow})}}

                    >
                    { this.state.openWindow && (
                    <InfoWindow>
                      <div>
                        <h2>Deliveries:</h2> 
                        {this.state.orders.map((order, index) => (
                          <div id={order._id}>
                            <h3>{index + 1}:</h3>
                            <p>{order.user.orderAddress[0].street}</p>
                            <p>{order.user.orderAddress[0].city}, {order.user.orderAddress[0].state}</p>
                          </div>                          
                        )).slice(0, 1)}
                      </div>                      
                    </InfoWindow>
                    )}
                </Marker>
                }
            </GoogleMap>
        }
        />
    );
  }

};

export default connect( state => ( {
  orders: state.orders
} ) )( DriverMap );

