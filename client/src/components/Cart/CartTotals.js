import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container mt-0">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/cart">
              <button
                className="btn btn-outline-info text-capitalize mb-3"
                type="button"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title ">total:</span>
              <strong>{cartSubTotal.toFixed(2)} $</strong>
            </h5>

            <h5>
              <span className="text-title">TAX:</span>
              <strong>{cartTax} $</strong>
            </h5>

            <h5>
              <span className="text-title">overall total:</span>
              <strong>{cartTotal} $</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
