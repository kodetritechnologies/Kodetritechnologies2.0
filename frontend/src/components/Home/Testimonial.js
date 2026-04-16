import React from "react";

function Testimonial() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="sect-heading type-2 text-center wow fadeInUp">
          <h3 className="s-title">Customer Say!</h3>
          <p className="s-desc text-body-1 cl-text-2">
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>
        <div
          dir="ltr"
          className="swiper tf-swiper"
          data-preview="2"
          data-tablet="2"
          data-mobile-sm="1"
          data-mobile="1"
          data-space-lg="60"
          data-space-md="30"
          data-space="15"
          data-pagination="1"
          data-pagination-sm="2"
          data-pagination-md="2"
          data-pagination-lg="2"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-v01 style-1 style-def wow fadeInLeft">
                <div className="tes-image">
                  <img
                    loading="lazy"
                    width="285"
                    height="380"
                    src="/assets/images/testimonial/tes-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="tes-content">
                  <div className="star-wrap d-flex align-items-center">
                    <i className="icon icon-Star-thin fs-24"></i>
                    <i className="icon icon-Star-thin fs-24"></i>
                    <i className="icon icon-Star-thin fs-24"></i>
                    <i className="icon icon-Star-thin fs-24"></i>
                    <i className="icon icon-Star-thin fs-24"></i>
                  </div>
                  <div className="tes_author">
                    <p className="author-name h5">Emma Collins</p>
                    <div className="br-line"></div>
                    <div className="author-verified">
                      <i className="icon icon-CheckCircle1"></i>
                      <span className="cl-text-2">Verified Buyer</span>
                    </div>
                  </div>
                  <p className="tes_text h6">
                    “Totally obsessed with this outfit! The fit is perfect, the
                    fabric feels premium, and I’ve been getting compliments
                    non-stop. It instantly lifts my confidence — such a great
                    find!”
                  </p>
                  <div className="tes_product">
                    <div className="product-image">
                      <img
                        className="aspect-ratio-1 object-fit-cover"
                        loading="lazy"
                        width="60"
                        height="60"
                        src="/assets/images/product/product-4.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="product-infor">
                      <a
                        href="product-detail.html"
                        className="link fw-medium lh-24"
                      >
                        High neck midi wool coat
                      </a>
                      <p className="prd_price fw-semibold text-primary">
                        $29.99
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="testimonial-v01 style-1 style-def wow fadeInLeft"
                data-wow-delay="0.1s"
              >
                <div className="tes-image">
                  <img
                    loading="lazy"
                    width="285"
                    height="380"
                    src="/assets/images/testimonial/tes-2.jpg"
                    alt="Image"
                  />
                </div>
                <div className="tes-content">
                  <div className="star-wrap d-flex align-items-center">
                    <i className="icon icon-Star-thin fs-24"></i>
                    <i className="icon icon-Star-thin fs-24"></i>
                    <i className="icon icon-Star-thin fs-24"></i>
                    <i className="icon icon-Star-thin fs-24"></i>
                    <i className="icon icon-Star-thin fs-24"></i>
                  </div>
                  <div className="tes_author">
                    <p className="author-name h5">Sophia Ramirez</p>
                    <div className="br-line"></div>
                    <div className="author-verified">
                      <i className="icon icon-CheckCircle1"></i>
                      <span className="cl-text-2">Verified Buyer</span>
                    </div>
                  </div>
                  <p className="tes_text h6">
                    “I’m amazed by how comfortable yet stylish this piece is. It
                    pairs effortlessly with everything, and the quality really
                    stands out. Definitely becoming my go-to for everyday
                    looks!”
                  </p>
                  <div className="tes_product">
                    <div className="product-image">
                      <img
                        className="aspect-ratio-1 object-fit-cover"
                        loading="lazy"
                        width="60"
                        height="60"
                        src="/assets/images/product/product-6.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="product-infor">
                      <a
                        href="product-detail.html"
                        className="link fw-medium lh-24"
                      >
                        Square metallic frame sunglasses
                      </a>
                      <p className="prd_price fw-semibold text-primary">
                        $29.99
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sw-line-default style-2 tf-sw-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
