"use client";
import BasicProvider from "@/utils/BasicProvider";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCart } from "@/utils/context/CartContext";
import { useContext } from "react";
import { AuthContext } from "@/utils/context/AuthContext";

function SignInModel() {
  const basicProvider = BasicProvider();
  const { getLocalStorageCart, clearLocalStorageCart, fetchCart } = useCart();
  const { getUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember_me: "",
  });
  const [loading, setLoading] = useState();
  const [error, setError] = useState({});

  const handleChange = async (e) => {
    const { name, value, type, checked } = e.target;

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
    } else {
      setError({});
    }
    setFormData((pre) => ({
      ...pre,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email == "" || formData.password == "") {
      setError({
        email: formData.email == "" ? "Email is required." : "",
        password: formData.password == "" ? "Password is required." : "",
      });
      return;
    }
    setLoading(true);
    try {
      const cartData = getLocalStorageCart();
      const loginPayload = { ...formData, cartData };

      const response = await basicProvider.postMethod(
        "users/customer/login",
        loginPayload,
      );
      if (response.status == "success") {
        toast.success(response?.message);
        clearLocalStorageCart();
        await getUser(); // Update user in AuthContext
        await fetchCart(); // Refresh cart in CartContext
        setFormData({
          email: "",
          password: "",
        });
        setLoading(false);
        // Close modal if needed, but the user didn't ask for it specifically.
        // Usually, these modals close on success.
      } else {
        toast.error(response?.message);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <div className="modal modalCentered fade modal-log" id="sign">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span className="icon-close-popup" data-bs-dismiss="modal">
            <i className="icon-X2"></i>
          </span>
          <div className="modal-heading text-center">
            <h3 className="title-pop mb-8">Sign In</h3>
            <p className="desc-pop cl-text-2">
              Sign in to access your personalized experience.
            </p>
          </div>
          <div className="modal-main">
            <form onSubmit={handleSubmit} className="form-log">
              <div className="form-content">
                <fieldset className="tf-field">
                  <label htmlFor="user-name-log" className="tf-lable fw-medium">
                    Username or email address{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="user-name-log"
                    placeholder="Username or email address*"
                    onChange={handleChange}
                  />
                  <label className="error-message text-danger">
                    {error.email}
                  </label>
                </fieldset>
                <fieldset className="tf-field password-wrapper">
                  <label htmlFor="password" className="tf-lable fw-medium">
                    Password
                    <span className="text-primary">*</span>
                  </label>
                  <div className="password-wrapper w-100">
                    <span className="toggle-pass icon-EyeSlash fs-20 cl-text-3"></span>
                    <input
                      className="password-field"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <label className="error-message text-danger">
                      {error.password}
                    </label>
                  </div>
                </fieldset>
                <fieldset className="field-bottom">
                  <div className="checkbox-wrap">
                    <input
                      className="tf-check style-2"
                      type="checkbox"
                      id="remember"
                      checked={formData.remember_me}
                      name="remember_me"
                      onChange={handleChange}
                    />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <a
                    href="#modalForgot"
                    data-bs-toggle="modal"
                    className="link text-decoration-underline"
                  >
                    <span className="text-caption-01 fw-semibold">
                      Forgot Your Password?
                    </span>
                  </a>
                </fieldset>
              </div>
              <div className="group-action">
                <button type="submit" className="tf-btn animate-btn w-100">
                  {loading ? "Login..." : "Login"}
                </button>
                <a
                  href="#register"
                  data-bs-toggle="modal"
                  className="tf-btn btn-stroke"
                >
                  Create Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModel;
