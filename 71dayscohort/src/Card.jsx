import React from 'react'

const Card = () => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="w-50 h-60  rounded-2xl bg-white shadow-lg p-6 hover:shadow-xl transition">
        <img
          src="https://via.placeholder.com/300x180"
          alt="Card"
          className="rounded-xl mb-4"
        />

        <h2 className="text-xl font-semibold text-gray-800 mb-2">title</h2>

        <p className="text-gray-600 text-sm mb-4">
          This is a simple card component built using React and Tailwind CSS.
        </p>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card