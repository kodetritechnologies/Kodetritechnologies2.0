import React from "react";

export default function ColorFilter() {
  return (
    <div className="widget-facet">
      <div
        className="facet-title"
        data-bs-target="#colors"
        role="button"
        data-bs-toggle="collapse"
        aria-expanded="true"
        aria-controls="colors"
      >
        <h6>Colors</h6>
        <span className="icon icon-CaretDown"></span>
      </div>
      <div id="colors" className="collapse show">
        <ul className="collapse-body filter-group-check group-check-color">
          {[
            { id: "pink", class: "bg-peach-blush", name: "Pink", count: 16 },
            { id: "blue", class: "bg-cool-gray", name: "Blue", count: 7 },
            { id: "beige", class: "bg-cream", name: "Beige", count: 24 },
            { id: "orange", class: "bg-flame-orange", name: "Orange", count: 17 },
            { id: "gray", class: "bg-sage-gray", name: "Gray", count: 5 },
            { id: "purple", class: "bg-rosewood", name: "Purple", count: 8 },
          ].map((color) => (
            <li className="list-item" key={color.id}>
              <fieldset className="field-color">
                <input
                  type="radio"
                  name="color"
                  className="tf-check"
                  id={`color-${color.id}`}
                />
                <label
                  htmlFor={`color-${color.id}`}
                  className={`color ${color.class}`}
                ></label>
              </fieldset>
              <label htmlFor={`color-${color.id}`} className="label">
                <span className="color-text">{color.name}</span>
                <span className="count">({color.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
