import React from 'react';
import { bodyData } from '../data/navData';
import StoreList from './storeList';
import { stores } from '../data/storeData';
import CouponList from './couponList';
import StoreDeal from './StoreDeal';
import NewsLetter from './NewsLetter';

const Body = () => {
  
  const { title, description, coupons } = bodyData;
     // console.log(stores);
  return (
    <>
    <main className="container mx-auto px-6 py-8 mt-21 relative">

    <div className="absolute right-0 top-0 mt-20 mr-6 -z-2 bg-gradient-to-b from-gray-600 to-gray-400">
   {/* Adjusted positioning */}
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSesrSfg-u7pxu1Biov_yeK6p0GOR1tw44w&s"
      alt="Coupon"
      className="w-160 fixed right-2 h-auto rounded-xl shadow-lg w-1/4"
    />
  </div>
      <h1 className="text-4xl font-bold text-rose-600">{title}</h1>
      <p className="mt-4 text-white">{description}</p>

      {/* Coupons Section */}
      <StoreDeal />
      <StoreList stores={stores} />
      <CouponList coupons={coupons} />
    </main>
    <NewsLetter />
    
</>
  );
};

export default Body;