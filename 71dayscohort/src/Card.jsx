import React from 'react'

const Card = ({ title, description, image, buttonText }) => {
  return (
    
      <div className="w-50 h-60  rounded-2xl bg-white shadow-lg p-6 hover:shadow-xl transition">
        <img
          src={image}
          alt="Card"
          className="rounded-xl mb-4"
        />

        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

        <p className="text-gray-600 text-sm mb-4">
        {description}
        </p>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </div>
    
  );
};

export default Card