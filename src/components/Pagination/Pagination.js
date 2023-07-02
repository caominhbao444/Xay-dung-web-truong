import React from "react";
import "./Pagination.scss";
const Pagination = (props) => {
  return (
    <section className="pagination">
      <button>Trước</button>
      <section className="list-page">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
      </section>
      <button>Sau</button>
    </section>
  );
};

export default Pagination;
