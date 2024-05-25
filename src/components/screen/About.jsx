import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import image1 from "../../Image/stump.png";
import image2 from "../../Image/learning.png";
import image3 from "../../Image/gamepad.png";
import image4 from "../../Image/video.png";


const AboutScreen = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        setCount(currentYear - 1998 - 1)
    }, [count]);

    return (
        <>
            <Row>
                <Col md={12}>
                    <Container className="mb-1 p-2 animate__animated animate__backInUp animate__duration-2s example">
                        <div className="shadow-none">
                            <h4 className="heading w-100 text-start">Regarding Me</h4>
                            <Row className="mt-5 p-2 mb-3 shadow-none d-flex justify-content-center">
                                <Row>
                                    <h4 className="title text-start">Personal Details</h4>
                                </Row>

                                <Row className="d-flex justify-content-end">
                                    <Col md={5} className="p-1 text-start">
                                        <p className="text2" style={{ display: "inline-block" }}>
                                            Full Name:{" "}
                                            <span className="text1">Tejas Sanjay Jawalkar</span>
                                        </p>
                                    </Col>
                                    <Col md={5} className=" p-1 text-start">
                                        <p className="text2" style={{ display: "inline-block" }}>
                                            Age: <span className="text1">{count}</span>
                                        </p>
                                    </Col>
                                    <Col md={5} className="p-1 text-start">
                                        <p className="text2" style={{ display: "inline-block" }}>
                                            Date of Birth: <span className="text1">12-05-1998</span>
                                        </p>
                                    </Col>
                                    <Col md={5} className=" p-1 text-start">
                                        <p className="text2" style={{ display: "inline-block" }}>
                                            Degree: <span className="text1">Master (Computer Application)</span>
                                        </p>
                                    </Col>
                                    <Col md={5} className="p-1 text-start">
                                        <p className="text2" style={{ display: "inline-block" }}>
                                            Email :{" "}
                                            <span className="text1">tejassj1998@gmail.com</span>
                                        </p>
                                    </Col>
                                    <Col md={5} className=" p-1 text-start">
                                        <p className="text2" style={{ display: "inline-block" }}>
                                            Phone :{" "}
                                            <span className="text1">(+91)-(9172)-804-246</span>
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={5} md={12} className="p-1 text-center">
                                        <p className="text2" style={{ display: "inline-block" }}>
                                            City :{" "}
                                            <span className="text1">Solapur, Maharashtra, INDIA</span>
                                        </p>
                                    </Col>
                                </Row>
                                <br />
                                <br />
                                <br />
                                <br />
                                <Row>
                                    <Col md={12} className="text-start ">
                                        <p className="text2">
                                            <a href="#p1" class="blink">Hello Reader,</a><br /><br />
                                            Objective of Career : <br />
                                            <span className="text1 text-capitalize">
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experienced <b className="text-warning p-1">ASP.NET developer</b> with over <b className="text-warning p-1">2+ years</b> of Practical
                                                Expertise in crafting robust web applications. Eagerly pursuing a
                                                challenging role within a dynamic engineering environment and esteemed
                                                organization, aiming to utilize my technical prowess and managerial
                                                acumen to drive organizational advancement. Committed to remaining
                                                abreast of emerging trends in the ever-evolving IT landscape.
                                            </span>
                                        </p>
                                        <p id='p1' className="p-2 text-light text-start" style={{
                                            lineHeight: "2",
                                            wordSpacing: "4px",
                                            fontSize: "20px",
                                        }}>

                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dedicated software engineer with over <b className="text-warning p-1">2+ years</b> of experience in
                                            conceptualizing, developing, and deploying tailored software solutions to
                                            address diverse business needs. Proficient in an array of programming
                                            languages, including <b className="text-warning p-1">C#, C, C++, and JavaScript, with a solid grounding in
                                                data structures and object-oriented design principles</b>. Skilled in full-stack
                                            development, adeptly navigating both frontend technologies like Plain <b className="text-warning p-1">.Net, ReactJS
                                                and Angular (Version 15 and 17)</b>, and backend frameworks such as
                                            <b className="text-warning p-1">Node.js, ASP.NET (Version 4.5.1 and 6), and Express.js</b>. Well-versed in
                                            database management, including <b className="text-warning p-1"> NO-SQL, PL-SQL, SQL, and MongoDB</b>.
                                            A collaborative <b className="text-warning p-1"> team player</b>, excelling in cross-functional environments to
                                            deliver scalable solutions on time and within budget. Committed to
                                            continuous skill enhancement and staying abreast of emerging technologies
                                            and industry best practices to drive innovation and excellence in software
                                            engineering. And I am flexible enough to work as <b className="text-warning p-1">MERN Stack </b>or as a <b className="text-warning p-1">.Net Full Stack Developer</b>.
                                        </p>
                                    </Col>
                                </Row>
                            </Row>
                            <div className="border-bottom"></div>
                            <Row className="mt-5 p-2 mb-3 shadow-none">
                                <h4 className="title text-start">Education</h4>
                                <Col md={6} className="mt-2 p-2 text-start">
                                    <div>
                                        <p>
                                            <span
                                                style={{
                                                    position: "relative",
                                                    marginTop: "2px",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                <i class="fas fa-circle text-success"></i>
                                            </span>
                                            <span
                                                className="text"
                                                style={{
                                                    position: "relative",
                                                    fontSize: "24px",
                                                    marginLeft: "30px",
                                                    marginTop: "9px",
                                                }}
                                            >
                                                Batchelor of Computer Application
                                            </span>
                                        </p>
                                        <p className="text1">
                                            <ul>
                                                <li>
                                                    <span>Year : 2016 - 2019</span>
                                                </li>
                                            </ul>
                                        </p>
                                        <p
                                            className="text1"
                                            style={{ lineHeight: " 1.2", wordSpacing: "4px" }}
                                        >
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <span className="shadow-lg w-100 text-end">
                                                        Solapur University
                                                    </span>
                                                </li>
                                            </ul>
                                        </p>
                                        <p
                                            className="text1"
                                            style={{ lineHeight: " 1.9", wordSpacing: "4px" }}
                                        >
                                            <ul>
                                                <li style={{ textDecoration: "none" }}>
                                                    Completed my BCA at{" "}
                                                    <b className="text-warning p-1">
                                                        Hirachand Nemchand College of Commerce
                                                    </b> overall GPA{" "}<b className="text-warning p-1">7+</b>.
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6} className="mt-2 p-2 text-start">
                                    <div>
                                        <p>
                                            <span
                                                style={{
                                                    position: "relative",
                                                    marginTop: "2px",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                <i class="fas fa-circle text-success"></i>
                                            </span>
                                            <span
                                                className="text"
                                                style={{
                                                    position: "relative",
                                                    fontSize: "24px",
                                                    marginLeft: "30px",
                                                    marginTop: "9px",
                                                }}
                                            >
                                                Master of Computer Application
                                            </span>
                                        </p>
                                        <p className="text1">
                                            <ul>
                                                <li>
                                                    <span>Year : 2019 - 2022</span>
                                                </li>
                                            </ul>
                                        </p>
                                        <p
                                            className="text1"
                                            style={{ lineHeight: " 1.2", wordSpacing: "4px" }}
                                        >
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <span className="shadow-lg w-100 text-end">
                                                        Punyashlok Ahilyadevi Holkar University Solapur
                                                    </span>
                                                </li>
                                            </ul>
                                        </p>
                                        <p
                                            className="text1"
                                            style={{ lineHeight: " 1.9", wordSpacing: "4px" }}
                                        >
                                            <ul>
                                                <li style={{ textDecoration: "none" }}>
                                                    Completed my MCA at{" "}
                                                    <b className="text-warning p-1">
                                                        Punyashlok Ahilyadevi Holkar University Solapur
                                                    </b> overall GPA{" "}<b className="text-warning p-1">9+</b>.
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <div className="border-bottom"></div>
                            <Row className="d-flex justify-content-center mt-3 shadow-none 100">
                                <h5 className="title text-start">Experience</h5>
                                <Col md={6} className="mt-2 p-2 text-start">
                                    <div>
                                        <p>
                                            <span
                                                style={{
                                                    position: "relative",
                                                    marginTop: "0px",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                <i class="fas fa-circle text-success"></i>
                                            </span>
                                            <span
                                                className="text"
                                                style={{
                                                    position: "relative",
                                                    fontSize: "24px",
                                                    marginLeft: "30px",
                                                    marginTop: "9px",
                                                }}
                                            >
                                                Intern Software Engineer
                                            </span>
                                        </p>
                                        <p className="text1 mb-3">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span> Jan 2022 - July 2022 </span>
                                        </p>
                                        <p
                                            className="text1"
                                            style={{ lineHeight: " 1", wordSpacing: "4px" }}
                                        >{" "}
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="shadow-lg w-100 text-end">
                                                <a style={{ textDecoration: "none" }} className="text-warning" href="https://www.splashgain.com/" rel="noreferrer" target="_blank" >Splashgain Technology Solutions PVT. LTD.</a>
                                            </span>
                                        </p>
                                        <p className="text1"
                                            style={{ wordSpacing: "4px" }}>
                                            <ul >
                                                <li class="mt-3">Diagnosing and debugging code to ensure smooth functionality.</li>
                                            </ul>
                                            <ul >
                                                <li class="mt-1">Delving into the intricacies of code to comprehend its depth, and
                                                    crafting new, rigorously tested code for various software projects.</li>
                                            </ul>
                                            <ul >
                                                <li class="mt-1">Assessing project requirements and effectively managing client
                                                    needs.</li>
                                            </ul>

                                        </p>

                                    </div>
                                </Col>
                                <Col md={6} className="mt-2 p-2 text-start">
                                    <div>
                                        <p>
                                            <span
                                                style={{
                                                    position: "relative",
                                                    marginTop: "2px",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                <i class="fas fa-circle text-success"></i>
                                            </span>
                                            <span
                                                className="text"
                                                style={{
                                                    position: "relative",
                                                    fontSize: "24px",
                                                    marginLeft: "30px",
                                                    marginTop: "9px",
                                                }}
                                            >
                                                Software Engineer
                                            </span>
                                        </p>
                                        <p className="text1">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Aug 2022 - Present</span>
                                        </p>
                                        <p
                                            className="text1"
                                            style={{ lineHeight: " 3", wordSpacing: "4px" }}
                                        >


                                            {" "}
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="shadow-lg w-100 text-end">
                                                <a style={{ textDecoration: "none" }} className="text-warning" href="https://www.splashgain.com/" rel="noreferrer" target="_blank" >Splashgain Technology Solutions PVT. LTD.</a>
                                            </span>
                                        </p>
                                        <p
                                            className="text1"
                                            style={{ lineHeight: " 1.9", wordSpacing: "4px" }}
                                        >

                                            <ul >
                                                <li class="mt-1">Played a key role in sprint planning, strategically prioritizing
                                                    backlogs to address emerging demands.</li></ul>
                                            <ul >
                                                <li class="mt-1">Crafted and implemented new, thoroughly tested code across
                                                    diverse software projects.</li></ul>
                                            <ul >
                                                <li class="mt-1">Assessed project requirements, identified challenges, and proposed
                                                    effective alternatives based on thorough research and data analysis.</li></ul>
                                            <ul >
                                                <li class="mt-1">Provided support for software code review, system integration, and
                                                    validation, ensuring alignment with company standards and
                                                    regulatory requirements.</li></ul>

                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <div className="border-bottom"></div>
                            <Row className="d-flex justify-content-center mt-3 shadow-none 100">
                                <h5 className="title text-start">Certifications</h5>
                                <Col md={2} className="w-75 mt-3 mb-2 p-1">

                                </Col>
                                <Col md={8} className="w-75 mt-3 mb-2 p-1">
                                    <h5 className="w-100" style={{ display: "block" }}>
                                        <ul>
                                            <li className="mb-4">
                                                <a href="https://drive.google.com/uc?export=download&id=1Ef_PxcseyAHjR9lQuN7QfxxNneOSjmKr" target="_blank" style={{ textDecoration: "none" }} rel="noreferrer"> Git Essential Training</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="https://drive.google.com/uc?export=download&id=1__8i1EvCZFx_Coe3GiblnwJrU-1WV04A" target="_blank" style={{ textDecoration: "none" }} rel="noreferrer">
                                                    Building Modern Projects with React</a>
                                            </li>
                                        </ul>
                                    </h5>
                                </Col>
                                <Col md={2} className="w-75 mt-3 mb-2 p-1">

                                </Col>
                            </Row>
                            <div className="border-bottom"></div>
                            <Row className="d-flex justify-content-center mt-3 shadow-none 100">
                                <h5 className="title text-start">Skill I Have</h5>
                                <Col md={4} className="w-75 mt-3 mb-2 p-1">
                                    <h5 className="w-100" style={{ display: "block" }}>
                                        <i
                                            className="text-light text1"
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "Chakra Petch sans-serif",
                                            }}
                                        >
                                            HTML
                                        </i>
                                        <i
                                            className="text-light val"
                                            style={{ float: "right", fontSize: "14px" }}
                                        >
                                            80%
                                        </i>
                                    </h5>
                                    <div
                                        class="progress text-center"
                                        style={{ height: "10px", borderRadius: "0px" }}
                                    >
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style={{ width: "80%", backgroundColor: "#ed5d5d" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </Col>
                                <Col md={5} className="mt-3 w-75 mb-2 p-1">
                                    <h5 className="w-100" style={{ display: "block" }}>
                                        <i
                                            className="text-light text1"
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "Chakra Petch sans-serif",
                                            }}
                                        >
                                            JavaScript
                                        </i>
                                        <i
                                            className="val text-light"
                                            style={{ fontSize: "14px", float: "right" }}
                                        >
                                            70%
                                        </i>
                                    </h5>
                                    <div
                                        class="progress"
                                        style={{ height: "10px", borderRadius: "0px" }}
                                    >
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style={{ width: "70%", backgroundColor: "#ed5d5d" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="d-flex justify-content-center shadow-none">
                                <Col md={5} className="mt-2 mb-2 p-1 w-75">
                                    <h5 className="w-100" style={{ display: "block" }}>
                                        <i
                                            className="text-light text1"
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "Chakra Petch sans-serif",
                                            }}
                                        >
                                            Node.Js
                                        </i>
                                        <i
                                            className="text-light val"
                                            style={{ float: "right", fontSize: "14px" }}
                                        >
                                            50%
                                        </i>
                                    </h5>
                                    <div
                                        class="progress text-center"
                                        style={{ height: "10px", borderRadius: "0px" }}
                                    >
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style={{ width: "50%", backgroundColor: "#ed5d5d" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </Col>
                                <Col md={5} className="mt-2 mb-2 p-1 w-75">
                                    <h5 className="w-100" style={{ display: "block" }}>
                                        <i
                                            className="text-light text1"
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "Chakra Petch sans-serif",
                                            }}
                                        >
                                            CSS
                                        </i>
                                        <i
                                            className="val text-light"
                                            style={{ fontSize: "14px", float: "right" }}
                                        >
                                            60%
                                        </i>
                                    </h5>
                                    <div
                                        class="progress"
                                        style={{ height: "10px", borderRadius: "0px" }}
                                    >
                                        <div
                                            class="progress-bar "
                                            role="progressbar"
                                            style={{ width: "70%", backgroundColor: "#ed5d5d" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center shadow-none">
                                <Col md={5} className="mt-2 mb-2 p-1 w-75">
                                    <h5 className="w-100" style={{ display: "block" }}>
                                        <i
                                            className="text-light text1"
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "Chakra Petch sans-serif",
                                            }}
                                        >
                                            ReactJs
                                        </i>
                                        <i
                                            className="text-light val"
                                            style={{ float: "right", fontSize: "14px" }}
                                        >
                                            75%
                                        </i>
                                    </h5>
                                    <div
                                        class="progress text-center"
                                        style={{ height: "10px", borderRadius: "0px" }}
                                    >
                                        <div
                                            class="progress-bar "
                                            role="progressbar"
                                            style={{ width: "75%", backgroundColor: "#ed5d5d" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </Col>
                                <Col md={5} className="mt-2 mb-2 p-1 w-75">
                                    <h5 className="w-100" style={{ display: "block" }}>
                                        <i
                                            className="text-light text1"
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "Chakra Petch sans-serif",
                                            }}
                                        >
                                            Angular (TypeScript)
                                        </i>
                                        <i
                                            className="text-light val"
                                            style={{ float: "right", fontSize: "14px" }}
                                        >
                                            70%
                                        </i>
                                    </h5>
                                    <div
                                        class="progress text-center"
                                        style={{ height: "10px", borderRadius: "0px" }}
                                    >
                                        <div
                                            class="progress-bar "
                                            role="progressbar"
                                            style={{ width: "70%", backgroundColor: "#ed5d5d" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </Col>
                                <Col md={5} className="mt-2 mb-2 p-1 w-75">
                                    <h5 className="w-100" style={{ display: "block" }}>
                                        <i
                                            className="text-light text1"
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "Chakra Petch sans-serif",
                                            }}
                                        >
                                            ExpressJs
                                        </i>
                                        <i
                                            className="val text-light"
                                            style={{ fontSize: "14px", float: "right" }}
                                        >
                                            50%
                                        </i>
                                    </h5>
                                    <div
                                        class="progress"
                                        style={{ height: "10px", borderRadius: "0px" }}
                                    >
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style={{ width: "50%", backgroundColor: "#ed5d5d" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </Col>
                                <Col md={5} className="mt-2 mb-2 p-1 w-75">
                                    <h5 className="w-100" style={{ display: "block" }}>
                                        <i
                                            className="text-light text1"
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "Chakra Petch sans-serif",
                                            }}
                                        >
                                            SQL Server
                                        </i>
                                        <i
                                            className="val text-light"
                                            style={{ fontSize: "14px", float: "right" }}
                                        >
                                            60%
                                        </i>
                                    </h5>
                                    <div
                                        class="progress"
                                        style={{ height: "10px", borderRadius: "0px" }}
                                    >
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style={{ width: "60%", backgroundColor: "#ed5d5d" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center shadow-none mb-3">
                                <Col md={5} className="mt-2 mb-2 p-1 w-75">
                                    <h5 className="w-100" style={{ display: "block" }}>
                                        <i
                                            className="text-light text1"
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "Chakra Petch sans-serif",
                                            }}
                                        >
                                            ASP.Net (.Net Framework 4.5 and above)
                                        </i>
                                        <i
                                            className="text-light val"
                                            style={{ float: "right", fontSize: "14px" }}
                                        >
                                            70%
                                        </i>
                                    </h5>
                                    <div
                                        class="progress text-center"
                                        style={{ height: "10px", borderRadius: "0px" }}
                                    >
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style={{ width: "70%", backgroundColor: "#ed5d5d" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </Col>
                                <Col md={5} className="mt-2 mb-2 p-1 w-75">
                                    <h5 className="w-100" style={{ display: "block" }}>
                                        <i
                                            className="text-light text1"
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "Chakra Petch sans-serif",
                                            }}
                                        >
                                            Asp.Net/Asp.Net MVC Core & C#
                                        </i>
                                        <i
                                            className="val text-light"
                                            style={{ fontSize: "14px", float: "right" }}
                                        >
                                            75%
                                        </i>
                                    </h5>
                                    <div
                                        className="progress"
                                        style={{ height: "10px", borderRadius: "0px" }}
                                    >
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{ width: "75%", backgroundColor: "#ed5d5d" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="border-bottom"></div>
                            <Row className="d-flex justify-content-center shadow-non mt-3 shadow-none">
                                <h4 className="title text-start">Hobbies</h4>
                                <Col md={3} className="p-2 shadow-none ">
                                    <Card
                                        style={{ background: "transparent" }}
                                        className="border-0"
                                    >
                                        <Card.Body className="text-center ">
                                            <h5 className="text">Play Outdoor Games</h5>
                                            <Card.Img
                                                className="mt-2 border-0 shadow-none"
                                                src={image1}
                                                style={{ height: "100px", width: "100px" }}
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3} className="p-2">
                                    <Card
                                        style={{ background: "transparent" }}
                                        className="border-0"
                                    >
                                        <Card.Body className="text-center">
                                            <h5 className="text">Learn New Things</h5>
                                            <Card.Img
                                                className="mt-2"
                                                src={image2}
                                                style={{ height: "100px", width: "100px" }}
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3} className="p-2 ">
                                    <Card
                                        style={{ background: "transparent" }}
                                        className="border-0"
                                    >
                                        <Card.Body className="text-center border-0">
                                            <h5 className="text">Play Video Games</h5>
                                            <Card.Img
                                                className="mt-2"
                                                src={image3}
                                                style={{ height: "100px", width: "100px" }}
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3} className="p-2 ">
                                    <Card
                                        style={{ background: "transparent" }}
                                        className="border-0"
                                    >
                                        <Card.Body className="text-center border-0">
                                            <h5 className="text">Watching Movies</h5>
                                            <Card.Img
                                                className="mt-2"
                                                src={image4}
                                                style={{ height: "100px", width: "100px" }}
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <div className="border-bottom"></div>

                            <Row className="w-100 mt-3 shadow-none ">
                                <h4 className="title text-start">Interested In</h4>
                                <Col className="mt-2 p-2 text-center icon1">
                                    <i
                                        className=" bx bxl-html5 "
                                        style={{ fontSize: "50px", color: "#ffbb2c" }}
                                    ></i>
                                    <br />
                                    <i style={{ color: "#ffbb2c" }}>HTML</i>
                                </Col>
                                <Col className="mt-2 p-2 text-center icon1">
                                    <i
                                        className=" bx bxl-css3"
                                        style={{ fontSize: "50px", color: "#0857f7" }}
                                    ></i>

                                    <br />
                                    <i style={{ color: "#0857f7" }}>CSS</i>
                                </Col>
                                <Col className="mt-2 p-2 text-center icon1">
                                    <i
                                        class="bx bxl-react"
                                        style={{ fontSize: "50px", color: "#61dafb" }}
                                    ></i>
                                    <br />
                                    <i style={{ color: "#61dafb" }}>ReactJS</i>
                                </Col>
                                <Col className="mt-2 p-2 text-center icon1">
                                    <i
                                        className=" fab fa-js"
                                        style={{ fontSize: "50px", color: "#e80368" }}
                                    ></i>

                                    <br />
                                    <i style={{ color: "#e80368", fontWeight: "500" }}>
                                        javascript
                                    </i>
                                </Col>
                            </Row>
                            <Row className="w-100 mt-3 shadow-none ">
                                <Col className="mt-2 p-2 text-center icon1">
                                    <i
                                        className="bx bxl-bootstrap "
                                        style={{ fontSize: "50px", color: "#7952b3" }}
                                    ></i>

                                    <br />
                                    <i style={{ color: "#7952b3" }}>Bootstrap</i>
                                </Col>
                                <Col className="mt-2 p-2 text-center icon1">
                                    <i
                                        className="bx bxl-nodejs"
                                        style={{ fontSize: "50px", color: "#43853d" }}
                                    ></i>

                                    <br />
                                    <i style={{ color: "#43853d" }}>NodeJS</i>
                                </Col>
                                <Col className="mt-2 p-2 text-center icon1">
                                    <i
                                        className="fab fa-npm"
                                        style={{ fontSize: "50px", color: "#ff5828" }}
                                    ></i>

                                    <br />
                                    <i style={{ color: "#ff5828" }}>NPM</i>
                                </Col>
                                <Col className="mt-3 p-2 text-center icon1">
                                    <i
                                        className="fas fa-server"
                                        style={{ fontSize: "45px", color: "white" }}
                                    ></i>

                                    <br />
                                    <i style={{ color: "white" }}>SQL & MYSQL</i>
                                </Col>
                            </Row>
                            <Row className="w-100 mt-3 shadow-none ">
                                <Col className="mt-3 p-2 text-center icon1">
                                    <i
                                        className="fab fa-envira"
                                        style={{
                                            fontSize: "45px",
                                            color: "#009d96",
                                            border: "green",
                                        }}
                                    ></i>

                                    <br />
                                    <i style={{ color: "#009d96" }}>MongoDB</i>
                                </Col>{" "}
                                <Col className="mt-2 p-2 text-center icon1">
                                    <i
                                        className="bx bxl-angular"
                                        style={{
                                            fontSize: "50px",
                                            color: "#e5a587",
                                        }}
                                    ></i>

                                    <br />
                                    <i style={{ color: "#e5a587" }}>Angular</i>
                                </Col>
                                <Col className="mt-2 p-2 text-center icon1">

                                    <i
                                        className="bx bxl-git"
                                        style={{
                                            fontSize: "50px",
                                            color: "#e5a587",
                                        }}
                                    ></i>

                                    <br />
                                    <i style={{ color: "#e5a587" }}>GitHub</i>
                                </Col>
                                <Col className="mt-2 p-2 text-center icon1">
                                    <i
                                        className="bx bx-code-alt"
                                        style={{
                                            fontSize: "50px",
                                            color: "#e5a587",
                                        }}
                                    ></i>

                                    <br />
                                    <i style={{ color: "#e5a587" }}>C # & ASP.NET/ASP.NET CORE MVC/WEB API </i>
                                </Col>

                            </Row>

                        </div>
                        <div className="border-bottom p-2"></div>
                    </Container>
                </Col>
            </Row >
        </>
    );
};

export default AboutScreen;