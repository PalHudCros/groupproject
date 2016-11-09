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
      center: { lat: 32.7826722, lng: -96.79759519999999 }
    };
  }

  render() {

  const mapContainer = ( <div style={{height: "100%", width: "100%"}}></div> );


    return (
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
<<<<<<< HEAD
=======
      </div>
>>>>>>> master
        } />
      </div>
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
