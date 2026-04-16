"use client";
import BasicProvider from "@/utils/BasicProvider";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function Page() {
  const basicProvider = BasicProvider()
  const [addresses, setAddresses] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingInline, setIsAddingInline] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    isDefault: false,
  });

  console.log("formData", formData)

  const handleOpenModal = async (address = null) => {
    if (address) {
      setFormData({
        ...address,
        country: address.country?._id || address.country,
        state: address.state?._id || address.state,
        city: address.city?._id || address.city,
      });
      setCurrentAddress(address);
      setIsModalOpen(true);
      if (address.country) await fetchStates(address.country?._id || address.country);
      if (address.state) await fetchCities(address.state?._id || address.state);
    } else {
      setFormData({
        name: "",
        mobile: "",
        email: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zip: "",
        isDefault: false,
      });
      setCurrentAddress(null);
      setIsAddingInline(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsAddingInline(false);
    setStates([]);
    setCities([]);
  };

  const fetchCountries = async () => {
    try {
      const res = await basicProvider.getMethod("public/configuration/regions/country");
      if (res.status === "success") {
        setCountries(res.data?.data || []);
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchStates = async (countryId) => {
    try {
      const res = await basicProvider.getMethod(`public/configuration/regions/state?parent=${countryId}`);
      if (res.status === "success") {
        setStates(res.data.docs || []);
      }
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async (stateId) => {
    try {
      const res = await basicProvider.getMethod(`public/configuration/regions/city?parent=${stateId}`);
      if (res.status === "success") {
        setCities(res.data.data || []);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleInputChange = async (e) => {
    const { name, value, type, checked } = e.target;
    const newVal = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newVal,
    }));

    if (name === "country") {
      setStates([]);
      setCities([]);
      setFormData(prev => ({ ...prev, state: "", city: "" }));
      if (value) await fetchStates(value);
    } else if (name === "state") {
      setCities([]);
      setFormData(prev => ({ ...prev, city: "" }));
      if (value) await fetchCities(value);
    }
  };

  const getAddress = async () => {
    try {
      const res = await basicProvider.getMethod("public/ecommerce/address");
      if (res.status === "success") {
        setAddresses(res.data.data || []);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      // Clean payload: Convert empty strings to null for ObjectId fields
      const payload = {
        ...formData,
        country: formData.country || null,
        state: formData.state || null,
        city: formData.city || null,
      };

      let res;
      if (currentAddress) {
        // Update
        res = await basicProvider.patchMethod(
          `public/ecommerce/address/${currentAddress._id}`,
          payload
        );
      } else {
        // Add
        res = await basicProvider.postMethod(
          "public/ecommerce/address",
          payload
        );
      }

      if (res.status === "success") {
        toast.success(res.message || "Success!");
        getAddress();
        handleCloseModal();
      } else {
        toast.error(res.message || "Operation failed");
      }
    } catch (error) {
      console.error("Error saving address:", error);
      toast.error("An error occurred");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      try {
        const res = await basicProvider.deleteMethod(
          `public/ecommerce/address/${id}`
        );
        if (res.status === "success") {
          toast.success("Address deleted.");
          getAddress();
        } else {
          toast.error(res.message || "Failed to delete");
        }
      } catch (error) {
        console.error("Error deleting address:", error);
        toast.error("An error occurred");
      }
    }
  };

  useEffect(() => {
    getAddress();
    fetchCountries();
  }, []);

  return (
    <main className="col-lg-9 ms-auto">
      <section className="my-account-content">
        <header className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
          <div>
            <h1 className="account-title m-0 h4">Manage Addresses</h1>
            <p className="cl-text-2 mb-0 mt-1">
              Select or add a default address for your checkout.
            </p>
          </div>
        </header>

        <div className="row g-4">
          {addresses.length > 0 && addresses?.map((addr) => (
            <article className="col-md-6" key={addr._id}>
              <div
                className={`card h-100 border-2 ${addr.isDefault ? "border-theme-primary shadow" : "border-dark shadow-sm"}`}
                onClick={() => handleOpenModal(addr)}
                style={{ cursor: "pointer", transition: "all 0.2s ease" }}
              >
                <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center pt-4 px-4">
                  <h2 className="m-0 fw-bold text-dark h5">Address Details</h2>
                  {addr.isDefault && (
                    <span className="badge-theme-primary px-3">Default</span>
                  )}
                </div>

                <address className="card-body p-4 mb-0 font-style-normal">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-semibold small">Full Name</label>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-light border-0 shadow-none"
                          value={addr.name}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-semibold small">Phone Number</label>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-light border-0 shadow-none"
                          value={addr.mobile}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-semibold small">Email Address</label>
                        <input
                          type="email"
                          className="form-control form-control-sm bg-light border-0 shadow-none"
                          value={addr.email || ""}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-semibold small">Street Address</label>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-light border-0 shadow-none mb-2"
                          value={addr.address}
                          readOnly
                        />
                        {addr.apartment && (
                          <input
                            type="text"
                            className="form-control form-control-sm bg-light border-0 shadow-none"
                            value={addr.apartment}
                            readOnly
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-0">
                        <label className="form-label mb-1 fw-semibold small">Town / City</label>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-light border-0 shadow-none"
                          value={addr.city?.name || addr.city || ""}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-0">
                        <label className="form-label mb-1 fw-semibold small">State</label>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-light border-0 shadow-none"
                          value={addr.state?.name || addr.state || ""}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-0">
                        <label className="form-label mb-1 fw-semibold small">Country</label>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-light border-0 shadow-none"
                          value={addr.country?.name || addr.country || ""}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-0">
                        <label className="form-label mb-1 fw-semibold small">ZIP Code</label>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-light border-0 shadow-none"
                          value={addr.zip}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </address>

                <div className="card-footer bg-transparent border-0 p-4 pt-0">
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-outline-dark flex-grow-1 fw-bold py-2 rounded-pill"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(addr);
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square me-2"></i> Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger flex-grow-1 fw-bold py-2 rounded-pill"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(addr._id);
                      }}
                    >
                      <i className="fa-solid fa-trash-can me-2"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {isAddingInline && (
            <div className="col-md-6">
              <div className="card h-100 border-2 border-theme-primary shadow-lg overflow-hidden">
                <div className="card-header bg-theme-primary text-white p-3 d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold mb-0">Add New Address</h5>
                  <button
                    className="btn btn-link text-white p-0 fs-5"
                    onClick={() => setIsAddingInline(false)}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className="card-body p-3 bg-white">
                  <form onSubmit={handleSave}>
                    <div className="row g-2">
                      <div className="col-md-6">
                        <div className="form-group pb-1">
                          <label className="form-label mb-0 small">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control form-control-sm border-2 shadow-none"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group pb-1">
                          <label className="form-label mb-0 small">Phone Number</label>
                          <input
                            type="tel"
                            name="mobile"
                            className="form-control form-control-sm border-2 shadow-none"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group pb-1">
                          <label className="form-label mb-0 small">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control form-control-sm border-2 shadow-none"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group pb-1">
                          <label className="form-label mb-0 small">Country</label>
                          <select
                            name="country"
                            className="form-select form-select-sm border-2 shadow-none"
                            value={formData.country}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Country</option>
                            {countries.map(c => (
                              <option key={c._id} value={c._id}>{c.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group pb-1">
                          <label className="form-label mb-0 small">State</label>
                          <select
                            name="state"
                            className="form-select form-select-sm border-2 shadow-none"
                            value={formData.state}
                            onChange={handleInputChange}
                            disabled={!formData.country}
                          >
                            <option value="">Select State</option>
                            {states.map(s => (
                              <option key={s._id} value={s._id}>{s.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group pb-1">
                          <label className="form-label mb-0 small">Street Address</label>
                          <input
                            type="text"
                            name="address"
                            className="form-control form-control-sm border-2 mb-1 shadow-none"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="House and address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label mb-0 small">Town / City</label>
                          <select
                            name="city"
                            className="form-select form-select-sm border-2 shadow-none"
                            value={formData.city}
                            onChange={handleInputChange}
                            disabled={!formData.state}
                          >
                            <option value="">Select City</option>
                            {cities.map(ct => (
                              <option key={ct._id} value={ct._id}>{ct.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label mb-0 small">ZIP Code</label>
                          <input
                            type="text"
                            name="zip"
                            className="form-control form-control-sm border-2 shadow-none"
                            value={formData.zip}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check p-0 d-flex align-items-center gap-2 mt-2">
                          <input
                            className="form-check-input ms-0 border-2 shadow-none"
                            type="checkbox"
                            name="isDefault"
                            id="isDefault"
                            style={{ width: "16px", height: "16px" }}
                            checked={formData.isDefault}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label fw-bold text-dark mb-0 small" htmlFor="isDefault">
                            Set Default
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary flex-grow-1 fw-bold py-2 rounded-pill"
                        onClick={() => setIsAddingInline(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-sm btn-theme-primary flex-grow-1 fw-bold py-2 rounded-pill text-white"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {!isAddingInline && (
            <div className="col-md-6">
              <div
                className="card h-100 border-2 border-dark border-dashed shadow-sm d-flex flex-column align-items-center justify-content-center p-4 text-center"
                onClick={() => handleOpenModal()}
                style={{
                  minHeight: "400px",
                  cursor: "pointer",
                  borderStyle: "dashed",
                  backgroundColor: "var(--bg)",
                  transition: "all 0.2s ease",
                }}
              >
                <div className="text-secondary mb-3">
                  <i className="fa-solid fa-circle-plus fa-3xl"></i>
                </div>
                <h5 className="fw-bold text-dark">Add New Address</h5>
                <p className="text-muted small">Click to add a new shipping address</p>
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          .border-theme-primary {
            border-color: var(--primary) !important;
          }
          .bg-theme-primary {
            background-color: var(--primary) !important;
          }
          .btn-theme-primary {
            background-color: var(--primary) !important;
            border-color: var(--primary) !important;
          }
          .btn-theme-primary:hover {
            opacity: 0.9;
            transform: translateY(-2px);
          }
          .text-theme-primary {
            color: var(--primary) !important;
          }
          
          .border-dashed {
            border-style: dashed !important;
          }
          
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          }

          /* Label Styling */
          .form-label {
            margin-bottom: 6px;
            font-weight: 700;
            font-size: 13px;
            color: var(--text);
            display: block;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          /* Custom Modal Overlay */
          .custom-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(8px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 20px;
          }
          .custom-modal-overlay.show {
            opacity: 1;
            visibility: visible;
          }
          .custom-modal-overlay > div {
            animation: modalSlideUp 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          @keyframes modalSlideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          .scroll-y {
            max-height: 70vh;
            overflow-y: auto;
          }

          .form-control:focus, .form-select:focus {
            border-color: var(--primary) !important;
            box-shadow: 0 0 0 0.25rem rgba(220, 70, 70, 0.1) !important;
          }

          .badge-theme-primary {
            background-color: var(--primary);
            color: white;
            border-radius: 50px;
            padding: 4px 12px;
            font-size: 11px;
            font-weight: 600;
          }
        `}</style>

        {isModalOpen && (
          <div className="custom-modal-overlay show" onClick={handleCloseModal}>
            <div
              className="card border-2 border-theme-primary shadow-lg"
              onClick={(e) => e.stopPropagation()}
              style={{ width: "100%", maxWidth: "700px", borderRadius: "16px", overflow: "hidden" }}
            >
              <div className="card-header bg-theme-primary text-white pt-4 px-4 d-flex justify-content-between align-items-center">
                <h4 className="fw-bold mb-0">
                  {currentAddress ? "Edit Address Details" : "Add New Address"}
                </h4>
                <button
                  className="btn btn-link text-white p-0"
                  onClick={handleCloseModal}
                  style={{ fontSize: "1.5rem", textDecoration: "none" }}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <form onSubmit={handleSave} className="card-body p-4 scroll-y">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg border-2 shadow-none"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="mobile"
                        className="form-control form-control-lg border-2 shadow-none"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="+91 00000 00000"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg border-2 shadow-none"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label mb-1">Country</label>
                      <select
                        name="country"
                        className="form-select form-select-lg border-2 shadow-none"
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Country</option>
                        {countries.map(c => (
                          <option key={c._id} value={c._id}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label mb-1">State</label>
                      <select
                        name="state"
                        className="form-select form-select-lg border-2 shadow-none"
                        value={formData.state}
                        onChange={handleInputChange}
                        disabled={!formData.country}
                      >
                        <option value="">Select State</option>
                        {states.map(s => (
                          <option key={s._id} value={s._id}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label mb-1">Street Address</label>
                      <input
                        type="text"
                        name="address"
                        className="form-control form-control-lg border-2 mb-3 shadow-none"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="House number and address name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label mb-1">Town / City</label>
                      <select
                        name="city"
                        className="form-select form-select-lg border-2 shadow-none"
                        value={formData.city}
                        onChange={handleInputChange}
                        disabled={!formData.state}
                      >
                        <option value="">Select City</option>
                        {cities.map(ct => (
                          <option key={ct._id} value={ct._id}>{ct.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label mb-1">ZIP / Postal Code</label>
                      <input
                        type="text"
                        name="zip"
                        className="form-control form-control-lg border-2 shadow-none"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check p-0 d-flex align-items-center gap-2">
                      <input
                        className="form-check-input ms-0 border-2 shadow-none"
                        type="checkbox"
                        name="isDefault"
                        id="isDefault"
                        style={{ width: "20px", height: "20px" }}
                        checked={formData.isDefault}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label fw-bold text-dark" htmlFor="isDefault">
                        Set as default address
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-5 d-flex gap-3">
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-secondary flex-grow-1 fw-bold py-3 rounded-pill"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-lg btn-theme-primary flex-grow-1 fw-bold py-3 rounded-pill text-white"
                  >
                    Save Address
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <style jsx>{`
          /* Non-italic address tag */
          address {
            font-style: normal;
          }
          
          .border-dashed {
            border-style: dashed !important;
          }
          
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          }

          /* Label Styling */
          .form-label {
            margin-bottom: 6px;
            font-weight: 700;
            font-size: 13px;
            color: #101010;
            display: block;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          /* Custom Modal Overlay */
          .custom-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(8px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 20px;
          }
          .custom-modal-overlay.show {
            opacity: 1;
            visibility: visible;
          }
          .custom-modal-overlay > div {
            animation: modalSlideUp 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          @keyframes modalSlideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          .scroll-y {
            max-height: 70vh;
            overflow-y: auto;
          }
        `}</style>
      </section>
    </main>
  );
}

export default Page;

