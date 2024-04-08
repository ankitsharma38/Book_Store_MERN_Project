// import React, { useEffect, useState } from 'react'
// import { Card } from "flowbite-react";

// const Shop = () => {
//   const [books, setBooks ] =useState([]);
//   useEffect( () => {
//     fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
//   },[])
//     return (
//       <div className='mt-28 px-4 lg:px24'>
//         <h2 className='text-5xl font-bold text-center'>All Books are here!</h2>

//         <div className='grid gap-8 my-12  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
//           {
//             books.slice(0,8).map( book => 
//             <Card>
//               <img src={book.imageURL} alt="" className='h-90'/>
//                 <h3 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   <p>
//                     {book.bookTitle}
//                   </p>
//                 </h3>
//                 <p className="font-normal text-gray-700 dark:text-gray-400">
//                  <p className='text-0.5xl'>
//                       Discription
//                  </p>
//                 </p>
//                 <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
//             </Card>)
//           }
//         </div>
//       </div>
    

    
//     )
// }
// export default Shop

// import React, { useEffect, useState } from 'react';
// import { Card } from "flowbite-react";

// const Shop = () => {
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);
//   const [filterCategory, setFilterCategory] = useState('');

//   useEffect(() => {
//     fetch("http://localhost:5000/all-books")
//       .then(res => res.json())
//       .then(data => {
//         setBooks(data);
//         setFilteredBooks(data); // Initially set filteredBooks to all books
//       });
//   }, []);

//   const handleFilter = () => {
//     const category = prompt("Enter category to filter:");

//     if (category !== null && category !== "") {
//       // Filter books based on category input
//       const filtered = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
//       setFilteredBooks(filtered);
//       setFilterCategory(category);
//     } else {
//       // If the user cancels or provides an empty category, show all books
//       setFilteredBooks(books);
//       setFilterCategory('');
//     }
//   };

//   return (
//     <div className='mt-28 px-4 lg:px24'>
//       <h2 className='text-5xl font-bold text-center'>All Books are here!</h2>

//       <button onClick={handleFilter} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4">Filter Books</button>

//       {filterCategory && (
//         <p className="mt-2">Filtered by category: {filterCategory}</p>
//       )}

//       <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
//         {filteredBooks.slice(0, 8).map(book => (
//           <Card key={book.id}>
//             <img src={book.imageURL} alt="" className='h-90'/>
//             <h3 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
//               <p>{book.bookTitle}</p>
//             </h3>
//             <p className="font-normal text-gray-700 dark:text-gray-400">
//               <p className='text-0.5xl'>Description</p>
//             </p>
//             <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;



import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";

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
          <Card key={book.id}>
            <img src={book.imageURL} alt="" className='h-90' />
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
        )}
      </div>
    </div>
  );
};

export default Shop;
