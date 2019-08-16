import React, { Component } from "react";
import "./Slider.css";
import logo from "../image/verizon.png";
import profile from "../image/pro.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default class Slider extends Component {
  render() {
    return (
      <header className="sliderBar">
        <navbar className="slider1">
          <img className="slider2" src={logo} />
          <div className="main">
            <div class="input-group">
              <input
                type="text"
                class="form-control inpt"
                placeholder="Search this blog"
              />
              <div class="input-group-append">
                <button class="btn btn-secondary srchBtn" type="button">
                  <i class="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
          <div className="spacer" />
          <div className="slider3">
            <ul>
              <li>
                <a>Micheal Seal</a>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle btnDrop"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />

                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <img className="sliderImg" src={profile} />
              </li>
              <li>
                <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faBell} />
              </li>
            </ul>
          </div>
        </navbar>
      </header>
    );
  }
}
