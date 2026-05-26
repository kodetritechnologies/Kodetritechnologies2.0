"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function AvailabilityFilter({ searchParams = {} }) {
  const router = useRouter();
  const currentAvailability = searchParams.availability || "";

  const handleAvailabilityChange = (availId) => {
    const params = new URLSearchParams(searchParams);
    
    if (currentAvailability === availId) {
      params.delete("availability");
    } else {
      params.set("availability", availId);
    }
    
    // reset page to 1 when filter changes
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const options = [
    { id: "inStock", name: "In stock", count: 32 },
    { id: "outStock", name: "Out of stock", count: 2 },
  ];

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
          {options.map((avail) => (
            <li className="list-item" key={avail.id}>
              <input
                type="checkbox"
                name="availability"
                className="tf-check style-2"
                id={`avail-${avail.id}`}
                checked={currentAvailability === avail.id}
                onChange={() => handleAvailabilityChange(avail.id)}
              />
              <label htmlFor={`avail-${avail.id}`} className="label">
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
