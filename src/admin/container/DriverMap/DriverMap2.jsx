import _ from "lodash";

import {
  default as React,
  Component,
} from "react";

import {
  GoogleMap,
  Marker,
  GoogleMapLoader
} from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

export default class GettingStartedExample extends Component {
constructor() {
    super()
    this.state = {
        markers: [{
        position: {
            lat: 25.0112183,
            lng: 121.52067570000001,
        },
        key: `Taiwan`,
        defaultAnimation: 2,
        }],
    }
}

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });

    if (nextMarkers.length === 3) {
      this.props.toast(
        `Right click on the marker to remove it`,
        `Also check the code!`
      );
    }
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);

    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    const mapContainer = ( <div style={{height: "100%", width: "100%"}}></div> );
    const GettingStartedGoogleMap = props => (

    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
        onClick={props.onMapClick}
    >
        {props.markers.map(marker => (
        <Marker
            {...marker}
            onRightClick={() => props.onMarkerRightClick(marker)}
        />
        ))}
    </GoogleMap>
    );

    return (
      <GoogleMapLoader
        containerElement= {mapContainer}
        googleMapElement= {
            <GettingStartedGoogleMap
                onMapLoad={this.handleMapLoad.bind(this)}
                onMapClick={this.handleMapClick.bind(this)}
                markers={this.state.markers}
                onMarkerRightClick={this.handleMarkerRightClick.bind(this)}
            />
        }
    />
    );
  }
}