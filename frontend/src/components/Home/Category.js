import { serviceProvider } from "@/utils/serviceProvider";
import Link from "next/link";

async function Category() {
  const serverProvider = await serviceProvider();
  const fetchCategory = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/configuration/categories/product",
      );
      return response?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const categories = await fetchCategory();

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="sect-heading type-2 text-center wow fadeInUp">
          <h3 className="s-title">Shop By Categories</h3>
          <p className="s-desc text-body-1 cl-text-2">
            Top styles everyone’s talking about.
          </p>
        </div>
        <div
          dir="ltr"
          className="swiper tf-swiper"
          data-preview="6"
          data-tablet="4"
          data-mobile-sm="3"
          data-mobile="2"
          data-space-lg="30"
          data-space-md="15"
          data-space="10"
          data-pagination="2"
          data-pagination-sm="3"
          data-pagination-md="4"
          data-pagination-lg="6"
        >
          <div className="swiper-wrapper">
            {categories.map((item) => (
              <div className="swiper-slide wow fadeInUp" key={item._id}>
                <Link href={`/shop/${item.slug}`} className="category-v01 hover-img">
                  <div className="cate-image img-style">
                    <img
                      loading="lazy"
                      width="210"
                      height="210"
                      src={item.featured_image?.url || "/assets/images/category/cate-1.jpg"}
                      alt={item.name}
                    />
                  </div>
                  <p className="cate-name h5 text-center link link-underline">
                    {item.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <div className="sw-line-default style-2 tf-sw-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Category;
