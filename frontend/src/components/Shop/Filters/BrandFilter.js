import React from "react";

export default function BrandFilter() {
  return (
    <div className="widget-facet">
      <div
        className="facet-title"
        data-bs-target="#brand"
        role="button"
        data-bs-toggle="collapse"
        aria-expanded="true"
        aria-controls="brand"
      >
        <h6>Brands</h6>
        <span className="icon icon-CaretDown"></span>
      </div>
      <div id="brand" className="collapse show">
        <ul className="collapse-body filter-group-check">
          {[
            { id: "nike", name: "Nike", count: 112 },
            { id: "lv", name: "Louis Vuitton", count: 32 },
            { id: "hermes", name: "Hermes", count: 42 },
            { id: "gucci", name: "Gucci", count: 13, disabled: true },
            { id: "zalando", name: "Zalando", count: 54 },
            { id: "adidas", name: "Adidas", count: 93, disabled: true },
          ].map((brand) => (
            <li className={`list-item ${brand.disabled ? "disabled" : ""}`} key={brand.id}>
              <input
                type="radio"
                name="brand"
                className="tf-check style-2"
                id={brand.id}
              />
              <label htmlFor={brand.id} className="label">
                <span className="brand-text">{brand.name}</span>
                <span className="count">({brand.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
