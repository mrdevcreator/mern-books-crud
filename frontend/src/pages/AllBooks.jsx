// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import Navbar from "../components/Navbar";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    async function getBooks() {
      try {
        const response1 = await axios.get("http://localhost:4444/books");
        setBooks(response1.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
    getBooks();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-white to-green-400 min-h-screen">
      <Navbar />
      <div className="p-8 py-40">
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType("table")}
          >
            Table
          </button>
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType("card")}
          >
            Card
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl text-bold my-8">Books List</h1>
          <Link
            to="/books/create"
            className="flex flex-col justify-center items-center text-center bg-sky-200 p-2 rounded-md"
          >
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
            <span className="text-sky-800">Add Book</span>
          </Link>
        </div>
        {loading ? (
          <Loading />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
