import React from "react";
import { Badge, Container } from "reactstrap";
import images from "./common/exports";
import classNames from "classnames";
import Styles from "./Styles/Services.module.css";

export const Services = () => {
  return (
    <>
      <Container   className={classNames(
            
            "text-start",
            "animate__animated",
            "animate__bounce"
          )}>
        <div className={classNames(Styles.heading,"text-start")}>Services I Provide</div>
        <div className={classNames(Styles.maincontainer)}>
        <div className="break"></div>
          <div className={Styles.Servicescontainer}>
            <div className={classNames(Styles.services)}>
              <div className={classNames(Styles.headers)}>
                Device Effective Design
              </div>
              <div>
                <img src={images.logo21} alt="" />
              </div>
              <Container fluid> 
                <p>In today's digital age, web browsers are ubiquitous, being used on everything from mobile devices to computers. With the prevalence of mobile browsing, it's crucial that websites are optimized for mobile devices. When users open websites on their smartphones or tablets, they expect a seamless, user-friendly experience. Ensuring that your website is mobile-friendly is no longer optional; it's essential for reaching and engaging with your audience effectively.</p>
              </Container>
            </div>
            <div className={classNames(Styles.services)}>
              <div className={classNames(Styles.headers)}>
                User friendly 
              </div>
              
                <img src={images.logo22} alt="" />
              
              <div>
                <Container><p>
              I personally prefer that web pages be browser-friendly, ensuring they work seamlessly on every platform, including Firefox, Microsoft Edge, and Internet Explorer. This cross-platform compatibility is essential for providing a consistent user experience, regardless of the browser users choose. By optimizing web pages for multiple browsers, we can reach a wider audience and ensure accessibility for all users.
              </p>
                </Container>
              </div>
            </div>
            <div className={classNames(Styles.services)}>
              <div className={classNames(Styles.headers)}>
                Freelancing
              </div>
              
                <img src={images.logo23} alt="" />
              
              <div>
                <p>
                As a freelancer, I bring flexibility, expertise, and personalized solutions to your projects. My goal is to help businesses and individuals achieve their digital objectives with high-quality development services. Whether you need custom web applications, optimized performance, or scalable solutions, I'm here to assist.


                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
