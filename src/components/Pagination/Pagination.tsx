import React from 'react';
import cn from 'classnames';
import './Pagination.scss';

type Props = {
  total: number,
  perPage: number
  currentPage: number
  onPageChange: (page: number) => void
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / perPage);
  const visiblePages = [1, 2, 3, 4, 5];

  const handlePageChange = (page: number) => {
    if (currentPage !== page && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <ul className="pagination">
      <li className={cn('pagination__page-item pagination__prev-page', {
        disabled: currentPage <= 1,
      })}
      >
        <button
          className="pagination__page-link"
          aria-disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
        </button>
      </li>
      {visiblePages.map(page => (
        <li className={cn('pagination__page-item', {
          active: currentPage === page,
        })}
        >
          <a
            className="pagination__page-link"
            // href={`#${page}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}

      <li className={cn('pagination__page-item', {
        disabled: currentPage === totalPages,
      })}
      >
        <button
          className="pagination__page-link"
          // href="#next"
          aria-disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
        </button>
      </li>
    </ul>
  );
};
