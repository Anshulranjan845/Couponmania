import React from "react";
import { useNavigate } from 'react-router-dom';

const StoreItem = ({ store }) => {

    const navigate = useNavigate();

    const handleStoreClick = (store) => {
        const urlSlug = store.toLowerCase().replace(/\s+/g, '-');
        navigate(`/${urlSlug}`);
      };

    return (
        <div
        onClick={() => handleStoreClick(store.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white text-black border p-4 rounded-lg text-center hover:shadow-lg transition-shadow"
        >
            <img
                src={store.logo}
                alt={store.name}
                className="w-24 h-24 mx-auto mb-2 object-contain rounded-full"
            />
            <p className="text-md font-bold text-rose-600 font-serif mt-4">{store.name}</p>
            <button
            className="bg-rose-600 text-white px-4 py-2 mt-4 text-sm font-bold font-serif cursor-pointer rounded-md hover:bg-rose-700 transition-colors"
        >
            Get the Deal
        </button>
        </div>
    );
};

export default StoreItem;