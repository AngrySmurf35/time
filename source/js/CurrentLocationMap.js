import React from "react";
import { Map } from 'google-maps-react';
import GoogleApiComponent from "./lib/GoogleApiComponent.js";

export class CurrentLocationMap extends React.Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyBjF5_YLT0onQt7j2C9ku-4BKO30R8oly4"
})(CurrentLocationMap);
