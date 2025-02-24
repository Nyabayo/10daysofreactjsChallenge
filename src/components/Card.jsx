import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-xl transition-all hover:scale-105">
      <h2 className="text-xl font-semibold text-green-700">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
        Learn More
      </button>
    </div>
  );
};

export default Card;
