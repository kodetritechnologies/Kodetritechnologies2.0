function ProductDescription() {
  return (
    <section class="section-product-description flat-spacing flat-animate-tab">
      <div class="container">
        <ul class="tab-btn-wrap-v1" role="tablist">
          <li class="nav-tab-item" role="presentation">
            <a
              href="#description"
              data-bs-toggle="tab"
              class="tf-btn-tab active"
              role="tab"
            >
              <span class="h5 fw-medium">Description</span>
            </a>
          </li>
          <li class="nav-tab-item" role="presentation">
            <a
              href="#customer-reviews"
              data-bs-toggle="tab"
              class="tf-btn-tab"
              role="tab"
            >
              <span class="h5 fw-medium">Customer Reviews</span>
            </a>
          </li>
          <li class="nav-tab-item" role="presentation">
            <a
              href="#shipping-returns"
              data-bs-toggle="tab"
              class="tf-btn-tab"
              role="tab"
            >
              <span class="h5 fw-medium">Shipping & Returns</span>
            </a>
          </li>
          <li class="nav-tab-item" role="presentation">
            <a
              href="#return-policies"
              data-bs-toggle="tab"
              class="tf-btn-tab"
              role="tab"
            >
              <span class="h5 fw-medium">Return Policies</span>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active show" id="description" role="tabpanel">
            <div class="tab-content_desc tf-grid-layout md-col-2">
              <div class="box-desc">
                <h5 class="desc_title">Stretch Strap Top</h5>
                <div class="desc_info">
                  <p class="cl-text-2">
                    Nodding to retro styles, this Hyperbola T-shirt is defined
                    by its off-the-shoulder design. It's spun from a green
                    stretch cotton jersey and adorned with an embroidered.
                  </p>
                  <p class="cl-text-2">
                    Thick knitted fabric. Short design. Straight design. Rounded
                    neck. Sleeveless. Straps. Unclosed. Cable knit finish.
                    Co-ord.
                  </p>
                </div>
              </div>
              <div class="box-desc">
                <h5 class="desc_title">
                  Composition, Origin And Care Guidelines
                </h5>
                <ul class="list">
                  <li class="cl-text-2">
                    - Composition: 55% polyester, 30% acrylic, 13% polyamide, 2%
                    elastane
                  </li>
                  <li class="cl-text-2">- Designed in Barcelona</li>
                  <li class="cl-text-2">- Origin</li>
                  <li class="cl-text-2">- Manufacture: USA</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="customer-reviews" role="tabpanel">
            <div class="product-desc_review">
              <div class="box-rating">
                <div class="rating-ratio">
                  <p class="text-display fw-medium">4.8</p>
                  <div class="star-wrap normal d-flex align-items-center">
                    <i class="icon icon-Star fs-24"></i>
                    <i class="icon icon-Star fs-24"></i>
                    <i class="icon icon-Star fs-24"></i>
                    <i class="icon icon-Star fs-24"></i>
                    <i class="icon icon-Star fs-24"></i>
                  </div>
                  <p class="rate-number">(1,968 Ratings)</p>
                </div>
                <div class="rating-progress-list">
                  <div class="rate-progress-star fw-medium">
                    <span class="number-star">5</span>
                    <i class="icon icon-Star fs-20 cl-text-yellow"></i>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar" style={{ width: "60%" }}></div>
                    </div>
                    <span class="number-percent">60%</span>
                  </div>
                  <div class="rate-progress-star fw-medium">
                    <span class="number-star">4</span>
                    <i class="icon icon-Star fs-20 cl-text-yellow"></i>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar" style={{ width: "20%" }}></div>
                    </div>
                    <span class="number-percent">20%</span>
                  </div>
                  <div class="rate-progress-star fw-medium">
                    <span class="number-star">3</span>
                    <i class="icon icon-Star fs-20 cl-text-yellow"></i>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar" style={{ width: "10%" }}></div>
                    </div>
                    <span class="number-percent">10%</span>
                  </div>
                  <div class="rate-progress-star fw-medium">
                    <span class="number-star">2</span>
                    <i class="icon icon-Star fs-20 cl-text-yellow"></i>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar" style={{ width: "7%" }}></div>
                    </div>
                    <span class="number-percent">7%</span>
                  </div>
                  <div class="rate-progress-star fw-medium">
                    <span class="number-star">1</span>
                    <i class="icon icon-Star fs-20 cl-text-yellow"></i>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar" style={{ width: "3%" }}></div>
                    </div>
                    <span class="number-percent">3%</span>
                  </div>
                </div>
                <a href="#" class="action tf-btn animate-btn">
                  Write a review
                </a>
              </div>
              <div class="box-comment">
                <div class="head">
                  <h4>03 Comments</h4>
                  <div class="sort-by">
                    <span class="text-caption-01">Sort by:</span>
                    <div class="select-wrap select-sort-comment">
                      <select class="select-2">
                        <option value="1" selected="">
                          Most Recent
                        </option>
                        <option value="2">Last Week</option>
                        <option value="3">Today</option>
                      </select>
                      <i class="icon icon-CaretDown"></i>
                    </div>
                  </div>
                </div>
                <div class="wg-comment">
                  <div class="comment-list">
                    <div class="box-comment">
                      <div class="comment_info">
                        <div class="info_image">
                          <img
                            loading="lazy"
                            width="60"
                            height="60"
                            src="/assets/images/avatar/avatar-2.jpg"
                            alt="Image"
                          />
                        </div>
                        <div class="info_author">
                          <p class="h6 author__name">
                            Top-tier cookware designed for performance
                          </p>
                          <p class="author_date text-caption-01 cl-text-3">
                            1 days ago
                          </p>
                        </div>
                      </div>
                      <p class="comment_text text-body-1">
                        The set arrived quickly, and I was impressed with how
                        sturdy and sleek the pieces feel. The non-stick ceramic
                        surface is excellent, and it’s easy to clean.
                      </p>
                      <div class="comment_reply">
                        <div class="comment_info">
                          <div class="info_image">
                            <img
                              loading="lazy"
                              width="60"
                              height="60"
                              src="/assets/images/avatar/avatar-1.jpg"
                              alt="Image"
                            />
                          </div>
                          <div class="info_author">
                            <p class="h6 author__name">Reply from Amerce</p>
                            <p class="author_date text-caption-01 cl-text-3">
                              1 days ago
                            </p>
                          </div>
                        </div>
                        <p class="comment_text text-body-1">
                          I bought this set as a gift. The craftsmanship is
                          top-notch, and customer service was super helpful with
                          my inquiries.
                        </p>
                      </div>
                    </div>
                    <div class="box-comment">
                      <div class="comment_info">
                        <div class="info_image">
                          <img
                            loading="lazy"
                            width="60"
                            height="60"
                            src="/assets/images/avatar/avatar-3.jpg"
                            alt="Image"
                          />
                        </div>
                        <div class="info_author">
                          <p class="h6 author__name">
                            Top-tier cookware designed for performance
                          </p>
                          <p class="author_date text-caption-01 cl-text-3">
                            1 days ago
                          </p>
                        </div>
                      </div>
                      <p class="comment_text text-body-1">
                        Great experience overall! Easy checkout process, fast
                        shipping, and the cookware was just as described.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="box-write-comment">
                <div class="head">
                  <h5>Write a review:</h5>
                  <div class="star-wrap rate-click d-flex align-items-center">
                    <i class="icon icon-Star"></i>
                    <i class="icon icon-Star"></i>
                    <i class="icon icon-Star"></i>
                    <i class="icon icon-Star"></i>
                    <i class="icon icon-Star"></i>
                  </div>
                </div>
                <form class="form-rating">
                  <div class="form-content mb-24">
                    <div class="tf-grid-layout md-col-2">
                      <div class="tf-grid-layout">
                        <fieldset class="tf-field">
                          <label htmlFor="review" class="tf-lable fw-medium">
                            Review Title
                          </label>
                          <input
                            type="text"
                            id="review"
                            placeholder="Give your review a title"
                            required=""
                          />
                        </fieldset>
                        <fieldset class="tf-field">
                          <label htmlFor="email" class="tf-lable fw-medium">
                            Your Email <span class="text-primary">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="Your email (private)"
                            required=""
                          />
                        </fieldset>
                        <fieldset class="tf-field">
                          <label htmlFor="name" class="tf-lable fw-medium">
                            Your Name <span class="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="You Name (Public)"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <fieldset class="tf-field d-flex flex-column">
                        <label htmlFor="name" class="tf-lable fw-medium">
                          Review
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Write your comment here"
                          class="h-md-100"
                        ></textarea>
                      </fieldset>
                    </div>
                    <div class="checkbox-wrap">
                      <input class="tf-check" type="checkbox" id="save" />
                      <label htmlFor="save" class="cl-text-2">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                  </div>
                  <button type="submit" class="tf-btn animate-btn">
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="shipping-returns" role="tabpanel">
            <div class="tab-content_desc desc-2 tf-grid-layout sm-col-2 xl-col-4">
              <div class="box-desc">
                <h5 class="desc_title">We've got your back</h5>
                <div class="desc_info">
                  <p class="cl-text-2">
                    Free returns within 14 days (excludes final sale and
                    made-to-order items, face masks and certain products
                    containing hazardous or flammable materials, such as
                    fragrances and aerosols)
                  </p>
                </div>
              </div>
              <div class="box-desc">
                <h5 class="desc_title">Import duties information</h5>
                <div class="desc_info">
                  <p class="cl-text-2">
                    Delivery duties are included in the item price when shipping
                    to all EU countries (excluding the Canary Islands), plus The
                    United Kingdom, USA, Canada, China Mainland, Australia, New
                    Zealand.
                  </p>
                </div>
              </div>
              <div class="box-desc">
                <h5 class="desc_title">Estimated delivery</h5>
                <ul class="list">
                  <li class="cl-text-2">- Express: May 10 - May 17</li>
                  <li class="cl-text-2">- Sending from USA</li>
                </ul>
              </div>
              <div class="box-desc">
                <h5 class="desc_title">More information?</h5>
                <ul class="list">
                  <li class="cl-text-2">- Orders & delivery</li>
                  <li class="cl-text-2">- Duties & taxes</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="return-policies" role="tabpanel">
            <div class="tab-content_desc desc-3 d-grid">
              <div class="box-desc">
                <h5 class="desc_title">Return Policies</h5>
                <p class="desc_info cl-text-2">
                  At Amerce, we stand behind the quality of our products. If
                  you're not completely satisfied with your purchase, we offer
                  hassle-free returns within 30 days of delivery.
                </p>
              </div>
              <div class="box-desc">
                <h5 class="desc_title">Return Policies</h5>
                <ul class="list">
                  <li class="cl-text-2">
                    - Exchange your item for a different size, color, or style,
                    or receive a full refund.
                  </li>
                  <li class="cl-text-2">
                    - All returned items must be unworn, in their original
                    packaging, and with tags attached.
                  </li>
                </ul>
              </div>
              <div class="box-desc">
                <h5 class="desc_title">Return Policies</h5>
                <ul class="list">
                  <li class="cl-text-2">
                    - Initiate your return online or contact our customer
                    service team for assistance.
                  </li>
                  <li class="cl-text-2">
                    - Pack your item securely and include the original packing
                    slip.
                  </li>
                  <li class="cl-text-2">
                    - Ship your return back to us using our prepaid shipping
                    label.
                  </li>
                  <li class="cl-text-2">
                    - Once received, your refund will be processed promptly.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDescription;
