"use client";
import React from "react";
import { useQuickView } from "@/utils/context/QuickViewContext";

export default function QuickViewButton({ product }) {
  const { setQuickViewProduct } = useQuickView();

  return (
    <a
      href="#quickView"
      data-bs-toggle="offcanvas"
      className="hover-tooltip tooltip-left box-icon"
      onClick={() => setQuickViewProduct(product)}
    >
      <span className="icon icon-Eye"></span>
      <span className="tooltip">Quick view</span>
    </a>
  );
}
