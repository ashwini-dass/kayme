import React from "react";

const ColorSwitcher = () => {
  return (
    <div className="ec-colorswitcher">
      <a className="ec-handle" href="#"><i className="zmdi zmdi-settings"></i></a>
      <h3>Style Switcher</h3>

      <div className="ec-switcherarea">
        <h6>Select Layout</h6>
        <div className="layout-btn">
          <a href="#" className="ec-boxed"><span>Boxed</span></a>
          <a href="#" className="ec-wide"><span>Wide</span></a>
        </div>

        <h6>Chose Color</h6>
        <ul className="ec-switcher">
          <li><a href="#" className="cs-color-1 styleswitch" data-rel="color-one"></a></li>
          <li><a href="#" className="cs-color-2 styleswitch" data-rel="color-two"></a></li>
          <li><a href="#" className="cs-color-3 styleswitch" data-rel="color-three"></a></li>
          <li><a href="#" className="cs-color-4 styleswitch" data-rel="color-four"></a></li>
          <li><a href="#" className="cs-color-5 styleswitch" data-rel="color-five"></a></li>
          <li><a href="#" className="cs-color-6 styleswitch" data-rel="color-six"></a></li>
          <li><a href="#" className="cs-color-7 styleswitch" data-rel="color-seven"></a></li>
          <li><a href="#" className="cs-color-8 styleswitch" data-rel="color-eight"></a></li>
          <li><a href="#" className="cs-color-9 styleswitch" data-rel="color-nine"></a></li>
          <li><a href="#" className="cs-color-10 styleswitch" data-rel="color-ten"></a></li>
        </ul>

        <div className="ec-pattren">
          <h6>Chose Pattren</h6>
          <div className="pattren-wrap">
            <a href="#" data-rel="pattren1" className="styleswitch"><img src="assets/img/ec-pattren/pattren1.jpg" alt="" /></a>
            <a href="#" data-rel="pattren2" className="styleswitch"><img src="assets/img/ec-pattren/pattren2.jpg" alt="" /></a>
            <a href="#" data-rel="pattren3" className="styleswitch"><img src="assets/img/ec-pattren/pattren3.jpg" alt="" /></a>
            <a href="#" data-rel="pattren4" className="styleswitch"><img src="assets/img/ec-pattren/pattren4.jpg" alt="" /></a>
            <a href="#" data-rel="pattren5" className="styleswitch"><img src="assets/img/ec-pattren/pattren5.jpg" alt="" /></a>
          </div>
        </div>

        <div className="ec-background">
          <h6>Chose Background</h6>
          <div className="background-wrap">
            <a href="#" data-rel="background1" className="styleswitch"><img src="assets/img/ec-background/bg-1.jpg" alt="" /></a>
            <a href="#" data-rel="background2" className="styleswitch"><img src="assets/img/ec-background/bg-2.jpg" alt="" /></a>
            <a href="#" data-rel="background3" className="styleswitch"><img src="assets/img/ec-background/bg-3.jpg" alt="" /></a>
            <a href="#" data-rel="background4" className="styleswitch"><img src="assets/img/ec-background/bg-4.jpg" alt="" /></a>
            <a href="#" data-rel="background5" className="styleswitch"><img src="assets/img/ec-background/bg-5.jpg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorSwitcher;
