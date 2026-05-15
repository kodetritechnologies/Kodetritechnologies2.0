"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BasicProvider from "@/utils/BasicProvider";
import { priceHelper, productUrl } from "@/utils/helpers/productHelper";

function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ items: [], posts: [], categories: [] });
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (searchTerm) => {
    if (!searchTerm.trim()) {
      setResults({ items: [], posts: [], categories: [] });
      return;
    }
    const basicProvider = BasicProvider();
    setLoading(true);
    try {
      const response = await basicProvider.getMethod(`public/ecommerce/global-search?q=${searchTerm}`);
      if (response?.status === "success") {
        setResults(response?.data || { items: [], posts: [], categories: [] });
      }
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, handleSearch]);

  const hasResults = (results?.items?.length > 0) || (results?.posts?.length > 0) || (results?.categories?.length > 0);

  return (
    <div className="modal modalCentered fade modal-search" id="search">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="search-header d-flex align-items-center justify-content-between mb-24">
            <h2 className="fw-bold m-0">Search</h2>
            <div 
              className="close-btn-wrapper bg-light rounded-circle d-flex align-items-center justify-content-center cursor-pointer hover-rotate"
              data-bs-dismiss="modal"
              style={{ width: '40px', height: '40px', transition: 'all 0.3s ease' }}
            >
              <i className="icon-X2 fs-5"></i>
            </div>
          </div>
          
          <div className="search-input-container mb-32">
            <div className="position-relative w-100">
              <input
                type="text"
                className="search-input-field w-100 py-3 ps-4 pe-5 rounded-3 border-0 shadow-sm fs-5"
                placeholder="Search products, blogs or categories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <div className="search-icon-overlay position-absolute end-0 top-50 translate-middle-y me-4 text-muted">
                {loading ? (
                  <div className="spinner-border spinner-border-sm text-primary" role="status"></div>
                ) : (
                  <i className="icon icon-MagnifyingGlass fs-4"></i>
                )}
              </div>
            </div>
          </div>
          <div className="search-results-wrapper mt-24">
            {loading && <div className="text-center p-4">Searching...</div>}

            {!loading && query && !hasResults && (
              <div className="text-center p-4">No results found for "{query}"</div>
            )}

            {!loading && hasResults && (
              <div className="search-results-content custom-scrollbar" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                {results.items.length > 0 && (
                  <div className="mb-24">
                    <p className="section-title mb-16 fw-bold text-muted border-bottom pb-2">Products</p>
                    <div className="search-product-list">
                      {results.items.map((item) => {
                        const { price: helperPrice, sale_price: helperSalePrice } = priceHelper(item);
                        const url = productUrl(item);
                        const price = helperPrice || item.price;
                        const sale_price = helperSalePrice || item.sale_price;

                        const imageUrl = item.type === "simple" 
                          ? (item?.gallery?.[0]?.url || item.featured_image?.url)
                          : (item?.varients?.[0]?.gallery?.[0]?.url || item.featured_image?.url || item?.gallery?.[0]?.url);

                        const handleNavigation = (e) => {
                          e.preventDefault();
                          const modalElement = document.getElementById('search');
                          if (modalElement && window.bootstrap) {
                            const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
                            modalInstance?.hide();
                          }
                          router.push(url);
                        };

                        return (
                          <div key={item._id} className="d-flex align-items-center gap-15 mb-16 pb-16 border-bottom-dashed">
                            <div className="product-img-wrapper" style={{ width: '70px', height: '70px', flexShrink: 0 }}>
                              <a href={url} onClick={handleNavigation} className="d-block h-100">
                                <img
                                  className="img-product"
                                  loading="lazy"
                                  src={imageUrl || "/assets/images/product/product-1.jpg"}
                                  alt={item.name}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                                />
                              </a>
                            </div>
                            <div className="product-info flex-grow-1">
                              <a href={url} onClick={handleNavigation} className="name-product lh-20 fw-medium text-truncate-2 mb-1 d-block">
                                {item.name}
                              </a>
                              <div className="price-wrap">
                                {sale_price && sale_price != null ? (
                                  <>
                                    <span className="price-new text-primary fw-semibold">${sale_price}</span>
                                    {price && price != null && (
                                      <span className="price-old text-caption-01 cl-text-3 ms-2" style={{ textDecoration: 'line-through' }}>${price}</span>
                                    )}
                                  </>
                                ) : (
                                  <span className="price-new text-primary fw-semibold">${price || '0.00'}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {results.posts.length > 0 && (
                  <div className="mb-24">
                    <p className="section-title mb-16 fw-bold text-muted border-bottom pb-2">Blogs</p>
                    <div className="search-blog-list">
                      {results.posts.map((post) => (
                        <Link key={post._id} href={`/blog/${post.slug}`} className="d-flex align-items-start gap-15 mb-16" data-bs-dismiss="modal">
                          <div className="blog-img flex-shrink-0" style={{ width: '60px', height: '60px' }}>
                            <img
                              src={post.featured_image?.url || "/assets/images/blog/blog-1.jpg"}
                              alt={post.title}
                              className="rounded"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </div>
                          <div className="blog-info">
                            <h6 className="mb-1 text-truncate-2">{post.title}</h6>
                            <p className="text-caption-01 cl-text-3">
                              {new Date(post.publish_date || post.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {results.categories.length > 0 && (
                  <div className="mb-24">
                    <p className="section-title mb-16 fw-bold text-muted border-bottom pb-2">Categories</p>
                    <div className="d-flex flex-wrap gap-10">
                      {results.categories.map((cat) => (
                        <Link
                          key={cat._id}
                          href={`/shop?category=${cat.slug}`}
                          className="tf-btn btn-outline rounded-pill px-3 py-1"
                          data-bs-dismiss="modal"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {!query && (
              <>
                <div className="search-feature mb-32">
                  <p className="section-title mb-16 fw-bold text-muted">Feature Keywords Today</p>
                  <div className="tf-list-tag d-flex flex-wrap gap-10">
                    <Link href="/shop?q=Dresses" className="link-tag tf-btn btn-outline rounded-pill px-3 py-1 fw-normal border-light text-muted" data-bs-dismiss="modal">Dresses</Link>
                    <Link href="/shop?q=Dresses women" className="link-tag tf-btn btn-outline rounded-pill px-3 py-1 fw-normal border-light text-muted" data-bs-dismiss="modal">Dresses women</Link>
                    <Link href="/shop?q=Dresses midi" className="link-tag tf-btn btn-outline rounded-pill px-3 py-1 fw-normal border-light text-muted" data-bs-dismiss="modal">Dresses midi</Link>
                    <Link href="/shop?q=Dress summer" className="link-tag tf-btn btn-outline rounded-pill px-3 py-1 fw-normal border-light text-muted" data-bs-dismiss="modal">Dress summer</Link>
                  </div>
                </div>
                <div className="recently-view">
                  <p className="section-title mb-16 fw-bold text-muted">Recently Viewed Products</p>
                  <div className="swiper tf-swiper mb-24" data-preview="4">
                    <div className="swiper-wrapper">
                      {/* ... original swiper slides could go here or keep as is ... */}
                      <div className="swiper-slide text-center p-4 border rounded">
                        <p className="cl-text-2">Your search results will appear here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <style jsx>{`
            .text-truncate-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .custom-scrollbar::-webkit-scrollbar { width: 6px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: #f8f9fa; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #dee2e6; border-radius: 10px; }
            .border-bottom-dashed {
              border-bottom: 1px dashed #eee;
            }
            .border-bottom-dashed:last-child {
              border-bottom: none;
            }
            .search-input-field {
              background: #f8f9fa;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              outline: none;
              border: 1px solid transparent !important;
            }
            .search-input-field:focus {
              background: #fff;
              box-shadow: 0 10px 25px rgba(0,0,0,0.05) !important;
              border-color: #eee !important;
            }
            .hover-rotate:hover {
              transform: rotate(90deg);
              background-color: #f1f1f1 !important;
            }
            .cursor-pointer { cursor: pointer; }
            .search-results-content {
              padding-right: 10px;
            }
            .section-title {
              letter-spacing: 0.5px;
              text-transform: uppercase;
              font-size: 0.85rem;
            }
            .product-info .name-product {
              transition: color 0.2s ease;
            }
            .product-info .name-product:hover {
              color: var(--primary) !important;
            }
            .img-product {
              transition: transform 0.3s ease;
            }
            .product-img-wrapper:hover .img-product {
              transform: scale(1.05);
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

export default Search;
