"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function SizeFilter({ searchParams = {}, sizes = [] }) {
  const router = useRouter();
  const currentSizes = searchParams.size ? searchParams.size.split(',') : [];

  const handleSizeChange = (sizeId) => {
    const params = new URLSearchParams(searchParams);
    let updatedSizes = [...currentSizes];
    if (updatedSizes.includes(sizeId)) {
      updatedSizes = updatedSizes.filter(s => s !== sizeId);
    } else {
      updatedSizes.push(sizeId);
    }
    
    if (updatedSizes.length > 0) {
      params.set("size", updatedSizes.join(','));
    } else {
      params.delete("size");
    }
    
    // reset page to 1 when filter changes
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (!sizes || sizes.length === 0) return null;

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
          {sizes.map((size) => {
            const sizeId = size.toLowerCase();
            return (
              <li key={size}>
                <input
                  className="ip-size d-none"
                  type="checkbox"
                  name="size"
                  id={`size-${sizeId}`}
                  checked={currentSizes.includes(sizeId)}
                  onChange={() => handleSizeChange(sizeId)}
                />
                <label htmlFor={`size-${sizeId}`} className="label-size">
                  <span className="size-text fw-medium">{size}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
