import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next"
import { selectAllMovies } from "../../../ducks/movies/selectors"
import { selectAllActors } from "../../../ducks/actors/selectors"

export default function Stats() {
  const { t } = useTranslation()
  const people_length = useSelector((state) => state.entities.people.allIds.length);
  const directors_length = useSelector((state) => selectAllMovies(state))
    .map((movie) => movie.director_id)
    .filter((v, i, a) => a.indexOf(v) === i).length;
  const actors_length = useSelector((state) => selectAllActors(state))
    .map((rel) => rel.person_id)
    .filter((v, i, a) => a.indexOf(v) === i).length;


  return (
    <div className="bg-white rounded-md px-2 py-4 md:p-4 col-span-2 sm:col-span-1 justify-between">
      <div className="flex justify-between items-center">
        <h2 className="text-black font-extrabold text-md">{t("Statistics")}</h2>
        <Link to="/stats" className="text-blue-400 text-xs underline">{t("View")}</Link>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-purple-400 rounded-full mx-1 md:mx-3"></div>
          <p className="text-gray-500 text-sm">{t("People")}</p>
        </div>
        <p className="text-black font-extrabold text-md">{people_length}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-yellow-500 rounded-full mx-1 md:mx-3"></div>
          <p className="text-gray-500 text-sm">{t("Directors")}</p>
        </div>
        <p className="text-black font-extrabold text-md">{directors_length}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-300 rounded-full mx-1 md:mx-3"></div>
          <p className="text-gray-500 text-sm text-md">Actors</p>
        </div>
        <p className="text-black font-extrabold text-md">{actors_length}</p>
      </div>
    </div>
  );
}
