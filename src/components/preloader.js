import React from "react";

function Preloader() {
  return (
    <div className="preloader">
      <div className="loading-center">
        <div className="loading-center-absolute">
          <div className="object object_one"></div>
          <div className="object object_two"></div>
          <div className="object object_three"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
