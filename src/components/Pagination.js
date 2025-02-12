import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ page, setPage }) => (
  <div className="pagination">
    <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
    <span>Page {page}</span>
    <button onClick={() => setPage(page + 1)}>Next</button>
  </div>
);

export default Pagination;
