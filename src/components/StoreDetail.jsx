import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const StoreDetail = ({stores}) => {
    const { storeName } = useParams();
    const navigate = useNavigate();
    console.log(storeName)

    const decodedName = storeName.replace(/-/g, ' ');
  const store = stores.find(s => 
    s.name.toLowerCase() === decodedName.toLowerCase()
  );
   
  
  if (!store) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Store not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }
  
    return (
      <div className="max-w-4xl mx-auto p-6 mt-18">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center p-4 mx-6 text-rose-600 cursor-pointer hover:text-rose-800 transition-colors"
        >
          <span className="mr-1 cursor-pointer">←</span> Back to stores
        </button>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 p-6 flex justify-center">
              <img 
                src={store.logo} 
                alt={store.name} 
                className="h-48 w-48 object-contain border border-gray-200 rounded-lg"
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{store.name}</h1>
              <div className="mt-6">
                <a
                  href={store.redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 transition-colors"
                >
                  Visit Store Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default StoreDetail
