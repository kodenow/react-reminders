import React, { Component } from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
export class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name="Kris" />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
