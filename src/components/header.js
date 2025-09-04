// src/components/header.js
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Initialize MeanMenu after mount if jQuery + plugin are available globally
    const $ = window.jQuery || window.$;
    if ($ && $.fn && $.fn.meanmenu) {
      $(".main-menu nav").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "767",
      });
    } else {
      // Helpful log if scripts aren't loaded from public/index.html
      console.warn("Meanmenu not loaded yet (check public/index.html scripts).");
    }
  }, []);

  return (
    <div className="header">
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-4 header-top-left">
              {/* Header Language Currency */}
              <ul className="header-lan-cur float-left">
                {/* Header Language */}
                <li>
                  <a href="#">
                    eng <i className="zmdi zmdi-chevron-down"></i>
                  </a>
                  <ul className="top-sub-menu sub-menu-left">
                    <li><a href="#">bengali</a></li>
                    <li><a href="#">English</a></li>
                    <li><a href="#">french</a></li>
                    <li><a href="#">german</a></li>
                    <li><a href="#">spanish</a></li>
                  </ul>
                </li>
                {/* Header Currency */}
                <li>
                  <a href="#">
                    usd <i className="zmdi zmdi-chevron-down"></i>
                  </a>
                  <ul className="top-sub-menu sub-menu-left">
                    <li><a href="#">usd</a></li>
                    <li><a href="#">uero</a></li>
                    <li><a href="#">taka</a></li>
                    <li><a href="#">pound</a></li>
                    <li><a href="#">rupi</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-xs-8 header-top-right">
              {/* Header Mini Cart */}
              <div className="mini-cart float-right">
                <a href="#"><i className="zmdi zmdi-shopping-basket"></i><sub>2</sub></a>
                {/* Mini Cart Wrapper */}
                <div className="mini-cart-wrapper top-sub-menu sub-menu-right">
                  {/* Product List */}
                  <div className="mc-pro-list fix">
                    <div className="mc-sin-pro fix">
                      <a href="#" className="mc-pro-image float-left">
                        <img src="img/mini-cart/1.jpg" alt="" />
                      </a>
                      <div className="mc-pro-details fix">
                        <a href="#">Women’s winter dress</a>
                        <span>1x$45.00</span>
                        <button className="pro-del"><i className="zmdi zmdi-delete"></i></button>
                      </div>
                    </div>
                    <div className="mc-sin-pro fix">
                      <a href="#" className="mc-pro-image float-left">
                        <img src="img/mini-cart/2.jpg" alt="" />
                      </a>
                      <div className="mc-pro-details fix">
                        <a href="#">Full sleev women shirt</a>
                        <span>1x$85.00</span>
                        <button className="pro-del"><i className="zmdi zmdi-delete"></i></button>
                      </div>
                    </div>
                  </div>
                  {/* Sub Total */}
                  <div className="mc-subtotal fix">
                    <h4>Subtotal <span>$130.00</span></h4>
                  </div>
                  {/* Cart Button */}
                  <div className="mc-button">
                    <a href="#" className="button color-hover small">checkout</a>
                  </div>
                </div>
              </div>

              {/* Header Account Login */}
              <div className="header-account-login float-right">
                {/* Header Account */}
                <ul className="header-acc float-left">
                  <li>
                    <a href="#">
                      my account <i className="zmdi zmdi-chevron-down"></i>
                    </a>
                    <ul className="top-sub-menu sub-menu-right">
                      <li><a href="#">my bag</a></li>
                      <li><a href="#">checkout</a></li>
                      <li><a href="#">wishlist</a></li>
                    </ul>
                  </li>
                </ul>
                {/* Header Login */}
                <div className="header-login float-left text-center">
                  <a href="#">
                    login <i className="zmdi zmdi-chevron-down"></i>
                  </a>
                  <div className="header-login-opt top-sub-menu sub-menu-right">
                    <h5>login or register</h5>
                    <a className="button small" href="#">login</a>
                    <span>or</span>
                    <a className="button small transparent" href="#">create account</a>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="header-bottom-wrap">
              {/* Logo */}
              <div className="header-logo col-lg-3 col-md-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="img/logo-3.png" alt="logo" />
                  </a>
                </div>
              </div>

              {/* Main Menu (desktop) */}
              <div className="main-menu-wrap col-lg-6 col-md-7 hidden-sm hidden-xs">
                <div className="main-menu text-center">
                  <nav>
                    <ul>
                      <li>
                        <a href="index.html">
                          home <i className="zmdi zmdi-chevron-down"></i>
                        </a>
                        {/* Sub Menu */}
                        <ul className="sub-menu">
                          <li><a href="index.html">home 1</a></li>
                          <li><a href="index-2.html">home 2</a></li>
                        </ul>
                      </li>

                      <li>
                        <a href="shop.html">
                          shop <i className="zmdi zmdi-chevron-down"></i>
                        </a>
                        {/* Mega Menu */}
                        <div className="mega-menu mm-5-column mm-left">
                          <div className="mm-column mm-column-link float-left">
                            <h3>men</h3>
                            <a href="#">Blazers</a>
                            <a href="#">Jackets</a>
                            <a href="#">Collections</a>
                            <a href="#">T-Shirts</a>
                            <a href="#">jens pant’s</a>
                            <a href="#">sports shoes</a>
                          </div>
                          <div className="mm-column mm-column-link float-left">
                            <h3>women</h3>
                            <a href="#">Cocktail</a>
                            <a href="#">Sunglass</a>
                            <a href="#">Evening</a>
                            <a href="#">Footwear</a>
                            <a href="#">Bootees Bags</a>
                            <a href="#">Furniture</a>
                          </div>
                          <div className="mm-column mm-column-link float-left">
                            <h3>accessories</h3>
                            <a href="#">gagets</a>
                            <a href="#">laptop</a>
                            <a href="#">mobile</a>
                            <a href="#">lifestyle</a>
                            <a href="#">jens pant’s</a>
                            <a href="#">sports items</a>
                          </div>
                          <div className="mm-column mm-column-banner float-left">
                            <a href="#"><img src="img/menu-banner/1.jpg" alt="banner" /></a>
                            <a href="#"><img src="img/menu-banner/2.jpg" alt="banner" /></a>
                          </div>
                        </div>
                      </li>

                      <li>
                        <a href="shop-grid-left-sidebar.html">
                          men <i className="zmdi zmdi-chevron-down"></i>
                        </a>
                        {/* Mega Menu */}
                        <div className="mega-menu mm-4-column mm-left">
                          <div className="mm-column mm-column-link float-left">
                            <h3>women</h3>
                            <a href="#">Cocktail</a>
                            <a href="#">Sunglass</a>
                            <a href="#">Evening</a>
                            <a href="#">Footwear</a>
                            <a href="#">Bootees Bags</a>
                            <a href="#">Furniture</a>
                          </div>
                          <div className="mm-column mm-column-link float-left">
                            <h3>accessories</h3>
                            <a href="#">gagets</a>
                            <a href="#">laptop</a>
                            <a href="#">mobile</a>
                            <a href="#">lifestyle</a>
                            <a href="#">jens pant’s</a>
                            <a href="#">sports items</a>
                          </div>
                          <div className="mm-column mm-column-banner float-left">
                            <a href="#"><img src="img/menu-banner/1.jpg" alt="banner" /></a>
                            <a href="#"><img src="img/menu-banner/2.jpg" alt="banner" /></a>
                          </div>
                        </div>
                      </li>

                      <li>
                        <a href="#">
                          shortcode <i className="zmdi zmdi-chevron-down"></i>
                        </a>
                        {/* Mega Menu */}
                        <div className="mega-menu mega-menu-link-2 mm-right">
                          <div className="mm-column mm-column-link float-left">
                            <a href="shortcode/alerts.html">alerts</a>
                            <a href="shortcode/banners.html">banners</a>
                            <a href="shortcode/blog-slider.html">blog slider</a>
                            <a href="shortcode/brand-slider.html">brand slider</a>
                            <a href="shortcode/buttons.html">buttons</a>
                          </div>
                          <div className="mm-column mm-column-link float-left">
                            <a href="shortcode/collapse.html">collapse</a>
                            <a href="shortcode/form.html">form</a>
                            <a href="shortcode/map.html">map</a>
                            <a href="shortcode/product-slider.html">product slider</a>
                            <a href="shortcode/progress-bar.html">progress bar</a>
                          </div>
                          <div className="mm-column mm-column-link float-left">
                            <a href="shortcode/service.html">service</a>
                            <a href="shortcode/tab.html">tab</a>
                            <a href="shortcode/team.html">team</a>
                            <a href="shortcode/video.html">video</a>
                          </div>
                        </div>
                      </li>

                      <li>
                        <a href="#">
                          pages <i className="zmdi zmdi-chevron-down"></i>
                        </a>
                        {/* Mega Menu */}
                        <div className="mega-menu mega-menu-link mm-right">
                          <div className="mm-column mm-column-link float-left">
                            <h4>shop pages</h4>
                            <a href="shop.html">shop grid</a>
                            <a href="shop-list.html">shop list</a>
                            <a href="shop-grid-left-sidebar.html">shop grid left sidebar</a>
                            <a href="shop-grid-right-sidebar.html">shop grid right sidebar</a>
                            <a href="shop-list-left-sidebar.html">shop list left sidebar</a>
                            <a href="shop-list-right-sidebar.html">shop list right sidebar</a>
                          </div>
                          <div className="mm-column mm-column-link float-left">
                            <h4>shop pages</h4>
                            <a href="cart.html">cart</a>
                            <a href="checkout.html">check out</a>
                            <a href="product-details.html">product details</a>
                            <a href="product-details-left-sidebar.html">product details left sidebar</a>
                            <a href="product-details-right-sidebar.html">product details right sidebar</a>
                            <a href="wishlist.html">wishlist</a>
                          </div>
                          <div className="mm-column mm-column-link float-left">
                            <h4>blog pages</h4>
                            <a href="blog.html">blog</a>
                            <a href="blog-left-sidebar.html">blog left sidebar</a>
                            <a href="blog-right-sidebar.html">blog right sidebar</a>
                            <a href="blog-details.html">blog details</a>
                          </div>
                          <div className="mm-column mm-column-link float-left">
                            <h4>other pages</h4>
                            <a href="about-us.html">about us</a>
                            <a href="contact.html">contact</a>
                            <a href="coming-soon.html">coming soon</a>
                            <a href="404.html">404</a>
                          </div>
                        </div>
                      </li>

                      <li><a href="contact.html">contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Mobile menu container (MeanMenu renders here) */}
              <div className="mobile-menu visible-sm visible-xs"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
