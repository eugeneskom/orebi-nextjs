"use client"
import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

type PaginationProps = {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

function Pagination({ page, totalPages, itemsPerPage, totalItems }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams() as URLSearchParams;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - 1 && i <= page + 1) ||
        (totalPages <= maxVisiblePages)
      ) {
        pageNumbers.push(
          <li key={i} className="pagination__item">
            <Link href={createPageURL(i)} scroll={false}>
              <span className={`pagination__link ${page === i ? 'pagination__link--active' : ''}`}>
                {i}
              </span>
            </Link>
          </li>
        );
      } else if (i === page - 2 || i === page + 2) {
        pageNumbers.push(
          <li key={i} className="pagination__item">
            <span className="pagination__link">...</span>
          </li>
        );
      }
    }

    return pageNumbers;
  };

  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems);

  return (
    <div className="pagination d-flex jc-sb">
      <ul className="pagination__list d-flex">
        {renderPageNumbers()}
      </ul>
      <p>
        Products from <span>{startIndex}</span> to <span>{endIndex}</span> of <span>{totalItems}</span>
      </p>
    </div>
  );
}

export default Pagination;