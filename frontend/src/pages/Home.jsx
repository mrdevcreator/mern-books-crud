import bookImage from "./book.jpg";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [messages, setMessages] = useState([
    "Explore a world of knowledge with Book CRUD.",
    "Organize your reading journey effortlessly.",
    "Discover new adventures one book at a time.",
    "Create memories with every page turned.",
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="bg-gradient-to-tr from-white to-green-400 min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold mb-4 transition-all duration-1000 ease-in-out transform animate-bounce">
            Welcome to Book CRUD
          </h1>
        </div>
        <div className="container mx-auto px-4 py-4 relative ">
          <img
            src={bookImage}
            alt="Book"
            className="w-[700px] mx-auto border-8 rounded-full shadow-2xl "
          />
          <p className="text-3xl text-yellow-400 bg-blue-800 bg-opacity-70 p-2 rounded-md transition-all duration-4000  ease-in-out transform animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {messages[currentMessageIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
