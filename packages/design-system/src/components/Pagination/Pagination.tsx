import React from "react";
import {
  pageLink,
  pageLinkActive,
  pageLinkWrapper,
  paginationList,
} from "./style.css";
import { compositeClassNames } from "utils/compositeClassNames";

interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onChange: (pageNumber: number) => void;
  paginationListClassName?: string;
  pageLinkWrapperClassName?: string;
  pageLinkClassName?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  itemsPerPage,
  totalItems,
  onChange,
  paginationListClassName,
  pageLinkWrapperClassName,
  pageLinkClassName,
}) => {
  const paginationListClassNames = compositeClassNames(
    [paginationList],
    paginationListClassName
  );
  const pageLinkWrapperClassNames = compositeClassNames(
    [pageLinkWrapper],
    pageLinkWrapperClassName
  );
  const getPageLinkClassNames = (number: number) =>
    compositeClassNames(
      [pageLink, currentPage === number ? pageLinkActive : ""],
      pageLinkClassName
    );

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className={paginationListClassNames}>
      {pageNumbers.map((number) => (
        <li key={number} className={pageLinkWrapperClassNames}>
          <a
            onClick={() => onChange(number)}
            className={getPageLinkClassNames(number)}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
