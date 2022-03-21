/* eslint-disable react-hooks/exhaustive-deps */
import face from "../../../images/face.jpeg";
import defaultimg from "../../../images/default-movie.png";
import BackButton from "../../Elements/BackButton";
import ErrorPage from "../../Elements/ErrorPage";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deletePeopleByID } from "../../../ducks/people/operations";
import { getPeopleList } from "../../../ducks/people/operations";
import { getActorsList } from "../../../ducks/actors/operations";
import { getMoviesList } from "../../../ducks/movies/operations";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import { useTranslation } from "react-i18next";
import {
  selectPeopleByID,
  selectMoviesDirected,
  selectMoviesStarredIn,
} from "../../../ducks/people/selectors";
import Loading from "../../Elements/Loading";

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

function PeopleDetail({
  deletePeopleByID,
  peopleByID,
  match,
  isLoading,
  history,
  error,
  moviesDirected,
  moviesStarredIn,
}) {

  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handleDelete = () => {
    deletePeopleByID(match.params.id);
    history.push("/");
  };
  const handleEdit = (id) => {
    history.push(`/people/editform/${id}`);
  };

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div>
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleDelete={handleDelete}
        canYouDelete={
          moviesStarredIn.length === 0 && moviesDirected.length === 0
        }
      />

      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex items-center w-full justify-between">
            <BackButton />

            <div>
              <button
                className="bg-red-500 text-white px-12 py-2 ml-3 rounded hover:bg-red-400"
                onClick={() => setShowModal(true)}
              >
                {isLoading ? "Processing.." : t("Delete")}
              </button>
              <button
                className="bg-blue-400 text-white px-12 py-2 ml-3 rounded hover:bg-blue-300"
                onClick={() => handleEdit(match.params.id)}
              >
                {t("Edit")}
              </button>
            </div>
          </div>
          <div className="bg-white w-full h-full mt-8 flex items-center">
            <div className="w-1/2">
              <img src={face} alt="" />
            </div>
            <div className="ml-4">
              <h2 className="text-gray-400 text-sm">{t("People")}</h2>
              <h1 className="text-black text-md">
                {peopleByID.first_name} {peopleByID.last_name}
              </h1>
              <h2 className="text-gray-400 text-sm">{getAge(peopleByID.birth_date)} lat</h2>
              <h2 className="text-gray-400 text-sm">
                {peopleByID.nationality}
              </h2>
            </div>
          </div>
          {moviesStarredIn.length > 0 && (
            <div>
              <h2 className="text-black text-md mt-12">{t("Starring in:")}</h2>
              {moviesStarredIn.map((movie) => (
                <Link
                  to={`/movies/details/${movie.id}`}
                  className="bg-white my-4 rounded flex font-blue hover:ring-2 ring-blue-300 cursor-pointer h-28 items-center"
                  key={movie.id}
                >
                  <div className="w-32 ">
                    <img
                      src={movie.image_url ? movie.image_url : defaultimg}
                      alt=""
                      className="rounded-l"
                    />
                  </div>
                  <div className="grid grid-cols-4 justify-items-center w-full items-center">
                    <h3 className="text-blue-400"><span className="text-cyan">#</span>{movie.id}</h3>
                    <h3 className="text-blue-400">{movie.title}</h3>
                    <h3 className="text-blue-400">{movie.genre}</h3>
                    <h3 className="text-blue-400">
                      {movie.release_date.substring(0, 4)}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {moviesDirected.length > 0 && (
            <div>
              <h2 className="text-black text-md">{t("Directed")}</h2>
              {moviesDirected.map((movie) => (
                <Link
                  to={`/movies/details/${movie.id}`}
                  className="bg-white my-4 rounded flex font-blue hover:ring-2 ring-blue-300 cursor-pointer"
                  key={movie.id}
                >
                  <div className="w-32 ">
                    <img
                      src={movie.image_url ? movie.image_url : defaultimg}
                      alt=""
                      className="rounded-l"
                    />
                  </div>
                  <div className="grid grid-cols-4 justify-items-center w-full items-center">
                    <h3 className="text-blue-400"><span className="text-cyan">#</span>{movie.id}</h3>
                    <h3 className="text-blue-400">{movie.title}</h3>
                    <h3 className="text-blue-400">{movie.genre}</h3>
                    <h3 className="text-blue-400">
                      {movie.release_date.substring(0, 4)}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  peopleByID: selectPeopleByID(state, props.match.params.id),
  isLoading: state.people.loading,
  error: state.people.error,
  moviesDirected: selectMoviesDirected(state, props.match.params.id),
  moviesStarredIn: selectMoviesStarredIn(state, props.match.params.id),
});
const mapDispatchToProps = {
  deletePeopleByID,
  getPeopleList,
  getActorsList,
  getMoviesList,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PeopleDetail)
);
