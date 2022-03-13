/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from "react-redux";
import { getPeopleList } from "../../ducks/people/operations";
import { getActorsList } from "../../ducks/actors/operations";
import { getMoviesList } from "../../ducks/movies/operations";
import { RadarBar } from "./Radar";
import { PieChart } from "./PieChart";
import { Bar1 } from "./Bar1";
import { Bar2 } from "./Bar2";
import { selectAllPeople } from "../../ducks/people/selectors";
import { selectAllMovies } from '../../ducks/movies/selectors';
import { selectAllActors } from '../../ducks/actors/selectors';

function StatsPage({
  people,
  actors,
  movies,
}) {

  const actorsWithMostRoles = [
    ...new Set(
      actors
        .map((rel) => ({
          person: people.find((x) => x.id === rel.person_id),
          numbersOfRoles: actors.filter((x) => x.person_id === rel.person_id)
            .length,
        }))
        .map(JSON.stringify)
    ),
  ]
    .map(JSON.parse)
    .sort((a, b) => b.numbersOfRoles - a.numbersOfRoles);

  const directorsWithTheMostMovies = [
    ...new Set(
      movies
        .map((m) => ({
          director: people.find((x) => x.id === m.director_id),
          numbersOfMovies: movies.filter((x) => x.director_id === m.director_id)
            .length,
        }))
        .map(JSON.stringify)
    ),
  ]
    .map(JSON.parse)
    .sort((a, b) => b.numbersOfMovies - a.numbersOfMovies);


  const nationalities = [
    ...new Set(
      people
        .map((person) => ({
          natio: person.nationality,
          numberOfActress: people.filter(
            (x) => x.nationality === person.nationality
          ).length,
        }))
        .map(JSON.stringify)
    ),
  ]
    .map(JSON.parse)
    .sort((a, b) => b.numberOfActress - a.numberOfActress);

  const genres = [
    ...new Set(
      movies
        .map((m) => m.genre)
        .map((x) => ({
          genre: x,
          value: movies.filter((z) => z.genre === x).length,
        }))
        .map(JSON.stringify)
    ),
  ]
    .map(JSON.parse)
    .sort((a, b) => b.value - a.value);


  return (
    <div>
      <h1 className="text-black my-6">Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
        <div className="w-max ">
          <h3 className="text-center">Actors with the most roles </h3>
          <Bar1 data={actorsWithMostRoles} />
        </div>

        <div className="w-max">
          <h3 className="text-center">
            Directors with the most movies directed
          </h3>
          <Bar2 data={directorsWithTheMostMovies} />
        </div>

        <div className="w-max my-6">
          <h3 className="text-center">Nationalities by persons</h3>
          <RadarBar data={nationalities} />
        </div>

        <div className="w-max my-6">
          <h3 className="text-center">Genres</h3>
          <PieChart data={genres} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  people: selectAllPeople(state),
  movies: selectAllMovies(state),
  actors: selectAllActors(state),
});

const mapDispatchToProps = {
  getPeopleList,
  getMoviesList,
  getActorsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsPage);
