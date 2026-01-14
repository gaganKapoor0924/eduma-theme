import React from "react";
import campus1 from "../../assets/campus-life-5.jpg";
import campus2 from "../../assets/campus-life-6.webp";
import campus3 from "../../assets/campus-life-7.webp";
import campus4 from "../../assets/campus-life-4.webp";
import "./style.css";

const CampusLife = () => {
  const campusData = [
    {
      id: 1,
      img: campus1,
      heading: "Arts & Culture",
      text: "A residential campus with diverse housing, exceptional dining, health care and over 600 student.",
    },
    {
      id: 1,
      img: campus3,
      heading: "Recreation & Wellness",
      text: "A residential campus with diverse housing, exceptional dining, health care and over 600 student.",
    },
    {
      id: 1,
      img: campus2,
      heading: "New Heaven",
      text: "A residential campus with diverse housing, exceptional dining, health care and over 600 student.",
    },
    {
      id: 1,
      img: campus4,
      heading: "Belonging At EDUMA",
      text: "A residential campus with diverse housing, exceptional dining, health care and over 600 student.",
    },
  ];

  return (
    <section className="campus_life">
      <div className="container">
        <div className="campus">
          <h2>Campus Life</h2>
          <div className="campus_list">
            <ul>
              {campusData.map((campus) => {
                return (
                  <li>
                    <img src={campus.img} alt="" />
                    <h2>{campus.heading}</h2>
                    <p>{campus.text}</p>
                    <button>Read More</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
