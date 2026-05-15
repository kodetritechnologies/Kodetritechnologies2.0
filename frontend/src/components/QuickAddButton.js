"use client";
import React from "react";
import { useQuickAdd } from "@/utils/context/QuickAddContext";

export default function QuickAddButton({ product, className = "tf-btn btn-white small w-100" }) {
  const { setQuickAddProduct } = useQuickAdd();

  return (
    <a
      href="#quickAdd"
      data-bs-toggle="modal"
      className={className}
      onClick={() => setQuickAddProduct(product)}
    >
      Quick Add
    </a>
  );
}
