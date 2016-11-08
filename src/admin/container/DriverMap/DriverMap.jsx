import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar'


import config from "../../../../config/config.js";
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow, withGoogleMaps, Circle } from 'react-google-maps';

export class DriverMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { lat: 32.7826722, lng: -96.79759519999999 }
      , selectedPlace: {name: ""}
      , activeMarker: {}
      , showingInfoWindow: false
      , infoWindow: {}
    };
  }
  componentWillMount() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          let newCenter = {lat: position.coords.latitude, lng: position.coords.longitude}
          this.setState({center: newCenter});
        });
    } 
  }

  handleMarkerClick(props, marker, e) {
    console.log(props, marker, e)
   this.setState({
      showingInfoWindow: true,
      selectedPlace: props,
      activeMarker: marker,
    });
  }
  render() {

  const mapContainer = ( <div style={{height: "100%", width: "100%"}}></div> );
  const infoViewContainer = (<MuiThemeProvider><Avatar /></MuiThemeProvider>)  

    return (
      <GoogleMapLoader
        containerElement= {mapContainer}
        googleMapElement= {
          <GoogleMap
            defaultZoom={15}
            defaultCenter={this.state.center}
            options={{streetViewControl: false, mapTypeControl: false}}
            >
            <Circle
              center={this.state.center}
              radius={10} 
            />            
            <InfoWindow>{infoViewContainer}
            </InfoWindow>
            
          </GoogleMap>
        } />
    );
  }

};

export default connect( state => ( {
  distribution: state.distribution
} ) )( DriverMap );

