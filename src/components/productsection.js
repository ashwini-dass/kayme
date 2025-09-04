import React from "react";

const ProductSection = () => {
  return (
    <div className="product-area padding-90">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="section-title col-xs-12 text-center">
            <h1>Our Products</h1>
          </div>

          <div className="col-xs-12">
            <div className="product-slider">
              
              {/* Product 1 */}
              <div className="sin-product">
                <div className="pro-image">
                  <a href="#"><img src="assets/img/product/1.jpg" alt="Product 1" /></a>
                  <span className="pro-label new-label">new</span>
                  <div className="hover-actions">
                    <a href="#"><i className="zmdi zmdi-shopping-cart"></i></a>
                    <a href="#"><i className="zmdi zmdi-favorite-outline"></i></a>
                    <a href="#"><i className="zmdi zmdi-zoom-in"></i></a>
                  </div>
                </div>
                <div className="pro-details text-center">
                  <h4><a href="#">Women’s T-Shirt</a></h4>
                  <span className="pro-price">$45.00</span>
                </div>
              </div>

              {/* Product 2 */}
              <div className="sin-product">
                <div className="pro-image">
                  <a href="#"><img src="assets/img/product/2.jpg" alt="Product 2" /></a>
                  <span className="pro-label hot-label">hot</span>
                  <div className="hover-actions">
                    <a href="#"><i className="zmdi zmdi-shopping-cart"></i></a>
                    <a href="#"><i className="zmdi zmdi-favorite-outline"></i></a>
                    <a href="#"><i className="zmdi zmdi-zoom-in"></i></a>
                  </div>
                </div>
                <div className="pro-details text-center">
                  <h4><a href="#">Full Sleev Shirt</a></h4>
                  <span className="pro-price">$85.00</span>
                </div>
              </div>

              {/* Product 3 */}
              <div className="sin-product">
                <div className="pro-image">
                  <a href="#"><img src="assets/img/product/3.jpg" alt="Product 3" /></a>
                  <div className="hover-actions">
                    <a href="#"><i className="zmdi zmdi-shopping-cart"></i></a>
                    <a href="#"><i className="zmdi zmdi-favorite-outline"></i></a>
                    <a href="#"><i className="zmdi zmdi-zoom-in"></i></a>
                  </div>
                </div>
                <div className="pro-details text-center">
                  <h4><a href="#">Men’s Jacket</a></h4>
                  <span className="pro-price">$120.00</span>
                </div>
              </div>

              {/* Product 4 */}
              <div className="sin-product">
                <div className="pro-image">
                  <a href="#"><img src="assets/img/product/4.jpg" alt="Product 4" /></a>
                  <span className="pro-label discount-label">-20%</span>
                  <div className="hover-actions">
                    <a href="#"><i className="zmdi zmdi-shopping-cart"></i></a>
                    <a href="#"><i className="zmdi zmdi-favorite-outline"></i></a>
                    <a href="#"><i className="zmdi zmdi-zoom-in"></i></a>
                  </div>
                </div>
                <div className="pro-details text-center">
                  <h4><a href="#">Sports Shoes</a></h4>
                  <span className="pro-price"><del>$100.00</del> $80.00</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductSection;
