import React, { Component } from "react";
import BackgroundImage from "react-background-image-loader";
import Spinner from "../Spinner.svg";

export default class Imagem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.url !== nextProps.url;
  }
  render() {
    return (
      <BackgroundImage
        className="imagePost"
        src={this.props.url || ""}
        placeholder={Spinner}
      >
        {this.props.children}
      </BackgroundImage>
    );
  }
}
