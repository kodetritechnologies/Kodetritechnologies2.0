import { serviceProvider } from "@/utils/serviceProvider";
import Link from "next/link";

async function Slider() {
  const serverProvider = await serviceProvider();
  const fetchSlider = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/cms/slider/home",
      );
      return response?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const slider = await fetchSlider()

  return (
    <div className="tf-slideshow tf-btn-swiper-main hover-sw-nav">
      <div
        dir="ltr"
        className="swiper tf-swiper sw-slide-show slider_effect_fade"
        data-loop="true"
        data-effect="fade"
        data-delay="3000"
      >
        <div className="swiper-wrapper">
          {slider?.gallery?.map((data, index) => (
            <div className="swiper-slide" key={index}>
              <div className="slideshow-wrap">
                <div className="sld_image">
                  <img
                    loading="lazy"
                    width="1920"
                    height="730"
                    src={data?._id?.url}
                    alt="Image"
                  />
                </div>
                <div className="sld_content pst-5">
                  <div className="container">
                    <div className="content-sld_wrap text-center">
                      <div className="heading">
                        <p className="sub-text_sld text-body-1 text-white fade-item fade-item-1 mb-15">
                          {data?.name}
                        </p>
                        <p className="title_sld text-display fw-medium text-white fade-item fade-item-2">
                          {data?.desc}
                        </p>
                      </div>
                      <div className="fade-item fade-item-3">
                        <Link href={data?.link} className="tf-btn btn-white">
                          Shop
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sw-line-default tf-sw-pagination"></div>
      </div>
      <div className="group-nav-action">
        <div className="container-full">
          <div className="d-flex align-items-center justify-content-between">
            <div className="tf-sw-nav text-white link nav-prev-swiper">
              <i className="icon icon-ArrowLongLeft"></i>
            </div>
            <div className="tf-sw-nav text-white link nav-next-swiper">
              <i className="icon icon-ArrowLongRight"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
