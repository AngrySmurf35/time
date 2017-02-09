import React from "react";
import ReactDOM from "react-dom";
import { Map, Marker, InfoWindow, Listing } from 'google-maps-react';

import CurrentDate from "./CurrentDate.js";
import CurrentTime from "./CurrentTime.js";
import CurrentTimezone from "./CurrentTimezone.js";
import CurrentLocationMap from "./CurrentLocationMap.js";
import moment from 'moment';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      curTime: undefined
    };

    this.updateCurrentTime = this.updateCurrentTime.bind(this);
  }

  componentDidMount() {
    this.updateCurrentTime();
    setInterval(() => this.updateCurrentTime()
    , 1000);
  }

  updateCurrentTime() {
      this.setState({
        curTime: moment().format("HH:mm:ss")
      });
  }

  render() {

    return (
      <div>
        <CurrentDate />
        <CurrentTime curTime={this.state.curTime} />
        <CurrentTimezone />
        <CurrentLocationMap />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
