"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useQuickAdd } from "@/utils/context/QuickAddContext";
import AddToCartButton from "./AddToCartButton";
import { priceHelper, productUrl } from "@/utils/helpers/productHelper";
import Link from "next/link";

function QuickAddModel() {
  const { quickAddProduct } = useQuickAdd();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (quickAddProduct) {
      setQuantity(1);
      if (quickAddProduct.type !== "simple" && quickAddProduct.varients?.length > 0) {
        setSelectedVariant(quickAddProduct.varients[0]);
      } else {
        setSelectedVariant(null);
      }
    }
  }, [quickAddProduct]);

  if (!quickAddProduct) return null;

  const { price, sale_price } = priceHelper(quickAddProduct, selectedVariant);
  const currentPrice = sale_price || price;
  const url = productUrl(quickAddProduct);

  const productImg = selectedVariant?.gallery?.[0]?.url || quickAddProduct?.featured_image?.url || quickAddProduct?.gallery?.[0]?.url;

  return (
    <div className="modal modalCentered fade modal-quickadd" id="quickAdd">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex align-items-center justify-content-between mb-20">
            <h5>Quick Add</h5>
            <span className="d-flex cs-pointer link" data-bs-dismiss="modal">
              <i className="icon icon-X2 fs-24"></i>
            </span>
          </div>
          <div className="tf-product-quick_add tf-quick-prd_variant">
            <div className="product-mini-view">
              <Link href={url} className="prd-image">
                <img
                  className="img-product"
                  width="80"
                  height="107"
                  src={productImg}
                  alt={quickAddProduct.name}
                />
              </Link>
              <div className="prd-content">
                <Link
                  href={url}
                  className="prd-name fw-medium link-underline link text-capitalize"
                >
                  {quickAddProduct.name}
                </Link>
                <div className="price-wrap">
                  {sale_price ? (
                    <>
                      <span className="price-new text-primary fw-semibold price-on-sale">
                        ${sale_price}
                      </span>
                      <span className="price-old text-caption-01 cl-text-3 ms-2">
                        ${price}
                      </span>
                    </>
                  ) : (
                    <span className="price-new text-primary fw-semibold">
                      ${price}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {quickAddProduct.type !== "simple" && quickAddProduct.varients?.length > 0 && (
              <div className="quick-variant-picker picker_size mt-4">
                <div className="variant-picker_label mb-12">
                  <div>
                    Select Option:
                    <span className="variant__value text-capitalize fw-medium ms-1">
                      {selectedVariant?.name}
                    </span>
                  </div>
                </div>
                <div className="variant-picker_values d-flex flex-wrap gap-2">
                  {quickAddProduct.varients.map((v) => (
                    <span
                      key={v._id}
                      className={`size_btn ${selectedVariant?._id === v._id ? "active" : ""}`}
                      onClick={() => setSelectedVariant(v)}
                      style={{ cursor: "pointer", border: "1px solid #ddd", padding: "5px 15px", borderRadius: "4px" }}
                    >
                      {v.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="product-total-quantity mt-4">
              <p className="mb-2">Quantity:</p>
              <div className="group-action">
                <div className="wg-quantity">
                  <button 
                    className="btn-quantity btn-decrease"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  >
                    <i className="icon icon-minus"></i>
                  </button>
                  <input
                    className="quantity-product"
                    type="text"
                    name="number"
                    value={quantity}
                    readOnly
                  />
                  <button 
                    className="btn-quantity btn-increase"
                    onClick={() => setQuantity(q => q + 1)}
                  >
                    <i className="icon icon-plus"></i>
                  </button>
                </div>
                <AddToCartButton
                  productId={quickAddProduct._id}
                  variantId={selectedVariant?._id}
                  quantity={quantity}
                  price={currentPrice}
                  productDetails={{
                    name: quickAddProduct.name,
                    featured_image: quickAddProduct.featured_image || quickAddProduct.gallery?.[0],
                    variantName: selectedVariant?.name
                  }}
                  className="btn-action-price tf-btn type-xl animate-btn w-100"
                >
                  Add to Cart - ${currentPrice * quantity}
                </AddToCartButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickAddModel;
