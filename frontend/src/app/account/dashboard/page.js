import { serviceProvider } from "@/utils/serviceProvider";

async function page() {
  const { getMethod } = await serviceProvider();
  const response = await getMethod("users/customer/dashboard");
  const stats = response?.data || {
    wishlistCount: 0,
    supportTicketCount: 0,
    reviewCount: 0,
    totalOrderCount: 0,
    recentOrders: [],
  };

  const statBoxes = [
    {
      label: "Wishlist",
      count: stats.wishlistCount,
      icon: "icon-Heart",
    },
    {
      label: "Support Ticket",
      count: stats.supportTicketCount,
      icon: "icon-Lifebuoy",
    },
    {
      label: "Reviews",
      count: stats.reviewCount,
      icon: "icon-Star",
    },
    {
      label: "Total Orders",
      count: stats.totalOrderCount,
      icon: "icon-Package",
    },
  ];

  return (
    <div className="col-lg-8 ms-auto">
      <div className="my-account-content">
        <h4 className="account-title">Dashboard</h4>
        <div className="acount-order_stats">
          <div
            dir="ltr"
            className="swiper tf-swiper"
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
            <div className="swiper-wrapper">
              {statBoxes.map((box, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="order-box">
                    <div className="order_info">
                      <p className="info__label cl-text-2">{box.label}</p>
                      <h5 className="info__count type-semibold">{box.count}</h5>
                    </div>
                    <div className="order_icon">
                      <i className={`icon ${box.icon}`}></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sw-dot-default tf-sw-pagination"></div>
          </div>
        </div>
        <div className="account-my_recent">
          <h6 className="title-case">Recent Orders</h6>
          <div className="overflow-auto">
            <table className="table-my_recent">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Products</th>
                  <th>Pricing</th>
                  <th>Order Status</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentOrders && stats.recentOrders.length > 0 ? (
                  stats.recentOrders.map((order) => {
                    const firstItem = order.items && order.items[0];
                    return (
                      <tr className="tb-order-item" key={order._id}>
                        <td className="tb-order_code fw-medium">
                          {order.order_no || order._id.slice(-8)}
                        </td>
                        <td>
                          <div className="tb-order_product">
                            <a href="#" className="img-prd">
                              <img
                                loading="lazy"
                                width="48"
                                height="48"
                                src={
                                  firstItem?.featured_image?.url ||
                                  "/assets/images/product/square/product-1_2.jpg"
                                }
                                alt={firstItem?.name || "Product"}
                              />
                            </a>
                            <div className="infor-prd">
                              <a
                                href="#"
                                className="prd_name link fw-medium lh-24"
                              >
                                {firstItem?.name || "Unknown Product"}
                                {order.items?.length > 1 &&
                                  ` +${order.items.length - 1} more`}
                              </a>
                              <p className="prd_type cl-text-2 text-caption-01">
                                {firstItem?.categories
                                  ?.map((c) => c.name)
                                  .join(", ") || "General"}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="tb-order_price fw-medium ">
                          {order.currency?.symbol || "₹"}
                          {order.total?.toFixed(2)}
                        </td>
                        <td>
                          <div
                            className={`tb-order_status text-label stt-${(order.order_status?.name || "Pending").toLowerCase().replace(" ", "-")}`}
                          >
                            {order.order_status?.name || "Pending"}
                          </div>
                        </td>
                        <td>
                          <div
                            className={`tb-order_status text-label stt-${(order.paymentStatus || order.status || "Pending").toLowerCase().replace(" ", "-")}`}
                            style={{
                              backgroundColor: (order.paymentStatus === "Paid" || order.status === "Paid") ? "#d1e7dd" : "#fff3cd",
                              color: (order.paymentStatus === "Paid" || order.status === "Paid") ? "#0f5132" : "#664d03",
                              borderColor: (order.paymentStatus === "Paid" || order.status === "Paid") ? "#badbcc" : "#ffecb5"
                            }}
                          >
                            {order.paymentStatus || order.status || "Pending"}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      No recent orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
