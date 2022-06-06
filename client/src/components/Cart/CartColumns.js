import React from 'react';

const CartColumns = () => {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-capitalize">Products</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-capitalize">Model</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-capitalize">Price</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-capitalize">Count</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <p className="text-capitalize">Remove</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-capitalize">Total</p>
            </div>
          </div>
        </div>
    );
};

export default CartColumns;