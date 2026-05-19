"use client";
import React, { useContext } from "react";
import { useCart } from "@/utils/context/CartContext";
import Link from "next/link";
import { AuthContext } from "@/utils/context/AuthContext";
import toast from "react-hot-toast";

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [shippingMethod, setShippingMethod] = React.useState("free");
  const { user } = useContext(AuthContext);
  const [showCheckoutModal, setShowCheckoutModal] = React.useState(false);
  const [iframeLoading, setIframeLoading] = React.useState(true);

  const handleCheckoutClick = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please sign in to proceed to checkout.", {
        id: "checkout-auth-error",
      });
      const signInBtn = document.querySelector('[data-bs-target="#sign"]');
      if (signInBtn) {
        signInBtn.click();
      } else {
        const modalElement = document.getElementById("sign");
        if (modalElement) {
          if (window.bootstrap) {
            const modal = new window.bootstrap.Modal(modalElement);
            modal.show();
          } else {
            modalElement.classList.add("show");
            modalElement.style.display = "block";
            document.body.classList.add("modal-open");
          }
        }
      }
      return;
    }
    setIframeLoading(true);
    setShowCheckoutModal(true);
  };

  React.useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === "CHECKOUT_SUCCESS") {
        toast.success("Order placed successfully! Thank you for your purchase.", {
          id: "checkout-success-toast",
          duration: 5000,
        });
        setShowCheckoutModal(false);
        // Refresh page to clear out checkout cart items and trigger status updates
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const getProductInfo = (item) => {
    const isPopulated = item.itemId && typeof item.itemId === "object";
    const name = isPopulated ? item.itemId.name : (item.productDetails?.name || "Product");
    const image = isPopulated
      ? (item.itemId.featured_image?.url || "/assets/images/product/product-3.jpg")
      : (item.productDetails?.featured_image?.url || "/assets/images/product/product-3.jpg");
    const variantName = isPopulated
      ? (item.variantId?.name || "")
      : (item.productDetails?.variantName || "");
    const price = item.price || 0;

    return { name, image, variantName, price };
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0);

  // Free shipping progress tracking
  const freeShipThreshold = 100.0;
  const isFreeShip = subtotal >= freeShipThreshold;
  const progressPercent = Math.min((subtotal / freeShipThreshold) * 100, 100);
  const neededForFreeShip = freeShipThreshold - subtotal;

  // Calculate final total based on shipping method
  const shippingCost = isFreeShip ? 0 : (shippingMethod === "free" ? 0 : 35.0);
  const total = subtotal + shippingCost;

  if (cart.length === 0) {
    return (
      <main id="wrapper">
        <section className="section-shoping-cart each-list-prd flat-spacing-2 pb-0">
          <div className="container">
            <div className="text-center py-5">
              <span className="icon fs-1 text-muted mb-3 d-inline-block">
                <i className="icon-Handbag"></i>
              </span>
              <h4 className="text-emp mb-2">Your cart is empty</h4>
              <p className="cl-text-2 mb-4">
                Your cart is currently empty. Let us assist you in finding the right product.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link href="/shop" className="tf-btn animate-btn px-5 py-3 text-white">
                  Start Shopping
                </Link>
                <Link href="/" className="tf-btn btn-stroke px-5 py-3">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="wrapper">
      <section className="section-shoping-cart each-list-prd flat-spacing-2 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form className="form-shop-cart" onSubmit={(e) => e.preventDefault()}>
                <div className="overflow-auto">
                  <table className="tf-table-page-cart">
                    <thead>
                      <tr>
                        <th>
                          <p className="h6 fw-medium">Products</p>
                        </th>
                        <th>
                          <p className="h6 fw-medium">Price</p>
                        </th>
                        <th>
                          <p className="h6 fw-medium">Quantity</p>
                        </th>
                        <th className="text-end">
                          <p className="h6 fw-medium">Total Price</p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => {
                        const { name, image, variantName, price } = getProductInfo(item);
                        const itemKey = item._id || `${item.itemId}-${variantName || ""}-${index}`;
                        const itemTotal = price * item.quantity;

                        return (
                          <tr key={itemKey} className="tf-cart_item each-prd file-delete">
                            <td className="cart_product">
                              <Link href="/shop" className="img-prd">
                                <img
                                  loading="lazy"
                                  width="100"
                                  height="133"
                                  src={image}
                                  alt={name}
                                />
                              </Link>
                              <div className="infor-prd">
                                <Link
                                  href="/shop"
                                  className="prd_name fw-medium link lh-24 text-line-clamp-1"
                                >
                                  {name}
                                </Link>

                                {variantName && (
                                  <div className="prd_select text-caption-01 mt-1">
                                    <span className="type-text cl-text-3">
                                      Variant:&nbsp;
                                    </span>
                                    <span className="fw-medium text-dark">{variantName}</span>
                                  </div>
                                )}

                                <div
                                  onClick={() => removeFromCart(item._id || item.itemId)}
                                  className="cart_remove tf-btn-line-3 type-primary remove cs-pointer"
                                >
                                  <span className="text-caption-01 fw-semibold">
                                    Remove
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td
                              className="cart_price each-price fw-semibold text-primary"
                              data-cart-title="Price"
                            >
                              ${price.toFixed(2)}
                            </td>
                            <td
                              className="cart_quantity"
                              data-cart-title="Quantity"
                            >
                              <div className="wg-quantity">
                                <button
                                  type="button"
                                  className="btn-quantity minus-quantity cs-pointer"
                                  onClick={() => updateQuantity(item._id || item.itemId, -1, item.quantity)}
                                >
                                  <i className="icon icon-minus"></i>
                                </button>
                                <input
                                  className="quantity-product"
                                  type="text"
                                  name="number"
                                  value={item.quantity}
                                  readOnly
                                />
                                <button
                                  type="button"
                                  className="btn-quantity plus-quantity cs-pointer"
                                  onClick={() => updateQuantity(item._id || item.itemId, 1, item.quantity)}
                                >
                                  <i className="icon icon-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-end">
                              <div className="cart_total fw-semibold text-primary each-subtotal-price">
                                ${itemTotal.toFixed(2)}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="ip-discount-code">
                  <input
                    type="text"
                    placeholder="Add voucher discount"
                  />
                  <button className="tf-btn animate-btn text-white" type="button">
                    Apply Code
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="fl-sidebar-cart mt-lg-0 sticky-top">
                <div className="box-order-summary ">
                  <div className="notification-progress">
                    {isFreeShip ? (
                      <p className="fw-medium text-success mb-2">
                        🎉 You qualify for <span className="fw-bold text-primary">Free Shipping!</span>
                      </p>
                    ) : (
                      <p className="mb-2">
                        Buy&nbsp;
                        <span className="text-primary fw-bold">${neededForFreeShip.toFixed(2)}</span>
                        &nbsp;more to get freeship
                      </p>
                    )}
                    <div className="progress-cart">
                      <div
                        className="value"
                        style={{ width: `${progressPercent}%` }}
                        data-progress={progressPercent}
                      >
                        <span className="round"></span>
                      </div>
                    </div>
                  </div>
                  <h5 className="title mb-20">Order Summary</h5>
                  <div className="subtotal d-flex justify-content-between align-items-center">
                    <p className="fw-medium lh-24">Subtotal</p>
                    <span className="total fw-medium lh-24">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="discount d-flex justify-content-between align-items-center">
                    <p className="fw-medium lh-24">Discounts</p>
                    <span className="total fw-medium lh-24">$0.00</span>
                  </div>
                  <div className="ship">
                    <p className="fw-medium lh-24">Shipping</p>
                    <div className="box-check-payment flex-grow-1">
                      <fieldset className="ship-item">
                        <input
                          type="radio"
                          name="ship-check"
                          className="tf-check-rounded"
                          id="free"
                          checked={isFreeShip || shippingMethod === "free"}
                          disabled={isFreeShip}
                          onChange={() => setShippingMethod("free")}
                        />
                        <label htmlFor="free">
                          <span>Free Shipping</span>
                          <span className="price">$0.00</span>
                        </label>
                      </fieldset>
                      <fieldset className="ship-item">
                        <input
                          type="radio"
                          name="ship-check"
                          className="tf-check-rounded"
                          id="local"
                          checked={!isFreeShip && shippingMethod === "local"}
                          disabled={isFreeShip}
                          onChange={() => setShippingMethod("local")}
                        />
                        <label htmlFor="local">
                          <span>Local:</span>
                          <span className="price">$35.00</span>
                        </label>
                      </fieldset>
                      <fieldset className="ship-item">
                        <input
                          type="radio"
                          name="ship-check"
                          className="tf-check-rounded"
                          id="rate"
                          checked={!isFreeShip && shippingMethod === "rate"}
                          disabled={isFreeShip}
                          onChange={() => setShippingMethod("rate")}
                        />
                        <label htmlFor="rate">
                          <span>Flat Rate:</span>
                          <span className="price">$35.00</span>
                        </label>
                      </fieldset>
                    </div>
                  </div>
                  <h5 className="total-order d-flex justify-content-between align-items-center">
                    <span>Total</span>
                    <span className="total each-total-price">${total.toFixed(2)}</span>
                  </h5>
                  <div className="list-ver text-center">
                    <button
                      id="checkout-btn"
                      onClick={handleCheckoutClick}
                      className="action-checkout tf-btn w-100 animate-btn text-white d-flex align-items-center justify-content-center border-0"
                    >
                      <span className="fw-semibold">Process To Checkout</span>
                    </button>
                    <Link href="/shop" className="link-underline link d-block mt-3">
                      <span className="fw-semibold">Or Continue Shopping</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Glassmorphic Secure Checkout Modal */}
      {showCheckoutModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 99999,
          padding: "20px",
          transition: "opacity 0.3s ease",
        }}>
          {/* Modal Content Card */}
          <div style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "24px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            width: "100%",
            maxWidth: "600px",
            height: "750px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            position: "relative",
            animation: "modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>
            {/* Modal Header */}
            <div style={{
              padding: "20px 24px",
              borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#ffffff",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{
                  background: "#e0f2fe",
                  color: "#0284c7",
                  padding: "8px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </span>
                <div>
                  <h4 style={{ margin: 0, fontWeight: 700, fontSize: "1.15rem", color: "#0f172a" }}>Secure Checkout</h4>
                  <p style={{ margin: 0, fontSize: "0.75rem", color: "#64748b" }}>SSL Encrypted & Secure Connection</p>
                </div>
              </div>
              <button
                onClick={() => setShowCheckoutModal(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "24px",
                  color: "#64748b",
                  transition: "color 0.2s ease",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => e.target.style.color = "#0f172a"}
                onMouseLeave={(e) => e.target.style.color = "#64748b"}
              >
                <i className="icon-X2"></i>
              </button>
            </div>

            {/* Modal Body (Iframe) */}
            <div style={{ flex: 1, position: "relative", background: "#f8fafc" }}>
              {iframeLoading && (
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "#f8fafc",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  zIndex: 2,
                }}>
                  {/* Premium Spinner */}
                  <div style={{
                    width: "48px",
                    height: "48px",
                    border: "4px solid #e2e8f0",
                    borderTop: "4px solid #0284c7",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}></div>
                  <span style={{ fontWeight: 600, color: "#475569", fontSize: "0.9rem" }}>Preparing secure checkout page...</span>
                </div>
              )}
              <iframe
                src={`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:7777"}/api/public/ecommerce/order/payment?customerId=${user?._id || ""}`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: iframeLoading ? "none" : "block",
                }}
                onLoad={() => setIframeLoading(false)}
              />
            </div>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes modalSlideUp {
              from {
                opacity: 0;
                transform: translateY(20px) scale(0.97);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}} />
        </div>
      )}
    </main>
  );
}

export default CartPage;
