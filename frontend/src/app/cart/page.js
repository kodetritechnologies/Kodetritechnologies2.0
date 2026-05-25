"use client";
import React, { useContext, useEffect, useState } from "react";
import { useCart } from "@/utils/context/CartContext";
import Link from "next/link";
import { AuthContext } from "@/utils/context/AuthContext";
import toast from "react-hot-toast";
import BasicProvider from "@/utils/BasicProvider";
import { useRouter } from "next/navigation";
import { useCurrency } from "@/utils/context/CurrencyContext";

function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    fetchCart,
    cartTotal = 0,
  } = useCart();
  const router = useRouter();
  const { formatPrice } = useCurrency();

  const handleCheckoutClick = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    router.push("/checkout");
  };

  const subtotal = cartTotal || 0;

  return (
    <main id="wrapper">
      <section className="section-shoping-cart each-list-prd flat-spacing-2 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form
                className="form-shop-cart"
                onSubmit={(e) => e.preventDefault()}
              >
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
                        // Dynamically extract data from your nested JSON structure
                        const cartItemId = item._id;
                        const product = item.itemId || {};
                        const variant = item.variantId;

                        const name = product.name || "Unknown Product";
                        const variantName = variant ? variant.name : null;

                        // Fallback image logic: Try variant gallery first, then product featured image
                        const image =
                          variant?.gallery?.[0]?.url ||
                          product.featured_image?.url ||
                          "/images/placeholder.jpg";

                        const price = item.price || 0;
                        const quantity = item.quantity || 1;
                        const itemTotal = price * quantity;

                        return (
                          <tr
                            key={cartItemId || index}
                            className="tf-cart_item each-prd file-delete"
                          >
                            <td className="cart_product">
                              <Link
                                href={`/product/${product.slug || "shop"}`}
                                className="img-prd"
                              >
                                <img
                                  loading="lazy"
                                  width="100"
                                  height="133"
                                  src={image}
                                  alt={name}
                                  style={{ objectFit: "cover" }}
                                />
                              </Link>
                              <div className="infor-prd">
                                <Link
                                  href={`/product/${product.slug || "shop"}`}
                                  className="prd_name fw-medium link lh-24 text-line-clamp-1"
                                >
                                  {name}
                                </Link>

                                {variantName && (
                                  <div className="prd_select text-caption-01 mt-1">
                                    <span className="type-text cl-text-3">
                                      Variant:&nbsp;
                                    </span>
                                    <span className="fw-medium text-dark">
                                      {variantName}
                                    </span>
                                  </div>
                                )}

                                <div
                                  onClick={() => removeFromCart(cartItemId)}
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
                              {formatPrice(price)}
                            </td>
                            <td
                              className="cart_quantity"
                              data-cart-title="Quantity"
                            >
                              <div className="wg-quantity">
                                <button
                                  type="button"
                                  className="btn-quantity minus-quantity cs-pointer"
                                  onClick={() =>
                                    updateQuantity(cartItemId, -1, quantity)
                                  }
                                >
                                  <i className="icon icon-minus"></i>
                                </button>
                                <input
                                  className="quantity-product"
                                  type="text"
                                  name="number"
                                  value={quantity}
                                  readOnly
                                />
                                <button
                                  type="button"
                                  className="btn-quantity plus-quantity cs-pointer"
                                  onClick={() =>
                                    updateQuantity(cartItemId, 1, quantity)
                                  }
                                >
                                  <i className="icon icon-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-end">
                              <div className="cart_total fw-semibold text-primary each-subtotal-price">
                                {formatPrice(itemTotal)}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="fl-sidebar-cart mt-lg-0 sticky-top">
                <div className="box-order-summary ">
                  <h5 className="title mb-20">Order Summary</h5>
                  <div className="subtotal d-flex justify-content-between align-items-center mb-3">
                    <p className="fw-medium lh-24 m-0">Subtotal</p>
                    <span className="total fw-medium lh-24">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <h5 className="total-order d-flex justify-content-between align-items-center mb-4 pt-3 border-top">
                    <span>Total</span>
                    <span className="total each-total-price fw-bold text-primary">
                       {formatPrice(subtotal)}
                    </span>
                  </h5>

                  <div className="list-ver text-center">
                    <button
                      onClick={handleCheckoutClick}
                      className="action-checkout tf-btn w-100 animate-btn text-white d-flex align-items-center justify-content-center border-0"
                    >
                      <span className="fw-semibold">Proceed To Checkout</span>
                    </button>
                    <Link
                      href="/shop"
                      className="link-underline link d-block mt-3"
                    >
                      <span className="fw-semibold">Or Continue Shopping</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CartPage;
