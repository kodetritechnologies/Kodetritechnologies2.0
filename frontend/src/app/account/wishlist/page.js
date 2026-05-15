"use client";
import React from 'react';
import WishlistCards from '@/components/wishlist/WishlistCards';

export default function WishlistPage() {
  return (
    <div className="col-lg-8 ms-auto">
      <div className="my-account-content">
        <h4 className="account-title">Wishlist</h4>
        <div className="account-wishlist">
          <WishlistCards />
        </div>
      </div>
    </div>
  );
}

