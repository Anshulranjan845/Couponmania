import React from "react";

const BrandCard = ({ brand , store }) => {

      
  if (!brand) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Brand not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if(store) return (
    <div className="p-4 border rounded-xl shadow-md bg-white mt-6">
      <img
        src={store.logo}
        alt={`${brand.name} logo`}
        className="h-16 mb-4 object-contain"
      />
      {brand.name && <h2 className="text-xl font-bold mb-2">{brand.name}</h2>}
      <p className="mb-2 text-sm text-gray-600">{brand.description}</p>
      <a
        href={brand.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline text-sm"
      >
        Visit Website
      </a>
      <div className="mt-3">
        <h3 className="font-semibold text-sm">Categories:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {brand.categories.map((cat, i) => (
            <li key={i}>{cat}</li>
          ))}
        </ul>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-sm">Top Brands:</h3>
        <p className="text-sm text-gray-700">{brand.brands.join(", ")}</p>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-sm">Perks:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {brand.perks.map((perk, i) => (
            <li key={i}>{perk}</li>
          ))}
        </ul>
      </div>
      {brand.highlights && (
        <div className="mt-3">
          <h3 className="font-semibold text-sm">Highlights:</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {brand.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
      {brand.contact && (
        <div className="mt-3">
          <h3 className="font-semibold text-sm">Contact:</h3>
          <ul className="text-sm text-gray-700">
            {brand.contact.phone && <li>📞 {brand.contact.phone}</li>}
            {brand.contact.email && <li>📧 {brand.contact.email}</li>}
            {brand.contact.whatsapp && <li>💬 WhatsApp: {brand.contact.whatsapp}</li>}
            {brand.contact.support && <li>🛠️ {brand.contact.support}</li>}
            {brand.contact.chat && <li>💬 {brand.contact.chat}</li>}
          </ul>
        </div>
      )}
      {brand.social && (
        <div className="mt-3">
          <h3 className="font-semibold text-sm">Follow Us:</h3>
          <ul className="text-sm text-blue-600 space-y-1">
            {Object.entries(brand.social).map(([key, url]) => (
              <li key={key}>
                <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BrandCard;