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

export class DriverMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      directions: null
      , enRouteList: null
      , center: { lat: 38.7826722, lng: -92.79759519999999 }
      , selectedDriver: {
          id: ""
          , position: {}
      }
    }  
  }

  componentWillMount() {
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
          DirectionsService.route({
            origin: driver.position,
            destination: {lat: driver.position.lat + .01, lng: driver.position.lng + .01},
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            console.log(result);
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
      this.setState({selectedDriver: {id: "", position: {}}})
    } else {
      this.setState({selectedDriver: {id: driverId, position: driverPosition}})
      let DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: driverPosition,
        destination: {lat: driverPosition.lat + .01, lng: driverPosition.lng + .01},
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result);
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
    this.setState({orderList})
    this.setState({enRouteList: props.drivers.enRouteList})
  }

  render() {
  const mapContainer = ( <div style={{height: "100%", width: "100%"}}></div> );
    return (
     <GoogleMapLoader
        containerElement={mapContainer}
        googleMapElement={
            <GoogleMap
                ref={(map) => {}}
                defaultZoom={15}
                center={this.state.center}
                options={{streetViewControl: false, mapTypeControl: false}}
                >
                {this.state.directions && <DirectionsRenderer directions={this.state.directions} />}
                {this.state.enRouteList && this.state.enRouteList.map((driver, index)=> (
                <Marker
                    key={index}
                    position={driver.position}
                    onClick={this.handleMarkerClick.bind(this, driver._id, driver.position)}
                    icon={{url: driver.picture, scaledSize: new google.maps.Size(25, 25)}}
                    >
                    { driver._id === this.state.selectedDriver.id && (
                    <InfoWindow><h1>Hello</h1>
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
