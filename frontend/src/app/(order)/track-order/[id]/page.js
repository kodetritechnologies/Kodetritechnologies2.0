"use client";
import BasicProvider from "@/utils/BasicProvider";
import { useEffect, useState, use } from "react";
import Link from "next/link";
import { formatDate } from "@/utils/helpers/dateHelper";

function TrackOrderPage({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const basicProvider = BasicProvider();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      try {
        const res = await basicProvider.getMethod(`public/ecommerce/order/detail/${id}`);
        if (res.status === "success") {
          setOrder(res.data);
        } else {
          setError("Order not found");
        }
      } catch (err) {
        setError("Error fetching order");
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
      <div className="container py-5 mt-5 text-center" style={{ minHeight: "50vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="container py-5 mt-5 text-center" style={{ minHeight: "50vh" }}>
        <h3 className="mb-4">Order Not Found</h3>
        <Link href="/account/orders" className="btn btn-primary rounded-pill">
          Go Back to Orders
        </Link>
      </div>
    );
  }

  const orderStatus = typeof order?.order_status?.name === 'string' ? order.order_status.name : "Pending";
  
  const getStep = (status) => {
    const s = status.toLowerCase();
    if (s === 'completed' || s === 'delivered') return 4;
    if (s === 'out for delivery') return 3;
    if (s === 'shipped' || s === 'processing') return 2;
    return 1; // Pending / Confirmed / default
  };
  
  const currentStep = getStep(orderStatus);

  const createdAtDate = order?.createdAt ? new Date(order.createdAt) : new Date();
  const expectedArrival = new Date(createdAtDate);
  if (!isNaN(expectedArrival.getTime())) {
    expectedArrival.setDate(expectedArrival.getDate() + 5);
  }

  return (
    <main id="wrapper">
      <div className="flat-spacing pt-5 pb-5 bg-light" style={{ minHeight: "80vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              
              <div className="mb-4">
                  <Link href={`/account/orders/${id}`} className="text-decoration-none text-muted">
                    <i className="fa-solid fa-arrow-left me-2"></i>Back to Order Details
                  </Link>
              </div>

              <div className="card shadow border-0 rounded-4 p-4 p-md-5 bg-white">
                <div className="text-center mb-5">
                    <h3 className="fw-bold text-dark mb-4">Track Your Order</h3>
                </div>
                
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 pb-3 border-bottom border-light-subtle">
                  <div className="mb-3 mb-md-0">
                    <h5 className="fw-bold mb-1 d-flex align-items-center text-dark">
                      <i className="fa-solid fa-cart-shopping text-primary fs-4 me-3"></i>
                      Order ID : <span className="text-success ms-2">#{order?.order_no || order?._id.slice(-8)}</span>
                    </h5>
                  </div>
                  <div className="d-flex flex-column gap-2 text-md-end">
                    <div className="d-flex align-items-center justify-content-md-end">
                        <span className="text-muted fw-bold me-3">Expected Arrival</span>
                        <span className="badge bg-primary px-3 py-2 rounded-pill fs-6">
                            {!isNaN(expectedArrival.getTime()) ? formatDate(expectedArrival.toISOString()) : 'TBD'}
                        </span>
                    </div>
                    {order?.transiction_id && (
                        <div className="d-flex align-items-center justify-content-md-end mt-2">
                            <span className="text-muted fw-bold me-3">Tracking ID</span>
                            <span className="badge bg-danger px-3 py-2 rounded-pill fs-6">{order.transiction_id.slice(-8).toUpperCase()}</span>
                        </div>
                    )}
                  </div>
                </div>

                {/* Progress Stepper UI */}
                <div className="track-stepper-container my-5 px-md-4">
                  <div className="stepper-wrapper d-flex justify-content-between position-relative">
                    
                    {/* Background grey line */}
                    <div className="stepper-line position-absolute top-0 start-0 mt-3 w-100 bg-secondary bg-opacity-25 rounded-pill" style={{ height: "6px", zIndex: 0 }}></div>
                    
                    {/* Foreground green line */}
                    <div className="stepper-progress position-absolute top-0 start-0 mt-3 bg-success rounded-pill" style={{ height: "6px", width: `${((currentStep - 1) / 3) * 100}%`, zIndex: 1, transition: 'width 0.8s ease' }}></div>
                    
                    {[
                      { title: "Order Confirmed", icon: "fa-clipboard-check", iconColor: "text-primary", step: 1 },
                      { title: "Order Shipped", icon: "fa-box-open", iconColor: "text-warning", step: 2 },
                      { title: "Out for Delivery", icon: "fa-truck-fast", iconColor: "text-info", step: 3 },
                      { title: "Order Delivered", icon: "fa-house", iconColor: "text-success", step: 4 },
                    ].map((item) => {
                      const isCompleted = currentStep >= item.step;
                      const isCurrent = currentStep === item.step;
                      return (
                        <div key={item.step} className="stepper-item text-center position-relative" style={{ zIndex: 2, width: "25%" }}>
                          <div 
                            className={`step-circle mx-auto d-flex align-items-center justify-content-center text-white rounded-circle ${isCompleted ? 'bg-success shadow' : 'bg-secondary bg-opacity-50'}`} 
                            style={{ 
                                width: "32px", 
                                height: "32px", 
                                transition: 'all 0.3s ease',
                                border: isCurrent ? '4px solid white' : 'none',
                                outline: isCurrent ? '2px solid #198754' : 'none'
                            }}>
                            {isCompleted ? <i className="fa-solid fa-check small"></i> : <span className="small">{item.step}</span>}
                          </div>
                          <div className="mt-4 pt-2">
                            <i className={`fa-solid ${item.icon} fs-3 mb-3 ${isCompleted ? item.iconColor : 'text-secondary text-opacity-25'}`}></i>
                            <h6 className={`mb-0 fw-bold ${isCompleted ? 'text-dark' : 'text-muted'}`}>{item.title}</h6>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TrackOrderPage;
