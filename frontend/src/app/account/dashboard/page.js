function page() {
  return (
    <div class="col-lg-8 ms-auto">
      <div class="my-account-content">
        <h4 class="account-title">Dashboard</h4>
        <div class="acount-order_stats">
          <div
            dir="ltr"
            class="swiper tf-swiper"
            data-preview={3}
            data-tablet={3}
            data-mobile-sm={2}
            data-mobile={1}
            data-space-lg={20}
            data-space-md={15}
            data-space={10}
            data-pagination={1}
            data-pagination-sm={2}
            data-pagination-md={3}
            data-pagination-lg={3}
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="order-box">
                  <div class="order_info">
                    <p class="info__label cl-text-2">Awaiting Pickup</p>
                    <h5 class="info__count type-semibold">4</h5>
                  </div>
                  <div class="order_icon">
                    <i class="icon icon-HourglassMedium"></i>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="order-box">
                  <div class="order_info">
                    <p class="info__label cl-text-2">Cancelled Orders</p>
                    <h5 class="info__count type-semibold">12</h5>
                  </div>
                  <div class="order_icon">
                    <i class="icon icon-ReceiptX"></i>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="order-box">
                  <div class="order_info">
                    <p class="info__label cl-text-2">Total Number of Orders</p>
                    <h5 class="info__count type-semibold">200</h5>
                  </div>
                  <div class="order_icon">
                    <i class="icon icon-Package"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="sw-dot-default tf-sw-pagination"></div>
          </div>
        </div>
        <div class="account-my_recent">
          <h6 class="title-case">Recent Orders</h6>
          <div class="overflow-auto">
            <table class="table-my_recent">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Products</th>
                  <th>Pricing</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="tb-order-item">
                  <td class="tb-order_code fw-medium">54312453</td>
                  <td>
                    <div class="tb-order_product">
                      <a href="product-detail.html" class="img-prd">
                        <img
                          loading="lazy"
                          width="48"
                          height="48"
                          src="/assets/images/product/square/product-1_2.jpg"
                          alt="Image"
                        />
                      </a>
                      <div class="infor-prd">
                        <a
                          href="product-detail.html"
                          class="prd_name link fw-medium lh-24"
                        >
                          Faux-leather trousers
                        </a>
                        <p class="prd_type cl-text-2 text-caption-01">
                          Women, Clothing
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="tb-order_price fw-medium ">$45.00</td>
                  <td>
                    <div class="tb-order_status text-label stt-pending">
                      Pending
                    </div>
                  </td>
                </tr>
                <tr class="tb-order-item">
                  <td class="tb-order_code fw-medium">54312452</td>
                  <td>
                    <div class="tb-order_product">
                      <a href="product-detail.html" class="img-prd">
                        <img
                          loading="lazy"
                          width="48"
                          height="48"
                          src="/assets/images/product/square/product-2.jpg"
                          alt="Image"
                        />
                      </a>
                      <div class="infor-prd">
                        <a
                          href="product-detail.html"
                          class="prd_name link fw-medium lh-24"
                        >
                          Contrasting sweatshirt
                        </a>
                        <p class="prd_type cl-text-2 text-caption-01">
                          Women, Clothing
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="tb-order_price fw-medium ">$45.00</td>
                  <td>
                    <div class="tb-order_status text-label stt-delivery">
                      Delivery
                    </div>
                  </td>
                </tr>
                <tr class="tb-order-item" />
                <td class="tb-order_code fw-medium">54312452</td>
                <td>
                  <div class="tb-order_product">
                    <a href="product-detail.html" class="img-prd">
                      <img
                        loading="lazy"
                        width="48"
                        height="48"
                        src="/assets/images/product/square/product-4_2.jpg"
                        alt="Image"
                      />
                    </a>
                    <div class="infor-prd">
                      <a
                        href="product-detail.html"
                        class="prd_name link fw-medium lh-24"
                      >
                        V-neck knitted top
                      </a>
                      <p class="prd_type cl-text-2 text-caption-01">
                        Women, Clothing
                      </p>
                    </div>
                  </div>
                </td>
                <td class="tb-order_price fw-medium ">$45.00</td>
                <td>
                  <div class="tb-order_status text-label stt-completed">
                    Completed
                  </div>
                </td>

                <tr class="tb-order-item">
                  <td class="tb-order_code fw-medium">54312452</td>
                  <td>
                    <div class="tb-order_product">
                      <a href="product-detail.html" class="img-prd">
                        <img
                          loading="lazy"
                          width="48"
                          height="48"
                          src="/assets/images/product/square/product-5_3.jpg"
                          alt="Image"
                        />
                      </a>
                      <div class="infor-prd">
                        <a
                          href="product-detail.html"
                          class="prd_name link fw-medium lh-24"
                        >
                          Contrasting sweatshirt
                        </a>
                        <p class="prd_type cl-text-2 text-caption-01">
                          Women, Clothing
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="tb-order_price fw-medium ">$45.00</td>
                  <td>
                    <div class="tb-order_status text-label stt-pending">
                      Pending
                    </div>
                  </td>
                </tr>
                <tr class="tb-order-item">
                  <td class="tb-order_code fw-medium">54312456</td>
                  <td>
                    <div class="tb-order_product">
                      <a href="product-detail.html" class="img-prd">
                        <img
                          loading="lazy"
                          width="48"
                          height="48"
                          src="/assets/images/product/square/product-7_2.jpg"
                          alt="Image"
                        />
                      </a>
                      <div class="infor-prd">
                        <a
                          href="product-detail.html"
                          class="prd_name link fw-medium lh-24"
                        >
                          Faux-leather trousers
                        </a>
                        <p class="prd_type cl-text-2 text-caption-01">
                          Women, Clothing
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="tb-order_price fw-medium ">$45.00</td>
                  <td>
                    <div class="tb-order_status text-label stt-delivery">
                      Delivery
                    </div>
                  </td>
                </tr>
                <tr class="tb-order-item">
                  <td class="tb-order_code fw-medium">54312457</td>
                  <td>
                    <div class="tb-order_product">
                      <a href="product-detail.html" class="img-prd">
                        <img
                          loading="lazy"
                          width="48"
                          height="48"
                          src="/assets/images/product/square/product-9_2.jpg"
                          alt="Image"
                        />
                      </a>
                      <div class="infor-prd">
                        <a
                          href="product-detail.html"
                          class="prd_name link fw-medium lh-24"
                        >
                          V-neck knitted top
                        </a>
                        <p class="prd_type cl-text-2 text-caption-01">
                          Women, Clothing
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="tb-order_price fw-medium ">$45.00</td>
                  <td>
                    <div class="tb-order_status text-label stt-canceled">
                      Canceled
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
