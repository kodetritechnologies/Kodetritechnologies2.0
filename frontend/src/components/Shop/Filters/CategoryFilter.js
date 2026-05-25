import React from "react";

export default function CategoryFilter() {
  return (
    <div className="widget-facet">
      <div
        className="facet-title"
        data-bs-target="#category"
        role="button"
        data-bs-toggle="collapse"
        aria-expanded="true"
        aria-controls="category"
      >
        <h6>Product Categories</h6>
        <span className="icon icon-CaretDown"></span>
      </div>
      <div id="category" className="collapse show">
        <ul className="collapse-body filter-group-check group-category">
          {[
            { name: "Bags", count: 112 },
            { name: "Booking", count: 32 },
            { name: "Clothing", count: 42 },
            { name: "Women", count: 65 },
            { name: "Men", count: 13 },
            { name: "Shoes", count: 52 },
            { name: "Uncategorized", count: 14 },
          ].map((cat, idx) => (
            <li className="list-item" key={idx}>
              <a href="shop-default.html" className="label link">
                <span className="cate-text">{cat.name}</span>
                <span className="count">({cat.count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
