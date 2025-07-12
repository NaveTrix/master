import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string()
    .required("Full Name is required.")
    .min(5, "Full Name must be at least 5 characters."),
  email: Yup.string()
    .required("Email is required.")
    .email("Invalid email.")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email cannot contain spaces."),
  phone: Yup.string()
    .required("Phone number is required.")
    .matches(/^\+?[0-9\s-]{7,20}$/, "Invalid phone number."),
  message: Yup.string()
    .required("Message is required.")
    .min(10, "Message too short or incomplete.")
    .test(
      "min-words",
      "Message too short or incomplete.",
      value => (value ? value.trim().split(/\s+/).length >= 2 : false)
    )
    .max(500, "Message must be at most 500 characters."),
});
