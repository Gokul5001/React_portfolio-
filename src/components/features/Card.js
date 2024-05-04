import React from 'react';

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="p-6">
        {icon && (
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-designColor text-white mb-4">
            {icon}
          </div>
        )}
        {!icon && (
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-16 bg-designColor"></div>
          </div>
        )}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{des}</p>
      </div>
    </div>
  );
}

export default Card;
