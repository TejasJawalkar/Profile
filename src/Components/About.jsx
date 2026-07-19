import { useEffect, useState } from "react";
import styles from "./Styles/About.module.css";
import classNames from "classnames";
import { Col, Container, Row } from "reactstrap";
import images from "./json/exports";
import {
  Educations,
  hobbies,
  SkillsSet,
  interested,
  certifications,
  sumarry,
} from "./json/aboutsection.js";

export const About = () => {
  const [InterestedData, SetInterestedData] = useState([]);
  const [EducationData, SetEducationData] = useState([]);
  const [CertificationsData, SetCertificationsData] = useState([]);
  const [HobbiesData, SetHobbiesData] = useState([]);
  const [SkillData, SetSkillData] = useState([]);
  const [SumarryData, SetSumarryData] = useState("");

  let [Age, setAge] = useState();
  let [cyear, setCYear] = useState(0);
  let dob = "12/05/1998";

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setCYear(currentYear);

    const [day, month, year] = dob.split("/").map(Number);
    const birthYear = year;

    setAge(currentYear - birthYear);
    SetInterestedData(interested);
    SetCertificationsData(certifications);
    SetHobbiesData(hobbies);
    SetSkillData(SkillsSet);
    SetSumarryData(sumarry);
    SetEducationData(Educations);
  }, [
    dob,
    InterestedData,
    CertificationsData,
    SetHobbiesData,
    SetSkillData,
    SetSumarryData,
    SetEducationData,
  ]);

  return (
    <>
      <Container className={classNames("p-2 pb-2 text-start")}>
        <div className={styles.maincontainer}>
          <section className={`${styles.section} ${styles.heroSection}`}>
            <div className={styles.imagewrapper}>
              <img
                src={images.ppimage}
                alt="Profile"
                className={styles.ppimage}
              />
            </div>

            <div className={styles.heroContent}>
              <h3 className={styles.title}>
                Software Engineer | ASP.NET Full-Stack Developer | Full-Stack
                Developer
              </h3>

              <p className={styles.description}>{SumarryData}</p>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.heading}>Personal Details</h2>
            <div className={styles.personalcontainer}>
              <div className={styles.personalCard}>
                <Row>
                  <Col sm={6}>
                    {" "}
                    <img src={images.logo18} alt="Arrow" />
                    &nbsp; Email: tejassj1998@gmail.com
                  </Col>

                  <Col sm={6}>
                    <img src={images.logo18} alt="Arrow" />
                    &nbsp; Country: India
                  </Col>
                </Row>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.heading}>Educational Details</h2>
            <div className={styles.educationContainer}>
              {EducationData.map((education) => (
                <div className={styles.educationCard} key={education.id}>
                  <h4 className={styles.degree}>
                    {education.Degree}
                    <span className={styles.duration}>
                      ({education.From} - {education.To})
                    </span>
                  </h4>

                  <p className={styles.university}>{education.University}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.heading}>Skills</h2>
            <Row>
              {SkillData.map((skills) => (
                <div className="col-md-6 col-sm-12" key={skills.id}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span>{skills.name}</span>
                      <span>{skills.percentage}%</span>
                    </div>
                    <div className="progress">
                      <div
                        className={classNames("progress-bar")}
                        style={{
                          width: `${skills.percentage}%`,
                          backgroundColor: "#4988fd",
                        }}
                        role="progressbar"
                        aria-valuenow={skills.ariavaluenow}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </section>
          <section className={styles.section}>
            <h2 className={styles.heading}>Hobbies</h2>
            <div className="row">
              {HobbiesData.map((h) => (
                <div className="col-md-3 col-sm-6" key={h.id}>
                  <div className={styles.hobbyCard}>
                    <h5>{h.hobbiename}</h5>
                    <img src={h.image} />
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.heading}>Certifications</h2>
            <div className={styles.certifiacates}>
              {CertificationsData.map((cert) => (
                <div key={cert.id}>
                  <a href={cert.link} target="_blank" rel="noreferrer">
                    {cert.title}
                    <img src={images.open} alt="Redirect" />
                  </a>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.heading}>Interested In</h2>
            <div className="row g-2">
              <Row className="g-2">
                {InterestedData.map((item) => (
                  <Col lg={3} md={4} sm={6} xs={12} key={item.id}>
                    <div className={styles.interesticon}>
                      <img src={images[item.logo]} alt={item.alt} />
                      <span>{item.title}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};
