import React from "react";

function BestSeller() {
  return (
    <div className="best-seller" style={{ backgroundImage: 'url("/images/products/11.jpg")' }}>
      <div className="container">
        <div className="best-seller__content">
          <h2 className="title best-seller__name ">Phone of the year</h2>
          <div className="best-seller__desc">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
          </div>
          <a className="btn btn--white" href="#">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
