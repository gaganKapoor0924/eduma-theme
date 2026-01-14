import React from "react";
import box1 from "../../assets/academic-box-1.webp";
import box2 from "../../assets/academic-box-2.webp";
import box3 from "../../assets/academic-box-3.webp";
import box4 from "../../assets/academic-box-4.webp";
import box5 from "../../assets/academic-box-5.webp";
import box6 from "../../assets/academic-box-6-1.webp";
import box7 from "../../assets/academic-box-7-1.webp";
import box8 from "../../assets/academic-box-8-1.webp";
import "./style.css";

const Academics = () => {
  const academicsData = [
    { id: 1, img: box1, text: "Undergraduate Study" },
    { id: 2, img: box2, text: "Graduate & Professional Study" },
    { id: 3, img: box3, text: "Departments & Programs" },
    { id: 4, img: box4, text: "Global Education" },
    { id: 5, img: box5, text: "Summer Session" },
    { id: 6, img: box6, text: "Online Learning" },
    { id: 7, img: box7, text: "Non-degree offerings" },
    { id: 8, img: box8, text: "Awards & Highlight" },
  ];

  return (
    <section className="academics">
      <div className="container">
        <div className="academic_content">
          <h2>Academics at Eduma</h2>
          <div className="academic_list">
            <ul>
              {academicsData.map((item) => {
                return (
                  <li>
                    <div className="image_box">
                      <img src={item.img} alt="" />
                    </div>
                    <p>{item.text}</p>
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

export default Academics;
