function NewsletterModel() {
  return (
    <div
      className="modal modalCentered fade modal-newsletter auto-popup"
      id="newsletter"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="image-left">
            <img
              loading="lazy"
              width={360}
              height={360}
              src="/assets/images/section/banner-newsletter.jpg"
              alt="Image"
            />
          </div>
          <div className="content-right">
            <span className="icon-close-popup" data-bs-dismiss="modal">
              <i className="icon-X2"></i>
            </span>
            <p className="h6 mb-8">Subscribe & Enjoy</p>
            <p className="h1 fw-medium mb-8 text-primary">10% OFF</p>
            <p className="desc-pop">
              Join our email list & be first to Receive 10% OFF your next order,
              exclusive offers & more!
            </p>
            <form className="form-newsletter mb-12">
              <fieldset>
                <input type="email" placeholder="Your email address" required />
              </fieldset>
              <button
                type="submit"
                className="btn-action tf-btn small animate-btn"
              >
                Subscribe
              </button>
            </form>
            <p className="text-caption-01 cl-text-2">
              Don’t worry, we hate spam as much as you do
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterModel;
