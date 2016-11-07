import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import config from "../../../../config/config.js";
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export class DriverMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { lat: 40.74135, lng: -73.99802 }
    };
  }

  render() {

  const mapContainer = ( <div style={{height: "100%", width: "100%"}}></div> );


    return (
      <GoogleMapLoader
        containerElement= { mapContainer }
        googleMapElement= {
          <GoogleMap
            defaultZoom={15}
            defaultCenter={this.state.center}
            options={{streetViewControl: false, mapTypeControl: false}}
            >
          </GoogleMap>
        } />
    );
  }

};

export default connect( state => ( {
  distribution: state.distribution
} ) )( DriverMap );

// ref={ (map) => {
//   if (this.state.map !== null )
//     return
//
//   this.setState( {
//     map: map
//   } );
//
// }}
// onDragend={this.mapMoved.bind(this)}
