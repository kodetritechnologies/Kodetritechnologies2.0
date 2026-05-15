"use client";
import React from 'react';

export default function ReviewPage() {
  return (
    <div className="col-lg-8 ms-auto">
      <div className="my-account-content">
        <h4 className="account-title">My Reviews</h4>
        <div className="account-reviews">
          {/* Reviews content will go here */}
          <p>You haven't submitted any reviews yet.</p>
        </div>
      </div>
    </div>
  );
}
