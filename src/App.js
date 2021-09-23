import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import P5jsICON from "./components/sketch/P5jsICON";
import WebGL3D from "./components/sketch/WebGL3D";
import Test from "./components/sketch/Test";
import About from "./components/About";

export default class App extends Component {
  testname = "test2";
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Test name={this.testname} />
        <P5jsICON />
        <WebGL3D />
        <About />
      </div>
    );
  }
}
