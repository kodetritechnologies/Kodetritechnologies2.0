import React from "react";

function PageTile() {
  return (
    <div className="section-page-title-single flat-spacing-3">
      <div className="container">
        <div className="main-page-title">
          <div className="breadcrumbs">
            <a href="index-2.html" className="text-caption-01 cl-text-3 link">
              Home
            </a>
            <i className="icon icon-CaretRightThin cl-text-3"></i>
            <a
              href="shop-default.html"
              className="text-caption-01 cl-text-3 link"
            >
              Shop
            </a>
            <i className="icon icon-CaretRightThin cl-text-3"></i>
            <P className="text-caption-01">Lyocell Wrap Top</P>
          </div>
          <div className="nav-post-list">
            <a
              href="product-detail.html"
              className="link nav-post-item nav-post-prev"
            >
              <i className="icon icon-CaretLeft"></i>
            </a>
            <a
              href="shop-default.html"
              className="link nav-all-post nav-post-link"
            >
              <i className="icon icon-SquaresFour"></i>
            </a>
            <a
              href="product-detail.html"
              className="link nav-post-item nav-post-next"
            >
              <i className="icon icon-CaretRightThin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTile;
