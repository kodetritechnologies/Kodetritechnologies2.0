"use client";
import React from "react";
import { useCart } from "@/utils/context/CartContext";
import Link from "next/link";

function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Helper to safely extract name, image, price, and variant info from guest vs authenticated format
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

  return (
    <div
      className="offcanvas offcanvas-end popup-shopping-cart"
      id="shoppingCart"
    >
      <div className="canvas-wrapper">
        <div className="popup-header">
          <div className="d-flex align-items-center justify-content-between mb-12">
            <h5 className="title">Shopping Cart</h5>
            <span
              className="icon-X2 icon-close-popup"
              data-bs-dismiss="offcanvas"
            ></span>
          </div>
        </div>
        <div className="wrap">
          <div className="tf-mini-cart-wrap wrap-empty_text">
            {cart.length === 0 ? (
              // Empty State
              <div className="tf-mini-cart-main">
                <div className="tf-mini-cart-sroll">
                  <div className="tf-mini-cart-items list-empty">
                    <div className="box-text_empty type-shop_cart">
                      <div className="shop-empty_top">
                        <span className="icon">
                          <i className="icon-Handbag"></i>
                        </span>
                        <h4 className="text-emp">Your cart is empty</h4>
                        <p className="cl-text-2">
                          Your cart is currently empty. Let us assist you in
                          finding the right product
                        </p>
                      </div>
                      <div className="shop-empty_bot">
                        <Link
                          href="/shop"
                          className="tf-btn animate-btn"
                          data-bs-dismiss="offcanvas"
                        >
                          Shopping{" "}
                        </Link>
                        <Link
                          href="/"
                          className="tf-btn btn-stroke"
                          data-bs-dismiss="offcanvas"
                        >
                          Back to home{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Cart with Items
              <>
                <div className="tf-mini-cart-main">
                  <div className="tf-mini-cart-sroll">
                    <div className="tf-mini-cart-items">
                      {cart.map((item, index) => {
                        const { name, image, variantName, price } = getProductInfo(item);
                        const itemKey = item._id || `${item.itemId}-${variantName || ""}-${index}`;

                        return (
                          <div key={itemKey} className="tf-mini-cart-item">
                            <div className="tf-mini-cart-image">
                              <img
                                loading="lazy"
                                width="100"
                                height="133"
                                src={image}
                                alt={name}
                              />
                            </div>
                            <div className="tf-mini-cart-info flex-grow-1">
                              <div className="d-flex align-items-start justify-content-between gap-2 w-100">
                                <Link
                                  href="/shop"
                                  className="name fw-medium link text-line-clamp-1 flex-grow-1 mb-0"
                                  data-bs-dismiss="offcanvas"
                                >
                                  {name}
                                </Link>
                                <div
                                  onClick={() => removeFromCart(item._id || item.itemId)}
                                  className="tf-btn-line-3 type-primary remove-react cs-pointer flex-shrink-0"
                                >
                                  <span className="text-caption-01 fw-semibold">
                                    Remove
                                  </span>
                                </div>
                              </div>

                              {variantName && (
                                <div className="tf-prd-select text-caption-01 mt-1 w-100">
                                  <span className="type-text cl-text-3">Variant:&nbsp;</span>
                                  <span className="fw-medium text-dark">{variantName}</span>
                                </div>
                              )}

                              <div className="fw-semibold d-flex align-items-center justify-content-between gap-4 mt-2 w-100">
                                <div className="wg-quantity wg-quantity-sm d-flex align-items-center">
                                  <span
                                    className="btn-quantity minus-quantity-react d-flex align-items-center justify-content-center cs-pointer fs-6"
                                    onClick={() => updateQuantity(item._id || item.itemId, -1, item.quantity)}
                                    style={{ cursor: "pointer", userSelect: "none" }}
                                  >
                                    -
                                  </span>
                                  <input
                                    className="quantity-product text-center fw-medium"
                                    type="text"
                                    value={item.quantity}
                                    readOnly
                                    style={{ width: "30px", border: "none", background: "transparent" }}
                                  />
                                  <span
                                    className="btn-quantity plus-quantity-react d-flex align-items-center justify-content-center cs-pointer fs-6"
                                    onClick={() => updateQuantity(item._id || item.itemId, 1, item.quantity)}
                                    style={{ cursor: "pointer", userSelect: "none" }}
                                  >
                                    +
                                  </span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                  <span className="text-caption-01 cl-text-3 fw-normal">x</span>
                                  <span className="price tf-mini-card-price">${price.toFixed(2)}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="tf-mini-cart-bottom box-empty_clear">
                  <div className="tf-mini-cart-bottom-wrap">
                    <div className="tf-mini-cart-total">
                      <h5 className="text-total d-flex align-content-center justify-content-between">
                        <span className="subtotal">Subtotal</span>
                        <span className="total-price tf-totals-total-value">
                          ${subtotal.toFixed(2)}
                        </span>
                      </h5>
                    </div>
                    <div className="tf-mini-cart-view-checkout">
                      <Link
                        href="/cart"
                        className="tf-btn btn-stroke"
                        data-bs-dismiss="offcanvas"
                      >
                        View cart
                      </Link>
                      <Link
                        href="/checkout"
                        className="tf-btn animate-btn"
                        data-bs-dismiss="offcanvas"
                      >
                        Check Out
                      </Link>
                    </div>
                    <Link
                      href="/shop"
                      className="d-flex justify-content-center fw-semibold text-center link"
                      data-bs-dismiss="offcanvas"
                    >
                      Or Continue Shopping
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
