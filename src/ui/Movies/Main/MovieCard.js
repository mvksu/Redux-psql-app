import { Link } from "react-router-dom";
import img from "../../../images/default-movie.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function MovieCard({
  title,
  release_date,
  id,
  image_url,
  genre,
  index
}) {
  const { t } = useTranslation();
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.15,
      },
    }),
    hidden: { opacity: 0 },
  };
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <Link
        to={`movies/details/${id}`}
        className="group bg-white w-full rounded relative grid grid-cols-4 md:grid-cols-1 justify-items-center items-center col-span-2 md:col-span-1 h-40 md:h-full justify-around md:justify-between"
      >
        <div className="bg-blue-400 w-full h-20 rounded-t absolute hidden md:flex top-0"></div>
        <div className="md:w-24 md:h-24 w-24 h-24 md:absolute transform bottom-1/2 left-1/2 md:-translate-x-2/4 overflow-hidden group-hover:scale-110 transition-all duration-150">
          <img
            src={image_url ? image_url : img}
            alt=""
            className="object-contain"
          />
        </div>
        <div className="md:text-center ml-2">
          <h2 className="text-gray-400 md:mt-40 text-sm">{genre}</h2>
          <h1 className="text-black text-md">{title}</h1>
          <h2 className="text-gray-400 text-sm">
            {release_date.substring(0, 10)}
          </h2>
        </div>
        <h2 className="text-gray-400 md:absolute top-20 left-4 text-sm mt-2">
          <b className="text-blue-400">#</b> {id}
        </h2>
        <button className="cursor-pointer px-4 py-2 bg-blue-400 hover:bg-blue-300 text-white my-4 rounded">
          {t("Check")}
        </button>
      </Link>
    </motion.div>
  );
}
