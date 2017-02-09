import React from "react";
import moment from 'moment';

class CurrentTime extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let time;
    if (this.props && this.props.curTime) {
          time = `Your current time is: ${this.props.curTime}`;
    }

    return <h3>{time}</h3>
  }
}

export default CurrentTime;
