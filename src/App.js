import React from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

class App extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
