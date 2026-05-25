"use client";
import React, { useContext, useEffect, useState, Suspense } from "react";
import { useCart } from "@/utils/context/CartContext";
import { AuthContext } from "@/utils/context/AuthContext";
import BasicProvider from "@/utils/BasicProvider";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useCurrency } from "@/utils/context/CurrencyContext";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

function CheckoutPage() {
  const basicProvider = BasicProvider();
  const { cart, fetchCart, cartTotal = 0 } = useCart();
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { formatPrice } = useCurrency();

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");
  const [taxRate, setTaxRate] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const fetchAddresses = async () => {
    try {
      const response = await basicProvider.getMethod("public/ecommerce/address");
      if (response.status === "success" && response.data) {
        const addressList = response.data.data || [];
        setAddresses(addressList);
        const defaultAddr = addressList.find((addr) => addr.isDefault) || addressList[0];
        setSelectedAddress(defaultAddr || null);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  const fetchPaymentMethods = async () => {
    try {
      const response = await basicProvider.getMethod(
        "public/ecommerce/order/payment-methods"
      );
      if (response.status === "success" && response.data) {
        setPaymentMethods(response.data);
        if (response.data.length > 0) {
          setSelectedPaymentMethod(response.data[0]);
        }
      }
    } catch (error) {
      console.error("Error fetching payment methods:", error);
    }
  };

  const fetchStoreSettings = async () => {
    try {
      const response = await basicProvider.getMethod("public/ecommerce/store-settings");
      if (response.status === "success" && response.data) {
        setTaxRate(response.data.tax || 0);
        setShippingCost(response.data.shipping || 0);
      }
    } catch (error) {
      console.error("Error fetching store settings:", error);
    }
  };

  const verifyUrlCoupon = async (code) => {
    if (!code) return;
    try {
      const response = await basicProvider.postMethod("public/ecommerce/verify-coupon", {
        couponCode: code,
      });
      if (response.status === "success" && response.data) {
        setAppliedCoupon(response.data);
        setCouponCode(code);
        setCouponSuccess(response.message || "Coupon applied successfully!");
        toast.success(`Coupon "${code}" applied automatically!`);
      } else {
        toast.error(`Coupon "${code}" is invalid: ${response.message || ""}`);
      }
    } catch (error) {
      console.error("Coupon validation error:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchAddresses();
    }
    fetchPaymentMethods();
    fetchStoreSettings();
    
    const couponParam = searchParams.get("coupon");
    if (couponParam) {
      verifyUrlCoupon(couponParam);
    }
  }, [user, searchParams]);

  const handleApplyCoupon = async () => {
    if (!user) {
      toast.error("Please log in to apply coupons");
      return;
    }
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code");
      return;
    }

    try {
      setCouponError("");
      setCouponSuccess("");
      const response = await basicProvider.postMethod("public/ecommerce/verify-coupon", {
        couponCode: couponCode.trim(),
      });

      if (response.status === "success" && response.data) {
        setAppliedCoupon(response.data);
        setCouponSuccess(response.message || "Coupon applied successfully!");
        toast.success("Coupon applied!");
      } else {
        setCouponError(response.message || "Invalid coupon code");
        setAppliedCoupon(null);
      }
    } catch (error) {
      console.error("Coupon validation error:", error);
      setCouponError("Failed to apply coupon");
      setAppliedCoupon(null);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
    setCouponSuccess("");
    toast.success("Coupon removed");
  };

  // Re-validate coupon if cart changes
  useEffect(() => {
    if (appliedCoupon && couponCode) {
      const revalidate = async () => {
        const response = await basicProvider.postMethod("public/ecommerce/verify-coupon", {
          couponCode: couponCode.trim(),
        });
        if (response.status === "success" && response.data) {
          setAppliedCoupon(response.data);
        } else {
          setAppliedCoupon(null);
          setCouponSuccess("");
          setCouponError("Coupon is no longer applicable due to cart changes");
          toast.error("Coupon removed: " + (response.message || "no longer applicable"));
        }
      };
      revalidate();
    }
  }, [cart]);

  const subtotal = cartTotal || 0;

  const discountAmount = appliedCoupon ? appliedCoupon.discountAmount : 0;
  const taxAmount = ((subtotal - discountAmount) * taxRate) / 100;
  const total = subtotal - discountAmount + taxAmount + shippingCost;

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast.error("Please select a shipping address");
      return;
    }
    if (!selectedPaymentMethod) {
      toast.error("Please select a payment method");
      return;
    }
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setIsProcessing(true);
    try {
      const isRazorpay = selectedPaymentMethod.gatway?.toLowerCase() === "razorpay";

      const response = await basicProvider.postMethod("public/ecommerce/order/place", {
        paymentGateway: selectedPaymentMethod.gatway,
        transactionId: isRazorpay ? "" : (selectedPaymentMethod.gatway === "COD" ? "" : "TXN-" + Math.floor(100000 + Math.random() * 900000)),
        customerId: user?._id || "6945fa14ba3f1cfc95b588fa",
        addressId: selectedAddress._id,
        couponCode: appliedCoupon ? appliedCoupon.couponCode : undefined
      });

      if (response.status === "success" && response.data) {
        const orderData = response.data;

        if (isRazorpay) {
          const rzpLoaded = await loadRazorpayScript();
          if (!rzpLoaded) {
            toast.error("Failed to load Razorpay payment gateway SDK.");
            setIsProcessing(false);
            return;
          }

          const options = {
            key: selectedPaymentMethod.key_id || "",
            amount: Math.round((orderData.total || total) * 100),
            currency: orderData.currency?.code || "INR",
            name: "Kodetri Store",
            description: `Payment for Order #${orderData.order_no}`,
            notes: {
              order_id: orderData._id,
              order_no: orderData.order_no
            },
            prefill: {
              name: user?.name || "",
              email: user?.email || "",
              contact: selectedAddress?.mobile || ""
            },
            theme: {
              color: "#000000"
            },
            handler: async function (paymentResponse) {
              try {
                toast.success("Payment initiated! Awaiting confirmation.");
              } catch (verifyError) {
                console.error("Payment handler error:", verifyError);
                toast.error("An error occurred after payment.");
              } finally {
                await fetchCart();
                router.push(`/order-success/${orderData._id}`);
              }
            },
            modal: {
              ondismiss: function () {
                toast.warning("Payment process interrupted. Your order is pending.");
                fetchCart();
                router.push(`/order-canceled/${orderData._id}`);
              }
            }
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
        } else {
          toast.success(response.message || "Order placed successfully!");
          await fetchCart();
          router.push(`/order-success/${orderData._id}`);
        }
      } else {
        toast.error(response.message || "Failed to place order");
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Order placement error:", error);
      toast.error("An error occurred while placing the order");
      setIsProcessing(false);
    }
  };

  return (
    <main id="wrapper" className="bg-light py-5">
      <div className="container">
        <div className="mb-4">
          <h1 className="h3 fw-bold text-dark m-0">Checkout</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small m-0 mt-1">
              <li className="breadcrumb-item"><Link href="/cart">Cart</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Checkout</li>
            </ol>
          </nav>
        </div>

        <div className="row g-4">
          {/* Left Column - Shipping & Payment */}
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-4">
              
              {/* Shipping Address Section */}
              <section className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="h5 fw-bold m-0 text-dark">
                    <i className="fa-solid fa-map-location-dot me-2 text-primary"></i> Shipping Address
                  </h2>
                  <Link 
                    href="/account/addresses" 
                    className="btn btn-outline-dark btn-sm rounded-pill px-3 fw-semibold"
                    style={{ fontSize: "12px" }}
                  >
                    Manage Addresses
                  </Link>
                </div>

                {addresses.length > 0 ? (
                  <div className="row g-3">
                    {addresses.map((addr) => {
                      const isSelected = selectedAddress?._id === addr._id;
                      return (
                        <div key={addr._id} className="col-md-6">
                          <div 
                            className={`p-3 rounded-3 border h-100 cs-pointer position-relative d-flex flex-column`}
                            style={{
                              transition: "all 0.2s ease",
                              borderColor: isSelected ? "#000" : "#dee2e6",
                              backgroundColor: isSelected ? "#fcfcfc" : "#fff",
                              borderWidth: isSelected ? "2px" : "1px",
                              boxShadow: isSelected ? "0 4px 12px rgba(0,0,0,0.05)" : "none"
                            }}
                            onClick={() => setSelectedAddress(addr)}
                          >
                            {isSelected && (
                              <span 
                                className="position-absolute bg-dark text-white rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: "20px", height: "20px", top: "12px", right: "12px", fontSize: "10px" }}
                              >
                                <i className="fa-solid fa-check"></i>
                              </span>
                            )}
                            <p className="fw-bold text-dark m-0 mb-1">{addr.name}</p>
                            <p className="text-secondary small m-0 mb-2">{addr.mobile}</p>
                            <p className="text-secondary small m-0 flex-grow-1 lh-base" style={{ fontSize: "12px" }}>
                              {addr.address}, {addr.city?.name || addr.city}, {addr.state?.name || addr.state}, {addr.country?.name || addr.country} - {addr.zip}
                            </p>
                            {addr.isDefault && (
                              <span className="badge bg-light text-dark border align-self-start mt-2 px-2 py-1 font-monospace" style={{ fontSize: "9px" }}>
                                DEFAULT
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-5 border rounded bg-light">
                    <p className="text-muted mb-3">No shipping addresses found in your account.</p>
                    <Link href="/account/addresses" className="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
                      Create New Address
                    </Link>
                  </div>
                )}
              </section>

              {/* Payment Methods Section */}
              <section className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <h2 className="h5 fw-bold text-dark mb-4">
                  <i className="fa-solid fa-credit-card me-2 text-primary"></i> Payment Method
                </h2>

                {paymentMethods.length > 0 ? (
                  <div className="d-flex flex-column gap-3">
                    {paymentMethods.map((method) => {
                      const isSelected = selectedPaymentMethod?._id === method._id;
                      return (
                        <div 
                          key={method._id}
                          className={`p-3 rounded-3 border d-flex align-items-center justify-content-between cs-pointer`}
                          style={{
                            transition: "all 0.2s ease",
                            borderColor: isSelected ? "#000" : "#dee2e6",
                            backgroundColor: isSelected ? "#fcfcfc" : "#fff",
                            borderWidth: isSelected ? "2px" : "1px",
                            boxShadow: isSelected ? "0 4px 12px rgba(0,0,0,0.05)" : "none"
                          }}
                          onClick={() => setSelectedPaymentMethod(method)}
                        >
                          <div className="d-flex align-items-center gap-3">
                            <div 
                              className="d-flex align-items-center justify-content-center rounded-2 bg-light border"
                              style={{ width: "50px", height: "50px" }}
                            >
                              {method.gatway?.toLowerCase().includes("paypal") ? (
                                <i className="fa-brands fa-paypal text-primary fa-xl"></i>
                              ) : method.gatway?.toLowerCase().includes("stripe") ? (
                                <i className="fa-brands fa-stripe text-indigo fa-xl" style={{ color: "#635bff" }}></i>
                              ) : method.gatway?.toLowerCase().includes("razorpay") ? (
                                <i className="fa-solid fa-credit-card text-info fa-xl"></i>
                              ) : method.gatway?.toLowerCase().includes("cod") || method.gatway?.toLowerCase().includes("cash") ? (
                                <i className="fa-solid fa-hand-holding-dollar text-success fa-xl"></i>
                              ) : (
                                <i className="fa-solid fa-wallet text-secondary fa-xl"></i>
                              )}
                            </div>
                            <div>
                              <p className="m-0 fw-bold text-dark text-capitalize">{method.gatway}</p>
                              <span className="text-secondary small" style={{ fontSize: "11px" }}>Pay securely via {method.gatway} gateway</span>
                            </div>
                          </div>
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={isSelected}
                            onChange={() => setSelectedPaymentMethod(method)}
                            className="form-check-input cs-pointer"
                            style={{
                              width: "18px",
                              height: "18px",
                              accentColor: "#000"
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-4 border rounded bg-light">
                    <p className="text-muted m-0">No active payment methods found.</p>
                  </div>
                )}
              </section>

            </div>
          </div>

          {/* Right Column - Order Summary & Placing */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: "20px" }}>
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <h2 className="h5 fw-bold text-dark mb-4">Order Summary</h2>

                {/* Items list */}
                <div className="d-flex flex-column gap-3 mb-4 max-height-items" style={{ maxHeight: "240px", overflowY: "auto" }}>
                  {cart.map((item, index) => {
                    const product = item.itemId || {};
                    const variant = item.variantId;
                    const name = product.name || "Product";
                    const image = variant?.gallery?.[0]?.url || product.featured_image?.url || "/images/placeholder.jpg";

                    return (
                      <div key={item._id || index} className="d-flex gap-3 align-items-center">
                        <img 
                          src={image} 
                          alt={name} 
                          width="55" 
                          height="55" 
                          className="rounded border" 
                          style={{ objectFit: "cover" }}
                        />
                        <div className="flex-grow-1 min-width-0">
                          <p className="text-dark fw-semibold small m-0 text-truncate">{name}</p>
                          <span className="text-secondary small" style={{ fontSize: "11px" }}>Qty: {item.quantity}</span>
                        </div>
                        <div className="text-dark fw-bold small">
                          {formatPrice((item.price || 0) * (item.quantity || 1))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Coupon section */}
                <div className="coupon-box my-3 p-3 bg-light rounded-3 border">
                  <p className="fw-semibold text-dark mb-2 small text-uppercase" style={{ letterSpacing: "0.5px" }}>Have a coupon?</p>
                  <div className="d-flex gap-2">
                    <input
                      type="text"
                      className="form-control rounded px-3 py-2 text-uppercase font-monospace"
                      placeholder="ENTER CODE"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={!!appliedCoupon}
                      style={{
                        letterSpacing: "1px",
                        fontWeight: "700",
                        border: "1px solid #ced4da",
                        fontSize: "13px"
                      }}
                    />
                    {appliedCoupon ? (
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm px-3 fw-semibold rounded"
                        onClick={handleRemoveCoupon}
                        style={{ fontSize: "12px", minWidth: "80px" }}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-dark btn-sm px-3 fw-semibold rounded"
                        onClick={handleApplyCoupon}
                        style={{ fontSize: "12px", minWidth: "80px" }}
                      >
                        Apply
                      </button>
                    )}
                  </div>
                  {couponError && (
                    <div className="text-danger small mt-2 fw-medium d-flex align-items-center gap-1" style={{ fontSize: "11px" }}>
                      <i className="fa-solid fa-circle-exclamation"></i>
                      <span>{couponError}</span>
                    </div>
                  )}
                  {couponSuccess && (
                    <div className="text-success small mt-2 fw-medium d-flex align-items-center gap-1" style={{ fontSize: "11px" }}>
                      <i className="fa-solid fa-circle-check"></i>
                      <span>{couponSuccess}</span>
                    </div>
                  )}
                </div>

                <hr className="my-3 text-secondary opacity-25" />

                {/* Financial Breakdowns */}
                <div className="d-flex justify-content-between mb-3 text-secondary small">
                  <span>Subtotal</span>
                  <span className="fw-semibold text-dark">{formatPrice(subtotal)}</span>
                </div>

                {appliedCoupon && (
                  <div className="d-flex justify-content-between mb-3 text-success small">
                    <span>Discount ({appliedCoupon.couponCode || appliedCoupon.code})</span>
                    <span className="fw-semibold">-{formatPrice(discountAmount)}</span>
                  </div>
                )}

                {taxRate > 0 && (
                  <div className="d-flex justify-content-between mb-3 text-secondary small">
                    <span>Tax ({taxRate}%)</span>
                    <span className="fw-semibold text-dark">{formatPrice(taxAmount)}</span>
                  </div>
                )}

                <div className="d-flex justify-content-between mb-3 text-secondary small">
                  <span>Shipping Cost</span>
                  <span className="fw-semibold text-dark">
                    {shippingCost === 0 ? <span className="text-success fw-bold">FREE</span> : formatPrice(shippingCost)}
                  </span>
                </div>

                <div className="d-flex justify-content-between mb-4 pt-3 border-top fw-bold text-dark h5">
                  <span>Total</span>
                  <span className="text-primary fw-bold">{formatPrice(total)}</span>
                </div>

                {/* Place Order CTA */}
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="btn btn-dark w-100 rounded-pill py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
                  disabled={isProcessing || cart.length === 0}
                  style={{ transition: "all 0.2s ease" }}
                >
                  {isProcessing ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Placing Order...
                    </>
                  ) : (
                    <>Place Order</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cs-pointer {
          cursor: pointer;
        }
        .max-height-items::-webkit-scrollbar {
          width: 5px;
        }
        .max-height-items::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.1);
          border-radius: 4px;
        }
      `}</style>
    </main>
  );
}

export default function Checkout() {
  return (
    <Suspense fallback={
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading checkout...</span>
        </div>
      </div>
    }>
      <CheckoutPage />
    </Suspense>
  );
}
