import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBook = () => {
     const [books, setBooks]= useState([]);

     useEffect( () => {
          fetch(`${import.meta.env.VITE_API_URL}/all-books`).then(res => res.json()).then(data => setBooks(data.slice(0,8)))
     },[]); 
     
       return (  
        
         <div className=''>
            <BookCards books={books} headline="Others Book" />
         </div>
       )
}

export default OtherBook