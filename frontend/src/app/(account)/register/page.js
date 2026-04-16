"use client";

import React, { useState } from "react";
import BasicProvider from "@/utils/BasicProvider";
import swalHelper from "@/utils/swalHelper";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Page() {
  const basicProvider = BasicProvider();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const keyMap = {
      "name-register": "name",
      "username-register_2": "email",
      "password-register_2": "password",
      "re_password-register_2": "confirmPassword",
    };
    setFormData((prev) => ({
      ...prev,
      [keyMap[id]]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      swalHelper.error("Validation Error", "Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await basicProvider.postMethod("users/customer/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === "success") {
        swalHelper.success("Registration Successful", response.message || "Your account has been created.");
        router.push("/login");
      } else {
        swalHelper.error("Registration Failed", response.message || "Please check your details.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      swalHelper.error("Error", "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id="wrapper">
      <section className="section-log flat-spacing">
        <div className="container">
          <div className="row align-items-center gy-30">
            <div className="col-md-5 ms-auto">
              <div className="col-left">
                <h4 className="title mb-20">Create Account</h4>
                <form onSubmit={handleSubmit} className="form-log">
                  <div className="form-content">
                    <fieldset className="tf-field">
                      <label htmlFor="name-register" className="tf-lable fw-medium">
                        Full Name
                        <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name-register"
                        placeholder="Full Name*"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </fieldset>
                    <fieldset className="tf-field">
                      <label htmlFor="username-register_2" className="tf-lable fw-medium">
                        Email address
                        <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="username-register_2"
                        placeholder="Email address*"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </fieldset>
                    <fieldset className="tf-field password-wrapper">
                      <label htmlFor="password-register_2" className="tf-lable fw-medium">
                        Password
                        <span className="text-primary">*</span>
                      </label>
                      <div className="password-wrapper w-100">
                        <span className="toggle-pass icon-EyeSlash fs-20 cl-text-3"></span>
                        <input
                          className="password-field"
                          type="password"
                          id="password-register_2"
                          placeholder="Password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </fieldset>
                    <fieldset className="tf-field password-wrapper">
                      <label htmlFor="re_password-register_2" className="tf-lable fw-medium">
                        Confirm Password
                        <span className="text-primary">*</span>
                      </label>
                      <div className="password-wrapper w-100">
                        <span className="toggle-pass icon-EyeSlash fs-20 cl-text-3"></span>
                        <input
                          className="password-field"
                          type="password"
                          id="re_password-register_2"
                          placeholder="Confirm Password"
                          required
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </fieldset>
                  </div>
                  <button
                    type="submit"
                    className="action-create-account tf-btn animate-btn"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Account"}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-5 me-auto">
              <div className="col-right">
                <h4 className="mb-8">Already have an account?</h4>
                <p className="cl-text-2 mb-20">
                  Welcome back. Sign in to access your personalized experience,
                  saved preferences, and more. We're thrilled to have you with
                  us again!
                </p>
                <Link href="/login" className="tf-btn animate-btn">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;

