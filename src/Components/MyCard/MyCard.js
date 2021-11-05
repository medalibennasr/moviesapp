import React from "react";
import "./mycard.css";
import ReactStars from 'react-stars'


const MyCard = ({ film: { titre, description, photo ,rate  } }) => {
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
          
                    <ReactStars
            count={5}
            value={rate}
            edit={false}
            size={24}
            color2={'#ffd700'} />


        </div>
      </div>
    </div>
  );
};
export default MyCard;
