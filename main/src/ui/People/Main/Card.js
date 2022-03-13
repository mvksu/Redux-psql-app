import { Link } from "react-router-dom";
import face from "../../../images/face.jpeg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Card({ first_name, last_name, birth_date, id, index }) {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.15,
      },
    }),
    hidden: { opacity: 0 },
  };
  const { t }  = useTranslation();

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <Link to={`people/details/${id}`} className="group bg-white w-full rounded relative grid grid-cols-4 justify-items-center md:flex md:flex-col items-center col-span-2 md:col-span-1 h-40 md:h-full justify-around md:justify-between">
        <div className="bg-blue-400 w-full h-20 rounded-t absolute hidden md:flex"></div>
        <div className="md:w-24 md:h-24 w-20 h-20 rounded-full md:absolute transform bottom-1/2 left-1/2 md:-translate-x-2/4 overflow-hidden group-hover:scale-110 transition-all duration-150">
          <img src={face} alt="" className="object-contain" />
        </div>
        <div className="md:text-center ml-2">
          <h2 className="text-gray-400 md:mt-40 text-sm">{t("People")}</h2>
          <h1 className="text-black text-md w-32">
            {first_name} {last_name}
          </h1>
          <h2 className="text-gray-400 text-sm">
            {birth_date.substring(0, 10)}
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
