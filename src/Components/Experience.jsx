import React, { useEffect, useState } from "react";
import styles from "./Styles/Experience.module.css";
import { Col, Container, Row } from "reactstrap";
import experiences from "./json/Experience.js";

export const Experience = () => {
  const [ExperienceData, setExperienceData] = useState([]);

  useEffect(() => {
    setExperienceData(experiences);
  }, []);

  return (
    <>
      <Container className={styles.maincontainer}>
        <h2 className={styles.heading}>Experiences</h2>
        <div className={styles.experienceWrapper}>
          {ExperienceData.sort((a, b) => a.id - b.id).map((exp) => (
            <div key={exp.id} className={styles.experienceCard}>
              <Row>
                <Col md={10}>
                  <h2 className={styles.position}>{exp.position}</h2>
                </Col>
                <Col md={2}>{}</Col>
              </Row>

              <h2 className={styles.company}>
                {exp.company} {" - ("} {exp.duration} {")"}
              </h2>
              <ul className={styles.description}>
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
