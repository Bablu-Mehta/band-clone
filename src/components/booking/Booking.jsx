import React from "react";
import "./booking.css";
import Place from "./Place";
import newYork from "../../assets/newyork.jpg";
import paris from "../../assets/paris.jpg";
import sanFran from "../../assets/sanfran.jpg";

const Booking = () => {
  return (
    <section className="booking-section">
      <div className="booking-container">
        <h1>Tour Dates</h1>
        <p>Remember to book your tickets!</p>
        <ul>
          <li>
            September <span className="sold-out">Sold Out</span>
          </li>
          <li>
            October <span className="sold-out">Sold Out</span>
          </li>
          <li className="vacant-month">
            September <span className="vacant">3</span>
          </li>
        </ul>
        <div className="places">
          <Place
            placeImage={newYork}
            placeName="New York"
            availableDate="Fri 27 Nov 2016"
            placeDescription="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
            btnContent="Buy Tickets"
          />

          <Place
            placeImage={paris}
            placeName="Paris"
            availableDate="Sat 28 Nov 2016"
            placeDescription="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
            btnContent="Buy Tickets"
          />

          <Place
            placeImage={sanFran}
            placeName="San Francisco"
            availableDate="Sun 29 Nov 2016"
            placeDescription="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
            btnContent="Buy Tickets"
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;
