"use client";
import React from "react";
import { useCart } from "@/utils/context/CartContext";

const AddToCartButton = ({ 
  productId, 
  variantId = null, 
  quantity = 1, 
  price, 
  productDetails = {},
  className = "btn-action-price tf-btn type-xl animate-btn",
  children
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({
      itemId: productId,
      variantId,
      quantity,
      price,
      productDetails
    });
  };

  return (
    <button 
      onClick={handleAddToCart}
      className={className}
    >
      {children || (
        <>
          Add To Cart
          <span className="d-none d-sm-block d-md-none d-lg-block">
            &nbsp;-&nbsp;
          </span>
          <span className="price-add d-none d-sm-block d-md-none d-lg-block">
            ${price * quantity}
          </span>
        </>
      )}
    </button>
  );
};

export default AddToCartButton;
