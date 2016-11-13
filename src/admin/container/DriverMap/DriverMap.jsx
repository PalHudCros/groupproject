import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow, withGoogleMaps, Circle } from 'react-google-maps';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import config from "../../../../config/config.js";
import {showDriverInfo, updateDriverPositions} from "../../ducks/driverDuck";

export class DriverMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: {}
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
  }

  handleMarkerClick(driverId) {
    this.props.dispatch(showDriverInfo(driverId))
  }

  componentWillReceiveProps(props) {
    console.log(props);
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
                {this.props.drivers.driverList.map((driver, index)=> (
                <Marker
                    style={{height: "10px", width: "10px", overflow: "hidden"}}
                    key={index}
                    position={this.state.center}
                    onClick={this.handleMarkerClick.bind(this, driver._id)}
                    icon={driver.picture}
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
