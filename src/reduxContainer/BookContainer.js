import React from "react";
import { useSelector } from "react-redux";

function BookContainer() {
  const numOfBooks = useSelector((state) => state.numberOfBooks);
  return (
    <>
      <div>BookContainer</div>
      <h2>No of books - {numOfBooks}</h2>
    </>
  );
}

export default BookContainer;
