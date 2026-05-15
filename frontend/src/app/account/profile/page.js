"use client";
import BasicProvider from "@/utils/BasicProvider";
import { AuthContext } from "@/utils/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

function page() {
  const { user, getUser } = useContext(AuthContext);
  const basicProvider = BasicProvider();
  const [profile, setProfile] = useState(user);
  const [error, SetError] = useState(null);
  console.log("Profile", user);

  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    if (name == "featured_image") {
      setProfile((pre) => ({
        ...pre,
        featured_image: files[0],
        preview: URL.createObjectURL(files[0]),
      }));
    } else {
      setProfile((pre) => ({ ...pre, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      const fullName = profile?.first_name + " " + profile?.last_name || "";
      formData.append("name", fullName);
      formData.append("email", profile?.email);
      formData.append("mobile", profile?.mobile);
      formData.append("gender", profile?.gender);
      formData.append("dob", profile?.dob);
      if (profile?.featured_image instanceof File) {
        formData.append("featured_image", profile?.featured_image);
      } else {
        formData.append("featured_image", profile?.featured_image?._id);
      }
      const response = await basicProvider.postMethod(
        "users/customer/update",
        formData,
      );
      if (response.status == "success") {
        toast.success(response?.message);
        getUser();
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user?._id) {
      setProfile(user);
    }
  }, [user]);

  return (
    <div className="col-lg-8 ms-auto">
      <div className="my-account-content">
        <h4 className="account-title">Setting</h4>
        <div className="account-my_address setting">
          <p className="mb-12 h6 fw-medium">Infomation</p>
          <p className="mb-12">
            Upload Avatar <span className="text-primary">*</span>
          </p>
          <div className="account-avatar mb-20">
            <div className="avatar-image">
              <img
                className="avatarPreview"
                loading="lazy"
                width="120"
                height="120"
                src={
                  profile?.preview ||
                  profile?.featured_image?.url ||
                  "/assets/images/avatar/avatar-1.jpg"
                }
                alt="Image"
              />
            </div>
            <div className="avatar-upload">
              <p className="fw-semibold mb-4">Upload File</p>
              <p className="text-caption-01 cl-text-2 mb-12">JPG 80x90px</p>
              <div className="upload-wrapper">
                <label className="upload-btn text-label">
                  Choose File
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    name="featured_image"
                    onChange={handleChange}
                    hidden
                  />
                </label>
                <span id="fileName" className="text-caption-02 cl-text-3">
                  No file Choose
                </span>
              </div>
            </div>
          </div>
          <form className="form-setting" onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="tf-grid-layout sm-col-2">
                <fieldset className="tf-field">
                  <label htmlFor="first-name" className="tf-lable fw-medium">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                    name="first_name"
                    value={profile?.first_name || ""}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="tf-field">
                  <label htmlFor="last-name" className="tf-lable fw-medium">
                    Last Name
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Last Name"
                    name="last_name"
                    value={profile?.last_name || ""}
                    onChange={handleChange}
                  />
                </fieldset>
              </div>
              <div className="tf-grid-layout sm-col-2">
                <fieldset className="tf-field">
                  <label htmlFor="phone-number" className="tf-lable fw-medium">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    type="number"
                    id="phone-number"
                    placeholder="Enter your Phone Number"
                    name="mobile"
                    value={profile?.mobile}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="tf-field">
                  <label htmlFor="email" className="tf-lable fw-medium">
                    Email Address
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Last Name"
                    value={profile?.email}
                    onChange={handleChange}
                  />
                </fieldset>
              </div>
              <div className="tf-grid-layout sm-col-2">
                <fieldset className="tf-field">
                  <label htmlFor="gender" className="tf-lable fw-medium">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    value={profile?.gender}
                    onChange={handleChange}
                  >
                    <option value="" selected disabled>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </fieldset>
                <fieldset className="tf-field">
                  <label htmlFor="dofb" className="tf-lable fw-medium">
                    Day of Birth
                  </label>
                  <input
                    type="date"
                    id="dofb"
                    name="dob"
                    value={profile?.dob}
                    onChange={handleChange}
                  />
                </fieldset>
              </div>
            </div>
            <div className="btn-submit">
              <button type="submit" className="tf-btn animate-btn">
                Save Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
