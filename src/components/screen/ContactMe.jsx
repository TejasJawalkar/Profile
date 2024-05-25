import React, { useState, useRef } from "react";
import { Col, Container, Form, Row, Card } from "react-bootstrap";
import emailjs from "emailjs-com";

const Result = () => {
    return (
        <div className="text-center text-success bx-flashing">
            Your Message sent Successfully.I Will Contact You Soon.
        </div>
    );
};

const ContactScreen = () => {
    const input1 = {
        height: "43px",
        borderBottom: "1px solid #999",
        borderTop: "none",
        borderRight: "none",
        borderLeft: "none",
        paddingLeft: "70px",
        fontFamily: "Noto Serif, serif",
        fontWeight: "400",
        color: "#F0EBE5 ",
        backgroundColor: "transparent",
        boxShadow: "inset 0 2px 3px 0px",
        letterSpacing: "1.5px",
    };
    const input = {
        height: "43px",
        borderBottom: "1px solid #999",
        borderTop: "none",
        borderRight: "none",
        borderLeft: "none",
        paddingLeft: "70px",
        fontFamily: "Noto Serif, serif",
        fontWeight: "400",
        color: "#F0EBE5 ",
        marginTop: "12px",
        backgroundColor: "transparent",
        letterSpacing: "1.2px",
    };

    const input2 = {
        height: "50px",
        borderBottom: "1px solid #999",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        paddingLeft: "70px",
        fontFamily: "Noto Serif, serif",
        fontWeight: "400",
        color: "#F0EBE5 ",
        backgroundColor: "transparent",
        letterSpacing: "2px",
    };

    const [name, setFname] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [subjectError, setSubjectError] = useState();
    const [messageError, setMessageError] = useState();
    const [data, setData] = useState(true);
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const subjectRef = useRef();
    const [result, setResult] = useState(false);

    const nameCheck = (e) => {
        if (!nameRef.current.value) {
            setNameError("Enter Full Name");
        } else {
            setNameError();
        }
    };
    const emailCheck = (e) => {
        if (!emailRef.current.value) {
            setEmailError("Enter Email");
        } else {
            setEmailError();
        }
    };
    const subjectCheck = (e) => {
        if (!subjectRef.current.value) {
            setSubjectError("Enter Subject");
        } else {
            setSubjectError();
        }
    };
    const messageCheck = (e) => {
        if (!messageRef.current.value) {
            setMessageError("Enter Message");
            setData(true);
        } else {
            setMessageError();
            setData(false);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_zzfeav8",
                "template_pvidtoj",
                e.target,
                "cyzp35x2_OwR_SVmn"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        setResult(true);

        setTimeout(() => {
            setResult(false);
            setData(false);
        }, 7000);
    };



    return (
        <>
            <Container className="mb-3 animate__animated animate__backInUp animate__duration-2s example ">
                <div className="mt-2">
                    <h4 className="heading w-100 text-start">Contact Me</h4>
                    <div className="dropdown-divider"></div>
                    <Row>
                        <Col md={6} className=" shadow-none">
                            <Row>
                                <Col md={1} className="p-3">
                                    <div className="text-center">
                                        <i
                                            className="bx bx-map"
                                            style={{ color: "#00e3ea", fontSize: "40px" }}
                                        ></i>
                                    </div>
                                </Col>
                                <Col className=" shadow-none">
                                    <h5 className="text mt-4  text-start">Address :- </h5>
                                    <h7 className="mt-4 text-start text1">
                                        - 302, Bharat Ratna Indira Nagar, 70 Foot Road, Behind Ravva
                                        Hospital, Solapur, 413006.
                                    </h7>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} className=" shadow-none">
                            <Row>
                                <Col md={1} className="p-4">
                                    <div className=" text-center">
                                        <i
                                            class="bx bx-git-merge"
                                            style={{ color: "#00e3ea", fontSize: "40px" }}
                                        ></i>
                                    </div>
                                </Col>
                                <Col className="p-4 ">
                                    <h5 className="text  text-start">Social Profiles:</h5>
                                    <h6 className="flex text-end text">
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
                                                <i class='bx bxl-github' style={{ color: "#00e3ea", fontSize: "34px" }}></i>
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
                        </Col>
                    </Row>
                    <Row className="">
                        <Col md={6} className=" shadow-none p-4">
                            <Row>
                                <Col md={1} className="">
                                    <div className="text-center">
                                        <i
                                            className="bx bx-envelope"
                                            style={{ color: "#00e3ea", fontSize: "40px" }}
                                        ></i>
                                    </div>
                                </Col>
                                <Col className="">
                                    <h5 className="text text-start">Email Me:</h5>
                                    <h6 className="mt-3 text-center text1">
                                        tejassj1998@gmail.com
                                    </h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} className="  shadow-none p-4">
                            <Row>
                                <Col md={1} className="">
                                    <div className=" text-center">
                                        <i
                                            class="bx bx-phone"
                                            style={{ color: "#00e3ea", fontSize: "40px" }}
                                        ></i>
                                    </div>
                                </Col>
                                <Col className="">
                                    <h5 className="text  text-start">Contact Me:</h5>
                                    <h6 className="mt-3 text-center text1">
                                        +91 9172804246 <span>( <i class='bx bxs-phone-call'></i> / <i class='bx bxl-whatsapp' ></i> )</span>
                                    </h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="dropdown-divider"></div>
                <Card
                    style={{ backgroundColor: "transparent" }}
                    className="shadow-none border-1 mt-2"
                >
                    <Card.Header className="text-danger" style={{ fontSize: "20px", fontWeight: "bold" }}>Connect me with Email</Card.Header>
                    <Card.Body className="border-0">
                        <form onSubmit={sendEmail}>
                            <Row className="d-flex justify-content-center">
                                <Col md={5} className="mt-3">
                                    <Form.Control
                                        className="shadow-none rounded-0 input"
                                        placeholder="Your Full Name"
                                        style={input}
                                        type="text"
                                        name="name"
                                        value={name}
                                        ref={nameRef}
                                        onChange={(e) => setFname(e.target.value)}
                                        onBlur={nameCheck}
                                    />
                                    {nameError ? (
                                        <div className="text-danger">{nameError}</div>
                                    ) : null}
                                </Col>
                                <Col md={5} className="mt-3">
                                    <Form.Control
                                        style={input}
                                        className=" shadow-none rounded-0 input"
                                        placeholder="Your Email"
                                        type="text"
                                        name="email"
                                        value={email}
                                        ref={emailRef}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={emailCheck}
                                    />
                                    {emailError ? (
                                        <div className="text-danger">{emailError}</div>
                                    ) : null}
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center mt-5">
                                <Col md={10}>
                                    <Form.Control
                                        style={input1}
                                        className=" shadow-none rounded-0 input"
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        value={subject}
                                        ref={subjectRef}
                                        onChange={(e) => setSubject(e.target.value)}
                                        onBlur={subjectCheck}
                                    />
                                    {subjectError ? (
                                        <div className="text-danger">{subjectError}</div>
                                    ) : null}
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center mt-5">
                                <Col md={10}>
                                    <Form.Control
                                        className="shadow-none rounded-0"
                                        as="textarea"
                                        style={input2}
                                        placeholder="Message"
                                        name="message"
                                        value={message}
                                        ref={messageRef}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onBlur={messageCheck}
                                    />
                                    {messageError ? (
                                        <div className="text-danger">{messageError}</div>
                                    ) : null}
                                </Col>
                            </Row>
                            <div className="dropdown-divider"></div>
                            <Row className="mt-3">
                                <Col className="text-end" md={10}>
                                    <input
                                        disabled={data}
                                        type="submit"
                                        className="btn w-25 btn-success rounded-0 p-2"
                                        value="Send"
                                    />
                                </Col>
                            </Row>
                        </form>

                        <Row className="mt-3">{result ? <Result /> : null}</Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default ContactScreen;