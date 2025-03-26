import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';

const CouponList = ({ coupons }) => {
  const [copiedId, setCopiedId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {coupons.map((coupon) => (
        <div
          key={coupon.id}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-bold text-rose-600">{coupon.store}</h2>
          <p className="mt-2 text-gray-700">{coupon.offer}</p>
          <p className="mt-4">
            <span className="font-semibold">Code:</span>{' '}
            <span className="text-rose-600">{coupon.code}</span>
          </p>
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => copyCode(coupon.code, coupon.id)}
              className="flex-1 bg-rose-500 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
            >
              {copiedId === coupon.id ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  {coupon.code}
                </>
              )}
            </button>
            <div className="text-sm text-gray-600">
              Used {coupon.usedCount} times
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CouponList;