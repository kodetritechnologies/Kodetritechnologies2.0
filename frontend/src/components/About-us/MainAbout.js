function MainAbout() {
  return (
    <section className="section-main-about flat-spacing pt-0">
      <div className="container">
        <div className="flat-spacing-2">
          <div className="hero-image">
            <img
              loading="lazy"
              width="1410"
              height="600"
              src="/assets/images/section/s-contact-1.jpg"
              alt="Image"
            />
          </div>
        </div>
        <div className="row align-items-center gy-4">
          <div className="col-md-6">
            <h2 className="text-capitalize">
              Design, attention to detail & efficiency to delight the world
            </h2>
          </div>
          <div className="col-md-6">
            <p className="text-body-1">
              From the moment it is conceived to the moment it is worn, every
              one of our garments follows this path. We could do it at a fast
              pace. However, at Mango, we choose to take care of all those who
              are walking this path with us.
            </p>
          </div>
        </div>
        <div className="flat-spacing pb-0">
          <div className="position-relative flat-spacing pb-0">
            <div className="br-line fake-className top-0"></div>
            <div
              dir="ltr"
              className="swiper tf-swiper"
              data-preview="4"
              data-tablet="3"
              data-mobile-sm="2"
              data-mobile="1"
              data-space-lg="40"
              data-space-md="20"
              data-space="10"
              data-pagination="1"
              data-pagination-sm="2"
              data-pagination-md="3"
              data-pagination-lg="4"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="box-why couter-side">
                    <p className="h1 fw-medium">8.2k</p>
                    <p className="title h5 fw-medium">Products Available</p>
                    <p className="sub cl-text-2">
                      We offer a wide selection of high-quality products to meet
                      every need.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="box-why view-counter">
                    <p className="h1 fw-medium">
                      <span className="number" data-speed="1000" data-to="10">
                        0
                      </span>
                      <span>k</span>
                    </p>
                    <p className="title h5 fw-medium">Happy Customers</p>
                    <p className="sub cl-text-2">
                      Serving over 10,000 delighted customers who trust us for
                      quality and service.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="swiper-slide">
                    <div className="box-why view-counter">
                      <p className="h1 fw-medium">
                        <span className="number" data-speed="1000" data-to="96">
                          0
                        </span>
                      </p>
                      <p className="title h5 fw-medium">Partner Brand</p>
                      <p className="sub cl-text-2">
                        Our top-brand partnerships bring a trusted collection
                        for your kitchen and home.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="swiper-slide">
                    <div className="box-why view-counter">
                      <p className="h1 fw-medium">
                        <span className="number" data-speed="1000" data-to="16">
                          0
                        </span>
                        <span>k</span>
                      </p>
                      <p className="title h5 fw-medium">Products For Sale</p>
                      <p className="sub cl-text-2">
                        That's why we strive to offer a diverse range of
                        products that cater to all styles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sw-dot-default tf-sw-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainAbout;
