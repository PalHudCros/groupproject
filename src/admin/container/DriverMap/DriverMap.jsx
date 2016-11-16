import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow, withGoogleMaps, Circle, DirectionsRenderer } from 'react-google-maps';
import io from 'socket.io-client';
import fs from 'fs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import config from "../../../../config/config.js";
import {showDriverInfo, updateDrivers} from "../../ducks/driverDuck";
import {getFilledOrders} from "../../ducks/orderDuck";

export class DriverMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enRouteList: null
      , orderList: null
      , directions: null
      , center: { lat: 32.7821, lng: -96.797 }
      , zoom: 15
      , selectedDriver: {
          id: ""  
          , position: {}
          , destinations: []
      }
    }
  }

  componentWillMount() {
    this.props.dispatch(getFilledOrders())
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          let newCenter = {lat: position.coords.latitude, lng: position.coords.longitude}
          this.setState({center: newCenter});
        });
    }
    const socket = io.connect("/");
    socket.on("driverPosition", driver => {
        if (this.state.selectedDriver.id && driver._id === this.state.selectedDriver.id) {
          this.setState({"selectedDriver.position": driver.position});
          let DirectionsService = new google.maps.DirectionsService();
          // let waypoints = [];
          // if (this.selectedDriver.destinations.length > 1) {
          //   for (let i = 1; i < this.state.selectedDriver.destinations.length; i++) {
          //     waypoints.push({location: this.state.selectedDriver.destinations[i]});
          //   }
          // }            
          DirectionsService.route({
            origin: driver.position,
            destination: this.state.selectedDriver.destinations[0],
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
        this.props.dispatch(updateDrivers(driver));
      });
  }

  handleMarkerClick(driverId, driverPosition) {
    if (this.state.selectedDriver.id === driverId) {
      this.setState({zoom: 15, center: { lat: 32.7821, lng: -96.797 }, selectedDriver: {id: "", position: {}, destinations: []}})
    } else {
      const destinations = this.props.orders.filledOrderList.filter(order => order.filled.driver === driverId).map(order => {
        let address = order.user.orderAddress[0]; 
        return `${address.street}, ${address.city}, ${address.state}`
      })
      this.setState({zoom: 18, center: driverPosition, selectedDriver: {id: driverId, position: driverPosition, destinations: destinations}})
      let DirectionsService = new google.maps.DirectionsService();
      // let waypoints = [];
      // // if (destinations.length > 1) {
      // //   for (let i = 1; i < destinations.length; i++) {
      // //     waypoints.push({location: destinations[i]});
      // //   }
      // // }
      DirectionsService.route({
        origin: driverPosition,
        destination: destinations[0],
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

  componentWillReceiveProps(props) {
    this.setState({orderList: props.orders.filledOrderList})
    this.setState({enRouteList: props.drivers.enRouteList})
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
                {this.state.directions && this.state.selectedDriver.id && <DirectionsRenderer directions={this.state.directions} />}
                {this.state.enRouteList && this.state.enRouteList.map((driver, index)=> (
                <Marker
                    key={index}
                    position={driver.position}
                    onClick={this.handleMarkerClick.bind(this, driver._id, driver.position)}
                    icon={{url: driver.picture, scaledSize: new google.maps.Size(25, 25)}}
                    >
                    { driver._id === this.state.selectedDriver.id && (
                    <InfoWindow>
                      <div>
                        <MuiThemeProvider>
                          <Avatar src={driver.picture} />                          
                        </MuiThemeProvider>              
                          <span>{driver.name}</span>          
                        <h2>
                          Destination:
                        </h2>
                        {this.props.orders.filledOrderList.filter(order => order.filled.driver === driver._id).map(order => (
                          <div id={order.user.orderAddress.street}>
                            <p>{order.user.orderAddress[0].street}</p>
                            <p>{order.user.orderAddress[0].city}, {order.user.orderAddress[0].state}</p>
                          </div>                          
                        )).slice(0, 1)}
                      </div>                      
                    </InfoWindow>
                    )}
                </Marker>
                ))}
            </GoogleMap>
        }
        />
    );
  }

};

export default connect( state => ( {
  drivers: state.drivers
  , orders: state.orders
} ) )( DriverMap );

/*<MuiThemeProvider>
  <RaisedButton label="Add Driver" primary={true} onTouchTap={this.createDriver}/>
</MuiThemeProvider>
<MuiThemeProvider>
  <RaisedButton label="Delete Driver" secondary={true} onTouchTap={this.deleteDriver}/>
</MuiThemeProvider> */
