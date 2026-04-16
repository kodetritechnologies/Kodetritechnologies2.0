function BoxIcon() {
  return (
    <div className="flat-spacing">
      <div className="container">
        <div
          dir="ltr"
          className="swiper tf-swiper"
          data-preview="4"
          data-tablet="3"
          data-mobile-sm="2"
          data-mobile="1"
          data-space-lg="30"
          data-space-md="20"
          data-space="10"
          data-pagination="1"
          data-pagination-sm="2"
          data-pagination-md="3"
          data-pagination-lg="4"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="box-icon_V01 wow fadeInLeft">
                <span className="icon">
                  <i className="icon-ArrowUDownLeft"></i>
                </span>
                <div className="content">
                  <p className="title h6">14-Day Returns</p>
                  <p className="text cl-text-2">
                    Risk-free shopping with easy returns.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="box-icon_V01 wow fadeInLeft">
                <span className="icon">
                  <i className="icon-Package"></i>
                </span>
                <div className="content">
                  <p className="title h6">Free Shipping</p>
                  <p className="text cl-text-2">
                    No extra costs, just the price you see.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="box-icon_V01 wow fadeInLeft">
                <span className="icon">
                  <i className="icon-Headset"></i>
                </span>
                <div className="content">
                  <p className="title h6">24/7 Support</p>
                  <p className="text cl-text-2">
                    24/7 support, always here just for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="box-icon_V01 wow fadeInLeft">
                <span className="icon">
                  <i className="icon-SealPercent"></i>
                </span>
                <div className="content">
                  <p className="title h6">Member Discounts</p>
                  <p className="text cl-text-2">
                    Special prices for our loyal customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sw-line-default style-2 tf-sw-pagination"></div>
        </div>
      </div>
    </div>
  );
}

export default BoxIcon;
