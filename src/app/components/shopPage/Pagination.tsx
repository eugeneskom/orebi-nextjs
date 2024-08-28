"use client";
import React, { useCallback, useState } from "react";

interface PaginationProps {
  totalPages: number;
}

function Pagination({ totalPages }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Render the first page
    pageNumbers.push(
      <li className="pagination__item" key="page-1">
        <button
          className={`pagination__link ${currentPage === 1 ? "pagination__link--active" : ""}`}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      </li>
    );

    // Render the middle pages (up to 5 pages)
    const maxVisiblePages = 5;
    const startPage = Math.max(currentPage - 2, 2);
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li className="pagination__item" key={`page-${i}`}>
          <button
            className={`pagination__link ${currentPage === i ? "pagination__link--active" : ""}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    // Render the last page
    if (totalPages > 1) {
      pageNumbers.push(
        <li className="pagination__item" key={`page-${totalPages}`}>
          <button
            className={`pagination__link ${currentPage === totalPages ? "pagination__link--active" : ""}`}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination d-flex jc-sb">
      <ul className="pagination__list d-flex">{renderPageNumbers()}</ul>
      <p>
        Products from <span>{(currentPage - 1) * 12 + 1}</span> to{" "}
        <span>{Math.min(currentPage * 12, 80)}</span> of <span>80</span>
      </p>
    </div>
  );
}

export default Pagination;