"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function BrandFilter({ searchParams = {}, brands = [] }) {
  const router = useRouter();
  const currentBrands = searchParams.brand ? searchParams.brand.split(',') : [];

  const handleBrandChange = (brandId) => {
    const params = new URLSearchParams(searchParams);
    let updatedBrands = [...currentBrands];
    if (updatedBrands.includes(brandId)) {
      updatedBrands = updatedBrands.filter(id => id !== brandId);
    } else {
      updatedBrands.push(brandId);
    }
    
    if (updatedBrands.length > 0) {
      params.set("brand", updatedBrands.join(','));
    } else {
      params.delete("brand");
    }
    // reset page to 1 when filter changes
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (!brands || brands.length === 0) return null;

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
          {brands.map((brand) => (
            <li className={`list-item ${brand.disabled ? "disabled" : ""}`} key={brand.id}>
              <input
                type="checkbox"
                name="brand"
                className="tf-check style-2"
                id={`brand-${brand.id}`}
                checked={currentBrands.includes(brand.id)}
                onChange={() => !brand.disabled && handleBrandChange(brand.id)}
                disabled={brand.disabled}
              />
              <label htmlFor={`brand-${brand.id}`} className="label">
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
