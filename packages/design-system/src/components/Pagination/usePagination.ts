import { useState } from "react";

function usePagination(initialCurrentPage: number = 1) {
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const onCurrenPageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    currentPage,
    onCurrenPageChange,
  };
}

export default usePagination;
