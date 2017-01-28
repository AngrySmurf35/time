import React from "react";
import ReactDOM from "react-dom";

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
        curTime: new Date()
      });
  }

  render() {
    let time;
    if (this.state.curTime) {
          time = this.state.curTime.toLocaleTimeString();
    }

    return (
      <div>
      <h1>{time}</h1>
      </div>
    );
  }
}

export default CurrentTime;
