import React, { Component } from "react";
import "./SideDrawer.css";

export default class SideDrawer extends Component {
  render() {
    let drawerClass = "side-drawer";
    if (this.props.show) {
      drawerClass = "side-drawer open";
    }
    return (
      <nav className={drawerClass}>
        {/* <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">user</a>
          </li>
        </ul> */}
      </nav>
    );
  }
}
