import React from "react";

function Sale() {
  return (
    <section className="sale">
      <div className="container">
        <ul className="sale__inner d-flex jc-sb">
          <li className="sale__col">
            <div className="sale__big d-flex ai-c" style={{ backgroundImage: "url(/images/products/sale/1.jpg)" }}>
              <div className="unit">
                <div className="unit__title">Phones Sale</div>
                <p className="unit__text">
                  {" "}
                  Up to <span>30%</span> sale for all phones!
                </p>
                <a className="btn btn--white" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </li>
          <li className="sale__col">
            <div className="sale__small d-flex ai-c" style={{ backgroundImage: "url(images/products/sale/2.jpg)" }}>
              <div className="unit">
                <div className="unit__title">Electronics Sale</div>
                <p className="unit__text">
                  {" "}
                  Up to <span>70%</span> sale for all electronics!
                </p>
                <a className="btn btn--white" href="#">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="sale__small d-flex ai-c" style={{ backgroundImage: "url(images/products/sale/3.jpg)" }}>
              <div className="unit">
                <div className="unit__title">Furniture Offer</div>
                <p className="unit__text">
                  Up to <span>50%</span> sale for all furniture items!
                </p>
                <a className="btn btn--white" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sale;
