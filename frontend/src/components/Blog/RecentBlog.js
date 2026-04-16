function RecentBlog() {
  return (
    <section className="section-related flat-spacing">
      <div className="container">
        <div className="sect-heading text-center">
          <h3 className="s-title">Related Posts</h3>
          <p className="s-desc text-body-1 cl-text-2">
            Discover more stories and style tips to keep your fashion
            inspiration flowing.
          </p>
        </div>
        <h4 className="d-none">Perfect SEO</h4>
        <div
          dir="ltr"
          className="swiper tf-swiper"
          data-preview="3"
          data-tablet="2"
          data-mobile-sm="1"
          data-mobile="1"
          data-space-lg="30"
          data-space-md="15"
          data-space="15"
          data-pagination="1"
          data-pagination-sm="1"
          data-pagination-md="2"
          data-pagination-lg="3"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <article className="article-blog hover-img">
                <a href="blog-single.html" className="blog-image img-style">
                  <img
                    loading="lazy"
                    width="450"
                    height="307"
                    src="/assets/images/blog/blog-1.jpg"
                    alt="Image"
                  />
                </a>
                <div className="blog-content">
                  <p className="entry-date text-caption-01 fw-semibold cl-text-3">
                    13 August
                  </p>
                  <h5 className="entry-title">
                    <a href="blog-single.html" className="link-underline link">
                      How to Build a Capsule Wardrobe That Fits Your Lifestyle
                    </a>
                  </h5>
                  <p className="entry-desc cl-text-2">
                    Learn the art of mixing timeless basics with statement
                    pieces for effortless, everyday style.
                  </p>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="article-blog hover-img">
                <a href="blog-single.html" className="blog-image img-style">
                  <img
                    loading="lazy"
                    width="450"
                    height="307"
                    src="/assets/images/blog/blog-2.jpg"
                    alt="Image"
                  />
                </a>
                <div className="blog-content">
                  <p className="entry-date text-caption-01 fw-semibold cl-text-3">
                    15 August
                  </p>
                  <h5 className="entry-title">
                    <a href="blog-single.html" className="link-underline link">
                      The Secret to Effortless Elegance in Every Season
                    </a>
                  </h5>
                  <p className="entry-desc cl-text-2">
                    Discover key layering techniques and fabric choices that
                    keep you chic year-round.
                  </p>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="article-blog hover-img">
                <a href="blog-single.html" className="blog-image img-style">
                  <img
                    loading="lazy"
                    width="450"
                    height="307"
                    src="/assets/images/blog/blog-3.jpg"
                    alt="Image"
                  />
                </a>
                <div className="blog-content">
                  <p className="entry-date text-caption-01 fw-semibold cl-text-3">
                    18 August
                  </p>
                  <h5 className="entry-title">
                    <a href="blog-single.html" className="link-underline link">
                      Why Accessories Define More Than Just Your Outfit
                    </a>
                  </h5>
                  <p className="entry-desc cl-text-2">
                    Explore how small details like jewelry and bags can
                    transform your entire look.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentBlog;
