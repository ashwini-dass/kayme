// src/components/HomeSlider.js
import React, { useEffect } from "react";
import $ from "jquery";

const HomeSlider = () => {
  useEffect(() => {
    // Initialize Nivo Slider
    if (typeof $.fn.nivoSlider === "function") {
      $("#mainSlider").nivoSlider({
        effect: "random",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 600,
        pauseTime: 5000,
        directionNav: true,
        controlNav: true,
        pauseOnHover: true,
        manualAdvance: false,
      });
    }

    // Initialize Hot Deal Carousel (if using Owl Carousel)
    if (typeof $.fn.owlCarousel === "function") {
      $(".hot-deal-slider").owlCarousel({
        items: 2,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        dots: false,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
        },
      });
    }
  }, []);

  return (
    <div>
      {/* Home Slider */}
      <div className="slider-wrap">
       <div id="mainSlider" class="nivoSlider">
  <img src="assets/img/slider/1.jpg" alt="slide1" />
  <img src="assets/img/slider/2.jpg" alt="slide2" />
  <img src="assets/img/slider/3.jpg" alt="slide3" />
</div>


        {/* Slider Captions */}
        <div id="htmlcaption1" className="nivo-html-caption">
          <div className="slide-text-right slide-text-right-2 text-black slide-text padding-0">
            <div className="middle-text text-center">
              <h2 className="cap-sub-title wow fadeInDown" data-wow-duration=".9s" data-wow-delay="0.8s">XOSS SHOP</h2>
              <h1 className="cap-title wow fadeInLeft" data-wow-duration=".9s" data-wow-delay="1.5s">Women’s NEW FASHION</h1>
              <p className="cap-dec wow fadeInRight" data-wow-duration="0.9s" data-wow-delay="2.2s">
                See our full collection.s summer 2016 Lookbook
              </p>
              <a href="#" className="cap-readmore button color white-hover wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="3s">Shop Now</a>
            </div>
          </div>
        </div>

        <div id="htmlcaption2" className="nivo-html-caption">
          <div className="slide-text-left slide-text-left-2 text-black slide-text padding-0">
            <div className="middle-text text-center">
              <h2 className="cap-sub-title wow fadeInDown" data-wow-duration=".9s" data-wow-delay="0.8s">XOSS SHOP</h2>
              <h1 className="cap-title wow fadeInRight" data-wow-duration=".9s" data-wow-delay="1.5s">Women’s NEW FASHION</h1>
              <p className="cap-dec wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="2.2s">
                See our full collection.s summer 2016 Lookbook
              </p>
              <a href="#" className="cap-readmore button color white-hover wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="3s">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Service Area */}
      <div className="shipping-service-area-2 margin-bottom-90">
        <div className="container-fluid">
          <div className="row">
            <div className="sin-service col-lg-3 col-sm-6 col-xs-12">
              <div className="icon text-center"><i className="zmdi zmdi-car"></i></div>
              <div className="content fix">
                <h3>free shipping</h3>
                <p>Lorem ipsum dummy text goes here</p>
              </div>
            </div>
            <div className="sin-service col-lg-3 col-sm-6 col-xs-12">
              <div className="icon text-center"><i className="zmdi zmdi-balance-wallet"></i></div>
              <div className="content fix">
                <h3>money back guarantee</h3>
                <p>Lorem ipsum dummy text goes here</p>
              </div>
            </div>
            <div className="sin-service col-lg-3 col-sm-6 col-xs-12">
              <div className="icon text-center"><i className="zmdi zmdi-shield-security"></i></div>
              <div className="content fix">
                <h3>safe shopping</h3>
                <p>Lorem ipsum dummy text goes here</p>
              </div>
            </div>
            <div className="sin-service col-lg-3 col-sm-6 col-xs-12">
              <div className="icon text-center"><i className="zmdi zmdi-headset-mic"></i></div>
              <div className="content fix">
                <h3>online support</h3>
                <p>Lorem ipsum dummy text goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hot Deal Area */}
      <div className="hot-deal-area margin-bottom-90">
        <div className="container">
          <div className="row">
            <div className="section-title col-xs-12 text-center">
              <h1>hot deals</h1>
            </div>
            <div className="col-xs-12">
              <div className="hot-deal-slider">
                {/* Single Deal */}
                <div className="sin-deal fix">
                  <div className="image-counter float-left">
                    <a href="#"><img src="assets/img/product/1.jpg" alt="" /></a>
                    <div className="pro-countdown deal-countdown" data-countdown="2025/12/31"></div>
                  </div>
                  <div className="deal-details fix">
                    <h4 className="deal-pro-title"><a href="#">HALF sleev women T-shirt</a></h4>
                    <div className="sin-pro-ratting float-left">
                      <div className="rattings float-left">
                        <i className="zmdi zmdi-star"></i>
                        <i className="zmdi zmdi-star"></i>
                        <i className="zmdi zmdi-star"></i>
                        <i className="zmdi zmdi-star"></i>
                        <i className="zmdi zmdi-star-half"></i>
                      </div>
                      <span>(23)</span>
                    </div>
                    <div className="sin-pro-price">
                      <span className="new">$ 85.00</span>
                      <span className="old">115.00</span>
                    </div>
                    <p>Special discount up to 50% for a limited time.</p>
                    <a href="#" className="button color">Shop Now</a>
                  </div>
                </div>
                {/* Repeat other deals... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
