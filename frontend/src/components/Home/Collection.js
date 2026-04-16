import React from "react";

function Collection() {
  return (
    <div className="section-banner-collection">
      <div className="container">
        <div className="tf-grid-layout sm-col-2 gap-10">
          <div className="box-image_v01">
            <a href="shop-default.html" className="box-image_img img-style">
              <img
                loading="lazy"
                width="700"
                height="933"
                src="/assets/images/collection/cls-6.jpg"
                alt="Image"
              />
            </a>
            <div className="box-image_content">
              <a
                href="shop-default.html"
                className="title h3 fw-medium text-white link-underline-white text-decoration-thickness"
              >
                Shop Women
              </a>
            </div>
          </div>
          <div className="d-flex flex-column gap-10">
            <div className="box-image_v01 h-100">
              <a href="shop-default.html" className="box-image_img img-style">
                <img
                  loading="lazy"
                  width="700"
                  height="461"
                  src="/assets/images/collection/cls-7.jpg"
                  alt="Image"
                />
              </a>
              <div className="box-image_content">
                <a
                  href="shop-default.html"
                  className="title h3 fw-medium text-white link-underline-white text-decoration-thickness"
                >
                  Shop Men
                </a>
              </div>
            </div>
            <div className="box-image_v01 h-100">
              <a href="shop-default.html" className="box-image_img img-style">
                <img
                  loading="lazy"
                  width="700"
                  height="461"
                  src="/assets/images/collection/cls-8.jpg"
                  alt="Image"
                />
              </a>
              <div className="box-image_content">
                <a
                  href="shop-default.html"
                  className="title h3 fw-medium text-white link-underline-white text-decoration-thickness"
                >
                  Shop Essentials
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
