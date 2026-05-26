import { serviceProvider } from "@/utils/serviceProvider";
import Link from "next/link";

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
            <table className="table-my_recent w-100">
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
                          {firstItem && (
                            <div className="tb-order_product d-flex align-items-center">
                              {firstItem.featured_image?.url && (
                                <Link href={`/product-detail/${firstItem.slug || firstItem._id}`} className="img-prd me-3 flex-shrink-0">
                                  <img
                                    loading="lazy"
                                    width="48"
                                    height="48"
                                    className="rounded border"
                                    style={{ objectFit: "cover" }}
                                    src={firstItem.featured_image.url}
                                    alt={firstItem.name || firstItem.title || "Product"}
                                  />
                                </Link>
                              )}
                              <div className="infor-prd flex-grow-1" style={{ minWidth: 0 }}>
                                <Link
                                  href={`/product-detail/${firstItem.slug || firstItem._id}`}
                                  className="prd_name link fw-medium lh-24 d-block text-truncate"
                                  title={firstItem.name || firstItem.title || "Product"}
                                >
                                  {firstItem.name || firstItem.title || "Unknown Product"}
                                </Link>
                                {order.items?.length > 1 && (
                                  <div className="text-muted small mt-1">
                                    + {order.items.length - 1} more item{order.items.length - 1 !== 1 ? 's' : ''}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
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
