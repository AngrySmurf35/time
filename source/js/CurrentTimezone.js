import React from "react";
import moment from 'moment';

class CurrentTimezone extends React.Component {

  constructor() {
    super();
    this.state = {
      curTime: undefined
    }
  }

  render() {
    let timezone = `Your are in ${moment().format('Z')} timezone`;

    return <h3>{timezone}</h3>
  }
}

export default CurrentTimezone;
