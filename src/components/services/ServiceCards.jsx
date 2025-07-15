import React from 'react';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:text-amber-600 group">
      <div className="w-14 h-14 bg-amber-100 flex items-center justify-center rounded-xl mb-6 text-amber-600 text-2xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-amber-600">
        {title}
      </h3>

      <p className="text-gray-800 mb-4 transition-colors duration-300 group-hover:text-grey-900">
        {description}
      </p>

      <ul className="mb-6 list-disc list-inside space-y-2 text-gray-800">
        {features.map((item, index) => (
          <li
            key={index}
            className="transition-colors duration-300 group-hover:text-grey-900"
          >
            {item}
          </li>
        ))}
      </ul>

      <button className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 font-semibold">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
