import linksConstants from "../constants/links_constants";

const emailPattern = linksConstants.EMAIL_PATTERN;

export const validateField = (name, value) => {
  switch (name) {
    case "name":
      return !value.trim() ? "Enter Full Name" : "";

    case "email":
      if (!value.trim()) return "Enter Email";
      if (!emailPattern.test(value)) return "Enter Valid Email";
      return "";

    case "subject":
      return !value.trim() ? "Enter Subject" : "";

    case "message":
      return !value.trim() ? "Enter Message" : "";

    default:
      return "";
  }
};

export const validateForm = (formData) => {
  const errors = {};

  Object.keys(formData).forEach((key) => {
    const error = validateField(key, formData[key]);

    if (error) {
      errors[key] = error;
    }
  });

  return errors;
};
