import Logo from "./Logo";
import { FaChartLine, FaFilm, FaRegGrinBeam, FaAngleRight } from "react-icons/fa";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useOnClickOutside from "../../helpers/useOneClickOutside"


export default function Navbar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const ref = useRef()
  useOnClickOutside(ref, () => setShowSideBar(false));
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: "EN" },
    pl: { nativeName: "PL" },
  };

  const navSlide = {
    hidden: { x: -100 },
    visible: {
      x: 0,
    },
  };

  return (
    <>
    {showSideBar && <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>}
    <motion.nav
      className={`h-24 md:h-screen md:flex md:flex-col md:w-24 px-6 justify-center bg-white rounded-b-3xl md:rounded-r-3xl fixed w-screen transition-all ${
        showSideBar && "h-72 md:w-64 z-50 border"
      }`}
      variants={navSlide}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4 }}
      ref={ref}
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
          to="/people"
          className="navLink"
          onClick={() => setShowSideBar(false)}
          activeClassName="activeNavLink"
        >
          <FaRegGrinBeam className="text-xl group-hover:text-black ml-5 md:ml-0" />
          <p
            className={`text-md ml-2 text-gray-600 group-hover:text-black ${
              showSideBar ? "" : "hidden"
            }`}
          >
            {t("People")}
          </p>
        </NavLink>
        <NavLink
          to="/movies"
          className="navLink"
          onClick={() => setShowSideBar(false)}
          activeClassName="activeNavLink"
        >
          <FaFilm className="text-xl group-hover:text-black ml-5 md:ml-0" />
          <p
            className={`text-md ml-2 text-gray-600 group-hover:text-black ${
              showSideBar ? "" : "hidden"
            }`}
          >
            {t('Movies')}
          </p>
        </NavLink>
        <NavLink
          to="/stats"
          className="navLink"
          onClick={() => setShowSideBar(false)}
          activeClassName="activeNavLink"
        >
          <FaChartLine className="text-xl group-hover:text-black ml-5 md:ml-0" />
          <p
            className={`text-md ml-2 text-gray-600 group-hover:text-black ${
              showSideBar ? "" : "hidden"
            }`}
          >
            {t('Statistics')}
          </p>
        </NavLink>
      </div>
      <div className={`md:w-full w-1/4 h-24 absolute flex justify-center right-10 md:right-0 md:bottom-0 ${
              showSideBar ? "hidden md:flex" : "" }`}>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              margin: "1px",
              textDecorationColor: "#22d3ee",
              textDecorationThickness: "2px"
            }}
            className={`${i18n.resolvedLanguage === lng ? "underline " : ""}`}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </motion.nav>
    </>
  );
}
