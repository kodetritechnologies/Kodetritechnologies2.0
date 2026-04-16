"use client";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/utils/context/AuthContext";

export default function Layout({ children }) {
  const { logout } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <main id="wrapper">
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
                <div className="my-account-nav">
                  <Link href="/account/dashboard" className="link-account active">
                    <i className="icon icon-HouseLine"></i>
                    <span className="text h6 fw-medium">Dashboard</span>
                  </Link>
                  <Link href="/account/profile" className="link-account">
                    <i className="icon icon-User"></i>
                    <span className="text h6 fw-medium">Profile</span>
                  </Link>
                  <Link href="/account/orders" className="link-account">
                    <i className="icon icon-Package"></i>
                    <span className="text h6 fw-medium">Your Orders</span>
                  </Link>
                  <Link href="/account/addresses" className="link-account">
                    <i className="fa fa-address-book"></i>
                    <span className="text h6 fw-medium">My Address</span>
                  </Link>
                  <Link href="/account/coupons" className="link-account">
                    <i className="icon icon-Tag"></i>
                    <span className="text h6 fw-medium">Coupons</span>
                  </Link>
                  <Link href="/account/support" className="link-account">
                    <i className="fa fa-life-ring"></i>
                    <span className="text h6 fw-medium">Support</span>
                  </Link>
                  <Link href="#" onClick={handleLogout} className="link-account">
                    <i className="icon icon-SignOut"></i>
                    <span className="text h6 fw-medium">Logout</span>
                  </Link>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
