import React from "react";

const QuickViewModal = () => {
  return (
    <div className="modal quick-view-modal animated zoomOut" id="pro-quick-view">
      <div className="table">
        <div className="table-cell">
          <div className="container">
            <div className="row">
              <div className="quick-view-container fix">
                <button className="model-close" data-dismiss="modal">
                  <i className="zmdi zmdi-close"></i>
                </button>

                {/* Product Details Image */}
                <div className="product-details-image col-md-6 col-xs-12">
                  <ul className="quick-pro-thumb" role="tablist">
                    <li className="active">
                      <a href="#big-image-1" data-toggle="tab">
                        <img src="assets/img/product-details/thumb-2.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#big-image-2" data-toggle="tab">
                        <img src="assets/img/product-details/thumb-1.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#big-image-3" data-toggle="tab">
                        <img src="assets/img/product-details/thumb-3.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#big-image-4" data-toggle="tab">
                        <img src="assets/img/product-details/thumb-4.jpg" alt="" />
                      </a>
                    </li>
                  </ul>

                  <div className="quick-pro-big tab-content fix">
                    <div className="tab-pane active" id="big-image-1">
                      <img src="assets/img/product-details/big-2.jpg" alt="" />
                    </div>
                    <div className="tab-pane" id="big-image-2">
                      <img src="assets/img/product-details/big-1.jpg" alt="" />
                    </div>
                    <div className="tab-pane" id="big-image-3">
                      <img src="assets/img/product-details/big-3.jpg" alt="" />
                    </div>
                    <div className="tab-pane" id="big-image-4">
                      <img src="assets/img/product-details/big-4.jpg" alt="" />
                    </div>
                  </div>
                </div>

                {/* Product Details Content */}
                <div className="product-details-content col-md-6 col-xs-12">
                  <a className="pro-details-title" href="#">Full sleev women shirt</a>

                  <div className="pro-details-price-ratting fix">
                    {/* Price */}
                    <div className="pro-details-price float-left">
                      <span className="new">$ 45.00</span>
                      <span className="old">(145.00)</span>
                    </div>

                    {/* Rating */}
                    <div className="pro-details-ratting float-right">
                      <div className="rattings float-left">
                        <i className="zmdi zmdi-star"></i>
                        <i className="zmdi zmdi-star"></i>
                        <i className="zmdi zmdi-star"></i>
                        <i className="zmdi zmdi-star"></i>
                        <i className="zmdi zmdi-star-half"></i>
                      </div>
                      <span>(5)</span>
                    </div>
                  </div>

                  <div className="pro-details-overview">
                    <h5>overview:</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem
                      portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                  </div>

                  <div className="pro-details-size fix">
                    <h5>size:</h5>
                    <a href="#">s</a>
                    <a href="#">m</a>
                    <a href="#">l</a>
                    <a href="#">xl</a>
                    <a href="#">xxl</a>
                  </div>

                  <div className="pro-details-color-quantity fix">
                    <div className="pro-details-color float-left">
                      <h5>color:</h5>
                      <a href="#" className="color-1 active">color 1</a>
                      <a href="#" className="color-2">color 2</a>
                      <a href="#" className="color-3">color 3</a>
                    </div>

                    <div className="pro-details-quantity float-left">
                      <h5>quantity:</h5>
                      <div className="pro-qty float-left fix">
                        <input
                          type="text"
                          defaultValue="0"
                          name="qtybutton"
                          className="cart-plus-minus-box"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pro-details-action fix">
                    <button className="pro-details-act-btn btn-text">add to bag</button>
                    <button className="pro-details-act-btn btn-icon">
                      <i className="zmdi zmdi-favorite-outline"></i>
                    </button>
                    <button className="pro-details-act-btn btn-icon">
                      <i className="zmdi zmdi-refresh"></i>
                    </button>
                  </div>

                  <div className="pro-details-share fix">
                    <h5>share this on:</h5>
                    <div className="footer-social">
                      <a className="facebook" href="#"><i className="zmdi zmdi-facebook"></i></a>
                      <a className="twitter" href="#"><i className="zmdi zmdi-twitter"></i></a>
                      <a className="vimeo" href="#"><i className="zmdi zmdi-vimeo"></i></a>
                      <a className="google-plus" href="#"><i className="zmdi zmdi-google-plus"></i></a>
                      <a className="tumblr" href="#"><i className="zmdi zmdi-tumblr"></i></a>
                      <a className="pinterest" href="#"><i className="zmdi zmdi-pinterest"></i></a>
                    </div>
                  </div>
                </div>
                {/* End Product Details */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
