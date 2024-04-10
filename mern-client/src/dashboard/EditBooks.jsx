import React, { useState } from "react"
import {  useParams,  useLoaderData } from "react-router-dom"
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";


const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData(id);

  const bookCategories = [
    "Fiction",
    "Non-Friction",
    "Mistry",
    "Programming",
    "Fantasy",
    "Science Fiction",
    "Horror",
    "Bibliography",
    "BioGraphy",
    "History",
    "Self-Health",
    "Memorial",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art & Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  //handle book submit
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    console.log(bookObj);    
  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold ">Update the book data</h2>

      <form
        onSubmit={handleUpdate} className="flex lg:w-[1000px] flex-col flex-wrap gap-4">
        {/* First Row */}
        <div className="flex gap-8">
          {/* Book Title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Book Name"
              required
              type="text"
              defaultValue={bookTitle}
            />
          </div>
          {/* Author Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Author Name"
              required
              type="text"
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-8">
          {/* Image URL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Book Image URL"
              required
              type="text"
              defaultValue={imageURL}
            />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              name="categoryName"
              id="inputState"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}

            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {" "}
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Third Row (Book Description)*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            className="w-full"
            name="bookDescription"
            placeholder="Write Your Book Description..."
            required
            rows={6}
            defaultValue={bookDescription}
          />
        </div>

        {/* Book  PDF Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL " />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="book pdf url"
            required
            defaultValue={bookPDFURL}
          />
        </div>

        {/* Submit Button  */}
        <Button className="mt-5" type="submit">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
  