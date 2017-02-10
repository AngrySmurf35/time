import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class CurrentLocationMap extends React.Component {
  render() {
    const pos = {lat: 37.759703, lng: -122.428093}
    return (
      <div>
        <Map google={this.props.google} >
        <Marker
          name={'current Location'}
          position={{lat: 37.778519, lng: -122.405640}} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBjF5_YLT0onQt7j2C9ku-4BKO30R8oly4"
})(CurrentLocationMap);
