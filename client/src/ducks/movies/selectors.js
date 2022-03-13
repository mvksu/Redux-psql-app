export const selectAllMovies = (state) => {
    return state.entities.movies.allIds.map(id => state.entities.movies.byId[id]);
}

export const selectMovieById = (state, movieId) => {
    return state.entities.movies.byId[movieId];
}

export const selectActorsFromMovie = (state, movieId) => {
    return state.entities.people.allIds.map(id => state.entities.people.byId[id]).filter((person) =>
    state.entities.actors.allIds.map(id => state.entities.actors.byId[id])
      .filter(
        (rel) => parseInt(rel ? rel.movie_id : -1) === parseInt(movieId)
      )
      .map((x) => x.person_id)
      .includes(person.id)
  )
}

