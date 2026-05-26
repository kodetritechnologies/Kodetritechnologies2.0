"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ShopControl({ searchParams = {} }) {
  const router = useRouter();
  const currentSort = searchParams.sort || "best-selling";
  const currentLayout = searchParams.layout || "tf-col-3";

  const handleSortChange = (sortValue) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortValue);
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleLayoutChange = (layoutValue) => {
    const params = new URLSearchParams(searchParams);
    params.set("layout", layoutValue);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const getSortLabel = (value) => {
    switch (value) {
      case "a-z": return "Alphabetically, A-Z";
      case "z-a": return "Alphabetically, Z-A";
      case "price-low-high": return "Price, low to high";
      case "price-high-low": return "Price, high to low";
      case "best-selling":
      default:
        return "Best Selling";
    }
  };

  return (
    <div className="tf-shop-control">
      <button
        type="button"
        id="filterShop"
        className="tf-btn-filter d-xl-none"
        data-bs-toggle="offcanvas"
        data-bs-target="#filterShop"
      >
        <span className="icon icon-filter"></span>
        <span className="text">Show All Filter</span>
      </button>
      <div className="tf-control-sorting">
        <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
          <div className="btn-select">
            <span className="text-sort-value">{getSortLabel(currentSort)}</span>
            <span className="icon icon-CaretDown"></span>
          </div>
          <div className="dropdown-menu">
            {[
              { value: "best-selling", label: "Best Selling" },
              { value: "a-z", label: "Alphabetically, A-Z" },
              { value: "z-a", label: "Alphabetically, Z-A" },
              { value: "price-low-high", label: "Price, low to high" },
              { value: "price-high-low", label: "Price, high to low" },
            ].map(option => (
              <div
                key={option.value}
                className={`select-item ${currentSort === option.value ? "active" : ""}`}
                onClick={() => handleSortChange(option.value)}
              >
                <span className="text-value-item">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className="tf-control-layout">
        <li
          className={`tf-view-layout-switch sw-layout-list list-layout ${currentLayout === 'list' ? 'active' : ''}`}
          onClick={() => handleLayoutChange('list')}
        >
          <i className="icon-List"></i>
        </li>
        <li
          className={`tf-view-layout-switch sw-layout-2 ${currentLayout === 'tf-col-2' ? 'active' : ''}`}
          onClick={() => handleLayoutChange('tf-col-2')}
        >
          <i className="icon-grid-2"></i>
        </li>
        <li
          className={`tf-view-layout-switch sw-layout-3 d-none d-md-flex ${currentLayout === 'tf-col-3' ? 'active' : ''}`}
          onClick={() => handleLayoutChange('tf-col-3')}
        >
          <i className="icon-grid-3"></i>
        </li>
        <li
          className={`tf-view-layout-switch sw-layout-4 d-none d-lg-flex ${currentLayout === 'tf-col-4' ? 'active' : ''}`}
          onClick={() => handleLayoutChange('tf-col-4')}
        >
          <i className="icon-grid-4"></i>
        </li>
      </ul>
    </div>
  );
}
