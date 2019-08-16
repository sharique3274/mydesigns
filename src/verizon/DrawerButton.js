import React, { Component } from "react";
import "./DrawerButton.css";

export default class DrawerButton extends Component {
  render() {
    return (
      <div>
        <button class="btn btnOne" onClick={this.props.click}>
          <div className="buttonLine" />
          <div className="buttonLine" />
          <div className="buttonLine" />
        </button>
      </div>
    );
  }
}
