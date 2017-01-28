import React from "react";
import ReactDOM from "react-dom";
import CurrentTime from "./CurrentTime.js";

class App extends React.Component {
  render() {
    return <CurrentTime />;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
