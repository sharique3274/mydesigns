import React, { Component } from "react";
import "./SideBarFixed.css";
import DrawerButton from "./DrawerButton";

export default class SideBarFixed extends Component {
  render() {
    return (
      <nav className="side-drawer1">
        <ul>
          <li>
            <div>
              <DrawerButton click={this.props.drawerClick} />
            </div>
          </li>
          {/* <li>
            <a href="/">user</a>
          </li> */}
        </ul>
      </nav>
    );
  }
}
