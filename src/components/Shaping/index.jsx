import React from "react";
import shaping1 from "../../assets/shaping1.webp";
import shaping2 from "../../assets/shaping2.webp";
import "./style.css";

const Shaping = () => {
  return (
    <section className="shaping">
      <div className="container">
        <div className="shaping_content">
          <div className="shaping_image">
            <img src={shaping1} alt="" />
          </div>
          <div className="content">
            <h2>Shaping the Future</h2>
            <p>
              At Eduma University, we are moving boldly - and concertedly - to
              expand tomorrow's frontiers. We believe that we have the power to
              shape the future, for the better
            </p>
            <img src={shaping2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shaping;
