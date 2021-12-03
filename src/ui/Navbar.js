import Logo from "./Logo";
import { FaHome, FaFilm, FaRegGrinBeam, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    // <nav className="bg-white h-24 w-screen fixed">

    // </nav>
    <nav
      className={`h-24 md:h-screen md:flex md:flex-col md:w-24 px-6 justify-center bg-white rounded-b-3xl md:rounded-r-3xl fixed w-screen transition-all duration-200 ${showSideBar && 'h-72 md:w-64'}`}
    >
      <div
        className={`md:w-full w-1/4 h-24 flex items-center justify-center top-0 absolute left-0`}
      >
        <Logo />
        <p
          className={`text-3xl mt-2 ml-2 text-gray-600 hidden ${
            showSideBar ? "md:flex" : ""
          }`}
        >
          <b className="font-extrabold text-black">Max</b>A
        </p>
      </div>
      <div
        className="rounded-full bg-white shadow-xl absolute top-6 mt-1 right-6 md:top-24 md:-right-5 w-10 h-10 flex justify-center items-center border cursor-pointer z-40"
        onClick={() => setShowSideBar(!showSideBar)}
      >
        <FaAngleRight
          className={`transform transition-all duration-200 ${
            showSideBar ? "-rotate-90 md:rotate-180" : "rotate-90 md:rotate-0"
          }`}
        />
      </div>
      <div
        className={`md:flex flex-col mt-24 md:mt-0 ${
          showSideBar ? "w-full" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className={`group w-full md:w-12 h-12 my-4 hover:bg-gray-200 rounded-full cursor-pointer flex items-center md:justify-center ${
            showSideBar && "py-3 md:w-full text-left"
          }`}
          onClick={() => setShowSideBar(false)}
        >
          <FaHome className="text-gray-400 text-xl group-hover:text-black ml-5 md:ml-0" />
          <p
            className={`text-md ml-2 text-gray-600 group-hover:text-black ${
              showSideBar ? "" : "hidden"
            }`}
          >
            Home
          </p>
        </NavLink>
        <NavLink
          to="/"
          className={`group w-full md:w-12 h-12 my-4 hover:bg-gray-200 rounded-full cursor-pointer flex items-center md:justify-center ${
            showSideBar && "py-3 md:w-full text-left"
          }`}
          onClick={() => setShowSideBar(false)}
        >
          <FaFilm className="text-gray-400 text-xl group-hover:text-black ml-5 md:ml-0" />
          <p
            className={`text-md ml-2 text-gray-600 group-hover:text-black ${
              showSideBar ? "" : "hidden"
            }`}
          >
            Movies
          </p>
        </NavLink>
        <NavLink
          to="/"
          className={`group w-full md:w-12 h-12 my-4 hover:bg-gray-200 rounded-full cursor-pointer flex items-center md:justify-center ${
            showSideBar && "py-3 md:w-full text-left"
          }`}
          onClick={() => setShowSideBar(false)}
        >
          <FaRegGrinBeam className="text-gray-400 text-xl group-hover:text-black ml-5 md:ml-0" />
          <p
            className={`text-md ml-2 text-gray-600 group-hover:text-black ${
              showSideBar ? "" : "hidden"
            }`}
          >
            People
          </p>
        </NavLink>
      </div>
    </nav>
  );
}
