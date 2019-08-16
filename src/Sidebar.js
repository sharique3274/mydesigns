import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button, DropdownButton, Dropdown, Row} from "react-bootstrap";
import { faBell, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Sidebar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-sm navbar-light bg-light">
                <Navbar className="container">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>

                        <DropdownButton id="dropdown-item-button" title="Dropdown button" className="mr-sm-2">
                            <Dropdown.Item as="button">Action</Dropdown.Item>
                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                        </DropdownButton>
                    <FontAwesomeIcon style={{
                        fontSize: "40px", marginLeft: "40px"
                    }} icon={ faBell }/>

                </Navbar>
            </div>
        );
    }
}

export default Sidebar;