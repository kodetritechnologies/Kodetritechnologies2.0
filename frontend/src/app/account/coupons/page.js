"use client";
import BasicProvider from "@/utils/BasicProvider";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function Page() {
    const basicProvider = BasicProvider();
    const [activeTab, setActiveTab] = useState("available"); // "available" or "claimed"
    const [publicCoupons, setPublicCoupons] = useState([]);
    const [claimedCoupons, setClaimedCoupons] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPublicCoupons = async () => {
        try {
            const res = await basicProvider.getMethod("public/ecommerce/coupan/all");
            if (res.status === "success") {
                setPublicCoupons(res.data.data || []);
            }
        } catch (error) {
            console.error("Error fetching public coupons:", error);
        }
    };

    const fetchClaimedCoupons = async () => {
        try {
            const res = await basicProvider.getMethod("public/ecommerce/customer/coupan");
            if (res.status === "success") {
                setClaimedCoupons(res.data.data || []);
            }
        } catch (error) {
            console.error("Error fetching claimed coupons:", error);
        }
    };

    const fetchData = async () => {
        setLoading(true);
        await Promise.all([fetchPublicCoupons(), fetchClaimedCoupons()]);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleClaim = async (coupanId, couponCode) => {
        try {
            const res = await basicProvider.postMethod("public/ecommerce/coupan/claim", {
                coupanId,
                couponCode,
            });
            if (res.status === "success") {
                toast.success(res.message || "Coupon claimed successfully!");
                fetchData();
            } else {
                toast.error(res.message || "Failed to claim coupon");
            }
        } catch (error) {
            console.error("Error claiming coupon:", error);
            toast.error("An error occurred while claiming the coupon.");
        }
    };

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        toast.success(`Code ${code} copied to clipboard!`);
    };

    const isClaimed = (couponId) => {
        return claimedCoupons.some((c) => c.coupanId?._id === couponId || c.coupanId === couponId);
    };

    return (
        <main className="col-lg-9 ms-auto">
            <section className="my-account-content">
                <header className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
                    <div>
                        <h1 className="h4 fw-bold m-0 text-dark">My Rewards & Coupons</h1>
                        <p className="text-muted mb-0 mt-1 small">
                            Unlock exclusive discounts and manage your claimed offers.
                        </p>
                    </div>
                </header>

                {/* Bootstrap Centered Pills */}
                <ul className="nav nav-pills bg-light p-1 rounded-pill mb-4 d-inline-flex border">
                    <li className="nav-item">
                        <button
                            className={`nav-link rounded-pill fw-bold px-4 py-2 ${activeTab === "available" ? "active shadow-sm" : "text-muted"}`}
                            onClick={() => setActiveTab("available")}
                        >
                            Available
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link rounded-pill fw-bold px-4 py-2 ${activeTab === "claimed" ? "active shadow-sm" : "text-muted"}`}
                            onClick={() => setActiveTab("claimed")}
                        >
                            My Rewards ({claimedCoupons.length})
                        </button>
                    </li>
                </ul>

                {loading ? (
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="row g-4">
                        {activeTab === "available" ? (
                            publicCoupons.length > 0 ? (
                                publicCoupons.map((coupon) => (
                                    <CouponCard
                                        key={coupon._id}
                                        coupon={coupon}
                                        isClaimed={isClaimed(coupon._id)}
                                        onClaim={() => handleClaim(coupon._id, coupon.code)}
                                        onCopy={() => handleCopy(coupon.code)}
                                    />
                                ))
                            ) : (
                                <EmptyState message="No offers available at the moment." />
                            )
                        ) : claimedCoupons.length > 0 ? (
                            claimedCoupons.map((claim) => (
                                <CouponCard
                                    key={claim._id}
                                    coupon={claim.coupanId}
                                    isClaimed={true}
                                    onCopy={() => handleCopy(claim.couponCode)}
                                />
                            ))
                        ) : (
                            <EmptyState message="You haven't claimed any coupons yet." />
                        )}
                    </div>
                )}
            </section>

            <style jsx>{`
                :global(.nav-pills .nav-link.active) {
                    background-color: var(--primary) !important;
                }
                :global(.text-primary) {
                    color: var(--primary) !important;
                }
                :global(.btn-primary) {
                    background-color: var(--primary) !important;
                    border-color: var(--primary) !important;
                }
            `}</style>
        </main>
    );
}

function CouponCard({ coupon, isClaimed, onClaim, onCopy }) {
    if (!coupon) return null;

    const isExpired = new Date(coupon.end_date) < new Date();
    const discountLabel =
        coupon.discount_type === "percentage" ? `${coupon.max_amount}% OFF` : `₹${coupon.max_amount} OFF`;

    return (
        <div className="col-md-6 col-xl-4">
            <div className={`card h-100 border-0 shadow-sm rounded-4 position-relative ${isExpired ? "opacity-50" : ""}`} style={{ transition: "all 0.2s ease" }}>
                <div className="card-body p-0 d-flex flex-column h-100">
                    {/* Head section with discount */}
                    <div className="p-4 text-center rounded-top-4" style={{ backgroundColor: "#fff5f5", borderBottom: "2px dashed #eee" }}>
                        <div className="display-6 fw-bold text-primary mb-1">{discountLabel}</div>
                        <span className="badge text-uppercase bg-light text-primary border border-primary-subtle rounded-pill smaller">{coupon.type} Exclusive</span>
                        
                        {/* Semi-circle cut-outs for coupon look */}
                        <div className="position-absolute" style={{ width: "20px", height: "20px", backgroundColor: "#f8f9fa", borderRadius: "50%", bottom: "-10px", left: "-10px" }}></div>
                        <div className="position-absolute" style={{ width: "20px", height: "20px", backgroundColor: "#f8f9fa", borderRadius: "50%", bottom: "-10px", right: "-10px" }}></div>
                    </div>

                    <div className="p-4 d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                            <h5 className="card-title fw-bold m-0 h6 text-dark">{coupon.name}</h5>
                            {isClaimed && <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill smaller">Claimed</span>}
                        </div>
                        <p className="card-text text-muted small flex-grow-1">{coupon.description || "Grab this limited time deal at checkout."}</p>
                        
                        <div className="mt-3 pt-3 border-top d-flex justify-content-between align-items-center">
                            <div className="small text-secondary fw-medium">
                                <i className="fa-regular fa-clock me-1"></i>
                                {new Date(coupon.end_date).toLocaleDateString()}
                            </div>
                            
                            {isOriginalClaimed(isClaimed) ? (
                                <button className="btn btn-sm btn-light border fw-bold font-monospace px-3" onClick={onCopy}>
                                    {coupon.code} <i className="fa-regular fa-copy ms-1 text-primary"></i>
                                </button>
                            ) : (
                                <button 
                                    className="btn btn-sm btn-primary rounded-pill px-4 fw-bold"
                                    onClick={onClaim}
                                    disabled={isExpired}
                                >
                                    Claim
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
                }
                .smaller {
                    font-size: 10px;
                    letter-spacing: 0.5px;
                    font-weight: 700;
                }
            `}</style>
        </div>
    );

    function isOriginalClaimed(claimed) {
        return claimed;
    }
}

function EmptyState({ message }) {
    return (
        <div className="col-12 text-center py-5">
            <div className="mb-3 opacity-25">
                <i className="fa-solid fa-ticket-simple fa-4x text-muted"></i>
            </div>
            <h5 className="text-dark fw-bold mb-1">{message}</h5>
            <p className="text-muted small">Check back later for new exclusive rewards.</p>
        </div>
    );
}

export default Page;
