// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import BackButton from "../components/BackButton";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4444/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-4 bg-gradient-to-tr from-blue-400 to-green-400 min-h-screen">
      <div className="container mx-auto px-4 py-8 text-center">
        <BackButton destination="/books" />
        <h1 className="text-3xl my-4">Your Book</h1>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex justify-center items-center">
            <div className="flex flex-col  border-2 border-blue-600 rounded-xl w-fit p-4">
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Id :</span>
                <span>{book._id}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Title :</span>
                <span>{book.title}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Author :</span>
                <span>{book.author}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">
                  Publish Year :
                </span>
                <span>{book.publishYear}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">
                  Create Time :
                </span>
                <span>{new Date(book.createdAt).toString()}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">
                  Last Update Time :
                </span>
                <span>{new Date(book.updatedAt).toString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;
