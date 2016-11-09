import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar'


import config from "../../../../config/config.js";
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow, withGoogleMaps, Circle } from 'react-google-maps';
import InfoBox from "react-google-maps/lib/addons/InfoBox"
import MarkerMap from "./MarkerMap";

export class DriverMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { lat: 32.7826722, lng: -96.79759519999999 }
      , markers: [
          {
            key: 1, position: { lat: 32.7826722, lng: -96.79759519999999 }
            , icon: "https://scontent.xx.fbcdn.net/v/l/t1.0-1/p50x50/14068075_106277423158854_6736404234612019223_n.jpg?oh=db0a3e6dad0916cd95e1ea1c40d1a204&oe=58964EEF"
            , info: "Hi there"
            , showInfo: false
          }
          , {
            key: 2, position: { lat: 32.7726733, lng: -96.78769519999999 }
            , icon: "https://scontent.xx.fbcdn.net/v/l/t1.0-1/p50x50/14068075_106277423158854_6736404234612019223_n.jpg?oh=db0a3e6dad0916cd95e1ea1c40d1a204&oe=58964EEF"
            , info: "Hey back"
            , showInfo: false          
          }
          , {
            key: 3, position: { lat: 32.7926733, lng: -96.80779519899999 }
            , icon: "https://scontent.xx.fbcdn.net/v/l/t1.0-1/p50x50/14068075_106277423158854_6736404234612019223_n.jpg?oh=db0a3e6dad0916cd95e1ea1c40d1a204&oe=58964EEF"
            , info: "Howdy"
            , showInfo: false
          }
        ]
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
  handleMapClick(e) {
    console.log(e);
  }
  handleMarkerClick() {

  }
  render() {
  const mapContainer = ( <div style={{height: "100%", width: "100%"}}></div> );
  console.log()
    return (
     <GoogleMapLoader
        containerElement={mapContainer}
        googleMapElement={
            <GoogleMap
                ref={(map) => console.log(map)}
                defaultZoom={15}
                center={this.state.center}
                options={{streetViewControl: false, mapTypeControl: false}}
                >
                {this.props.drivers.driverList.map((driver, index)=> (
                <Marker
                    style={{height: "10px", width: "10px", overflow: "hidden"}}
                    key={index}
                    position={this.state.center}
                    onClick={this.handleMarkerClick.bind(this)}
                    icon={<Circle/>}
                    >
                    { driver.showInfo && ( 
                    
                    <InfoWindow>
                        <MuiThemeProvider><Avatar src={driver.picture}/></MuiThemeProvider>
                        {driver.name}
                        {driver.age}
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

