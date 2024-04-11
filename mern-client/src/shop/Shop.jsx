import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to "all" category

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  // Function to filter books based on the selected category
  const filteredBooks = selectedCategory === "all" ? books : books.filter(book => book.category === selectedCategory);

  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here!</h2>

      {/* Filter buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button className={`btn ${selectedCategory === "all" ? "btn-primary" : "btn-secondary"}`} onClick={() => setSelectedCategory("all")}>All</button>
        <button className={`btn ${selectedCategory === "fantasy" ? "btn-primary" : "btn-secondary"}`} onClick={() => setSelectedCategory("fantasy")}>Fantasy</button>
        <button className={`btn ${selectedCategory === "fiction" ? "btn-primary" : "btn-secondary"}`} onClick={() => setSelectedCategory("fiction")}>Fiction</button>
        <button className={`btn ${selectedCategory === "drama" ? "btn-primary" : "btn-secondary"}`} onClick={() => setSelectedCategory("drama")}>Drama</button>
        {/* Add more buttons for other categories as needed */}
      </div>

      {/* Display filtered books */}
      <div className='grid gap-8 my-12  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {filteredBooks.slice(0, 15).map(book =>
        <Link to={`/book/${book._id}`}>
            <Card key={book.id}>
              <img src={book.imageURL} alt="" className='h-auto' />
              <h3 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  {book.bookTitle}
                </p>
              </h3>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p className='text-0.5xl'>
                  Description
                </p>
              </p>
              <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
            </Card>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Shop;
