import React from "react";
import "./style.css";

const Banner = () => {
  return (
    <section className="banner_section">
      <div className="overlay">
        <div className="content_banner">
          <h1>Eduma is more</h1>
          <p>Than just a place to get an education.</p>
          <button>Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
