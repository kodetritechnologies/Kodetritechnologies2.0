"use client";

import React, { useState, useContext } from "react";
import { AuthContext } from "@/utils/context/AuthContext";
import BasicProvider from "@/utils/BasicProvider";
import swalHelper from "@/utils/swalHelper";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Page() {
  const { getUser } = useContext(AuthContext);
  const basicProvider = BasicProvider();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember_me: true,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "user-name-log-2" ? "email" : id === "pass-log-2" ? "password" : "remember_me"]:
        type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await basicProvider.postMethod("users/customer/login", {
        email: formData.email,
        password: formData.password,
        remember_me: formData.remember_me,
      });

      if (response.status === "success") {
        await getUser();
        swalHelper.success("Login Successful", response.message || "Welcome back!");
        router.push("/");
      } else {
        swalHelper.error("Login Failed", response.message || "Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
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
                <h4 className="title mb-20">Login</h4>
                <form onSubmit={handleSubmit} className="form-log">
                  <div className="form-content">
                    <fieldset className="tf-field">
                      <label htmlFor="user-name-log-2" className="tf-lable fw-medium">
                        Username or email address
                        <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="user-name-log-2"
                        placeholder="Username or email address*"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </fieldset>
                    <fieldset className="tf-field password-wrapper">
                      <label htmlFor="pass-log-2" className="tf-lable fw-medium">
                        Password
                        <span className="text-primary">*</span>
                      </label>
                      <div className="password-wrapper w-100">
                        <span className="toggle-pass icon-EyeSlash fs-20 cl-text-3"></span>
                        <input
                          className="password-field"
                          type="password"
                          id="pass-log-2"
                          placeholder="Password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </fieldset>
                    <fieldset className="field-bottom">
                      <div className="checkbox-wrap">
                        <input
                          className="tf-check style-2"
                          type="checkbox"
                          id="remember-2"
                          checked={formData.remember_me}
                          onChange={(e) => setFormData(prev => ({ ...prev, remember_me: e.target.checked }))}
                        />
                        <label htmlFor="remember-2">Remember me</label>
                      </div>
                      <Link href="/forget-password" title="Forgot Password" className="link text-decoration-underline">
                        <span className="text-caption-01 fw-semibold">
                          Forgot Your Password?
                        </span>
                      </Link>
                    </fieldset>
                  </div>
                  <button type="submit" className="tf-btn animate-btn" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-5 me-auto">
              <div className="col-right">
                <h4 className="mb-8">New Customer</h4>
                <p className="cl-text-2 mb-20">
                  Be part of our growing family of new customers! Join us today
                  and unlock a world of exclusive benefits, offers, and
                  personalized experiences.
                </p>
                <Link href="/register" className="tf-btn animate-btn">
                  Register
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

