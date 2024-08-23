import React from "react";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list d-flex">
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link" href="#">
            Home
          </a>
        </li>
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link">Product</span>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
