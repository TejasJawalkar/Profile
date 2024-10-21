import React, { useEffect, useMemo, useState } from "react";
import { Container } from "reactstrap";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import styles from "./Styles/Home.module.css";
import classNames from "classnames";
import resumepdf from "./images/Tejas_Jawalkar_Resume_2024.pdf";
import images from "./common/exports"

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
      <Container fluid className="text-light mt-4 ">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            style={{
              zIndex: 1, // Make sure this is below the content
            }}
          />
        )}

        <div className={classNames(styles.container)}>
          <div id="detailscontainer" className={styles.detailscontainer}>
            <div className="">
              <p
                className={classNames(
                  "animate__animated",
                  "animate__slideInUp",
                  styles.ch1
                )}
              >
                Tejas S. Jawalkar
              </p>
              <p
                className={classNames(
                  "animate__animated",
                  "animate__slideInUp",
                  styles.ch2
                )}
              >
                I am{" "}
                <u style={{ textDecorationColor: "#4988fd" }}>
                  Dot Net Full Stack
                </u>{" "}
                Developer
              </p>
              <p
                className={classNames(
                  "animate__animated",
                  "animate__slideInUp",
                  styles.ch3
                )}
              >
                over 2+ Years of Experience...
              </p>
            </div>

            <div
              className={classNames(
                "animate__animated",
                "animate__slideInUp",
                styles.iconcontainer1
              )}
            >
              <a
                href="https://www.linkedin.com/in/tejas-jawalkar-b4b1a0180/"
                target="_blank"
                className={styles.icon}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/TejasJawalkar?tab=repositories"
                target="_blank"
                className={styles.icon}
              >
                <FaGithub />
              </a>
              <a
                className={styles.icon}
                href="https://bitbucket.org/assignmentandstudy/workspace/overview/"
                target="_blank"
              >
                <FaBitbucket />
              </a>
            </div>

            <div>
              <a
                href={resumepdf}
                target="_blank"
                className={classNames(
                  "animate__animated",
                  "animate__slideInUp",
                  styles.resumebtn
                )}
              >
              Resume
                <img src={images.open} alt="Redirect to Resume"/>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
