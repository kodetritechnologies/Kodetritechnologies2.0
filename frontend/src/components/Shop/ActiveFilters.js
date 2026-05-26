"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ActiveFilters({ searchParams = {}, productCount = 0 }) {
  const router = useRouter();
  
  // Exclude page and layout from active filters count
  const filterKeys = Object.keys(searchParams).filter(k => k !== 'page' && k !== 'layout' && k !== 'sort');
  const hasFilters = filterKeys.length > 0;

  const handleClearAll = () => {
    const params = new URLSearchParams(searchParams);
    filterKeys.forEach(key => params.delete(key));
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="meta-filter-shop">
      <div className="count-text text-caption-01">
        {productCount} Product{productCount !== 1 ? 's' : ''} Found
      </div>
      
      {hasFilters && (
        <>
          <div className="br-line type-vertical"></div>
          <div id="applied-filters" className="d-flex align-items-center gap-2">
             <span className="text-caption-01">Active Filters: {filterKeys.length}</span>
          </div>
          <button
            id="remove-all"
            className="remove-all-filters"
            onClick={handleClearAll}
          >
            <i className="icon icon-X2"></i>
            Clear all
          </button>
        </>
      )}
    </div>
  );
}
