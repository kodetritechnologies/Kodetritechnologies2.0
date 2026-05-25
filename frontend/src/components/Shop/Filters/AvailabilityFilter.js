import React from "react";

export default function AvailabilityFilter() {
  return (
    <div className="widget-facet">
      <div
        className="facet-title"
        data-bs-target="#availability"
        role="button"
        data-bs-toggle="collapse"
        aria-expanded="true"
        aria-controls="availability"
      >
        <h6>Availability</h6>
        <span className="icon icon-CaretDown"></span>
      </div>
      <div id="availability" className="collapse show">
        <ul className="collapse-body filter-group-check">
          {[
            { id: "inStock", name: "In stock", count: 32 },
            { id: "outStock", name: "Out of stock", count: 2 },
          ].map((avail) => (
            <li className="list-item" key={avail.id}>
              <input
                type="radio"
                name="availability"
                className="tf-check style-2"
                id={avail.id}
              />
              <label htmlFor={avail.id} className="label">
                <span className="cate-text">{avail.name}</span>
                <span className="count">({avail.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
