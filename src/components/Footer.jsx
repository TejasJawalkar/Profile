import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <Container
                fluid
                className="animate__animated animate__backInUp animate__duration-2s"
            >
                <Row className="w-100" style={{ display: "inline-block" }}>
                    <Col className="text-center">
                        <h6 style={{ color: "" }}>
                            <span style={{ display: "block" }}>
                                <a title="BitBucket"
                                    href="https://bitbucket.org/baxterassignment/workspace/overview/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i
                                        className="icon bx bxl-git"
                                        style={{ color: "#00e3ea", fontSize: "34px" }}
                                    ></i>
                                </a>
                                <a title="GitHub"
                                    href="https://github.com/TejasJawalkar?tab=repositories"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className='bx bxl-github' style={{ color: "#00e3ea", fontSize: "34px" }}></i>
                                </a>

                                <a title="Facebook"
                                    rel="noreferrer"
                                    href="https://m.facebook.com/"
                                    target="_blank"
                                >
                                    <i
                                        className="icon bx bxl-facebook-square"
                                        style={{ color: "#00e3ea", fontSize: "34px" }}
                                    ></i>
                                </a>


                                <a title="LinkedIN"
                                    href="https://www.linkedin.com/in/tejas-javalkar-b4b1a0180/?originalSubdomain=in"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i
                                        className="icon bx bxl-linkedin-square"
                                        style={{ color: "#00e3ea", fontSize: "34px" }}
                                    ></i>
                                </a>
                            </span>
                        </h6>
                    </Col>
                </Row>
                <Row className="pt-4 text-center">
                    <div>
                        <b className="text text-light">copyright©TejasJawalkar@2024</b>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Footer;