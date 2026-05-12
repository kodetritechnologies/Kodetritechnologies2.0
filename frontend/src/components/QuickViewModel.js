"use client";
import { useQuickView } from "@/utils/context/QuickViewContext";
import { productUrl } from "@/utils/helpers/productHelper";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";

function QuickViewModel() {
  const { quickViewProduct: product } = useQuickView();

  const variants = product?.varients || [];

  const { colors, sizesMap } = useMemo(() => {
    const colorSet = new Set();
    const sizeMap = {};

    if (variants && variants.length > 0) {
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
  }, [variants]);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Reset state when product changes
  useEffect(() => {
    setQuantity(1);
    if (colors.length > 0) {
      setSelectedColor(colors[0]);
    } else {
      setSelectedColor("");
      setSelectedSize("");
    }
  }, [product, colors]);

  useEffect(() => {
    if (selectedColor && sizesMap[selectedColor] && sizesMap[selectedColor].length > 0) {
      setSelectedSize(sizesMap[selectedColor][0]);
    }
  }, [selectedColor, sizesMap]);

  const selectedVariant = useMemo(() => {
    if (variants.length === 0) return null;
    if (selectedColor && selectedSize) {
      return variants.find((v) => v.name === `${selectedColor} / ${selectedSize}`) || variants[0];
    }
    return variants[0];
  }, [selectedColor, selectedSize, variants]);

  const isSimple = product?.type === "simple" || !product?.type || variants.length === 0;

  const url = product ? productUrl(product) : "#";

  const gallery = isSimple
    ? product?.gallery
    : selectedVariant?.gallery?.length > 0
      ? selectedVariant.gallery
      : variants[0]?.gallery;

  const finalPrice = useMemo(() => {
    const salePrice = selectedVariant?.sale_price || product?.sale_price;
    const regularPrice = selectedVariant?.price || product?.price;

    const p = salePrice ?? regularPrice ?? 0;

    if (typeof p === 'string') {
      const numericValue = parseFloat(p.replace(/[^0-9.]/g, ''));
      return isNaN(numericValue) ? 0 : numericValue;
    }

    return p || 0;
  }, [selectedVariant, product]);

  const originalPrice = useMemo(() => {
    const regularPrice = selectedVariant?.price || product?.price;
    const p = regularPrice ?? 0;

    if (typeof p === 'string') {
      const numericValue = parseFloat(p.replace(/[^0-9.]/g, ''));
      return isNaN(numericValue) ? 0 : numericValue;
    }

    return p || 0;
  }, [selectedVariant, product]);

  const hasSale = finalPrice < originalPrice && finalPrice > 0;

  return (
    <div className="offcanvas offcanvas-end canvas-quickview" id="quickView">
      {product && gallery && gallery.length > 0 && (
        <div className="mini-quick-image">
          <div className="wrap-quick wrapper-scroll-quickview">
            {gallery.map((img, idx) => (
              <div className="image item-scroll-quickview" key={idx}>
                <img loading="lazy" width="340" height="444" src={img?.url} alt="Image" />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="wrap-canvas">
        <div className="canvas-header ps-md-0">
          <h5 className="title-pop">Quick View</h5>
          <span className="icon-close-popup" data-bs-dismiss="offcanvas">
            <i className="icon icon-X2"></i>
          </span>
        </div>
        <div className="canvas-body ps-md-0">
          {product ? (
            <div className="tf-product-quick_view tf-quick-prd_variant">
              <div className="tf-product-info-heading">
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {product?.categories?.map((cat, index) => (
                    <span className="product-infor-cate text-caption-01 mb-0" key={index}>
                      {cat?.name}
                    </span>
                  ))}
                </div>
                <h3 className="product-infor-name mb-12 letter-space-0">{product?.name}</h3>
                <div className="product-infor-meta mb-20">
                  <div className="meta_rate">
                    <div className="star-wrap normal d-flex align-items-center">
                      <i className="icon icon-Star"></i>
                      <i className="icon icon-Star"></i>
                      <i className="icon icon-Star"></i>
                      <i className="icon icon-Star"></i>
                      <i className="icon icon-Star"></i>
                    </div>
                    <span className="text-caption-01 cl-text-2">(134 reviews)</span>
                  </div>
                  <div className="br-line type-vertical"></div>
                  {product?.sku && (
                    <div className="meta_prd_code text-caption-01">
                      <span className="cl-text-2">SKU:</span>
                      <span>{product?.sku}</span>
                    </div>
                  )}
                </div>
                <div className="product-infor-price mb-12">
                  <h4 className="price-on-sale">${finalPrice?.toFixed(2)}</h4>
                  <div className="br-line type-vertical"></div>
                  {hasSale && (
                    <p className="cl-text-3 text-decoration-line-through">${originalPrice?.toFixed(2)}</p>
                  )}
                  {hasSale && (
                    <span className="badge-sale text-white fw-semibold text-caption-02">SALE</span>
                  )}
                </div>
                <p className="product-infor-desc cl-text-2 mb-12" dangerouslySetInnerHTML={{ __html: product?.short_content || "" }} />
              </div>
              <div className="br-line"></div>

              {!isSimple && selectedVariant && (
                <div className="tf-product-variant mb-4">
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

              <div className="tf-product-variant">
                <div className="tf-product-total-quantity">
                  <p className="">Quantity:</p>
                  <div className="group-action">
                    <div className="wg-quantity">
                      <button className="btn-quantity btn-decrease" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                        <i className="icon icon-minus"></i>
                      </button>
                      <input className="quantity-product" type="text" name="number" value={quantity} readOnly />
                      <button className="btn-quantity btn-increase" onClick={() => setQuantity((q) => q + 1)}>
                        <i className="icon icon-plus"></i>
                      </button>
                    </div>
                    <a href="#shoppingCart" data-bs-toggle="offcanvas" className="btn-action-price tf-btn type-xl animate-btn w-100">
                      Add to Cart
                      <span className="d-none d-sm-block d-md-none d-lg-block">&nbsp;-&nbsp;</span>
                      <span className="price-add d-none d-sm-block d-md-none d-lg-block">${(finalPrice * quantity).toFixed(2)}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-5">
              <p>Select a product to view details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuickViewModel;
