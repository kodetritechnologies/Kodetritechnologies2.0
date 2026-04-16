"use client";
import BasicProvider from "@/utils/BasicProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function RegisterModel() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState("");
  const router = useRouter();
  const basicProvider = BasicProvider();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "email") {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = regex.test(value);
      if (!isValid) {
        setError((pre) => ({ ...pre, email: "Invalid email formate" }));
      } else {
        setError((pre) => ({ ...pre, email: "" }));
      }
    } else if (name == "password") {
      if (value.length == "") {
        setError((pre) => ({ ...pre, password: "Password field is required" }));
      } else {
        setError((pre) => ({ ...pre, password: "" }));
      }
    } else if (name == "confirmPassword") {
      if (value.length == "") {
        setError((pre) => ({
          ...pre,
          confirmPassword: "confirm Password field is required",
        }));
      } else if (value !== formData?.password) {
        setError((pre) => ({
          ...pre,
          confirmPassword: "confirm Password does not match with password",
        }));
      } else {
        setError((pre) => ({
          ...pre,
          confirmPassword: "",
        }));
      }
    } else {
      setError({});
    }
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.email == "" ||
      formData.password == "" ||
      formData.confirmPassword == ""
    ) {
      setError({
        email: formData.email == "" ? "Email is required." : "",
        password: formData.password == "" ? "Password is required." : "",
        confirmPassword:
          formData.confirmPassword == "" ? "Confirm password is required." : "",
      });
      return;
    }
    setLoading(true);
    try {
      const response = await basicProvider.postMethod(
        "users/customer/signup",
        formData,
      );
      if (response.status == "success") {
        toast.success(response?.message);
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="modal modalCentered fade modal-log" id="register">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span className="icon-close-popup" data-bs-dismiss="modal">
            <i className="icon-X2"></i>
          </span>
          <div className="modal-heading text-center">
            <h3 className="title-pop mb-8">Create Account</h3>
            <p className="desc-pop cl-text-2">
              Be part of our growing family of new customers!
            </p>
          </div>
          <div className="modal-main">
            <form className="form-log" onSubmit={handleSubmit}>
              <div className="form-content">
                <fieldset className="tf-field">
                  <label htmlFor="user-name" className="tf-lable fw-medium">
                    Username or email address{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="user-name"
                    name="email"
                    value={formData?.email}
                    placeholder="Username or email address*"
                    onChange={handleChange}
                  />
                  <label className="error-message text-danger">
                    {error.email}
                  </label>
                </fieldset>
                <fieldset className="tf-field password-wrapper">
                  <label
                    htmlFor="register-password"
                    className="tf-lable fw-medium"
                  >
                    Password
                    <span className="text-primary">*</span>
                  </label>
                  <div className="password-wrapper w-100">
                    <span className="toggle-pass icon-EyeSlash fs-20 cl-text-3"></span>
                    <input
                      className="password-field"
                      type="password"
                      name="password"
                      value={formData?.password}
                      id="register-password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <label className="error-message text-danger">
                      {error.password}
                    </label>
                  </div>
                </fieldset>
                <fieldset className="tf-field password-wrapper">
                  <label
                    htmlFor="register-password-confirm"
                    className="tf-lable fw-medium"
                  >
                    Confirm Password
                    <span className="text-primary">*</span>
                  </label>
                  <div className="password-wrapper w-100">
                    <span className="toggle-pass icon-EyeSlash fs-20 cl-text-3"></span>
                    <input
                      className="password-field"
                      type="password"
                      name="confirmPassword"
                      value={formData?.confirmPassword}
                      id="register-password-confirm"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                    />
                    <label className="error-message text-danger">
                      {error.confirmPassword}
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="group-action">
                <button className="action-create-account tf-btn animate-btn w-100">
                  {loading ? "Create Account..." : "Create Account"}
                </button>
                <a
                  href="#sign"
                  data-bs-toggle="modal"
                  className="tf-btn btn-stroke"
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModel;
