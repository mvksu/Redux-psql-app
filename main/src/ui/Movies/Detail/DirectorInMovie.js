import face from "../../../images/face.jpeg";
import { useState } from "react";
import { connect } from "react-redux";
import { addActor, deleteActor } from "../../../ducks/actors/operations";
import { changeDirector } from "../../../ducks/movies/operations";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function DirectorInMovie({ people, changeDirector, movie }) {
  const { t } = useTranslation();
  const director = people.find((person) => person.id === movie.director_id);
  const [dirIdToChange, setDirIdToChange] = useState(
    movie.director_id ? movie.director_id : people[0].id
  );
  const handleChangeDir = (e) => {
    e.preventDefault();
    const newDir = people.find(
      (person) => parseInt(person.id) === parseInt(dirIdToChange)
    );
    changeDirector(newDir, movie.id);
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-black">{t("Director")}:</h1>
        <form onSubmit={(e) => handleChangeDir(e)}>
          <select
            value={dirIdToChange}
            onChange={(e) => setDirIdToChange(e.target.value)}
          >
            {people.map((person) => (
              <option value={person.id} key={person.id}>
                {person.first_name} {person.last_name}
              </option>
            ))}
          </select>

          <input
            type="submit"
            value={t("Change")}
            className="px-1 text-white rounded bg-green-400 mx-4 cursor-pointer"
          />
        </form>
      </div>

      {director ? (
        <Link
          to={`/people/details/${movie.director_id}`}
          className="bg-white my-4 rounded flex font-blue hover:ring-2 ring-blue-300 cursor-pointer"
        >
          <div className="w-32 ">
            <img src={face} alt="" className="rounded-l" />
          </div>
          <div className="grid grid-cols-5 justify-items-center w-full items-center">
            <h3 className="text-blue-400"><span className="text-cyan">#</span>{director.id}</h3>
            <h3 className="text-blue-400">{director.first_name}</h3>
            <h3 className="text-blue-400">{director.last_name}</h3>
            <h3 className="text-blue-400">
              {director.birth_date.substring(0, 10)}
            </h3>
          </div>
        </Link>
      ) : (
        <h1 className="text-black text-sm mt-5">{t("NoDir")}</h1>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  addActor,
  deleteActor,
  changeDirector,
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectorInMovie);
