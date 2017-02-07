import React from "react";
import ReactDOM from "react-dom";
import CurrentDate from "./CurrentDate.js";
import CurrentTime from "./CurrentTime.js";
import CurrentTimezone from "./CurrentTimezone.js";
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
        <CurrentTime curTime={this.state.curTime}/>
        <CurrentTimezone />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
