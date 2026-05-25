"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useQuickAdd } from "@/utils/context/QuickAddContext";
import AddToCartButton from "./AddToCartButton";
import { priceHelper, productUrl } from "@/utils/helpers/productHelper";
import { useCurrency } from "@/utils/context/CurrencyContext";
import Link from "next/link";

function QuickAddModel() {
  const { quickAddProduct } = useQuickAdd();
  const { formatPrice } = useCurrency();

  const variants = quickAddProduct?.varients || [];
  const isSimple = quickAddProduct?.type === "simple" || !quickAddProduct?.type || variants.length === 0;

  const { colors, sizesMap } = useMemo(() => {
    const colorSet = new Set();
    const sizeMap = {};

    if (!isSimple && variants && variants.length > 0) {
      variants.forEach((v) => {
        if (!v.name) return;
        const parts = v.name.split(" / ");
        const color = parts[0] ? parts[0].trim() : "";
        const size = parts[1] ? parts[1].trim() : "";

        if (color) colorSet.add(color);
        if (color && size) {
          if (!sizeMap[color]) sizeMap[color] = new Set();
          sizeMap[color].add(size);
        }
      });
    }

    return {
      colors: Array.from(colorSet),
      sizesMap: Object.fromEntries(
        Object.entries(sizeMap).map(([k, v]) => [k, Array.from(v)])
      ),
    };
  }, [variants, isSimple]);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Reset state when product changes
  useEffect(() => {
    setQuantity(1);
    if (!isSimple && colors.length > 0) {
      setSelectedColor(colors[0]);
    } else {
      setSelectedColor("");
      setSelectedSize("");
    }
  }, [quickAddProduct, colors, isSimple]);

  useEffect(() => {
    if (!isSimple && selectedColor && sizesMap[selectedColor] && sizesMap[selectedColor].length > 0) {
      setSelectedSize(sizesMap[selectedColor][0]);
    } else {
      setSelectedSize("");
    }
  }, [selectedColor, sizesMap, isSimple]);

  const selectedVariant = useMemo(() => {
    if (isSimple || variants.length === 0) return null;
    
    if (selectedColor && selectedSize) {
      const match = variants.find((v) => v.name === `${selectedColor} / ${selectedSize}`);
      if (match) return match;
    }
    
    if (selectedColor) {
      const match = variants.find((v) => {
        if (!v.name) return false;
        const parts = v.name.split(" / ");
        return parts[0]?.trim() === selectedColor;
      });
      if (match) return match;
    }

    return variants[0];
  }, [selectedColor, selectedSize, variants, isSimple]);

  if (!quickAddProduct) return null;

  const parsePrice = (val) => {
    if (val === undefined || val === null) return 0;
    if (typeof val === "number") return val;
    const str = String(val).trim();
    const cleanStr = str.replace(/[^0-9.]/g, "");
    const parsed = parseFloat(cleanStr);
    return isNaN(parsed) ? 0 : parsed;
  };

  const { price, sale_price } = priceHelper(quickAddProduct, isSimple ? null : selectedVariant);
  const parsedPrice = parsePrice(price);
  const parsedSalePrice = parsePrice(sale_price);
  const currentPrice = parsedSalePrice || parsedPrice;
  const url = productUrl(quickAddProduct);

  const productImg = (() => {
    const rawImg = selectedVariant?.gallery?.[0]?.url || quickAddProduct?.featured_image?.url || quickAddProduct?.gallery?.[0]?.url;
    if (typeof rawImg === 'string') return rawImg;
    if (rawImg && typeof rawImg === 'object' && rawImg.url) return rawImg.url;
    return "/assets/images/products/product-placeholder.jpg";
  })();

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
                  {parsedSalePrice > 0 ? (
                    <>
                      <span className="price-new text-primary fw-semibold price-on-sale">
                        {formatPrice(parsedSalePrice)}
                      </span>
                      <span className="price-old text-caption-01 cl-text-3 ms-2">
                        {formatPrice(parsedPrice)}
                      </span>
                    </>
                  ) : (
                    <span className="price-new text-primary fw-semibold">
                      {formatPrice(parsedPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {!isSimple && selectedVariant && (
              <div className="tf-product-variant mt-4">
                {colors.length > 0 && (
                  <div className="variant-picker-item variant-color mb-3">
                    <div className="variant-picker-label mb-2">
                      Colors: <span className="fw-medium text-capitalize">{selectedColor}</span>
                    </div>
                    <div className="variant-picker-values d-flex gap-2 flex-wrap">
                      {colors.map((color) => {
                        return (
                          <span
                            key={color}
                            onClick={() => {
                              setSelectedColor(color);
                              if (sizesMap[color] && sizesMap[color].length > 0) {
                                setSelectedSize(sizesMap[color][0]);
                              }
                            }}
                            className={`size-btn px-3 py-1 ${selectedColor === color ? "active text-white bg-dark" : "border"}`}
                            style={{ cursor: "pointer", borderRadius: "4px" }}
                          >
                            {color}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {selectedColor && sizesMap[selectedColor] && sizesMap[selectedColor].length > 0 && (
                  <div className="variant-picker-item variant-size mb-3">
                    <div className="variant-picker-label mb-2">
                      Size: <span className="fw-medium">{selectedSize}</span>
                    </div>
                    <div className="variant-picker-values d-flex gap-2 flex-wrap">
                      {sizesMap[selectedColor].map((size) => {
                        const variantExists = variants.find((v) => v.name === `${selectedColor} / ${size}`);
                        return (
                          <span
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`size-btn px-3 py-1 ${selectedSize === size ? "active text-white bg-dark" : "border"}`}
                            style={{ cursor: variantExists ? "pointer" : "not-allowed", opacity: variantExists ? 1 : 0.5, borderRadius: "4px" }}
                          >
                            {size}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
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
                  variantId={isSimple ? null : selectedVariant?._id}
                  quantity={quantity}
                  price={currentPrice}
                  productDetails={{
                    name: quickAddProduct.name,
                    featured_image: quickAddProduct.featured_image || quickAddProduct.gallery?.[0],
                    variantName: isSimple ? null : selectedVariant?.name
                  }}
                  className="btn-action-price tf-btn type-xl animate-btn w-100"
                >
                  Add to Cart - {formatPrice(currentPrice * quantity)}
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
