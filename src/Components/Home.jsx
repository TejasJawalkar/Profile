import React, { useEffect, useMemo, useState } from "react";
import { Container } from "reactstrap";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import styles from "./Styles/Home.module.css";
import classNames from "classnames";
import images from "./json/exports";
import linksConstants from "./constants/links_constants";
import particleOptions from "./constants/particle_constants";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  //#region
  const [init, setInit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};
  //#endregion

  return (
    <>
      <Container fluid className="text-light mt-4 position-relative">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particleOptions}
            style={{ zIndex: 0, position: "absolute", top: 0, left: 0 }}
          />
        )}

        <section className={classNames(styles.container)}>
          <div id="detailscontainer" className={styles.detailscontainer}>
            {/* Heading Section */}
            <h1
              className={classNames(
                "animate__animated",
                "animate__fadeInDown",
                styles.ch1,
              )}
            >
              <span
                style={{
                  background: "linear-gradient(90deg, #007bff, #00d4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Tejas S. Jawalkar
              </span>
            </h1>

            <h2
              className={classNames(
                "animate__animated",
                "animate__fadeInUp",
                styles.ch2,
              )}
            >
              <u style={{ textDecorationColor: "#4988fd" }}>
                <b>.Net Full-Stack Developer</b>
              </u>
            </h2>

            <p
              className={classNames(
                "animate__animated",
                "animate__fadeInUp",
                styles.ch3,
              )}
            >
              With over <b>3+</b> years of experience building scalable
              enterprise applications using
              <span style={{ fontWeight: "bold" }}>
                C#, ASP.NET Core, Angular, SQL Server, REST APIs, and Layered
                Architecture.
              </span>
            </p>

            {/* Icons Section */}
            <div
              className={classNames(
                "animate__animated",
                "animate__fadeInUp",
                "d-flex gap-4 mt-4",
                styles.iconcontainer1,
              )}
            >
              <a
                href={linksConstants.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={linksConstants.GIT_HUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={linksConstants.BIT_BUCKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
                aria-label="Bitbucket"
              >
                <FaBitbucket />
              </a>
            </div>

            {/* Buttons Section */}
            <div className={classNames(styles.buttonContainer)}>
              <a
                href={linksConstants.RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(styles.resumebtn, "btn")}
              >
                Resume <img src={images.open} alt="Redirect to Resume" />
              </a>

              <button
                className={classNames(styles.contactbtn, "btn btn-primary")}
                onClick={() => navigate("/Contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};
