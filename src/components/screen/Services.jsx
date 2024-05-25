import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ServicesScreen = () => {
    return (
        <>
            <Container
                fluid
                className="mb-5 mt-0 animate__animated animate__backInUp animate__duration-2s example"
            >
                <Row>
                    <Col>
                        <h4 className="heading w-100 text-start">My Services</h4>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }} className="text-center">
                    <Col md={12} className="d-flex justify-content-center mt-5">
                        <Card
                            className="card1 text-center border-success shadow-none"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <Card.Body>
                                <div className="circle text-center">
                                    <span>
                                        <i className="fas fa-desktop"></i>
                                    </span>
                                </div>
                                <h4 className="font-weight-bold mb-2 pt-1 pb-0 text-center">
                                    Responsive Web Development
                                </h4>
                                <div className="dropdown-divider"></div>
                                <p className="text-danger text mt-5 description">
                                    In today's digital age, web browsers are ubiquitous, being used on everything from mobile devices to computers. With the prevalence of mobile browsing, it's crucial that websites are optimized for mobile devices. When users open websites on their smartphones or tablets, they expect a seamless, user-friendly experience. Ensuring that your website is mobile-friendly is no longer optional; it's essential for reaching and engaging with your audience effectively.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} className="d-flex justify-content-center mt-5">
                        <Card
                            className="card1 text-center border-success shadow-none"
                            style={{ backgroundColor: "transparent", width: "100%" }}
                        >
                            <Card.Body className="w-100">
                                <div className="circle text-center mb-3">
                                    <span>
                                        <i className="fas fa-toolbox"></i>
                                    </span>
                                </div>
                                <h4 className="font-weight-bold pt-1 w-100 pb-0 text-center mt-1">
                                    Easy to Use
                                </h4>
                                <div className="dropdown-divider"></div>
                                <p className="text-danger text mt-5 description">
                                    I personally prefer that web pages be browser-friendly, ensuring they work seamlessly on every platform, including Firefox, Microsoft Edge, and Internet Explorer. This cross-platform compatibility is essential for providing a consistent user experience, regardless of the browser users choose. By optimizing web pages for multiple browsers, we can reach a wider audience and ensure accessibility for all users.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} className="d-flex justify-content-center mt-5">
                        <Card
                            className="card1 text-center border-success shadow-none"
                            style={{
                                backgroundColor: "transparent",
                                width: "100%",
                                height: "101%",
                            }}
                        >
                            <Card.Body>
                                <div className="circle text-center mb-0">
                                    <span>
                                        <i className="fas fa-bezier-curve"></i>
                                    </span>
                                </div>
                                <h4 className="font-weight-bold pt-5 mb-3 pb-0 text-center">
                                    Modal Designing
                                </h4>
                                <div className="dropdown-divider"></div>
                                <p className="text-danger text mt-5 description">
                                    I prefer to create a prototype of each page before beginning any project. Prototyping not only aids in developing the front end but also helps preserve and refine ideas. By visualizing the layout and functionality early on, we can identify potential issues, streamline the design process, and ensure a cohesive user experience. Prototypes serve as a valuable blueprint, guiding the project's development and ensuring that the final product aligns with the original vision.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ServicesScreen;