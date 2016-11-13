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
      map: {}
      , origin: new google.maps.LatLng(41.8507300, -87.6512600)
      , destination: new google.maps.LatLng(41.8525800, -87.6514100)
      , directions: null
      , enrRouteList: null
      , center: { lat: 32.7826722, lng: -96.79759519999999 }
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
        console.log("Admin log: ", driver);
        this.props.dispatch(updateDrivers(driver));
      });
  }

  handleMarkerClick(driverId) {
    const showDriverList = this.state.enRouteList.map(driver => {
        if (driver._id === driverId) {
            driver.showInfo = !driver.showInfo;
        }
        return driver;
    })
    this.setState({enRouteList: showDriverList});
  }

  componentWillReceiveProps(props) {
    this.setState({enRouteList: props.drivers.enRouteList})
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
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
                directions
                >
                {this.state.enRouteList && this.state.enRouteList.map((driver, index)=> (
                <Marker
                    style={{height: "10px", width: "10px", overflow: "hidden"}}
                    key={index}
                    position={driver.position}
                    onClick={this.handleMarkerClick.bind(this, driver._id)}
                    icon={{url: driver.picture, scaledSize: new google.maps.Size(25, 25)}}
                    >
                    { driver.showInfo && ( 
                    
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
} ) )( DriverMap );

/*<MuiThemeProvider>
  <RaisedButton label="Add Driver" primary={true} onTouchTap={this.createDriver}/>
</MuiThemeProvider>
<MuiThemeProvider>
  <RaisedButton label="Delete Driver" secondary={true} onTouchTap={this.deleteDriver}/>
</MuiThemeProvider> */
