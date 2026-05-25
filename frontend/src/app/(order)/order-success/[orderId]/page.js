"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import BasicProvider from "@/utils/BasicProvider";

function OrderSuccessPageContent() {
  const basicProvider = BasicProvider();
  const params = useParams();
  const orderId = params?.orderId;
  const router = useRouter();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!orderId) {
      setError("No order reference provided.");
      setLoading(false);
      return;
    }

    const fetchOrderDetails = async () => {
      try {
        const response = await basicProvider.getMethod(`public/ecommerce/order/detail/${orderId}`);
        if (response.status === "success" && response.data) {
          setOrder(response.data);
        } else {
          setError(response.message || "Failed to load order details.");
        }
      } catch (err) {
        console.error("Error fetching order details:", err);
        setError("An error occurred while fetching order details.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center py-5">
        <div className="spinner-border text-dark mb-3" role="status">
          <span className="visually-hidden">Loading order details...</span>
        </div>
        <p className="text-secondary fw-semibold">Loading your order confirmation...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="container py-5 text-center d-flex flex-column justify-content-center align-items-center">
        <div className="card shadow-sm border-0 rounded-4 p-5 bg-white" style={{ maxWidth: "500px" }}>
          <div className="text-danger mb-4">
            <i className="fa-solid fa-circle-xmark fa-4x animate-bounce"></i>
          </div>
          <h1 className="h3 fw-bold text-dark mb-3">Order Status</h1>
          <p className="text-secondary mb-4">{error || "Could not retrieve order details."}</p>
          <div className="d-flex gap-3 justify-content-center">
            <Link href="/" className="tf-btn animate-btn text-white w-auto">
              Go to Home
            </Link>
            <Link href="/shop" className="tf-btn-line w-auto">
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isPaid = order.paymentStatus === "Paid" || order.status === "Paid";
  const address = order.address || {};

  return (
    <main id="wrapper">
      <section className="flat-spacing-2">
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-4">
              {/* Status Header */}
              <div className="mb-5 text-center">
                <div className="mb-3">
                  {isPaid ? (
                    <i className="fa-regular fa-circle-check text-success" style={{ fontSize: "3.5rem" }}></i>
                  ) : (
                    <i className="fa-regular fa-clock text-warning" style={{ fontSize: "3.5rem" }}></i>
                  )}
                </div>

                <h1 className="h4 fw-medium text-dark mb-2">
                  {isPaid ? "Thank You for Your Payment!" : "Order Placed Successfully"}
                </h1>
                <p className="text-secondary mb-0 mx-auto small" style={{ maxWidth: "450px" }}>
                  {isPaid 
                    ? `Your payment has been verified. Order #${order.order_no} has been confirmed and is being processed.`
                    : `Your order #${order.order_no} has been created in pending state. Cash on Delivery or pending payment options apply.`}
                </p>
              </div>

              {/* Order Summary & Details */}
              <div className="border-top pt-4">
                <h2 className="h5 fw-bold text-dark mb-4 pb-2 border-bottom">Order Information</h2>
                
                <div className="row g-3 small mb-4">
                  <div className="col-sm-6">
                    <span className="text-muted d-block mb-1">Order Number</span>
                    <span className="fw-bold text-dark font-monospace" style={{ fontSize: "14px" }}>{order.order_no}</span>
                  </div>
                  <div className="col-sm-6">
                    <span className="text-muted d-block mb-1">Order Date</span>
                    <span className="fw-semibold text-dark">{new Date(order.createdAt || Date.now()).toLocaleDateString("en-IN", { dateStyle: "long" })}</span>
                  </div>
                  <div className="col-sm-6">
                    <span className="text-muted d-block mb-1">Payment Method</span>
                    <span className="fw-semibold text-dark text-capitalize">{order.paymentGatway}</span>
                  </div>
                  <div className="col-sm-6">
                    <span className="text-muted d-block mb-1">Order Status</span>
                    <span className="badge bg-secondary px-3 py-1 rounded-pill fw-bold text-white">
                      {order.order_status?.name || "Pending"}
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <span className="text-muted d-block mb-1">Payment Status</span>
                    <span className={`badge ${isPaid ? "bg-success" : "bg-warning text-dark"} px-3 py-1 rounded-pill fw-bold`}>
                      {order.paymentStatus || order.status || "Pending"}
                    </span>
                  </div>
                  {order.transiction_id && (
                    <div className="col-12">
                      <span className="text-muted d-block mb-1">Transaction ID</span>
                      <span className="fw-semibold text-dark font-monospace small">{order.transiction_id}</span>
                    </div>
                  )}
                </div>

                <h3 className="h6 fw-bold text-dark mb-3">Items Ordered</h3>
                <div className="d-flex flex-column gap-2 mb-4">
                  {(order.items || []).map((item, index) => {
                    const name = item.name || "Product";
                    const image = item.featured_image?.url || "/images/placeholder.jpg";
                    const price = item.price || 0;
                    return (
                      <div key={item._id || index} className="d-flex gap-3 align-items-center bg-light p-2 rounded-3 border">
                        <img 
                          src={image} 
                          alt={name} 
                          width="50" 
                          height="50" 
                          className="rounded border bg-white" 
                          style={{ objectFit: "cover" }}
                        />
                        <div className="flex-grow-1 min-width-0">
                          <p className="text-dark fw-bold small mb-1 text-truncate">{name}</p>
                          <span className="text-secondary small font-monospace" style={{ fontSize: "11px" }}>₹{price.toFixed(2)}</span>
                        </div>
                        <div className="text-dark fw-bold small text-end">
                          ₹{price.toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Financial Breakdowns */}
                <div className="border-top pt-3">
                  <div className="d-flex justify-content-between mb-2 text-secondary small">
                    <span>Subtotal</span>
                    <span className="fw-semibold text-dark">₹{(order.subtotal || 0).toFixed(2)}</span>
                  </div>
                  {order.tax > 0 && (
                    <div className="d-flex justify-content-between mb-2 text-secondary small">
                      <span>Tax ({order.tax}%)</span>
                      <span className="fw-semibold text-dark">₹{((order.subtotal * order.tax) / 100).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="d-flex justify-content-between mb-2 text-secondary small">
                    <span>Shipping Cost</span>
                    <span className="fw-semibold text-dark">
                      {order.shipping === 0 ? <span className="text-success fw-bold">FREE</span> : `₹${order.shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {order.discountAmount > 0 && (
                    <div className="d-flex justify-content-between mb-2 text-success small">
                      <span>Discount</span>
                      <span className="fw-bold">-₹{order.discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="d-flex justify-content-between pt-3 border-top fw-bold text-dark h5 mb-0">
                    <span>Total Amount</span>
                    <span className="text-primary fw-bold">₹{(order.total || 0).toFixed(2)}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Delivery Address Card */}
            {address.name && (
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
                <h3 className="h5 fw-bold text-dark mb-4 pb-2 border-bottom">Shipping Address</h3>
                <div className="p-3 bg-light rounded-3 border small">
                  <p className="fw-bold text-dark mb-1">{address.name}</p>
                  <p className="text-secondary mb-1">M: {address.mobile}</p>
                  <p className="text-secondary m-0 lh-base">
                    {address.address}, {address.city?.name || address.city}, {address.state?.name || address.state}, {address.country?.name || address.country} - {address.zip}
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
              <Link href="/shop" className="tf-btn animate-btn text-white w-auto px-5">
                Continue Shopping
              </Link>
              <Link href={`/track-order?id=${order.order_no}`} className="tf-btn-line w-auto px-5">
                Track Order
              </Link>
            </div>

          </div>
        </div>
      </div>
      </section>
      
      <style jsx>{`
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .hover-grow {
          transition: all 0.2s ease-in-out;
        }
        .hover-grow:hover {
          transform: scale(1.03);
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0,0,0.2,1);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .7;
          }
        }
      `}</style>
    </main>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <div className="d-flex align-items-center justify-content-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading confirmation...</span>
        </div>
      </div>
    }>
      <OrderSuccessPageContent />
    </Suspense>
  );
}
