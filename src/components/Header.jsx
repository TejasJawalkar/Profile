import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Container fluid>
                <Navbar
                    className="mt-2"
                    expand="sm"
                    style={{
                        backgroundColor: "transparent !important",
                        top: "50",
                    }}
                    collapseOnSelect
                >
                    <Container>
                        <Navbar.Brand>
                            <div>
                                <h2 className="header animate__animated animate__backInDown ">
                                </h2>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            className="  border"
                            aria-controls="basic-navbar-nav"
                            style={{ color: "white !important" }}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto text-center">
                                <Nav.Item className="animate__animated animate__backInDown">
                                    <LinkContainer to="/home" onClick={() => setExpanded(false)}>
                                        <Nav.Link className="bb">Home</Nav.Link>
                                    </LinkContainer>
                                </Nav.Item>
                                <Nav.Item className="animate__animated animate__backInDown">
                                    <LinkContainer to="/about" onClick={() => setExpanded(false)}>
                                        <Nav.Link className="bb">About</Nav.Link>
                                    </LinkContainer>
                                </Nav.Item>
                                <Nav.Item className="animate__animated animate__backInDown">
                                    <LinkContainer to="/services" onClick={() => setExpanded(false)}>
                                        <Nav.Link className="bb">Services</Nav.Link>
                                    </LinkContainer>
                                </Nav.Item>
                                <Nav.Item className="animate__animated animate__backInDown">
                                    <LinkContainer to="/contact" onClick={() => setExpanded(false)}>
                                        <Nav.Link className="bb">Contact</Nav.Link>
                                    </LinkContainer>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
};

export default Header;