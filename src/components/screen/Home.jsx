import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import Loading from "../shared/Loader.jsx";
import profile from "../../Image/tejaspp.png";

const HomeScreen = () => {
    const [loading, setLoading] = useState(true);
    const url = "https://drive.google.com/uc?export=download&id=15t2qCBBKr8GvAM_F7KklgAnpbtooWoDi";

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Container className="example animater__animated animate__backInUp animate__duration-2s mb-5">
                {loading ? (
                    <div style={{ marginTop: "330px" }}>
                        <Loading />
                    </div>
                ) : (
                    <>
                        <Row id="top" style={{ display: "none" }}>
                            <Col md={12} className="text-end">
                                <a
                                    href="#resume"
                                    style={{
                                        fontSize: "27px",
                                    }}
                                    className="nav-link text-light"
                                >
                                    Resume
                                </a>
                            </Col>
                        </Row>
                        <Slide direction="up" duration={1000}>
                            <Row className="mt-1" style={{ position: "justify", zIndex: "-1", display: "none" }}>
                                <Col md={7} style={{ marginTop: "30px" }}>
                                    <h5 className="p-2 text-light text-start">
                                        Hi, I am Tejas Jawalkar
                                    </h5>
                                    <p
                                        className="p-2 text-light text-start"
                                        style={{
                                            lineHeight: "2",
                                            wordSpacing: "4px",
                                            fontSize: "20px",
                                        }}
                                    >
                                        Experienced ASP.NET developer with over 2+ years of Practical
                                        Expertise in crafting robust web applications. Eagerly pursuing a
                                        challenging role within a dynamic engineering environment and esteemed
                                        organization, aiming to utilize my technical prowess and managerial
                                        acumen to drive organizational advancement. Committed to remaining
                                        abreast of emerging trends in the ever-evolving IT landscape.
                                    </p>
                                </Col>
                            </Row>
                        </Slide>
                        <Row className="mt-1 d-flex justify-content-center">
                            <div
                                className="jumbotron p-2  text-start text-light"
                                style={{
                                    height: "60px",
                                    fontSize: "22px",
                                    background: "transparent",
                                }}
                            ></div>
                            <Col md={12}>
                                <Row className=" mt-2 mb-3 shadow-none ">
                                    <Col md={7}>
                                        <Fade delay={500} duration={1000}>
                                            <h3 className="text-light mt-5 typing-animation">
                                                <span className="typing-text">Hello, I am Tejas Jawalkar</span>
                                            </h3>
                                            <p
                                                className="text-justify text-light mt-5"
                                                style={{
                                                    fontSize: "20px",
                                                    fontFamily: "Nunito Sans",
                                                    letterSpacing: "1.2px",
                                                }}
                                            >
                                                Experienced ASP.NET developer with over <b className="text-warning">2+ years</b> of Practical
                                                Expertise in crafting robust web applications. Eagerly pursuing a
                                                challenging role within a <b className="text-warning">dynamic engineering environment and esteemed
                                                    organization</b>, aiming to utilize my technical prowess and managerial
                                                acumen to drive organizational advancement. Committed to remaining
                                                abreast of emerging trends in the ever-evolving IT landscape.
                                            </p>
                                        </Fade>
                                    </Col>
                                    <Col className="animate__animated animate__backInUp animate__duration-1s hover-container">
                                        <div className="image-wrapper">
                                            <img
                                                src={profile}
                                                alt="Tejas Jawalkar"
                                                className="profile-image"
                                            />
                                            <a href={url} title="Resume" className="hover-button btn text-dark shadow-none" style={{ fontSize: "50px", marginTop: "30%" }}>
                                                <i className='bx bx-cloud-download'></i>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row id="resume" className="mt-5 mb-5 p-5 ">
                            <Col className="text-center mt-1">
                                <a
                                    as="button"
                                    href={url}
                                    rel="noreferrer"
                                    download="Tejas_Jawalkar_Resume"
                                    className="btn w-auto outline-success shadow-none resumebtn1 border-success"
                                >
                                    Resume
                                </a>
                            </Col>
                            <Col className="text-center mt-1">
                                <Link
                                    as="button"
                                    to="/contact"
                                    className="btn w-auto shadow-none text-center resumebtn2 border-warning"
                                >
                                    Hire
                                </Link>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </>
    );
};

export default HomeScreen;
