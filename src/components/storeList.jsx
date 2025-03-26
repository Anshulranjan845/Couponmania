import React from 'react';
import Store from './store';

// Define the StoreList component
const StoreList = ({ stores }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {stores.map(store => (
        <Store key={store.id} {...store} />
      ))}
    </div>
  );
};

export default StoreList;