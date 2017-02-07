import React from "react";
import ReactDOM from "react-dom";
import CurrentDate from "./CurrentDate.js";
import CurrentTime from "./CurrentTime.js";
import CurrentTimezone from "./CurrentTimezone.js";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      status: ''
    };
  }
// work here
  componentDidMount() {
    this.setState({
      status: <div>
        <CurrentDate />
        <CurrentTime />
        <CurrentTimezone />
      </div>
    });
  }

  render() {
    let status = this.state.status;
    return (
      <div>
        <CurrentDate />
        <CurrentTime />
        <CurrentTimezone />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
