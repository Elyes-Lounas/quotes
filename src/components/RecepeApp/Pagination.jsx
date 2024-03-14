import React from "react";

export default function Pagination({ totalPages, setCurrentPage,currentPage}) {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="d-flex justify-content-center gap-1 my-3">
      {pages.map((page) => {
        return (
          <button
            className={
                currentPage === page
                ? "btn btn-outline-danger active"
                : "btn btn-outline-danger"
            }
            key={page}
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
