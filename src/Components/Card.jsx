
import React from "react";

  const Card = ({ title, stat, change, bgColor }) => {
    return (
      <div className={`p-6 rounded-lg shadow-md ${bgColor} text-white`}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-3xl mt-2">{stat}</p>
        <p className="text-sm mt-1">{change}</p>
      </div>
    );
  };

export default Card;