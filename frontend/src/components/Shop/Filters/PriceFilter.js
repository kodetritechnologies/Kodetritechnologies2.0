"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrency } from "@/utils/context/CurrencyContext";

export default function PriceFilter({ searchParams = {} }) {
  const router = useRouter();
  const { symbol } = useCurrency();
  const initialMin = searchParams.minPrice || "";
  const initialMax = searchParams.maxPrice || "";

  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);

  useEffect(() => {
    setMinPrice(searchParams.minPrice || "");
    setMaxPrice(searchParams.maxPrice || "");
  }, [searchParams.minPrice, searchParams.maxPrice]);

  const handleApply = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    
    if (minPrice) {
      params.set("minPrice", minPrice);
    } else {
      params.delete("minPrice");
    }

    if (maxPrice) {
      params.set("maxPrice", maxPrice);
    } else {
      params.delete("maxPrice");
    }
    
    // reset page to 1 when filter changes
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  };

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
        <div className="collapse-body widget-price filter-price mt-3">
          <form onSubmit={handleApply} className="price-box tf-grid-layout tf-col-2 align-items-end">
            <div className="box-wrap">
              <label className="text-caption-01 mb-1">Min ({symbol || "$"})</label>
              <div className="price-val_wrap">
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  min="0"
                />
              </div>
            </div>
            <div className="box-wrap">
              <label className="text-caption-01 mb-1">Max ({symbol || "$"})</label>
              <div className="price-val_wrap">
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="200"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  min="0"
                />
              </div>
            </div>
            <div className="box-wrap tf-col-2" style={{ gridColumn: "span 2" }}>
              <button type="submit" className="tf-btn btn-fill w-100 mt-2">
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
