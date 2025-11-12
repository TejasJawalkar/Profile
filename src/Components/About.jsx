import React, { useEffect, useState } from "react";
import styles from "./Styles/About.module.css";
import classNames from "classnames";
import { Col, Container, Row } from "reactstrap";
import images from "./common/exports";

export const About = () => {
  let [Age, setAge] = useState();
  let [cyear, setCYear] = useState(0);
  let dob = "12/05/1998";

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setCYear(currentYear);

    const [day, month, year] = dob.split("/").map(Number);
    const birthYear = year;

    setAge(currentYear - birthYear);
  }, [dob]);
  return (
    <>
      <Container className={classNames("p-2 pb-2 text-start")}>
        <div className={styles.maincontainer}>
          <div
            className={classNames(
              styles.heading,
              styles.title,
              "animate__animated",
              "animate__bounceIn"
            )}
          >
            Know More about Me....
          </div>
          <div className="break"></div>
          <div
            className={classNames(
              styles.imagewrapper,
              "animate__animated",
              "animate__bounceIn"
            )}
          >
            <img
              className={classNames(
                "animate__animated",
                "animate__bounceIn",
                styles.ppimage
              )}
              src={images.ppimage}
              alt="Tejas S. Jawalkar"
            />
          </div>
          <div
            className={classNames(
              "animate__animated",
              "animate__bounceIn",
              styles.content1
            )}
          >
            <Container>
              <p className={classNames(styles.title, "mt-1")}>
                Software Engineer | Full Stack Developer
              </p>
              <p>
                I'm the passionate Full Stack Developer having good knowledge in
                the various web technologies to provide a robust synopsis for
                high level overviews.
              </p>
            </Container>
          </div>
          <div className={classNames("mt-2 mb-2", styles.personalcontainer)}>
            <p className={classNames(styles.heading)}>Personal Details</p>
            <div
              className={classNames(
                "mt-3 mb-3",
                "animate__animated",
                "animate__bounceIn",
                styles.content2
              )}
            >
              <div className={classNames(styles.ptext)}>
                <img src={images.logo18} alt="Arrow" />
                &nbsp; Email: tejassj1998@gmail.com
              </div>
              <div className={classNames(styles.ptext)}>
                <img src={images.logo18} alt="Arrow" />
                &nbsp; Degree : M. C. A.
              </div>
              <div className={classNames(styles.ptext)}>
                <img src={images.logo18} alt="Arrow" />
                &nbsp; Status :{" "}
                <i className={classNames("")} style={{ fontStyle: "normal" }}>
                  Open to Work
                </i>
              </div>
            </div>
            <div
              className={classNames(
                "mt-3 mb-3",
                "animate__animated",
                "animate__bounceIn",
                styles.content2
              )}
            >
              <div className={classNames(styles.ptext)}>
                <img src={images.logo18} alt="Arrow" />
                &nbsp; Date of Birth: {dob}
              </div>
              <div className={classNames(styles.ptext)}>
                <img src={images.logo18} alt="Arrow" />
                &nbsp; Age: {Age}
              </div>
              <div className={classNames(styles.ptext)}>
                <img src={images.logo18} alt="Arrow" />
                &nbsp; Country: India
              </div>
            </div>
            <div className="">
              <p
                className={classNames(
                  styles.content3,
                  "animate__animated",
                  "animate__bounceIn"
                )}
              >
                Over 3 years of full-time experience in Web Application
                Development, involved in all stages of the software development
                lifecycle for dynamic web projects. Skilled in C#, JavaScript,
                C, C++, and JSON, with a strong foundation in Object-Oriented
                Design, Data Structures, and Algorithms. Proficient in Crystal
                Reports for designing and generating business reports.
                Experienced with POCO Generator for efficient entity class
                generation in .NET applications. Worked with DBUM, a
                company-developed tool used for executing and managing database
                scripts.{" "}
              </p>
            </div>
          </div>
          <div className={styles.Expcontainer}></div>
          <div className={classNames("mt-0", styles.skillcontainer)}>
            <div className="break"></div>
            <p className={classNames(styles.heading)}>Skills I Have</p>
            <Container>
              <Row>
                <Col sm={6}>
                  <div className={classNames(styles.progres)}>
                    <p>
                      Html &nbsp;&nbsp;&nbsp;<span>80%</span>
                    </p>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        role="progressbar"
                        style={{ width: "80%", backgroundColor: "#4988fd" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className={classNames(styles.progres)}>
                    <p>
                      CSS&nbsp;&nbsp;&nbsp;<span>50%</span>
                    </p>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        style={{ width: "50%", backgroundColor: "#4988fd" }}
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className={classNames(styles.progres)}>
                    <p>
                      ReactJs &nbsp;&nbsp;&nbsp;<span>50%</span>
                    </p>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        style={{ width: "50%", backgroundColor: "#4988fd" }}
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className={classNames(styles.progres)}>
                    <p>
                      JavaScript &nbsp;&nbsp;&nbsp;<span>60%</span>
                    </p>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        style={{ width: "60%", backgroundColor: "#4988fd" }}
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className={classNames(styles.progres)}>
                    <p>
                      SQL &nbsp;&nbsp;&nbsp;<span>60%</span>
                    </p>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        style={{ width: "60%", backgroundColor: "#4988fd" }}
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={classNames(styles.progres)}>
                    <p>
                      C-Sharp &nbsp;&nbsp;&nbsp;<span>75%</span>
                    </p>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        style={{ width: "75%", backgroundColor: "#4988fd" }}
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className={classNames(styles.progres)}>
                    <p>
                      Dot Net / Dot Net Core &nbsp;&nbsp;&nbsp;<span>75%</span>
                    </p>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        style={{ width: "75%", backgroundColor: "#4988fd" }}
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className={classNames(styles.progres)}>
                    <p>
                      Node.Js &nbsp;&nbsp;&nbsp;<span>50%</span>
                    </p>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        style={{ width: "50%", backgroundColor: "#4988fd" }}
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className={classNames(styles.progres)}>
                    <p>
                      ExpressJs &nbsp;&nbsp;&nbsp;<span>60%</span>
                    </p>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        style={{ width: "60%", backgroundColor: "#4988fd" }}
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className={classNames(styles.progres)}>
                    <p>
                      No-SQL &nbsp;&nbsp;&nbsp;<span>40%</span>
                    </p>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        style={{ width: "40%", backgroundColor: "#4988fd" }}
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={classNames(styles.progres)}>
                    <p>
                      SSRS (Reporting Tools) &nbsp;&nbsp;&nbsp;<span>50%</span>
                    </p>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        style={{ width: "50%", backgroundColor: "#4988fd" }}
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className={classNames(styles.hobbiescontainer)}>
            <div className="break"></div>
            <p
              className={classNames(styles.heading)}
              style={{ fontSize: "15px" }}
            >
              Hobbies
            </p>
            <Row className="text-center">
              <Col sm={3}>
                <div>
                  <p>Outdoor Games</p>
                  <img src={images.image1} alt="Sports" />
                </div>
              </Col>
              <Col sm={3}>
                <div>
                  <p>Learning</p>
                  <img src={images.image2} alt="Sports" />
                </div>
              </Col>
              <Col sm={3}>
                <div>
                  <p>Play PC / Mobile Games</p>
                  <img src={images.image3} alt="Sports" />
                </div>
              </Col>
              <Col sm={3}>
                <div>
                  <p>Watching Movies</p>
                  <img src={images.image4} alt="Sports" />
                </div>
              </Col>
            </Row>
          </div>
          <div className={classNames(styles.cerficationcontainer)}>
            <div className="break"></div>
            <p className={classNames(styles.heading)}>Cerfications I have</p>
            <Container
              className={classNames("text-start", styles.certifiacates)}
            >
              <div>
                <a
                  href="https://drive.google.com/uc?export=download&amp;id=1Ef_PxcseyAHjR9lQuN7QfxxNneOSjmKr"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Git Essential Training (Linkedin)
                  <img src={images.open} alt="Redirect" />
                </a>
              </div>
              <div>
                <a
                  href="https://drive.google.com/uc?export=download&amp;id=1__8i1EvCZFx_Coe3GiblnwJrU-1WV04A"
                  target="_blank"
                  rel="noreferrer"
                >
                  Building Modern Projects with React (Linkedin)
                  <img src={images.open} alt="Redirect" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/learning/certificates/1c8db6198b8a8d90ead1527aefea77e393a10f42ca3f40bcef4986fa57b707d2"
                  target="_blank"
                  rel="noreferrer"
                >
                  ASP.NET Core MVC (Linkedin)
                  <img src={images.open} alt="Redirect" />
                </a>
              </div>
            </Container>
          </div>
          <div className={classNames(styles.interestcontainer)}>
            <div className="break"></div>
            <p className={classNames(styles.heading)}>Interested In</p>
            <Row className="text-center">
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo1} alt="HTML" />
                  <i>HTML</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo2} alt="CSS" />
                  <i>CSS</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo3} alt="JavaScript" />
                  <i>JavaScript</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo4} alt="Bootstrap" />
                  <i>Bootstrap</i>
                </div>
              </Col>
            </Row>

            <Row className="text-center">
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo5} alt="NPM" />
                  <i>NPM</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo6} alt="ReactJS" />
                  <i>ReactJS</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo7} alt="NodeJS" />
                  <i>NodeJS</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo8} alt="React-Bootstrap" />
                  <i>React-Bootstrap</i>
                </div>
              </Col>
            </Row>

            <Row className="text-center">
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo9} alt="GitHub" />
                  <i>GitHub</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img
                    src={images.logo10}
                    style={{ border: "1px solid #c0c0c0" }}
                    alt="ExpressJS"
                  />
                  <i>ExpressJS</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo11} alt="Angular" />
                  <i>Angular</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo12} alt="Vite" />
                  <i>Vite</i>
                </div>
              </Col>
            </Row>

            <Row className="text-center">
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo13} alt="Net & .Net Core" />
                  <i>.Net & .Net Core</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo14} alt="SQL & NoSQL" />
                  <i>SQL & NoSQL</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={classNames(styles.interesticon)}>
                  <img src={images.logo15} alt="DSA" />
                  <i>Data Structure</i>
                </div>
              </Col>
              <Col sm={3}>
                <div className={styles.interesticon}>
                  <img src={images.logo16} alt="Crystal Report" />
                  <i>Crystal Report</i>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};
