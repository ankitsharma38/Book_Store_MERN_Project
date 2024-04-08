import React from "react";
import FavBookImg from "../assets/favoritebook.jpg";
import {Link} from 'react-router-dom';
const FavBook = () => {
  return (
    <>
        <hr className=" border-b-4 border-orange-500" />

    <div className="px-4 lg:px-24 my-10 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src={FavBookImg} alt="" className="rounded md:w-10/12" />
      </div>

      <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
            Find Your Favorite <br /><span className="text-blue-700">Book Here!</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            repellendus consequatur odio quis, recusandae enim! At dolorum labore
            quasi dignissimos iusto explicabo consectetur modi, minima voluptatum
            beatae porro, quas itaque!
            </p>
            {/* stats */}
            <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14 ">
                <div>
                  <h3 className="text-3xl font-bold">1200+</h3>
                  <p className="text-base">Book Listing</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">900+</h3>
                  <p className="text-base">Register Users</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">1500+</h3>
                  <p className="text-base">PDF Downloads</p>
                </div>
            </div>
            <Link to="/shop" className="mt-12 block" ><button className="bg-blue-700 text-white font-semibold px-5 py-2 
                   rounded hover:bg-black transition-all duration-300">Explore More</button>
            </Link>
        
      </div>
    </div>

    </>
  );
};

export default FavBook;
