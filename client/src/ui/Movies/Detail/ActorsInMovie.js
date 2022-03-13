import face from "../../../images/face.jpeg";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { connect } from "react-redux";
import { addActor, deleteActor } from "../../../ducks/actors/operations";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

function ActorsInMovie({ people, addActor, movieId, actors, deleteActor }) {
  const { t } = useTranslation()
  const peopleToAdd = people.filter(
    (person) => actors && !actors.includes(person)
  );
  const [actorIdToAdd, setActorIdToAdd] = useState(
    peopleToAdd.length > 0 && peopleToAdd[0].id
  );

  const handleAddActor = (e) => {
    e.preventDefault();
    const body = people.find(
      (person) => parseInt(person.id) === parseInt(actorIdToAdd)
    );
    console.log(body);
    addActor(movieId, body);
  };

  const handleDeleteActor = (actorId) => {
    deleteActor(movieId, actorId);
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-black">{t("Cast")}:</h1>
        {peopleToAdd.length !== 0 && (
          <form onSubmit={(e) => handleAddActor(e)}>
            <select
              value={actorIdToAdd}
              onChange={(e) => setActorIdToAdd(e.target.value)}
            >
              {peopleToAdd.map((person) => (
                <option value={person.id} key={person.id}>
                  {person.first_name} {person.last_name}
                </option>
              ))}
            </select>
            <input
              disabled={peopleToAdd.length === 0}
              type="submit"
              value={t("Add")}
              className="px-1 text-white rounded bg-green-400 mx-4 cursor-pointer hover:bg-green-300"
            />
          </form>
        )}
      </div>

      {actors.length > 0 ? (
        actors.map((person) => (
          <div
            to={`/people/details/${person.id}`}
            className="bg-white my-4 rounded flex font-blue ring-blue-300 hover:ring-2 cursor-default relative"
            key={person.id}
          >
            <div className="w-32 ">
              <img src={face} alt="" className="rounded-l" />
            </div>
            <Link to={`/people/details/${person.id}`} className="grid grid-cols-5 justify-items-center w-full items-center">
              <h3 className="text-blue-400"><span className="text-cyan">#</span>{person.id}</h3>
              <h3 className="text-blue-400">{person.first_name}</h3>
              <h3 className="text-blue-400">{person.last_name}</h3>
              <h3 className="text-blue-400 invisible sm:visible">
                {person.birth_date.substring(0, 10)}
              </h3>
            </Link>
            <div className="flex justify-center items-center">
              <FaTimes
                className="text-red-400 text-2xl cursor-pointer hover:text-3xl transform hover:scale-110 absolute right-8"
                onClick={() => handleDeleteActor(person.id)}
              />
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-black mt-6 text-sm">{t("NoActors")}</h1>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  addActor,
  deleteActor,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActorsInMovie);
