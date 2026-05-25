import React from "react";

export default function PriceFilter() {
  return (
    <div className="widget-facet">
      <div
        className="facet-title"
        data-bs-target="#price"
        role="button"
        data-bs-toggle="collapse"
        aria-expanded="true"
        aria-controls="price"
      >
        <h6>Filter By Price</h6>
        <span className="icon icon-CaretDown"></span>
      </div>
      <div id="price" className="collapse show">
        <div className="collapse-body widget-price filter-price">
          <div
            className="price-val-range"
            id="price-value-range"
            data-min="0"
            data-max="200"
          ></div>
          <div className="price-box tf-grid-layout tf-col-2">
            <div className="box-wrap">
              <div className="price-val_wrap">
                <span className="cl-text-2 text-body-1">$</span>
                <div className="price-val" id="price-min-value"></div>
              </div>
            </div>
            <div className="box-wrap">
              <div className="price-val_wrap">
                <span className="cl-text-2 text-body-1">$</span>
                <div className="price-val" id="price-max-value"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
