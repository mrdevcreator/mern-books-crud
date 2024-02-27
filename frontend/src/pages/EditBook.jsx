// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4444/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);
  const navigate = useNavigate();

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:4444/books/${id}`, data)
      .then(() => {
        alert("Book Updated successfully");
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
    <div className="p-4 fixed inset-0 bg-gradient-to-r from-blue-400 to-green-400">
      <div className="container mx-auto px-4 py-8 text-center">
        <BackButton destination="/books" />
        <h1 className="text-3xl my-4">Update/Edit Book</h1>
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
            onClick={handleEditBook}
            className="bg-sky-400 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
