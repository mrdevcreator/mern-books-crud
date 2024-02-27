// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDeleteBook = () => {
    setLoading(true);
    const userConfirmation = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (userConfirmation) {
      axios
        .delete(`http://localhost:4444/books/${id}`)
        .then(() => {
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          alert("An error happened!!!!");
          setLoading(false);
          console.log(error.message);
        });
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="p-4 fixed inset-0 bg-gradient-to-tr from-blue-400 to-green-400">
      <div className="container mx-auto px-4 py-8 text-center">
        <BackButton destination="/books" />
        <h1 className="text-3xl my-4">Delete Book</h1>
        {loading ? <Loading /> : ""}
        <div className="flex flex-col border-2 border-black rounded-xl w-[800px] p-4 mx-auto">
          <div className="my-4 flex flex-col justify-center items-center">
            <h3 className="text-4xl text-bold my-8">
              Are you sure you want to delete this book?
            </h3>
            <button
              onClick={handleDeleteBook}
              className="bg-red-500 text-white px-4 py-2  w-1/2 mt-4"
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
