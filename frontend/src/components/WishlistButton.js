"use client";
import React from "react";
import { useWishlist } from "@/utils/context/WishlistContext";

const WishlistButton = ({ productId, varient_id = null, size = "inherit" }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(productId, varient_id);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleWishlist(productId, varient_id);
  };

  return (
    <a
      href="#"
      className={`hover-tooltip tooltip-left box-icon ${isWishlisted ? "active" : ""}`}
      onClick={handleToggle}
    >
      <span className={`icon ${isWishlisted ? "icon-trash" : "icon-heart"}`} style={{ color: isWishlisted ? "#ef4444" : "inherit", fontSize: size }}></span>
      <span className="tooltip">{isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}</span>
    </a>
  );
};

export default WishlistButton;
