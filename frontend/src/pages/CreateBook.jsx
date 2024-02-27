// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:4444/books", data)
      .then(() => {
        alert("Book created successfully");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        alert("An error happened!!!!");
        setLoading(false);
        console.log(error.message);
      });
  };
  return (
    <div className=" fixed inset-0 bg-gradient-to-r from-blue-400 to-green-400">
      <Navbar />
      <div className="container mx-auto px-4 py-8 text-center">
        <BackButton destination="/books" />
        <h1 className="text-3xl my-4">Create Book</h1>
        {loading ? <Loading /> : ""}
        <div className="flex flex-col border-2 border-black rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-700">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-700">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <button
            onClick={handleSaveBook}
            className="bg-sky-400 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
