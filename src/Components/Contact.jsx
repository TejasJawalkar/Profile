import { useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { validateField, validateForm } from "./Core/ContactCore";
import { config } from "./common/config/config";
import images from "./json/exports";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Styles from "./Styles/Contact.module.css";

export const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const validate = () => {
    const validateError = validateForm(formData);
    setErrors(validateError);
    return Object.keys(validateError).length == 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_EMAIL_PUBLIC_KEY);
    if (!validate()) return;
    try {
      await emailjs.sendForm(
        config.VITE_EMAIL_SERVICE_ID,
        config.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        config.VITE_EMAIL_PUBLICK_EY,
      );

      Swal.fire({
        icon: "success",
        title: `Hello ${formData.name}`,
        html: `<p>Thank you for reaching out.</p>
              <p> I will get back to you shortly.</p>`,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: `Unable to send email`,
        html: `<p> Please try again later..</p>`,
      });
    }
  };

  return (
    <div className={Styles.maincontainer}>
      <Container className="p-3">
        <Row className="mt-4">
          <Col md={12}>
            <div className={Styles.glassCard}>
              <div className="d-flex align-items-center gap-3 mb-3">
                <img src={images.logo20} alt="Connect" height="55" />
                <h5 className="m-0">Connect With Me</h5>
              </div>

              <form ref={form} onSubmit={sendEmail}>
                <Row className="mt-3">
                  <Col md={6}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && (
                      <div className="text-danger">{errors.name}</div>
                    )}
                  </Col>

                  <Col md={6}>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.subject && (
                      <div className="text-danger">{errors.subject}</div>
                    )}
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    {errors.message && (
                      <div className="text-danger">{errors.message}</div>
                    )}
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col className="text-end">
                    <button
                      className="btn btn-outline-info formbtn"
                      type="submit"
                    >
                      Send
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
