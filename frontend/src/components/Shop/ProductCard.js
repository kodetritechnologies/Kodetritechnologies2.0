import React from "react";
import Link from "next/link";
import { priceHelper, productUrl } from "@/utils/helpers/productHelper";
import QuickViewButton from "@/components/QuickViewButton";
import WishlistButton from "@/components/WishlistButton";
import QuickAddButton from "@/components/QuickAddButton";
import Price from "@/components/Price";

export default function ProductCard({ product, layout = 'tf-col-3' }) {
  const { price, sale_price } = priceHelper(product || {});
  const url = productUrl(product || {});

  const isListLayout = layout === 'list';

  return (
    <div className={`card-product ${isListLayout ? 'product-style_list' : ''}`}>
      <div className="card-product_wrapper">
        {product?.type == "simple" ? (
          <Link href={url} className="product-img">
            <img
              className="img-product"
              loading="lazy"
              width="330"
              height="440"
              src={product?.gallery?.[0]?.url}
              alt="Product"
            />

            <img
              className="img-hover"
              loading="lazy"
              width="330"
              height="440"
              src={
                product?.gallery?.[1]?.url ||
                product?.gallery?.[0]?.url
              }
              alt="Product"
            />
          </Link>
        ) : (
          <Link href={url} className="product-img">
            <img
              className="img-product"
              loading="lazy"
              width="330"
              height="440"
              src={product?.varients?.[0]?.gallery?.[0]?.url}
              alt="Product"
            />

            <img
              className="img-hover"
              loading="lazy"
              width="330"
              height="440"
              src={product?.varients?.[0]?.gallery?.[1]?.url}
              alt="Product"
            />
          </Link>
        )}
        <ul className="product-action_list">
          <li className="wishlist">
            <WishlistButton
              productId={product?._id}
              varient_id={product?.type !== "simple" ? (product?.varients?.[0]?._id || product?.varients?.[0]) : null}
            />
          </li>
          <li className="compare">
            <a
              href="#compare"
              data-bs-toggle="offcanvas"
              className="hover-tooltip tooltip-left box-icon"
            >
              <span className="icon icon-ArrowsLeftRight"></span>
              <span className="tooltip">Compare</span>
            </a>
          </li>
          <li>
            <QuickViewButton product={product} />
          </li>
        </ul>
        <ul className="product-badge_list">
          <li className="product-badge_item text-caption-01 new">
            NEW
          </li>
        </ul>
        <div className="product-action_bot">
          <QuickAddButton product={product} />
        </div>
        <div className="product-marquee_sale">
          <div className="marquee-wrapper">
            <div className="initial-child-container">
              <div className="marquee-child-item">
                HOT SALE 25% OFF
              </div>
              <i className="icon icon-Star2"></i>
              <div className="marquee-child-item">
                HOT SALE 25% OFF
              </div>
              <i className="icon icon-Star2"></i>
              <div className="marquee-child-item">
                HOT SALE 25% OFF
              </div>
              <i className="icon icon-Star2"></i>
              <div className="marquee-child-item">
                HOT SALE 25% OFF
              </div>
              <i className="icon icon-Star2"></i>
              <div className="marquee-child-item">
                HOT SALE 25% OFF
              </div>
              <i className="icon icon-Star2"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="card-product_info">
        <Link
          href={url}
          className="name-product lh-24 fw-medium link-underline-text"
        >
          {product?.name}
        </Link>
        <div className="star-wrap d-flex align-items-center">
          <i className="icon icon-Star"></i>
          <i className="icon icon-Star"></i>
          <i className="icon icon-Star"></i>
          <i className="icon icon-Star"></i>
          <i className="icon icon-Star"></i>
        </div>
        <div className="price-wrap">
          {sale_price && sale_price != null ? (
            <span className="price-new text-primary fw-semibold">
              <Price amount={sale_price} />
            </span>
          ) : (
            <span className="price-new text-primary fw-semibold">
              <Price amount={price} />
            </span>
          )}
          {price && price != null && (
            <span className="price-old text-caption-01 cl-text-3">
              <Price amount={price} />
            </span>
          )}
        </div>
        <p className="description text-caption-01 mb-10">
          {product?.short_description || product?.description || "Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose..."}
        </p>
      </div>
    </div>
  );
}
