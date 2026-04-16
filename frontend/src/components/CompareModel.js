function CompareModel() {
  return (
    <div className="offcanvas offcanvas-bottom canvas-compare" id="compare">
      <div className="canvas-wrapper">
        <div className="canvas-body">
          <div className="container">
            <div className="tf-compare-list main-list-clear wrap-empty_text">
              <div className="tf-compare-head">
                <h4 className="title letter-space-0">Compare products</h4>
              </div>
              <div className="tf-compare-offcanvas list-empty">
                <p className="box-text_empty cl-text-2">
                  Your Compare is curently empty
                </p>
                <div className="tf-compare-item file-delete">
                  <a href="product-detail.html">
                    <div className="icon remove">
                      <i className="icon-X2"></i>
                    </div>
                    <img
                      className="radius-3"
                      width="660"
                      height="880"
                      src="/assets/images/product/product-1.jpg"
                      alt="Image"
                    />
                  </a>
                </div>
                <div className="tf-compare-item file-delete">
                  <a href="product-detail.html">
                    <div className="icon remove">
                      <i className="icon-X2"></i>
                    </div>
                    <img
                      className="radius-3"
                      width="660"
                      height="880"
                      src="/assets/images/product/product-2.jpg"
                      alt="Image"
                    />
                  </a>
                </div>
                <div className="tf-compare-item file-delete">
                  <a href="product-detail.html">
                    <div className="icon remove">
                      <i className="icon-X2"></i>
                    </div>
                    <img
                      className="radius-3"
                      width="660"
                      height="880"
                      src="/assets/images/product/product-3.jpg"
                      alt="Image"
                    />
                  </a>
                </div>
              </div>
              <div className="tf-compare-buttons justify-content-center">
                <a href="compare.html" className="tf-btn animate-btn">
                  Compare{" "}
                </a>
                <div className="tf-btn btn-white btn-stroke clear-list-empty tf-compare-button-clear-all">
                  Clear All
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareModel;
