import React from "react";
import box3 from "../../assets/amission-box-3.webp";
import box2 from "../../assets/amission-box-2.webp";
import box1 from "../../assets/amission-box-1.jpg";
import "./style.css";

const Admission = () => {
  const academicsData = [
    { id: 1, img: box3, text: "Domestic Admission" },
    { id: 2, img: box2, text: "International Students" },
    { id: 3, img: box1, text: "Online Programs" },
  ];

  return (
    <section className="admission">
      <div className="container">
        <div className="academic_content">
          <h2>Admission at Eduma</h2>
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

export default Admission;
