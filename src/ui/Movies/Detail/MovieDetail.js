import ErrorPage from "../../UIComponents/ErrorPage";
import BackButton from "../../UIComponents/BackButton";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  deleteMoviesByID,
  getMoviesList,
} from "../../../ducks/movies/operations";
import { getPeopleList } from "../../../ducks/people/operations";
import { getActorsList } from "../../../ducks/actors/operations";
import { useState, useEffect } from "react";
import ActorsInMovie from "./ActorsInMovie";
import DirectorInMovie from "./DirectorInMovie";
import defaultimg from "../../../images/default-movie.png"
import DeleteModal from "./DeleteModal";
import { useTranslation } from "react-i18next"

function MovieDetail({
  getPeopleList,
  getMoviesList,
  getActorsList,
  deleteMoviesByID,
  movieByID,
  match,
  isLoadingMovies,
  isLoadingActors,
  isLoadingPeople,
  history,
  error,
  people,
  actors,
}) {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation()

  useEffect(() => {
    getPeopleList();
    getMoviesList();
    getActorsList();
  }, []);

  const handleDelete = () => {
    deleteMoviesByID(match.params.id);
    history.push("/movies");
  };
  const handleEdit = (id) => {
    history.push(`/movies/editform/${id}`);
  };

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div>
      <DeleteModal showModal={showModal} setShowModal={setShowModal} handleDelete={handleDelete}/>
      {isLoadingMovies | isLoadingPeople | isLoadingActors ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="flex items-center w-full justify-between">
            <BackButton />
            <div>
              <button
                className="bg-red-500 text-white px-12 py-2 ml-3 rounded hover:bg-red-400"
                onClick={() => setShowModal(true)}
              >
                {isLoadingMovies ? "Processing.." : t("Delete")}
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
            <div className="w-24 md:w-64">
              <img src={movieByID.image_url ? movieByID.image_url : defaultimg} alt="" />
            </div>
            <div className="ml-4">
              <h2 className="text-gray-400 text-sm">{t(movieByID.genre)}</h2>
              <h1 className="text-black text-md">{movieByID.title}</h1>
              <h2 className="text-gray-400 text-sm my-1">{movieByID.release_date.substring(0,10)}</h2>
              <h2 className="text-gray-400 text-sm italic">{movieByID.description}</h2>
            </div>
          </div>
          <DirectorInMovie people={people} movie={movieByID}/>
          <ActorsInMovie
            actors={actors}
            people={people}
            movieId={match.params.id}
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  movieByID: state.movies.movies.find(
    (movies) => parseInt(movies.id) === parseInt(props.match.params.id)
  ),
  isLoadingMovies: state.movies.loading,
  isLoadingPeople: state.people.loading,
  isLoadingActors: state.actors.loading,
  people: state.people.people,
  actors: state.people.people.filter((person) =>
    state.actors.actors
      .filter(
        (rel) => parseInt(rel.movie_id) === parseInt(props.match.params.id)
      )
      .map((x) => x.person_id)
      .includes(person.id)
  ),
  error: state.movies.error,
});
const mapDispatchToProps = {
  deleteMoviesByID,
  getMoviesList,
  getActorsList,
  getPeopleList,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
);
