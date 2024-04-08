import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBook from './OtherBook'
// import Review from './Review'
import Hero from './Hero'
import handleOrderPopup from '../components/OrderPopup';
import Testimonial from './Testimonial.jsx';


const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <Hero handleOrderPopup ={handleOrderPopup} />

      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBook/>
      {/* <Review/> */}
      <Testimonial />


    </div>
    
  )
}
export default Home