import { priceHelper, productUrl } from "@/utils/helpers/productHelper";
import { serviceProvider } from "@/utils/serviceProvider";
import Link from "next/link";
import QuickViewButton from "@/components/QuickViewButton";

async function TopTrending() {
  const serverProvider = await serviceProvider();

  const fetchTrandingProduct = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/ecommerce/item/all?count=4&tranding=true",
      );
      return response?.data?.data || [];
    } catch (error) {
      console.error(error);
    }
  };

  const products = await fetchTrandingProduct();
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="sect-heading type-2 text-center wow fadeInUp">
          <h3 className="s-title">Top Trending</h3>
          <p className="s-desc text-body-1 cl-text-2">
            Browse our Top Trending picks loved by all.
          </p>
        </div>
        <div
          dir="ltr"
          className="swiper tf-swiper wrap-sw-over"
          data-preview="4"
          data-tablet="3"
          data-mobile-sm="2"
          data-mobile="2"
          data-space-lg="30"
          data-space-md="20"
          data-space="10"
          data-pagination="2"
          data-pagination-sm="2"
          data-pagination-md="3"
          data-pagination-lg="4"
        >
          <div className="swiper-wrapper">
            {products?.map((product, index) => {
              const { price, sale_price } = priceHelper(product);
              const url = productUrl(product);
              return (
                <div className="swiper-slide wow fadeInUp" key={index}>
                  <div className="card-product">
                    <div className="card-product_wrapper">
                      {product?.type == "simple" ? (
                        <Link href={url} className="product-img">
                          <img
                            className="img-product"
                            loading="lazy"
                            width="330"
                            height="440"
                            src={product?.gallery?.[0]?.url}
                            alt="Product"
                          />
                          <img
                            className="img-hover"
                            loading="lazy"
                            width="330"
                            height="440"
                            src={
                              product?.gallery?.[1]?.url ||
                              product?.gallery?.[0]?.url
                            }
                            alt="Product"
                          />
                        </Link>
                      ) : (
                        <Link href={url} className="product-img">
                          <img
                            className="img-product"
                            loading="lazy"
                            width="330"
                            height="440"
                            src={product?.varients[0]?.gallery?.[0]?.url}
                            alt="Product"
                          />
                          <img
                            className="img-hover"
                            loading="lazy"
                            width="330"
                            height="440"
                            src={product?.varients[0]?.gallery?.[1]?.url}
                            alt="Product"
                          />
                        </Link>
                      )}
                      <ul className="product-action_list">
                        <li className="wishlist">
                          <a
                            href="#;"
                            className="hover-tooltip tooltip-left box-icon"
                          >
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip tooltip-left box-icon"
                          >
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">Compare</span>
                          </a>
                        </li>
                        <li>
                          <QuickViewButton product={product} />
                        </li>
                      </ul>
                      <ul className="product-badge_list">
                        <li className="product-badge_item text-caption-01 new">
                          NEW
                        </li>
                      </ul>
                      <div className="product-action_bot">
                        <a
                          href="#quickAdd"
                          data-bs-toggle="modal"
                          className="tf-btn btn-white small  w-100"
                        >
                          Quick Add
                        </a>
                      </div>
                      <div className="product-marquee_sale">
                        <div className="marquee-wrapper">
                          <div className="initial-child-container">
                            <div className="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i className="icon icon-Star2"></i>
                            <div className="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i className="icon icon-Star2"></i>
                            <div className="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i className="icon icon-Star2"></i>
                            <div className="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i className="icon icon-Star2"></i>
                            <div className="marquee-child-item">
                              HOT SALE 25% OFF
                            </div>
                            <i className="icon icon-Star2"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-product_info">
                      <Link
                        href={url}
                        className="name-product lh-24 fw-medium link-underline-text"
                      >
                        {product?.name}
                      </Link>
                      <div className="star-wrap d-flex align-items-center">
                        <i className="icon icon-Star"></i>
                        <i className="icon icon-Star"></i>
                        <i className="icon icon-Star"></i>
                        <i className="icon icon-Star"></i>
                        <i className="icon icon-Star"></i>
                      </div>
                      <div className="price-wrap">
                        {sale_price && sale_price != null ? (
                          <span className="price-new text-primary fw-semibold">
                            ${sale_price}
                          </span>
                        ) : (
                          <span className="price-new text-primary fw-semibold">
                            ${price}
                          </span>
                        )}
                        {price && price != null && (
                          <span className="price-old text-caption-01 cl-text-3">
                            ${price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopTrending;
