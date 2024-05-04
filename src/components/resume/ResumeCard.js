import React from 'react';

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:bg-opacity-50 hover:shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{subTitle}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="px-3 py-1 bg-gray-800 text-white text-sm font-medium rounded-lg">{result}</p>
        </div>
        <p className="text-sm text-gray-700">{des}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
