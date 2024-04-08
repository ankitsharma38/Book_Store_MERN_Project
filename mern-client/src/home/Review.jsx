import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// React Icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg";
import myImg from "../assets/me2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-14">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customer
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white px-4 md:p-3 rounded-lg border">
            <div className="space-y-6">
              <div className="flex items-center space-x-1 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* TEXT */}
              <div>
                <p className="mb-2">
                  "Top-notch bookstore experience! From the moment you walk in,
                  you're greeted with shelves brimming with literary treasures.
                  The layout is intuitive, making it easy to various sections. 
                  Whether you're hunting for a specific title or simply browsing, 
                  this bookstore offers an enjoyable experience for all bibliophiles."
                </p>
                <div className="flex items-center space-x-2">
                  <Avatar
                    img={myImg}
                    alt="avatar of Jese"
                    rounded
                    className="w-10"
                  />
                  <div>
                    <h4 className="text-base font-medium">Ankit Sharma</h4>
                    <p className="text-xs">Student, ..University</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white px-4 md:p-3 rounded-lg border">
            <div className="space-y-6">
              <div className="flex items-center space-x-1 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* TEXT */}
              <div>
                <p className="mb-2">
                  "A haven for bookworms! This bookstore feels like stepping
                  into a literary wonderland. The shelves are stocked with both
                  bestsellers and hidden gems, and the ambiance invites you to
                  linger for hours. Bonus points for the cozy reading nooks
                  scattered throughout. A true book lover's paradise!"
                </p>
                <div className="flex items-center space-x-2">
                  <Avatar
                    img={proPic}
                    alt="avatar of Jese"
                    rounded
                    className="w-10"
                  />
                  <div>
                    <h4 className="text-base font-medium">Twinkle Rajwani</h4>
                    <p className="text-xs">CEO, Info..Company</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white px-4 md:p-3 rounded-lg border">
            <div className="space-y-6">
              <div className="flex items-center space-x-1 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* TEXT */}
              <div>
                <p className="mb-2">
                  "Quaint little bookstore with a big heart! Despite its smaller
                  size, this gem of a bookstore packs a punch with its carefully
                  curated collection. Whether you're into mystery, romance, or
                  non-fiction, you're bound to find something to pique your
                  interest. Plus, the staff recommendations are spot-on!"
                </p>
                <div className="flex items-center space-x-2">
                  <Avatar
                    img={proPic}
                    alt="avatar of Jese"
                    rounded
                    className="w-10"
                  />
                  <div>
                    <h4 className="text-base font-medium">Jimmy Ghosle</h4>
                    <p className="text-xs">CEO, Info..Company</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white px-4 md:p-3 rounded-lg border">
            <div className="space-y-6">
              <div className="flex items-center space-x-1 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* TEXT */}
              <div>
                <p className="mb-2">
                  "Fantastic selection and cozy atmosphere! This bookstore
                  offers a diverse range of titles across genres, from classics
                  to contemporary fiction.All the  samjhe ki sa the time best of this book i just love The staff is friendly and
                  knowledgeable, making browsing a delight. Definitely a
                  must-visit for book lovers!"
                </p>
                <div className="flex items-center space-x-2">
                  <Avatar
                    img={proPic}
                    alt="avatar of Jese"
                    rounded
                    className="w-10"
                  />
                  <div>
                    <h4 className="text-base font-medium">Rakesh Rathore</h4>
                    <p className="text-xs">CEO, Info..Company</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
