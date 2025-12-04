import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import images from "./json/exports";
import classNames from "classnames";
import Styles from "./Styles/Services.module.css";
import Servicesd from "./json/Service.js";

export const Services = () => {
  const [ServiceData, setServiceData] = useState([]);

  useEffect(() => {
    setServiceData(Servicesd);
  }, []);

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
              {ServiceData.map((service) => (
                <div key={service.id} className={classNames(Styles.services)}>
                  <div className={classNames(Styles.headers)}>
                    {service.title}
                  </div>
                  <img src={images[service.image]} alt="" />
                  <div>
                    <Container>
                      <p>{service.description}</p>
                    </Container>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
