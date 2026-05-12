function ProductDescription({ data }) {
  return (
    <section className="section-product-description flat-spacing flat-animate-tab">
      <div className="container">
        <ul className="tab-btn-wrap-v1" role="tablist">
          <li className="nav-tab-item" role="presentation">
            <a
              href="#description"
              data-bs-toggle="tab"
              className="tf-btn-tab active"
              role="tab"
            >
              <span className="h5 fw-medium">Description</span>
            </a>
          </li>
          <li className="nav-tab-item" role="presentation">
            <a
              href="#customer-reviews"
              data-bs-toggle="tab"
              className="tf-btn-tab"
              role="tab"
            >
              <span className="h5 fw-medium">Customer Reviews</span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active show" id="description" role="tabpanel">
            <div className="tab-content_desc tf-grid-layout md-col-2">
              <div className="box-desc">
                <div className="desc_info">
                  <p className="cl-text-2" dangerouslySetInnerHTML={{ __html: data?.long_content || '' }} >
                  </p>
                </div>
              </div>
              <div className="box-desc">
                <h5 className="desc_title">
                  Composition, Origin And Care Guidelines
                </h5>
                <ul className="list">
                  <li className="cl-text-2">
                    - Composition: 55% polyester, 30% acrylic, 13% polyamide, 2%
                    elastane
                  </li>
                  <li className="cl-text-2">- Designed in Barcelona</li>
                  <li className="cl-text-2">- Origin</li>
                  <li className="cl-text-2">- Manufacture: USA</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="customer-reviews" role="tabpanel">
            <div className="product-desc_review">
              <div className="box-rating">
                <div className="rating-ratio">
                  <p className="text-display fw-medium">4.8</p>
                  <div className="star-wrap normal d-flex align-items-center">
                    <i className="icon icon-Star fs-24"></i>
                    <i className="icon icon-Star fs-24"></i>
                    <i className="icon icon-Star fs-24"></i>
                    <i className="icon icon-Star fs-24"></i>
                    <i className="icon icon-Star fs-24"></i>
                  </div>
                  <p className="rate-number">(1,968 Ratings)</p>
                </div>
                <div className="rating-progress-list">
                  <div className="rate-progress-star fw-medium">
                    <span className="number-star">5</span>
                    <i className="icon icon-Star fs-20 cl-text-yellow"></i>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar" style={{ width: "60%" }}></div>
                    </div>
                    <span className="number-percent">60%</span>
                  </div>
                  <div className="rate-progress-star fw-medium">
                    <span className="number-star">4</span>
                    <i className="icon icon-Star fs-20 cl-text-yellow"></i>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar" style={{ width: "20%" }}></div>
                    </div>
                    <span className="number-percent">20%</span>
                  </div>
                  <div className="rate-progress-star fw-medium">
                    <span className="number-star">3</span>
                    <i className="icon icon-Star fs-20 cl-text-yellow"></i>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar" style={{ width: "10%" }}></div>
                    </div>
                    <span className="number-percent">10%</span>
                  </div>
                  <div className="rate-progress-star fw-medium">
                    <span className="number-star">2</span>
                    <i className="icon icon-Star fs-20 cl-text-yellow"></i>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar" style={{ width: "7%" }}></div>
                    </div>
                    <span className="number-percent">7%</span>
                  </div>
                  <div className="rate-progress-star fw-medium">
                    <span className="number-star">1</span>
                    <i className="icon icon-Star fs-20 cl-text-yellow"></i>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar" style={{ width: "3%" }}></div>
                    </div>
                    <span className="number-percent">3%</span>
                  </div>
                </div>
                <a href="#" className="action tf-btn animate-btn">
                  Write a review
                </a>
              </div>
              <div className="box-comment">
                <div className="head">
                  <h4>03 Comments</h4>
                  <div className="sort-by">
                    <span className="text-caption-01">Sort by:</span>
                    <div className="select-wrap select-sort-comment">
                      <select className="select-2">
                        <option value="1" selected="">
                          Most Recent
                        </option>
                        <option value="2">Last Week</option>
                        <option value="3">Today</option>
                      </select>
                      <i className="icon icon-CaretDown"></i>
                    </div>
                  </div>
                </div>
                <div className="wg-comment">
                  <div className="comment-list">
                    <div className="box-comment">
                      <div className="comment_info">
                        <div className="info_image">
                          <img
                            loading="lazy"
                            width="60"
                            height="60"
                            src="/assets/images/avatar/avatar-2.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info_author">
                          <p className="h6 author__name">
                            Top-tier cookware designed for performance
                          </p>
                          <p className="author_date text-caption-01 cl-text-3">
                            1 days ago
                          </p>
                        </div>
                      </div>
                      <p className="comment_text text-body-1">
                        The set arrived quickly, and I was impressed with how
                        sturdy and sleek the pieces feel. The non-stick ceramic
                        surface is excellent, and it’s easy to clean.
                      </p>
                      <div className="comment_reply">
                        <div className="comment_info">
                          <div className="info_image">
                            <img
                              loading="lazy"
                              width="60"
                              height="60"
                              src="/assets/images/avatar/avatar-1.jpg"
                              alt="Image"
                            />
                          </div>
                          <div className="info_author">
                            <p className="h6 author__name">Reply from Amerce</p>
                            <p className="author_date text-caption-01 cl-text-3">
                              1 days ago
                            </p>
                          </div>
                        </div>
                        <p className="comment_text text-body-1">
                          I bought this set as a gift. The craftsmanship is
                          top-notch, and customer service was super helpful with
                          my inquiries.
                        </p>
                      </div>
                    </div>
                    <div className="box-comment">
                      <div className="comment_info">
                        <div className="info_image">
                          <img
                            loading="lazy"
                            width="60"
                            height="60"
                            src="/assets/images/avatar/avatar-3.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info_author">
                          <p className="h6 author__name">
                            Top-tier cookware designed for performance
                          </p>
                          <p className="author_date text-caption-01 cl-text-3">
                            1 days ago
                          </p>
                        </div>
                      </div>
                      <p className="comment_text text-body-1">
                        Great experience overall! Easy checkout process, fast
                        shipping, and the cookware was just as described.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-write-comment">
                <div className="head">
                  <h5>Write a review:</h5>
                  <div className="star-wrap rate-click d-flex align-items-center">
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                  </div>
                </div>
                <form className="form-rating">
                  <div className="form-content mb-24">
                    <div className="tf-grid-layout md-col-2">
                      <div className="tf-grid-layout">
                        <fieldset className="tf-field">
                          <label htmlFor="review" className="tf-lable fw-medium">
                            Review Title
                          </label>
                          <input
                            type="text"
                            id="review"
                            placeholder="Give your review a title"
                            required=""
                          />
                        </fieldset>
                        <fieldset className="tf-field">
                          <label htmlFor="email" className="tf-lable fw-medium">
                            Your Email <span className="text-primary">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="Your email (private)"
                            required=""
                          />
                        </fieldset>
                        <fieldset className="tf-field">
                          <label htmlFor="name" className="tf-lable fw-medium">
                            Your Name <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="You Name (Public)"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <fieldset className="tf-field d-flex flex-column">
                        <label htmlFor="name" className="tf-lable fw-medium">
                          Review
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Write your comment here"
                          className="h-md-100"
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="checkbox-wrap">
                      <input className="tf-check" type="checkbox" id="save" />
                      <label htmlFor="save" className="cl-text-2">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="tf-btn animate-btn">
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDescription;
