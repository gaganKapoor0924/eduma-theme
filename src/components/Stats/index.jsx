import React from "react";
import "./style.css";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      count: 34,
      text: "Years Since Establishment",
    },
    {
      id: 2,
      count: 9000,
      text: "Students In 2022",
    },
    {
      id: 3,
      count: 1500,
      text: "Staff",
    },
    {
      id: 4,
      count: 300000,
      text: "Alummi",
    },
    {
      id: 5,
      count: 600,
      text: "Partner",
    },
  ];

  return (
    <section className="stats_section">
      <div className="container">
        <div className="stats">
          <ul>
            {statsData.map((item) => {
              return (
                <li>
                  <span>{item.count}</span>
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stats;
