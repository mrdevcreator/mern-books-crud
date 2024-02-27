// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr className="h-10">
          <th className="border border-slate-600 rounded-md border-spacing-2">
            No
          </th>
          <th className="border border-slate-600 rounded-md border-spacing-2">
            Title
          </th>
          <th className="border border-slate-600 rounded-md border-spacing-2 max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md border-spacing-2 max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md border-spacing-2 max-md:hidden">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-6">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-green-500 text-2xl" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-blue-500 text-2xl" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-red-500 text-2xl" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
import PropTypes from "prop-types";

BooksTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publishYear: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default BooksTable;
