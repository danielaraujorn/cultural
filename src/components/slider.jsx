import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return <div className="slider">{this.props.children}</div>;
  }
}
