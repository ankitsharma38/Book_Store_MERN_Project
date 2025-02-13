import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  // Destructuring book details from useLoaderData hook
  const {_id, bookTitle, authorName, bookPrice, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();

  return (
    <div className='mt-20 ml-10 flex justify-center'>
      {/* Left side containing Book Image */}
      <div className='flex-none mr-8'>
        <img src={imageURL} alt={bookTitle} className='h-80 w-auto rounded-lg' />
      </div>

      {/* Right side containing Book Details */}
      <div className='flex-auto'>

        {/* Book Title */}
        <h2 className='text-3xl font-bold mb-2'>{bookTitle}</h2>

        {/* Author Name */}
        <h3 className='text-lg font-semibold mb-2'>by {authorName}</h3>

        {/* Book Category */}
        <h4 className='text-gray-700 mb-2'><u>Category: {category}</u></h4>

        {/* Price Section */}
        <p className='text-black text-2xl mb-4 font-bold'>₹ {bookPrice}/-</p>

        {/* Book Description */}
        <p className='text-gray-600 mb-4'>{bookDescription}</p>

        {/* View Details Button */}
        <Link to={`#`} className='inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-gray-400 mr-4'>Buy Now</Link>

        {/* Download PDF Button */}
        <Link to={bookPDFURL} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-4 py-2 rounded-md  hover:bg-blue-600'>Download PDF</Link>
        
      </div>
    </div>  
  );
}

export default SingleBook;
