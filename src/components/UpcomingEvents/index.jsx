import React from "react";
import eventImg from "../../assets/event-box-home-1.webp";
import "./style.css";

const UpcomingEvents = () => {
  return (
    <section className="upcoming_events">
      <div className="container">
        <div className="events">
          <div className="events_details">
            <h2>Upcoming Events</h2>
            <ul>
              <li>
                <div className="event_box">
                  <div className="event_date">
                    <span>23</span> Dec
                  </div>
                  <div className="event_info">
                    <h3>Learn to Write Flash Fiction</h3>
                    <p>12:00 am - 5:00 pm</p>
                    <p>Birmingham, UK</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="event_box">
                  <div className="event_date">
                    <span>23</span> Dec
                  </div>
                  <div className="event_info">
                    <h3>Learn to Write Flash Fiction</h3>
                    <p>12:00 am - 5:00 pm</p>
                    <p>Birmingham, UK</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="event_box">
                  <div className="event_date">
                    <span>23</span> Dec
                  </div>
                  <div className="event_info">
                    <h3>Learn to Write Flash Fiction</h3>
                    <p>12:00 am - 5:00 pm</p>
                    <p>Birmingham, UK</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="event_box">
                  <div className="event_date">
                    <span>23</span> Dec
                  </div>
                  <div className="event_info">
                    <h3>Learn to Write Flash Fiction</h3>
                    <p>12:00 am - 5:00 pm</p>
                    <p>Birmingham, UK</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="event_image">
            <img src={eventImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
