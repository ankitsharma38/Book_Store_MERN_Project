import React from "react";
import Slider from 'react-slick';
import me2 from "../assets/me2.png";
import Gau from  "../assets/gaurav.png";
import Malini from  "../assets/profile.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Ankit Sharma",
    text: "This book completely captivated me from start to finish! The characters were so well-developed and the plot kept me guessing until the very end. I couldn't put it down!",
    img: me2,
  },
  {
    id: 2,
    name: "Malini ",
    text: "As a longtime fan of the genre, I can confidently say that this book stands out among the rest. The writing style is engaging, the pacing is perfect...Highly recommend!",
    img: Malini, 
  },
  {
    id: 3,
    name: "Gaurav RockStar",
    text: "I picked up this book on a whim and I'm so glad I did! It's a rollercoaster of emotions that left me feeling eager for more. A must-read for anyone looking for a gripping story!",
    img: Gau,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <hr className="my-4 border-b-4 border-orange-500" />
      <div data-aos="fade-up" data-aos-duration="300" className="py-0">
        <div className="container mx-auto">
          <div className="text-center mb-4 max-w-600px mx-auto">
            <h2 className="text-5xl text-center font-bold">Our Customers</h2>
          </div>
          <div data-aos="zoom-in" data-aos-duration="300" className="grid grid-cols-1 max-w-600px mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-blue-100 bg-primary/10 relative">
                      <div>
                        <img className="rounded-full w-20 h-20" src={data.img} alt="" />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                        </div>
                      </div>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
