import classNames from "classnames";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Styles from "./Styles/Contact.module.css";
import images from "./common/exports";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [subjectError, setSubjectError] = useState();
  const [messageError, setMessageError] = useState();
  const [data, setData] = useState(true);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const subjectRef = useRef();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const form = useRef();

  const nameCheck = (e) => {
    if (!nameRef.current.value) {
      setNameError("Enter Full Name");
      setData(true);
    } else {
      setNameError();
      setData(false);
    }
  };
  const emailCheck = (e) => {
    if (!emailRef.current.value) {
      setEmailError("Enter Email");
      setData(true);
    } else if (!emailPattern.test(emailRef.current.value)) {
      setEmailError("Enter Valid Email");
      setData(true);
    } else {
      setEmailError();
      setData(false);
    }
  };
  const subjectCheck = (e) => {
    if (!subjectRef.current.value) {
      setSubjectError("Enter Subject");
      setData(true);
    } else {
      setSubjectError();
      setData(false);
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
        form.current,
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
    Swal.fire({
      title: `Hello ${name}`,
      html: "<html><body><p>Thank you for reaching out, I will get back to you shortly with my thoughts or any further questions.</p></br><p>Thank you again, and I look forward to staying in touch.</p></body></html>",
      icon: "success",
      customClass: {
        popup: "swal2-popup",
      },
    });
    setData(true);
    e.target.reset();
  };
  return (
    <>
      <div className={classNames(Styles.maincontainer)}>
        <Container
          className={classNames(
            "p-2",
            "text-start",
            "animate__animated",
            "animate__bounce"
          )}
        >
          <div className={classNames(Styles.heading)}>Contact Me</div>
          <div className="break"></div>
          <div
            className={classNames(
              Styles.addresscontainer,
              "animate__animated",
              "animate__bounce"
            )}
          >
            <Row>
              <Col sm={6} className="p-2">
                <div className={classNames(Styles.dContainer)}>
                  <div className={classNames(Styles.c1)}>
                    <img src={images.logo17} alt="Address" />
                    <i>Address</i>
                    <div className={classNames(Styles.c2)}>
                      <p>
                        Home Town:&nbsp;&nbsp;70 Foot Road, Solapur, 413006.
                      </p>
                      <p>
                        Current Location:&nbsp;&nbsp;Kale Padal, Hadapsar, Pune,
                        411028.
                      </p>
                      <p>
                        (+91)&nbsp;&nbsp;917-280-4246&nbsp;&nbsp;(Call /
                        What's&nbsp; App)
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={6} className="p-2">
                <div className={classNames(Styles.dContainer)}>
                  <div className={classNames(Styles.c1)}>
                    <img src={images.logo19} alt="Social Media" />
                    <i>Social Media</i>
                    <div className={classNames(Styles.c2)}>
                      <div className={classNames(Styles.iconcontainer)}>
                        <a
                          href="https://www.linkedin.com/in/tejas-jawalkar-b4b1a0180/"
                          target="_blank"
                          className={Styles.icon}
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href="https://github.com/TejasJawalkar?tab=repositories"
                          target="_blank"
                          className={Styles.icon}
                        >
                          <FaGithub />
                        </a>
                        <a
                          className={Styles.icon}
                          href="https://bitbucket.org/assignmentandstudy/workspace/overview/"
                          target="_blank"
                        >
                          <FaBitbucket />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <div className={classNames(Styles.eContainer)}>
                  <div className={classNames(Styles.c3)}>
                    <img src={images.logo20} alt="Connect Me" />

                    <i>Connect Me </i>
                  </div>
                  <div className={classNames(Styles.c4)}>
                    <Container fluid>
                      <Card
                        style={{ backgroundColor: "transparent" }}
                        className="shadow-none border-1 mt-2"
                      >
                        <Card.Body className="border-0">
                          <form ref={form} onSubmit={sendEmail}>
                            <Row className="d-flex justify-content-center">
                              <Col md={5} className="mt-1">
                                <Form.Control
                                  className="shadow-none rounded-0 input"
                                  placeholder="Sender Full Name"
                                  type="text"
                                  name="name"
                                  ref={nameRef}
                                  onChange={(e) => setName(e.target.value)}
                                  onBlur={nameCheck}
                                />
                                {nameError ? (
                                  <div className="text-danger">{nameError}</div>
                                ) : null}
                              </Col>
                              <Col md={5} className="mt-1">
                                <Form.Control
                                  className=" shadow-none rounded-0 input"
                                  placeholder="Sender Email"
                                  type="email"
                                  name="email"
                                  ref={emailRef}
                                  onChange={(e) => setEmail(e.target.value)}
                                  onBlur={emailCheck}
                                />
                                {emailError ? (
                                  <div className="text-danger">
                                    {emailError}
                                  </div>
                                ) : null}
                              </Col>
                            </Row>
                            <Row className="d-flex justify-content-center mt-2">
                              <Col md={10}>
                                <Form.Control
                                  className=" shadow-none rounded-0 input"
                                  placeholder="Subject"
                                  type="text"
                                  name="subject"
                                  ref={subjectRef}
                                  onChange={(e) => setSubject(e.target.value)}
                                  onBlur={subjectCheck}
                                />
                                {subjectError ? (
                                  <div className="text-danger">
                                    {subjectError}
                                  </div>
                                ) : null}
                              </Col>
                            </Row>
                            <Row className="d-flex justify-content-center mt-2">
                              <Col md={10}>
                                <Form.Control
                                  className="shadow-none rounded-0"
                                  as="textarea"
                                  placeholder="Message"
                                  name="message"
                                  ref={messageRef}
                                  onChange={(e) => setMessage(e.target.value)}
                                  onBlur={messageCheck}
                                />
                                {messageError ? (
                                  <div className="text-danger">
                                    {messageError}
                                  </div>
                                ) : null}
                              </Col>
                            </Row>
                            <div className="dropdown-divider"></div>
                            <Row className="mt-4">
                              <Col className="text-end" md={10}>
                                <input
                                  type="submit"
                                  disabled={data}
                                  className={classNames(
                                    Styles.formbtn,
                                    "w-25",
                                    "btn",
                                    "btn-outline-info",
                                    "rounded-0 p-2"
                                  )}
                                  value="Send"
                                />
                              </Col>
                            </Row>
                          </form>
                        </Card.Body>
                      </Card>
                    </Container>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};
