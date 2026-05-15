"use client";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/utils/context/AuthContext";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const { logout } = useContext(AuthContext);
  const pathname = usePathname();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  const navLinks = [
    { href: "/account/dashboard", label: "Dashboard", icon: "icon-HouseLine" },
    { href: "/account/profile", label: "Profile", icon: "icon-User" },
    { href: "/account/orders", label: "Your Orders", icon: "icon-Package" },
    { href: "/account/wishlist", label: "Wishlist", icon: "icon-Heart" },
    { href: "/account/review", label: "Reviews", icon: "icon-Star" },
    { href: "/account/addresses", label: "My Address", icon: "fa fa-address-book", isFA: true },
    { href: "/account/coupons", label: "Coupons", icon: "icon-Tag" },
    { href: "/account/support", label: "Support", icon: "fa fa-life-ring", isFA: true },
  ];

  return (
    <main id="wrapper">
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
                <div className="my-account-nav">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`link-account ${pathname === link.href ? "active" : ""}`}
                    >
                      <i className={link.isFA ? link.icon : `icon ${link.icon}`}></i>
                      <span className="text h6 fw-medium">{link.label}</span>
                    </Link>
                  ))}
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
