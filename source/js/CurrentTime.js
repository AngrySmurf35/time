import React from "react";
import ReactDOM from "react-dom";
import moment from 'moment';

class CurrentTime extends React.Component {

  constructor() {
    super();
    this.state = {
      curTime: undefined
    }

    this.updateCurrentTime = this.updateCurrentTime.bind(this);
  }

  componentDidMount() {
    setInterval(() => this.updateCurrentTime()
    , 1000);
  }

  updateCurrentTime() {
      this.setState({
        curTime: moment().format("HH:mm:ss")
      });
  }

  render() {
    let time;

    if (this.state.curTime) {
          time = `Your current time is: ${this.state.curTime}`;
    }

    return <h3>{time}</h3>
  }
}

export default CurrentTime;
