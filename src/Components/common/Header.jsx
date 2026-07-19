import React, { useState } from "react";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { navItems } from "../json/NavbarItems";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Container fluid className="text-start mt-2">
        <Navbar className={`${styles.navigation} shadow-lg fixed-top`}>
          <NavbarBrand className={styles.brandText}>T J</NavbarBrand>

          {/* Desktop Navigation */}

          <Nav className="ms-auto d-none d-lg-flex align-items-center">
            {navItems.map(({ path, label, icon }) => (
              <NavItem key={path}>
                <NavLink className={styles.link} to={path}>
                  {label !== "Contact" ? <span>{label}</span> : ""}
                </NavLink>
              </NavItem>
            ))}
          </Nav>

          {/* Mobile Hamburger */}

          <div
            className={`d-lg-none ${styles.navbarToggler}`}
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon
              icon={isOpen ? faBarsStaggered : faBars}
              size="2x"
            />
          </div>
        </Navbar>
      </Container>

      <div className="d-lg-none">
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
          <Navbar>
            <Nav navbar className="flex-column">
              <div className={styles.linkwrapper}>
                {navItems.map(({ path, label, icon }) => (
                  <div className={styles.navitem} key={path}>
                    <NavLink
                      className={styles.link}
                      to={path}
                      onClick={closeSidebar}
                    >
                      <FontAwesomeIcon icon={icon} className="me-2" />
                      {label}
                    </NavLink>
                  </div>
                ))}
              </div>
            </Nav>
          </Navbar>
        </div>

        {isOpen && <div className={styles.overlay} onClick={closeSidebar} />}
      </div>
    </>
  );
};
