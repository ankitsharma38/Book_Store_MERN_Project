import React from "react";
import BannerCard from "../home/BannerCard";
import './Banner.css';

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 items-center">
      <div className="flex  flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left Side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text black">
            Buy And Sell Your Books <span className="text-orange-500">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5 text-2xl ">
          Explore a world of endless possibilities with our online book marketplace, where buying and selling your
           beloved books has never been easier.
          </p>
          
          <div>
               <input type="search" name="search"  id="search" placeholder="Search a book" 
               className='py-2 px-2 rounded-s-sm '/>
               
               <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black 
               transition-all ease-in duration-500'>Search</button>
          </div>
        </div>
        

        {/* Right Side */}
        <div>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
};

export default Banner;
