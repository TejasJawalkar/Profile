import React, { useState } from "react";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBarsStaggered,
  faBriefcase,
  faHome,
  faInfo,
  faMoon,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";
import { faTools } from "@fortawesome/free-solid-svg-icons/faTools";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const okf = () => {
    toggleSidebar();
  };
  return (
    <>
      <Container fluid className="text-start mt-2">
        <Navbar className={`${styles.navigation} shadow-lg  fixed-top`}>
          <NavbarBrand className={`${styles.brandText}`}>T J</NavbarBrand>
          <Nav className="shadow-lg">
            <NavItem>
              <div className={`${styles.darkmode}`}>
                {/* <button
                  className="btn shadow-none"
                  onClick={colortoggleSidebar}
                >
                  <FontAwesomeIcon
                    icon={faMoon}
                    style={{ color: !isColor ? "white" : "black" }}
                    size="2x"
                  />
                </button> */}
              </div>
            </NavItem>
            <NavItem>
              <div className={styles.navbarToggler} onClick={toggleSidebar}>
                {!isOpen ? (
                  <FontAwesomeIcon icon={faBars} size="2x" />
                ) : (
                  <FontAwesomeIcon icon={faBarsStaggered} size="2x" />
                )}
              </div>
            </NavItem>
          </Nav>
        </Navbar>
      </Container>
      <div className={`${styles.sidebarContainer} mb-4`}>
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
          <Navbar>
            <Nav navbar className="flex-column ">
              <div className={`${styles.linkwrapper}`}>
                <div className={`${styles.navitem}`}>
                  <NavLink className={`${styles.link}`} to="/" onClick={okf}>
                    <FontAwesomeIcon icon={faHome} size="1x" /> Home
                  </NavLink>
                </div>
                <div className={`${styles.navitem}`}>
                  <NavLink
                    className={`${styles.link} `}
                    to="/About"
                    onClick={okf}
                  >
                    <FontAwesomeIcon icon={faInfo} size="1x" /> About
                  </NavLink>
                </div>
                <div className={`${styles.navitem}`}>
                  <NavLink
                    className={`${styles.link}`}
                    to="/Services"
                    onClick={okf}
                  >
                    <FontAwesomeIcon icon={faTools} size="1x" /> Services
                  </NavLink>
                </div>
                <div className={`${styles.navitem}`}>
                  <NavLink
                    className={`${styles.link}`}
                    to="/Experience"
                    onClick={okf}
                  >
                    <FontAwesomeIcon icon={faBriefcase} size="1x" /> Experience
                  </NavLink>
                </div>

                <div className={`${styles.navitem}`}>
                  <NavLink
                    className={`${styles.link}`}
                    to="/Contact"
                    onClick={okf}
                  >
                    <FontAwesomeIcon icon={faPhone} size="1x" /> Contact
                  </NavLink>
                </div>
              </div>
            </Nav>
          </Navbar>
          {isOpen && (
            <div className={styles.overlay} onClick={toggleSidebar}></div>
          )}
        </div>
      </div>
    </>
  );
};
