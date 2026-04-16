"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * Universal Pagination Component (Mirroring reference functionality)
 * @param {Object} props
 * @param {Object} props.data - The pagination object from the API (contains page, totalPages, etc.)
 */
const Pagination = ({ data }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    if (!data || !data.totalPages || data.totalPages <= 1) return null;

    const {
        page: currentPage,
        totalPages,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage,
    } = data;

    // Generate page numbers to display
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const changePage = (pageNumber) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(pageNumber));
        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <nav aria-label="Page navigation" className="mt-4 mt-md-5">
            <ul className="pagination justify-content-center gap-2 gap-md-3 border-0">
                {/* Previous Button */}
                <li className={`page-item ${!hasPrevPage ? "disabled" : ""}`}>
                    <button
                        onClick={() => prevPage && changePage(prevPage)}
                        disabled={!hasPrevPage}
                        className="page-link pagination-btn rounded-xl d-flex align-items-center justify-content-center border shadow-none"
                    >
                        <i className="fa-solid fa-chevron-left small"></i>
                    </button>
                </li>

                {/* Page Numbers */}
                {pages.map((page) => (
                    <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                        <button
                            onClick={() => changePage(page)}
                            className={`page-link pagination-btn rounded-xl d-flex align-items-center justify-content-center fw-bold transition-all shadow-none ${
                                currentPage !== page ? "bg-white text-dark hover-border-primary" : ""
                            }`}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                {/* Next Button */}
                <li className={`page-item ${!hasNextPage ? "disabled" : ""}`}>
                    <button
                        onClick={() => nextPage && changePage(nextPage)}
                        disabled={!hasNextPage}
                        className="page-link pagination-btn rounded-xl d-flex align-items-center justify-content-center border shadow-none"
                    >
                        <i className="fa-solid fa-chevron-right small"></i>
                    </button>
                </li>
            </ul>

            <style jsx>{`
                .pagination-btn {
                    width: 44px;
                    height: 44px;
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                    padding: 0 !important;
                    margin: 0;
                    border-color: #dee2e6;
                    background: #fff;
                }
                @media (min-width: 768px) {
                    .pagination-btn {
                        width: 48px;
                        height: 48px;
                    }
                }
                .rounded-xl {
                    border-radius: 12px !important;
                }
                :global(.page-item.active .page-link) {
                    background-color: var(--primary) !important;
                    border-color: var(--primary) !important;
                    color: white !important;
                }
                :global(.page-link) {
                    color: #444;
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                }
                :global(.page-link:hover) {
                    background-color: #f8f9fa;
                    color: var(--primary);
                    border-color: var(--primary);
                    z-index: 2;
                }
                :global(.page-item.disabled .page-link) {
                    background-color: #fff;
                    border-color: #dee2e6;
                    opacity: 0.4;
                    color: #999;
                }
                :global(.pagination-btn i) {
                    font-size: 14px;
                    margin: 0;
                }
                .hover-border-primary:hover {
                    border-color: var(--primary) !important;
                    color: var(--primary) !important;
                }
            `}</style>

        </nav>
    );

};

export default Pagination;
