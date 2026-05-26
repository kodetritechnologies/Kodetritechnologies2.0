"use client";
import BasicProvider from "@/utils/BasicProvider";
import { useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils/helpers/dateHelper";

function OrderDetailsPage({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const basicProvider = BasicProvider();
  const router = useRouter();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDownloadInvoice = async () => {
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.getElementById("invoice-content");
      const opt = {
        margin: 0.5,
        filename: `Invoice_${order?.order_no || order?._id.slice(-8)}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      try {
        const res = await basicProvider.getMethod(
          `public/ecommerce/order/detail/${id}`,
        );
        if (res.status === "success") {
          setOrder(res.data);
        } else {
          router.push("/account/orders");
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchOrderDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="col-lg-8 ms-auto">
        <div className="my-account-content d-flex justify-content-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return null;
  }

  return (
    <div className="col-lg-8 ms-auto">
      <div className="my-account-content" id="invoice-content">
        <div className="d-flex justify-content-between align-items-center mb-4" data-html2canvas-ignore="true">
          <h4 className="account-title mb-0">Order Details</h4>
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-outline-info btn-sm rounded-pill" onClick={handleDownloadInvoice}>
              <i className="fa-solid fa-file-invoice me-2"></i>Download Invoice
            </button>
            <button className="btn btn-outline-success btn-sm rounded-pill" onClick={() => alert("Tracking feature coming soon!")}>
              <i className="fa-solid fa-truck-fast me-2"></i>Track Order
            </button>
            <Link
              href="/account/orders"
              className="btn btn-outline-primary btn-sm rounded-pill"
            >
              <i className="fa-solid fa-arrow-left me-2"></i>Back to Orders
            </Link>
          </div>
        </div>

        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4">
            <div className="row g-4">
              <div className="col-md-6">
                <h6 className="text-muted small text-uppercase mb-2">
                  Order Information
                </h6>
                <div className="fw-bold fs-5 mb-1 text-primary">
                  #{order?.order_no || order?._id.slice(-8)}
                </div>
                <div className="text-muted small mb-2">
                  Placed on: {formatDate(order?.createdAt)}
                </div>
                <div className="d-flex gap-2">
                  <span
                    className={`badge bg-${order?.order_status?.name === "Completed" ? "success" : "warning"}-subtle text-${order?.order_status?.name === "Completed" ? "success" : "warning"} border px-2 py-1`}
                  >
                    {order?.order_status?.name || "Pending"}
                  </span>
                  <span
                    className={`badge bg-${order?.payment_status?.name === "Paid" ? "success" : "secondary"}-subtle text-${order.payment_status?.name === "Paid" ? "success" : "secondary"} border px-2 py-1`}
                  >
                    Payment: {order?.payment_status?.name || "Unpaid"}
                  </span>
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                {order?.address && (
                  <>
                    <h6 className="text-muted small text-uppercase mb-2">
                      Shipping Address
                    </h6>
                    <div className="text-muted small">
                      {order?.address.address}
                      <br />
                      {order?.address?.city?.name}, {order?.address?.state?.name}{" "}
                      {order?.address?.zip}
                      <br />
                      {order?.address?.country?.name}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-header bg-transparent border-bottom p-4">
            <h5 className="mb-0 fw-bold">Items Ordered</h5>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th className="px-4 py-3 text-muted small text-uppercase">
                      Product
                    </th>
                    <th className="px-4 py-3 text-muted small text-uppercase text-end">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order.items?.map((item, idx) => (
                    <tr key={`${item._id}-${idx}`} className="border-bottom">
                      <td className="px-4 py-3">
                        <div className="d-flex align-items-center">
                          {item.featured_image?.url && (
                            <div className="me-3 flex-shrink-0">
                              <img
                                src={item.featured_image.url}
                                alt={item.name}
                                className="rounded border"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          )}
                          <div>
                            <Link
                              href={`/product-detail/${item.slug || item._id}`}
                              className="fw-bold text-dark text-decoration-none"
                            >
                              {typeof item.name === 'string' ? item.name : (typeof item.title === 'string' ? item.title : "Product")}
                            </Link>
                            {Array.isArray(item.categories) &&
                              item.categories.length > 0 && (
                                <div className="small text-muted mt-1">
                                  {item.categories
                                    .map((c) =>
                                      c &&
                                      typeof c === "object" &&
                                      typeof c.name === "string"
                                        ? c.name
                                        : "",
                                    )
                                    .filter(Boolean)
                                    .join(", ")}
                                </div>
                              )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-end fw-medium">
                        {order.currency?.symbol || "$"}
                        {item.price?.toFixed(2) || "0.00"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col-md-5">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <h5 className="mb-4 fw-bold">Order Summary</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal</span>
                  <span className="fw-medium">
                    {order.currency?.symbol || "$"}
                    {order.subtotal?.toFixed(2) || "0.00"}
                  </span>
                </div>
                {order.shipping > 0 && (
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Shipping</span>
                    <span className="fw-medium">
                      {order.currency?.symbol || "$"}
                      {order.shipping.toFixed(2)}
                    </span>
                  </div>
                )}
                {order.tax > 0 && (
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Tax</span>
                    <span className="fw-medium">
                      {order.currency?.symbol || "$"}
                      {order.tax.toFixed(2)}
                    </span>
                  </div>
                )}
                {order.discountAmount > 0 && (
                  <div className="d-flex justify-content-between mb-2 text-success">
                    <span>Discount</span>
                    <span className="fw-medium">
                      -{order.currency?.symbol || "$"}
                      {order.discountAmount.toFixed(2)}
                    </span>
                  </div>
                )}
                <hr className="my-3" />
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold fs-5">Total</span>
                  <span className="fw-bold fs-4 text-primary">
                    {order.currency?.symbol || "$"}
                    {order.total?.toFixed(2) || "0.00"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
