// Card.jsx
import React from "react";

function Card({ imgSrc, altText, text }) {
    return (
        <div className="col-lg-3">
            <div className="card" style={{ width: "16rem" }}>
                <img 
                    src={imgSrc} 
                    className="card-img-top" 
                    alt={altText} 
                />
                <div className="card-body">
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;  // This line should be present to export the component

