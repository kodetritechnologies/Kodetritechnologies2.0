import IntrestedProduct from "@/components/Cart/IntrestedProduct";

function page() {
  return (
    <main id="wrapper">
      <section className="section-shoping-cart each-list-prd flat-spacing-2 pb-0">
        <div className="flat-spacing-2 pt-0">
          <div className="container">
            <div className="tf-cart-notification">
              <div className="count-text">
                <div className="ic">🔥</div>
                <div className="">
                  Your cart will expire in&nbsp;
                  <div
                    className="js-countdown time-count cd-has-zero cd-no"
                    data-timer="288"
                    data-labels=":,:,:,"
                  ></div>
                  &nbsp;minutes! Please checkout now before your items sell out!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form className="form-shop-cart">
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
                      <tr className="tf-cart_item each-prd file-delete">
                        <td className="cart_product">
                          <a href="#" className="img-prd">
                            <img
                              loading="lazy"
                              width="100"
                              height="133"
                              src="/assets/images/product/product-3.jpg"
                              alt="Image"
                            />
                          </a>
                          <div className="infor-prd">
                            <a
                              href="product-detail.html"
                              className="prd_name fw-medium link lh-24"
                            >
                              V-neck cotton T-shirt
                            </a>
                            <div className="prd_select text-caption-01">
                              <span className="type-text cl-text-3">
                                Color:&nbsp;
                              </span>
                              <div className="type-select">
                                <select className="bg-white">
                                  <option selected="selected">
                                    Light Gray
                                  </option>
                                  <option>Charcoal</option>
                                  <option>Beige</option>
                                  <option>Taupe</option>
                                  <option>Sage</option>
                                </select>
                              </div>
                            </div>
                            <div className="prd_select text-caption-01">
                              <span className="type-text cl-text-3">
                                Size:&nbsp;
                              </span>
                              <div className="type-select">
                                <select className="bg-white">
                                  <option selected="selected">Small</option>
                                  <option>Medium</option>
                                  <option>Large</option>
                                  <option>Extra Large</option>
                                </select>
                              </div>
                            </div>
                            <div className="cart_remove tf-btn-line-3 type-primary remove">
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
                          $29.99
                        </td>
                        <td
                          className="cart_quantity"
                          data-cart-title="Quantity"
                        >
                          <div className="wg-quantity">
                            <button
                              type="button"
                              className="btn-quantity minus-quantity"
                            >
                              <i className="icon icon-minus"></i>
                            </button>
                            <input
                              className="quantity-product"
                              type="text"
                              name="number"
                              value="1"
                            />
                            <button
                              type="button"
                              className="btn-quantity plus-quantity"
                            >
                              <i className="icon icon-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="cart_total fw-semibold text-primary each-subtotal-price"></div>
                        </td>
                      </tr>
                      <tr className="tf-cart_item each-prd file-delete">
                        <td className="cart_product">
                          <a href="#" className="img-prd">
                            <img
                              loading="lazy"
                              width="100"
                              height="133"
                              src="/assets/images/product/product-6.jpg"
                              alt="Image"
                            />
                          </a>
                          <div className="infor-prd">
                            <a
                              href="product-detail.html"
                              className="prd_name fw-medium link lh-24"
                            >
                              Square metallic sunglasses
                            </a>
                            <div className="prd_select text-caption-01">
                              <span className="type-text cl-text-3">
                                Color:&nbsp;
                              </span>
                              <div className="type-select">
                                <select className="bg-white">
                                  <option selected="selected">
                                    Light Gray
                                  </option>
                                  <option>Charcoal</option>
                                  <option>Beige</option>
                                  <option>Taupe</option>
                                  <option>Sage</option>
                                </select>
                              </div>
                            </div>
                            <div className="prd_select text-caption-01">
                              <span className="type-text cl-text-3">
                                Size:&nbsp;
                              </span>
                              <div className="type-select">
                                <select className="bg-white">
                                  <option selected="selected">Small</option>
                                  <option>Medium</option>
                                  <option>Large</option>
                                  <option>Extra Large</option>
                                </select>
                              </div>
                            </div>
                            <div className="cart_remove tf-btn-line-3 type-primary remove">
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
                          $69.99
                        </td>
                        <td
                          className="cart_quantity"
                          data-cart-title="Quantity"
                        >
                          <div className="wg-quantity">
                            <button
                              type="button"
                              className="btn-quantity minus-quantity"
                            >
                              <i className="icon icon-minus"></i>
                            </button>
                            <input
                              className="quantity-product"
                              type="text"
                              name="number"
                              value="1"
                            />
                            <button
                              type="button"
                              className="btn-quantity plus-quantity"
                            >
                              <i className="icon icon-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="cart_total fw-semibold text-primary each-subtotal-price"></div>
                        </td>
                      </tr>
                      <tr className="tf-cart_item each-prd file-delete">
                        <td className="cart_product">
                          <a href="#" className="img-prd">
                            <img
                              loading="lazy"
                              width="100"
                              height="133"
                              src="/assets/images/product/product-8.jpg"
                              alt="Image"
                            />
                          </a>
                          <div className="infor-prd">
                            <a
                              href="product-detail.html"
                              className="prd_name fw-medium link lh-24"
                            >
                              Oval shoulder bag
                            </a>
                            <div className="prd_select text-caption-01">
                              <span className="type-text cl-text-3">
                                Color:&nbsp;
                              </span>
                              <div className="type-select">
                                <select className="bg-white">
                                  <option selected="selected">
                                    Light Gray
                                  </option>
                                  <option>Charcoal</option>
                                  <option>Beige</option>
                                  <option>Taupe</option>
                                  <option>Sage</option>
                                </select>
                              </div>
                            </div>
                            <div className="prd_select text-caption-01">
                              <span className="type-text cl-text-3">
                                Size:&nbsp;
                              </span>
                              <div className="type-select">
                                <select className="bg-white">
                                  <option selected="selected">Small</option>
                                  <option>Medium</option>
                                  <option>Large</option>
                                  <option>Extra Large</option>
                                </select>
                              </div>
                            </div>
                            <div className="cart_remove tf-btn-line-3 type-primary remove">
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
                          $49.99
                        </td>
                        <td
                          className="cart_quantity"
                          data-cart-title="Quantity"
                        >
                          <div className="wg-quantity">
                            <button
                              type="button"
                              className="btn-quantity minus-quantity"
                            >
                              <i className="icon icon-minus"></i>
                            </button>
                            <input
                              className="quantity-product"
                              type="text"
                              name="number"
                              value="1"
                            />
                            <button
                              type="button"
                              className="btn-quantity plus-quantity"
                            >
                              <i className="icon icon-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="cart_total fw-semibold text-primary each-subtotal-price"></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="ip-discount-code">
                  <input
                    type="text"
                    placeholder="Add voucher discount"
                    required=""
                  />
                  <button className="tf-btn animate-btn" type="submit">
                    Apply Code
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="fl-sidebar-cart mt-lg-0 sticky-top">
                <div className="box-order-summary ">
                  <div className="notification-progress">
                    <p>
                      Buy
                      <span className="text-primary fw-bold">$70.00</span>
                      more to get freeship
                    </p>
                    <div className="progress-cart">
                      <div
                        className="value"
                        style={{ width: "50%" }}
                        data-progress={50}
                      >
                        <span className="round"></span>
                      </div>
                    </div>
                  </div>
                  <h5 className="title mb-20">Order Summary</h5>
                  <div className="subtotal d-flex justify-content-between align-items-center">
                    <p className="fw-medium lh-24">Subtotal</p>
                    <span className="total fw-medium lh-24">-$80.00</span>
                  </div>
                  <div className="discount d-flex justify-content-between align-items-center">
                    <p className="fw-medium lh-24">Discounts</p>
                    <span className="total fw-medium lh-24">-$80.00</span>
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
                          checked=""
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
                    <span className="total each-total-price"></span>
                  </h5>
                  <fieldset className="checkbox-wrap check-agree">
                    <input
                      type="checkbox"
                      name="agree"
                      className="tf-check-rounded"
                      id="checkOutAgree"
                    />
                    <label htmlFor="checkOutAgree">
                      I agree with the
                      <a
                        href="#"
                        className="fw-medium text-decoration-underline link"
                      >
                        terms and conditions
                      </a>
                    </label>
                  </fieldset>
                  <div className="list-ver text-center">
                    <button
                      type="submit"
                      id="checkout-btn"
                      className="action-checkout tf-btn w-100 animate-btn"
                    >
                      <span className="fw-semibold">Process To Checkout</span>
                    </button>
                    <a href="shop-default.html" className="link-underline link">
                      <span className="fw-semibold ">Or Continue Shopping</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <IntrestedProduct />
    </main>
  );
}

export default page;
