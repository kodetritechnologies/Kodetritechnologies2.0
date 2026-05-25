import React from "react";

export default function SizeFilter() {
  return (
    <div className="widget-facet">
      <div
        className="facet-title"
        data-bs-target="#size"
        role="button"
        data-bs-toggle="collapse"
        aria-expanded="true"
        aria-controls="size"
      >
        <h6>Size</h6>
        <span className="icon icon-CaretDown"></span>
      </div>
      <div id="size" className="collapse show">
        <ul className="collapse-body filter-group-size">
          {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
            <li key={size}>
              <input
                className="ip-size d-none"
                type="checkbox"
                name="size"
                id={`size-${size.toLowerCase()}`}
              />
              <label htmlFor={`size-${size.toLowerCase()}`} className="label-size">
                <span className="size-text fw-medium">{size}</span>
              </label>
            </li>
          ))}
          <li>
            <input
              className="ip-size d-none"
              type="checkbox"
              name="size"
              id="over-size"
            />
            <label htmlFor="over-size" className="label-size over-size">
              <span className="size-text fw-medium">Free Size</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
