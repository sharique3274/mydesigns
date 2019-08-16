import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./Cards.css";
import image from "./image/area_graph.png";

export default class Cards extends Component {
  onClick = () => {
    console.log("this is clicked");
  };
  render() {
    const { contact } = this.props;

    return (
      <div style={{ padding: "20px" }}>
        <Card className="text-center cardLayout">
          <Card.Header>{contact.header}</Card.Header>
          <Card.Body>
            <img
              onClick={this.onClick}
              className="img1"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={image}
            />
          </Card.Body>
          <Card.Footer className="text-muted">{contact.footer}</Card.Footer>
        </Card>
      </div>
    );
  }
}
