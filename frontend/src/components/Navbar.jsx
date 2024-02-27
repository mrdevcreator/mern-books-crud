import { Link } from "react-router-dom";
import { FaBook, FaPlus } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 bg-opacity-90 text-white p-4 border-b-2 border-black shadow-xl">
      <div className="flex justify-between items-center">
        <SiHomebridge className="text-xl mr-2 inline-block" />
        <span className="text-xl font-bold">Book CRUD</span>
      </div>
      <div className="flex ">
        <Link to="/" className="text-xl mr-4 flex justify-center items-center">
          <FaHome className="inline-block mr-1" />
          Home
        </Link>
        <Link
          to="/books"
          className="text-xl mr-4 flex justify-center items-center"
        >
          <FaBook className="inline-block mr-1" />
          All Books
        </Link>
        <Link
          to="/books/create"
          className="text-xl flex justify-center items-center"
        >
          <FaPlus className="inline-block mr-1" />
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
