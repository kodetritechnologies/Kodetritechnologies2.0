"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function CategoryFilter({ categories = [], searchParams = {} }) {
  const router = useRouter();
  const currentCategory = searchParams.category || "";

  const handleCategoryClick = (e, slug) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (currentCategory === slug) {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    // reset page to 1 when filter changes
    params.delete("page");
    router.push(`?${params.toString()}`, { scroll: false });
  };

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
          {categories.map((cat, idx) => (
            <li className="list-item" key={cat._id || idx}>
              <a
                href={`?category=${cat.slug}`}
                className={`label link ${currentCategory === cat.slug ? "text-primary fw-bold" : ""}`}
                onClick={(e) => handleCategoryClick(e, cat.slug)}
              >
                <span className="cate-text">{cat.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
