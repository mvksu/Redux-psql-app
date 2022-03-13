export const selectAllPeople = (state) => {
  return state.entities.people.allIds.map(
    (id) => state.entities.people.byId[id]
  );
};

export const selectPeopleByID = (state, id) => {
  return state.entities.people.byId[id];
};

export const selectMoviesDirected = (state, id) => {
  return state.entities.movies.allIds
    .map((id) => state.entities.movies.byId[id])
    .filter((m) => m.director_id === parseInt(id));
};

export const selectMoviesStarredIn = (state, id) => {
  return state.entities.movies.allIds
    .map((id) => state.entities.movies.byId[id])
    .filter((movie) =>
      state.entities.actors.allIds
        .map((id) => state.entities.actors.byId[id])
        .filter((actor) => parseInt(actor.person_id) === parseInt(id))
        .map((movie) => movie.movie_id)
        .includes(movie.id)
    );
};
