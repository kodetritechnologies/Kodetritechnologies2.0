"use client";
import BasicProvider from "@/utils/BasicProvider";
import { useState } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const basicProvider = BasicProvider();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      if (value.length < 3) {
        setError((prevError) => ({
          ...prevError,
          name: "Name must be at least 3 characters long.",
        }));
      } else {
        setError((prevError) => ({
          ...prevError,
          name: "",
        }));
      }
    } else if (name === "email") {
      if (name == "email" && value.length == "") {
        setError((preError) => ({
          ...preError,
          email: "Email is required.",
        }));
      } else if (name == "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setError((preError) => ({
          ...preError,
          email: "Please enter a valid email address.",
        }));
      } else {
        setError((preError) => ({
          ...preError,
          email: "",
        }));
      }
    } else if (name === "message") {
      if (value.length < 10) {
        setError((prevError) => ({
          ...prevError,
          message: "Message must be at least 10 characters long.",
        }));
      } else {
        setError((prevError) => ({
          ...prevError,
          message: "",
        }));
      }
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name == "" || form.email == "" || form.message == "") {
      setError({
        name: form.name == "" ? "Name is required." : "",
        email: form.email == "" ? "Email is required." : "",
        message: form.message == "" ? "Message is required." : "",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await basicProvider.postMethod(
        "public/cms/contact/create",
        form,
      );

      if (response.status === "success") {
        toast.success(response.message);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(
          response.message || "Failed to send message. Please try again.",
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-contact flat-spacing">
      <div className="container">
        <div className="row gy-5 flex-wrap-reverse">
          <div className="col-md-6">
            <div className="col-left">
              <div className="heading d-grid gap-8">
                <h4>Information</h4>
                <h5 className="d-none">Perfect Heading SEO</h5>
                <p className="cl-text-2">
                  Have a question? Please contact us using the customer support
                  channels below.
                </p>
              </div>
              <div className="grid-info tf-grid-layout sm-col-2">
                <div className="d-grid gap-8">
                  <h6>Phone:</h6>
                  <p>
                    <a href="tel:16662348888" className="cl-text-2 link">
                      +1 666 234 8888
                    </a>
                  </p>
                </div>
                <div className="d-grid gap-8">
                  <h6>Email:</h6>
                  <p>
                    <a
                      href="mailto:hi.amere@gmail.com"
                      className="cl-text-2 link"
                    >
                      hi.amere@gmail.com
                    </a>
                  </p>
                </div>
                <div className="wd-full d-grid gap-8">
                  <h6>Address:</h6>
                  <p>
                    <a
                      href="https://www.google.com/maps?q=600+N+Michigan+Ave+Chicago,+IL+60611+USA"
                      target="_blank"
                      className="cl-text-2 link"
                    >
                      2163 Phillips Gap Rd, West Jefferson, North Carolina,
                      United States
                    </a>
                  </p>
                </div>
                <div className="wd-full d-grid gap-8">
                  <h6>Open Time:</h6>
                  <ul className="open-text">
                    <li className="d-flex gap-4 mb-4">
                      <span className="cl-text-2">Mon - Sat:</span>7:30am -
                      8:00pm PST
                    </li>
                    <li className="d-flex gap-4">
                      <span className="cl-text-2">Sunday:</span>9:00am - 5:00pm
                      PST
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="mb-8">Get In Touch</h4>
            <p className="mb-24 cl-text-2">
              Use the form below to get in touch with the sales team
            </p>
            <form className="form-get" onSubmit={handleSubmit}>
              <div className="form-content">
                <div className="tf-grid-layout sm-col-2">
                  <fieldset className="tf-field">
                    <label htmlFor="your-name" className="tf-lable fw-medium">
                      Your Name
                      <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="your-name"
                      placeholder="Your Name*"
                      onChange={handleChange}
                      name="name"
                    />
                    <label className="error-message text-danger">
                      {error.name}
                    </label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <label htmlFor="your-email" className="tf-lable fw-medium">
                      Your Email
                      <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="your-email"
                      placeholder="Your Email*"
                      onChange={handleChange}
                      name="email"
                    />
                    <label className="error-message text-danger">
                      {error.email}
                    </label>
                  </fieldset>
                </div>
                <fieldset className="tf-field">
                  <label htmlFor="your-message" className="tf-lable fw-medium">
                    Your Message
                    <span className="text-primary">*</span>
                  </label>
                  <textarea
                    placeholder="Your Message*"
                    onChange={handleChange}
                    name="message"
                  ></textarea>
                  <label className="error-message text-danger">
                    {error.message}
                  </label>
                </fieldset>
              </div>
              <button type="submit" className="tf-btn animate-btn">
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
