import { serviceProvider } from "@/utils/serviceProvider";

async function Testimonial() {
  const serverProvider = await serviceProvider();

  const fetchTestimonials = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/cms/testimonial/type/home",
      );
      return response?.data?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const testimonials = await fetchTestimonials();

  if (!testimonials || testimonials.length === 0) return null;

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
            {testimonials?.map((testimonial, index) => (
              <div className="swiper-slide" key={index}>
                <div
                  className="testimonial-v01 style-1 style-def wow fadeInLeft"
                  data-wow-delay={`${index * 0.1}s`}
                >
                  <div className="tes-image">
                    <img
                      loading="lazy"
                      width="285"
                      height="380"
                      src={
                        testimonial?.featured_image?.url ||
                        "/assets/images/testimonial/tes-1.jpg"
                      }
                      alt="Image"
                    />
                  </div>
                  <div className="tes-content">
                    <div className="star-wrap d-flex align-items-center">
                      {[...Array(testimonial?.rating || 5)].map((_, i) => (
                        <i key={i} className="icon icon-Star-thin fs-24"></i>
                      ))}
                    </div>
                    <div className="tes_author">
                      <p className="author-name h5">{testimonial?.name}</p>
                      <div className="br-line"></div>
                    </div>
                    <p className="tes_text h6">
                      “{testimonial?.description}”
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sw-line-default style-2 tf-sw-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
