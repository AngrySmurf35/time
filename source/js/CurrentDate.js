import React from "react";
import moment from 'moment';

class CurrentDate extends React.Component {

  constructor() {
    super();
  }

  render() {
    let today = `Today is ${moment().format('DD/MM/YYYY')}`;

    return <h3>{today}</h3>
  }
}

export default CurrentDate;
