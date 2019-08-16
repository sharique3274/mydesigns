import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Carousel from "./Carousel";
import SectionTwo from "./SectionTwo";
import Sidebar from "./Sidebar";
import Slider from "./verizon/Slider";
import Cards from "./Cards";
import { Card, Col, Container, Row } from "react-bootstrap";
import SideDrawer from "./verizon/SideDrawer";
import BackDrop from "./verizon/BackDrop/BackDrop";
import SideBarFixed from "./verizon/SideBarFixed";
class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandeler = () => {
    console.log("this is clicked");
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    // let sideDrawer;
    // let backDrop;

    // if (this.state.sideDrawerOpen) {
    //   sideDrawer = <SideDrawer />;
    // }

    // let peopleCard = this.state.contact.map(per => {
    //   return <Cards contact={per} />;
    // });
    return (
      <div style={{ height: "100%" }}>
        <Slider />
        <SideBarFixed drawerClick={this.drawerToggleClickHandeler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
      </div>
    );
  }
}

export default App;
// Soiapi;
// congfig.js;
