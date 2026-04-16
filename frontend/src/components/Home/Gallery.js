function Gallery() {
  return (
    <section className="themesFlat">
      <div className="container">
        <div className="sect-heading type-2 text-center wow fadeInUp">
          <h3 className="s-title">Shop Instagram</h3>
          <p className="s-desc text-body-1 cl-text-2">
            Elevate your wardrobe with fresh finds today!
          </p>
        </div>
        <div
          dir="ltr"
          className="swiper tf-swiper"
          data-preview="5"
          data-tablet="3"
          data-mobile-sm="3"
          data-mobile="2"
          data-space="10"
          data-pagination="2"
          data-pagination-sm="3"
          data-pagination-md="4"
          data-pagination-lg="5"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="gallery-item hover-img hover-overlay wow fadeInUp">
                <div className="image img-style">
                  <img
                    loading="lazy"
                    width="274"
                    height="274"
                    src="/assets/images/gallery/gallery-1.jpg"
                    alt="Image"
                  />
                </div>
                <a
                  href="product-detail.html"
                  className="box-icon hover-tooltip"
                >
                  <span className="icon icon-Eye"></span>
                  <span className="tooltip">View product</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-item hover-img hover-overlay wow fadeInUp">
                <div className="image img-style">
                  <img
                    loading="lazy"
                    width="274"
                    height="274"
                    src="/assets/images/gallery/gallery-2.jpg"
                    alt="Image"
                  />
                </div>
                <a
                  href="product-detail.html"
                  className="box-icon hover-tooltip"
                >
                  <span className="icon icon-Eye"></span>
                  <span className="tooltip">View product</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-item hover-img hover-overlay wow fadeInUp">
                <div className="image img-style">
                  <img
                    loading="lazy"
                    width="274"
                    height="274"
                    src="/assets/images/gallery/gallery-3.jpg"
                    alt="Image"
                  />
                </div>
                <a
                  href="product-detail.html"
                  className="box-icon hover-tooltip"
                >
                  <span className="icon icon-Eye"></span>
                  <span className="tooltip">View product</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-item hover-img hover-overlay wow fadeInUp">
                <div className="image img-style">
                  <img
                    loading="lazy"
                    width="274"
                    height="274"
                    src="/assets/images/gallery/gallery-4.jpg"
                    alt="Image"
                  />
                </div>
                <a
                  href="product-detail.html"
                  className="box-icon hover-tooltip"
                >
                  <span className="icon icon-Eye"></span>
                  <span className="tooltip">View product</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="gallery-item hover-img hover-overlay wow fadeInUp">
                <div className="image img-style">
                  <img
                    loading="lazy"
                    width="274"
                    height="274"
                    src="/assets/images/gallery/gallery-5.jpg"
                    alt="Image"
                  />
                </div>
                <a
                  href="product-detail.html"
                  className="box-icon hover-tooltip"
                >
                  <span className="icon icon-Eye"></span>
                  <span className="tooltip">View product</span>
                </a>
              </div>
            </div>
          </div>
          <div className="sw-dot-default tf-sw-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
