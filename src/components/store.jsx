import React from 'react';

const Store = ({ id, name, logo, category, totalCoupons, averageSaving }) => {
    return (
      <div key={id} className="border border-gray-200 rounded-lg bg-white mx-2 mt-4 shadow-sm p-4 text-center w-64">
        <img src={logo} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-rose-600 mb-2">{name}</h2>
        <p className="text-gray-600"><span className="font-medium">Category:</span> {category}</p>
        <p className="text-gray-600"><span className="font-medium">Total Coupons:</span> {totalCoupons}</p>
        <p className="text-gray-600"><span className="font-medium">Average Saving:</span> {averageSaving}</p>
      </div>
    );
  };

  export default Store;