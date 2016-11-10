import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar'


import config from "../../../../config/config.js";
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow, withGoogleMaps, Circle } from 'react-google-maps';
import InfoBox from "react-google-maps/lib/addons/InfoBox"

export class DriverMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { lat: 32.7826722, lng: -96.79759519999999 }
      , marker: {}
      , displayInfo: false
    }
}


  componentWillMount() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          let newCenter = {lat: position.coords.latitude, lng: position.coords.longitude}
          this.setState({center: newCenter});
        });
    }
  }

  handleMarkerClick(marker) {
    this.setState({displayInfo: !this.state.displayInfo})
  }
  render() {
  const mapContainer = ( <div style={{height: "100%", width: "100%"}}></div> );
  const infoViewContainer = (<MuiThemeProvider><Avatar /></MuiThemeProvider>)

    return (
<<<<<<< HEAD
      <GoogleMapLoader
        containerElement= {mapContainer}
        googleMapElement= {
          <GoogleMap
            defaultZoom={15}
            center={this.state.center}
            options={{streetViewControl: false, mapTypeControl: false}}
            >
            <Marker
                position={this.state.center}
                onClick={this.handleMarkerClick.bind(this)}
                icon={"https://scontent.xx.fbcdn.net/v/l/t1.0-1/p50x50/14068075_106277423158854_6736404234612019223_n.jpg?oh=db0a3e6dad0916cd95e1ea1c40d1a204&oe=58964EEF"}
                >
                { this.state.displayInfo && (

                  <InfoWindow>
                    <h1>Hello</h1>
                  </InfoWindow>
                )}
            </Marker>
          </GoogleMap>
=======
      <div>
        <MuiThemeProvider>
          <RaisedButton label="Add Driver" primary={true} onTouchTap={this.createDriver}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <RaisedButton label="Delete Driver" secondary={true} onTouchTap={this.deleteDriver}/>
        </MuiThemeProvider>
        <GoogleMapLoader
          containerElement= { mapContainer }
          googleMapElement= {
            <GoogleMap
              defaultZoom={15}
              defaultCenter={this.state.center}
              options={{streetViewControl: false, mapTypeControl: false}}
              >
            </GoogleMap>
>>>>>>> master
        } />
      </div>
    );
  }

};

export default connect( state => ( {
  drivers: state.drivers
} ) )( DriverMap );
