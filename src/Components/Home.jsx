import React, { useEffect, useMemo, useState } from "react";
import { Container } from "reactstrap";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import styles from "./Styles/Home.module.css";
import classNames from "classnames";
import resumepdf from "./images/Tejas_Jawalkar_Resume.pdf";
import images from "./common/exports";

export const Home = () => {
  //#region
  const [init, setInit] = useState(false);
  const downloadResume = () => {
    console.log("download first");
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 100,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 24,
          },
          repulse: {
            distance: 500,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  //#endregion

  return (
    <>
      <Container fluid className="text-light mt-4 position-relative">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            style={{ zIndex: 0, position: "absolute", top: 0, left: 0 }}
          />
        )}

        <section
          className={classNames(
            styles.container,
            "d-flex align-items-center justify-content-center min-vh-100"
          )}
        >
          <div id="detailscontainer" className={styles.detailscontainer}>
            {/* Heading Section */}
            <h1
              className={classNames(
                "animate__animated",
                "animate__fadeInDown",
                styles.ch1
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
                styles.ch2
              )}
            >
              I’m a{" "}
              <u style={{ textDecorationColor: "#4988fd" }}>
                Software Engineer
              </u>
            </h2>

            <p
              className={classNames(
                "animate__animated",
                "animate__fadeInUp",
                styles.ch3
              )}
            >
              With over <strong>3+ years</strong> of experience building
              scalable web applications
            </p>

            {/* Icons Section */}
            <div
              className={classNames(
                "animate__animated",
                "animate__fadeInUp",
                "d-flex gap-4 mt-4",
                styles.iconcontainer1
              )}
            >
              <a
                href="https://www.linkedin.com/in/tejas-jawalkar-b4b1a0180/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/TejasJawalkar?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://bitbucket.org/assignmentandstudy/workspace/overview/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
                aria-label="Bitbucket"
              >
                <FaBitbucket />
              </a>
            </div>

            {/* Buttons Section */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
              <a
                href={resumepdf}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(styles.resumebtn, "btn")}
              >
                Resume <img src={images.open} alt="Redirect to Resume" />
              </a>

              <a
                href="#contact"
                className={classNames(styles.contactbtn, "btn btn-primary")}
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};
