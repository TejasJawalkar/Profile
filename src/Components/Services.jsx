import React from "react";
import { Badge, Container } from "reactstrap";
import images from "./json/exports";
import classNames from "classnames";
import Styles from "./Styles/Services.module.css";

export const Services = () => {
  return (
    <>
      <Container
        className={classNames(
          "text-start",
          "animate__animated",
          "animate__bounce"
        )}
      >
        <div className={classNames(Styles.heading, "text-start")}>
          Services I Provide
        </div>
        <div className={classNames(Styles.maincontainer)}>
          <div className="break"></div>

          <div className={Styles.Servicescontainer}>
            <div className={Styles.ServiceWrapper}>
              {/* Existing Service 1 */}
              <div className={classNames(Styles.services)}>
                <div className={classNames(Styles.headers)}>
                  Device Effective Design
                </div>
                <div>
                  <img src={images.logo21} alt="" />
                </div>
                <Container fluid>
                  <p>
                    In today’s digital landscape, users browse websites across a
                    wide range of devices. I create fully responsive designs
                    that deliver a consistent, fast, and smooth experience
                    across all screen sizes.
                  </p>
                </Container>
              </div>

              {/* Existing Service 2 */}
              <div className={classNames(Styles.services)}>
                <div className={classNames(Styles.headers)}>User friendly</div>
                <img src={images.logo22} alt="" />
                <div>
                  <Container>
                    <p>
                      I ensure cross-browser compatibility across Chrome,
                      Firefox, Microsoft Edge, and Safari to deliver a seamless
                      and consistent user experience on all platforms.
                    </p>
                  </Container>
                </div>
              </div>

              {/* Existing Service 3 */}
              <div className={classNames(Styles.services)}>
                <div className={classNames(Styles.headers)}>Freelancing</div>
                <img src={images.logo23} alt="" />
                <div>
                  <p>
                    I offer flexible, high-quality freelancing services
                    including scalable application development, performance
                    optimization, module development, and API integration to
                    support your project goals.
                  </p>
                </div>
              </div>

              {/* NEW SERVICE 1 - Full Stack Development */}
              <div className={classNames(Styles.services)}>
                <div className={classNames(Styles.headers)}>
                  Full Stack .NET Development
                </div>
                <img src={images.logo25} alt="" />
                <div>
                  <Container>
                    <p>
                      I specialize in building end-to-end web applications using
                      .NET Core, C#, MVC, Web API, Angular, and SQL/Oracle. From
                      UI design to backend architecture, I deliver secure,
                      scalable, and enterprise-grade solutions.
                    </p>
                  </Container>
                </div>
              </div>

              {/* NEW SERVICE 2 - API Development */}
              <div className={classNames(Styles.services)}>
                <div className={classNames(Styles.headers)}>
                  API Development & Integration
                </div>
                <img src={images.logo26} alt="" />
                <div>
                  <Container>
                    <p>
                      I develop powerful, secure, and high-performance RESTful
                      APIs. I also integrate third-party services, handle data
                      validation, and optimize API performance for smooth
                      communication between systems.
                    </p>
                  </Container>
                </div>
              </div>

              {/* NEW SERVICE 3 - Database Optimization */}
              <div className={classNames(Styles.services)}>
                <div className={classNames(Styles.headers)}>
                  Database Design & Optimization
                </div>
                <img src={images.logo24} alt="" />
                <div>
                  <Container>
                    <p>
                      With strong expertise in SQL Server and Oracle, I design
                      efficient database schemas, write complex queries, and
                      perform performance tuning to improve execution speed,
                      reduce load time, and enhance system reliability.
                    </p>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
