import classNames from "classnames";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Styles from "./Styles/Contact.module.css";
import images from "./json/exports";
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
    <div className={Styles.maincontainer}>
      <Container className="p-3">
        <div className={Styles.heading}>Contact Me</div>

        {/* ================= Address & Social Media Section ================= */}
        <Row className="mt-4">
          {/* ADDRESS CARD */}
          <Col md={6} className="mt-3">
            <div className={Styles.glassCard}>
              <div className="d-flex align-items-center gap-3">
                <img src={images.logo17} alt="Address" height="55" />
                <h5 className="m-0">Address</h5>
              </div>

              <div className="mt-3">
                <p>Home Town: 70 Foot Road, Solapur, 413006.</p>
                <p>Current: Kale Padal, Hadapsar, Pune, 411028.</p>
                <p>(+91) 917-280-4246 (Call/WhatsApp)</p>
              </div>
            </div>
          </Col>

          {/* SOCIAL MEDIA CARD */}
          <Col md={6} className="mt-3">
            <div className={Styles.glassCard}>
              <div className="d-flex align-items-center gap-3">
                <img src={images.logo19} alt="Social" height="55" />
                <h5 className="m-0">Social Media</h5>
              </div>

              <div className="d-flex mt-4 gap-3">
                <a
                  className={`${Styles["icon-round"]} ${Styles["icon-ln"]}`}
                  href="https://www.linkedin.com/in/tejas-jawalkar-b4b1a0180/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>

                <a
                  className={`${Styles["icon-round"]} ${Styles["icon-gh"]}`}
                  href="https://github.com/TejasJawalkar?tab=repositories"
                  target="_blank"
                >
                  <FaGithub />
                </a>

                <a
                  className={`${Styles["icon-round"]} ${Styles["icon-bb"]}`}
                  href="https://bitbucket.org/assignmentandstudy/workspace/overview/"
                  target="_blank"
                >
                  <FaBitbucket />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* ================= CONTACT FORM ================= */}
        <Row className="mt-4">
          <Col md={12}>
            <div className={Styles.glassCard}>
              <div className="d-flex align-items-center gap-3 mb-3">
                <img src={images.logo20} alt="Connect" height="55" />
                <h5 className="m-0">Connect With Me</h5>
              </div>

              <form ref={form} onSubmit={sendEmail}>
                <Row className="mt-3">
                  <Col md={6}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      ref={nameRef}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={nameCheck}
                    />
                    {nameError && (
                      <div className="text-danger">{nameError}</div>
                    )}
                  </Col>

                  <Col md={6}>
                    <input
                      type="email"
                      placeholder="Email"
                      ref={emailRef}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={emailCheck}
                    />
                    {emailError && (
                      <div className="text-danger">{emailError}</div>
                    )}
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <input
                      type="text"
                      placeholder="Subject"
                      ref={subjectRef}
                      onChange={(e) => setSubject(e.target.value)}
                      onBlur={subjectCheck}
                    />
                    {subjectError && (
                      <div className="text-danger">{subjectError}</div>
                    )}
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      ref={messageRef}
                      onChange={(e) => setMessage(e.target.value)}
                      onBlur={messageCheck}
                    ></textarea>
                    {messageError && (
                      <div className="text-danger">{messageError}</div>
                    )}
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col className="text-end">
                    <button
                      className="btn btn-outline-info formbtn"
                      disabled={data}
                      type="submit"
                    >
                      Send
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
