import GalleryComponent from "@/components/GalleryComponent";
import ProductDescription from "@/components/Shop/ProductDescription";
import { serviceProvider } from "@/utils/serviceProvider";
import WishlistButton from "@/components/WishlistButton";
import RelateProduct from "@/components/Shop/RelateProduct";
import AddToCartButton from "@/components/AddToCartButton";

async function page({ params }) {
  const { slug } = await params;
  const serverProvider = await serviceProvider();
  const getProductDetails = async () => {
    try {
      const response = await serverProvider.getMethod(
        `public/ecommerce/item/${slug}`,
      );
      return response?.data;
    } catch (error) {
      console.error(error);
    }
  };
  const productDetails = await getProductDetails();

  return (
    <main id="wrapper">
      <section className="section-product-single tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <GalleryComponent data={productDetails} />
            </div>
            <div className="col-md-6">
              <div className="tf-product-info-wrap position-relative mt-md-0">
                <div className="tf-zoom-main sticky-top"></div>
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-heading">
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {productDetails?.categories?.map((cat, index) => (
                        <span className="product-infor-cate text-caption-01 mb-0" key={index}>
                          {cat?.name}
                        </span>
                      ))}
                    </div>
                    <h3 className="product-infor-name mb-12">
                      {productDetails?.name}
                    </h3>
                    <div className="product-infor-meta mb-20">
                      <div className="meta_rate">
                        <div className="star-wrap normal d-flex align-items-center">
                          <i className="icon icon-Star"></i>
                          <i className="icon icon-Star"></i>
                          <i className="icon icon-Star"></i>
                          <i className="icon icon-Star"></i>
                          <i className="icon icon-Star"></i>
                        </div>
                        <span className="text-caption-01 cl-text-2">
                          (134 reviews)
                        </span>
                      </div>
                      <div className="br-line type-vertical"></div>
                      {productDetails?.sku && <div className="meta_prd_code text-caption-01">
                        <span className="cl-text-2">SKU:</span>
                        <span>{productDetails?.sku}</span>
                      </div>}
                    </div>
                    <div className="product-infor-price mb-12">
                      {productDetails?.sale_price ?
                        <h4 className="price-on-sale">{productDetails?.sale_price}</h4>
                        : <h4 className="price-on-sale">{productDetails?.price}</h4>}

                      <div className="br-line type-vertical"></div>
                      {productDetails?.price && <p className="cl-text-3 text-decoration-line-through">
                        {productDetails?.price}
                      </p>}
                      <span className="badge-sale text-white fw-semibold text-caption-02">
                        -25%
                      </span>
                    </div>
                    <p className="product-infor-desc cl-text-2 mb-12" dangerouslySetInnerHTML={{ __html: productDetails?.short_content || "" }} />
                  </div>
                  <div className="tf-product-variant">
                    <div className="tf-product-total-quantity">
                      <p className="">Quantity:</p>
                      <div className="group-action gap-3">
                        <div className="wg-quantity">
                          <button className="btn-quantity btn-decrease">
                            <i className="icon icon-minus"></i>
                          </button>
                          <input
                            className="quantity-product"
                            type="text"
                            name="number"
                            value="1"
                          />
                          <button className="btn-quantity btn-increase">
                            <i className="icon icon-plus"></i>
                          </button>
                        </div>
                        <AddToCartButton
                          productId={productDetails?._id}
                          price={productDetails?.sale_price || productDetails?.price}
                          productDetails={{
                            name: productDetails?.name,
                            featured_image: productDetails?.featured_image
                          }}
                        />
                        <WishlistButton productId={productDetails?._id} size="24px" />
                      </div>
                    </div>
                  </div>
                  <div className="tf-product-extra-link">
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      className="product-extra-icon link"
                    >
                      <i className="icon icon-ArrowsLeftRight"></i>
                      Compare
                    </a>
                    <a
                      href="#ask"
                      data-bs-toggle="modal"
                      className="product-extra-icon link"
                    >
                      <i className="icon icon-Question"></i>
                      Ask A Question
                    </a>
                    <a
                      href="#findSize"
                      data-bs-toggle="modal"
                      className="product-extra-icon link"
                    >
                      <i className="icon icon-Ruler"></i>
                      Size Guide
                    </a>
                    <a
                      href="#share"
                      data-bs-toggle="modal"
                      className="product-extra-icon link"
                    >
                      <i className="icon icon-ShareNetwork"></i>
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductDescription data={productDetails || {}} />
      <RelateProduct productId={productDetails?._id} />
    </main>
  );
}

export default page;
