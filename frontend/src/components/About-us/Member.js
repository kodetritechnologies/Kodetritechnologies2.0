import { serviceProvider } from "@/utils/serviceProvider";

async function Member() {
  const serverProvider = await serviceProvider();

  const fetchMembers = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/cms/testimonial/type/about",
      );
      return response?.data?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const members = await fetchMembers();

  if (!members || members.length === 0) return null;

  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <div className="sect-heading type-2 text-center">
          <h3 className="s-title">Meet Our Teams</h3>
          <p className="s-desc text-body-1 cl-text-2">
            Experts committed to excellence in every detail.
          </p>
        </div>
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
            {members.map((member, index) => (
              <div className="swiper-slide" key={index}>
                <div className="card-member-v01 hover-img">
                  <div className="member-image">
                    <div className="image img-style">
                      <img
                        loading="lazy"
                        width="330"
                        height="440"
                        src={
                          member?.featured_image?.url ||
                          "/assets/images/member/member-1.jpg"
                        }
                        alt={member?.name || "Image"}
                      />
                    </div>
                    <div className="social-wrap">
                      <ul className="tf-social-icon-2 style-2 d-grid">
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="icon icon-FacebookLogo"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://x.com/">
                            <i className="icon icon-XLogo"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="icon icon-InstagramLogo"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.tiktok.com/">
                            <i className="icon icon-TiktokLogo"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="member-info">
                    <a href="#" className="name h5 fw-medium link-underline link">
                      {member?.name || "Member Name"}
                    </a>
                    <p className="duty cl-text-2">{member?.title || member?.description || "Manager"}</p>
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

export default Member;
