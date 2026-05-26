"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ColorFilter({ searchParams = {}, colors = [] }) {
  const router = useRouter();
  const currentColors = searchParams.color ? searchParams.color.split(',') : [];

  const handleColorChange = (colorId) => {
    const params = new URLSearchParams(searchParams);
    let updatedColors = [...currentColors];
    if (updatedColors.includes(colorId)) {
      updatedColors = updatedColors.filter(c => c !== colorId);
    } else {
      updatedColors.push(colorId);
    }
    
    if (updatedColors.length > 0) {
      params.set("color", updatedColors.join(','));
    } else {
      params.delete("color");
    }
    
    // reset page to 1 when filter changes
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (!colors || colors.length === 0) return null;

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
          {colors.map((color) => (
            <li className="list-item" key={color.id}>
              <fieldset className="field-color">
                <input
                  type="checkbox"
                  name="color"
                  className="tf-check"
                  id={`color-${color.id}`}
                  checked={currentColors.includes(color.id)}
                  onChange={() => handleColorChange(color.id)}
                />
                <label
                  htmlFor={`color-${color.id}`}
                  className={`color ${color.class || ""}`}
                  style={!color.class ? { backgroundColor: color.name || color.id } : {}}
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
