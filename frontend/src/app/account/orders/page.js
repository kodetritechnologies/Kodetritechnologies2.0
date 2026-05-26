"use client";
import BasicProvider from "@/utils/BasicProvider";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function OrdersPage() {
  const basicProvider = BasicProvider();
  const searchParams = useSearchParams();
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchOrders = async (page = 1) => {
    setLoading(true);
    try {
      const res = await basicProvider.getMethod(`public/ecommerce/order?page=${page}&count=10`);
      if (res.status === "success") {
        setOrders(res.data.data || []);
        setPagination(res.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const page = searchParams.get("page") || 1;
    fetchOrders(page);
  }, [searchParams]);

  return (
    <div className="col-lg-8 ms-auto">
      <div className="my-account-content">
        <div className="account-my_recent">
          <h6 className="title-case">Orders</h6>
          <div className="overflow-auto">
            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : orders.length > 0 ? (
              <>
                <table className="table-my_recent w-100">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Products</th>
                      <th>Pricing</th>
                      <th>Status</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id} className="tb-order-item">
                        <td className="tb-order_code fw-medium">
                          {order.order_no}
                        </td>
                        <td>
                          {order.items?.length > 0 && (
                            <div className="tb-order_product d-flex align-items-center">
                              {order.items[0].featured_image?.url && (
                                <Link href={`/product-detail/${order.items[0].slug || order.items[0]._id}`} className="img-prd me-3 flex-shrink-0">
                                  <img
                                    loading="lazy"
                                    width="48"
                                    height="48"
                                    className="rounded border"
                                    style={{ objectFit: "cover" }}
                                    src={order.items[0].featured_image.url}
                                    alt={order.items[0].name || order.items[0].title || "Image"}
                                  />
                                </Link>
                              )}
                              <div className="infor-prd flex-grow-1" style={{ minWidth: 0 }}>
                                <Link
                                  href={`/product-detail/${order.items[0].slug || order.items[0]._id}`}
                                  className="prd_name link fw-medium lh-24 d-block text-truncate"
                                  title={order.items[0].name || order.items[0].title || "Product"}
                                >
                                  {order.items[0].name || order.items[0].title || "Product"}
                                </Link>
                                {order.items.length > 1 && (
                                  <div className="text-muted small mt-1">
                                    + {order.items.length - 1} more item{order.items.length - 1 !== 1 ? 's' : ''}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </td>
                        <td className="tb-order_price fw-medium ">
                          {order.currency?.symbol || "$"}{order.total?.toFixed(2)}
                        </td>
                        <td>
                          <div className={`tb-order_status text-label stt-${order.order_status?.name?.toLowerCase() || 'pending'}`}>
                            {order.order_status?.name || 'Pending'}
                          </div>
                        </td>
                        <td className="text-end align-middle">
                          <Link href={`/account/orders/${order._id}`} className="btn btn-sm btn-outline-secondary rounded-circle" style={{ width: '32px', height: '32px', padding: '0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} title="View Order">
                            <i className="fa-regular fa-eye"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pb-4 mt-4">
                  <Pagination data={pagination} />
                </div>
              </>
            ) : (
              <div className="text-center py-5">
                <h5 className="text-dark fw-bold mb-1">No Orders Found</h5>
                <p className="text-muted small">You haven't placed any orders yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
