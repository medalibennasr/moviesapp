import React from "react";
import "./mycard.css";


const MyCard = ({ film: { titre, description, photo  } }) => {
  return (
    
    <div
      className="card"
      style={{ width: "300px", height: "400px", borderRadius: "5px" }}
    >
      <div className="image">
        <img src={photo} alt="img" />
      </div>
      <div className="details">
        <div className="center">
          <h1>{titre}</h1>
          <p>{description}</p>
          
         


        </div>
      </div>
    </div>
  );
};
export default MyCard;
