import React from "react";
import "./place.css";
const Place = ({
  placeImage,
  placeName,
  availableDate,
  placeDescription,
  btnContent,
}) => {
  return (
    <div className="place-section">
      <div className="place-card">
        <img src={placeImage} alt={placeName} />
        <div className="place-content">
          <h3>{placeName}</h3>
          <p className="available-date">{availableDate}</p>
          <p className="place-description">{placeDescription}</p>
          <button className="btn">{btnContent}</button>
        </div>
      </div>
    </div>
  );
};

export default Place;
