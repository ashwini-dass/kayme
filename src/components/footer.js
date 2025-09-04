import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-top padding-90">
        <div className="container">
          <div className="row">

            {/* About Widget */}
            <div className="col-md-3 col-sm-6">
              <div className="footer-widget">
                <h4>About Us</h4>
                <p>
                  We are a leading fashion store bringing you the latest
                  collections at the best prices.
                </p>
                <div className="footer-social">
                  <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                  <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                  <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                  <a href="#"><i className="zmdi zmdi-pinterest"></i></a>
                </div>
              </div>
            </div>

            {/* Information Links */}
            <div className="col-md-3 col-sm-6">
              <div className="footer-widget">
                <h4>Information</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Delivery Information</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>

            {/* Customer Service Links */}
            <div className="col-md-3 col-sm-6">
              <div className="footer-widget">
                <h4>Customer Service</h4>
                <ul>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Site Map</a></li>
                  <li><a href="#">Wishlist</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-md-3 col-sm-6">
              <div className="footer-widget">
                <h4>Newsletter</h4>
                <p>Sign up for our newsletter to get the latest news & offers.</p>
                <form className="footer-subscribe">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit">
                    <i className="zmdi zmdi-mail-send"></i>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center">
        <div className="container">
          <p>© {new Date().getFullYear()} Kayme Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
