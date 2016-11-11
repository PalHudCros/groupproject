import React from "react";
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow, withGoogleMaps, Circle } from 'react-google-maps';

export default function MarkerMap(props) {
    console.log(props);
  return (
    <GoogleMapLoader
        containerElement={props.mapContainer}
        googleMapElement={
            <GoogleMap
                defaultZoom={15}
                center={props.center}
                options={{streetViewControl: false, mapTypeControl: false}}
                >
                {props.markers.map((marker, index)=> (
                <Marker
                    key={index}
                    position={marker.position}
                    onClick={props.handleMarkerClick}
                    icon={marker.icon}
                    >
                    { marker.showInfo && ( 
                    
                    <InfoWindow>
                        <h1>{marker.info}</h1>
                    </InfoWindow>
                    )}
                </Marker>
                ))}
            </GoogleMap>
        }
    />
  );

}