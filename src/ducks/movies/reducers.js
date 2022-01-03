import types from "./types";

const initState = {
  movies: [],
  loading: true,
  error: "",
};

export const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    //LIST FETCH
    case types.MOVIES_LIST_REQUEST:
      return { ...state, loading: true };
    case types.MOVIES_LIST_SUCCESS:
      return { movies: action.payload, loading: false, error: "" };
    case types.MOVIES_LIST_FAILURE:
      return { ...state, error: "Wystąpił błąd", loading: false };

    //MOVIES CREATE
    case types.MOVIES_CREATE_REQUEST:
      return { ...state, loading: true };
    case types.MOVIES_CREATE_SUCCESS:
      return {
        movies: [...state.movies, action.payload],
        loading: false,
        error: "",
      };
    case types.MOVIES_CREATE_FAILURE:
      return { ...state, error: "Wystąpił błąd", loading: false };

    //MOVIE BY ID FETCH
    case types.MOVIES_BY_ID_REQUEST:
      return { ...state, loading: true };
    case types.MOVIES_BY_ID_SUCCESS:
      return {
        movies: [...state.movies, action.payload],
        loading: false,
        error: "",
      };
    case types.MOVIES_BY_ID_FAILURE:
      return {
        ...state,
        error: "Sorry, we can't find the movie :(",
        loading: false,
      };

    //MOVIES BY ID DELETE
    case types.MOVIES_DELETE_BY_ID_REQUEST:
      return { ...state, loading: true };
    case types.MOVIES_DELETE_BY_ID_SUCCESS:
      console.log(action.payload);
      return {
        movies: state.movies.filter(
          (movie) => parseInt(movie.id) !== parseInt(action.payload)
        ),
        loading: false,
        error: "",
      };
    case types.MOVIES_DELETE_BY_ID_FAILURE:
      return { ...state, error: "Wystąpił błąd", loading: false };

    //MOVIE BY ID EDIT
    case types.MOVIES_EDIT_BY_ID_REQUEST:
      return { ...state, loading: true };
    case types.MOVIES_EDIT_BY_ID_SUCCESS:
      return {
        movies: state.movies.map((people) =>
          parseInt(people.id) === parseInt(action.payload.id)
            ? action.payload
            : people
        ),
        loading: false,
        error: "",
      };
    case types.MOVIES_EDIT_BY_ID_FAILURE:
      return { ...state, error: "Wystąpił błąd", loading: false };

    //MOVIE BY ID CHANGE DIR
    case types.MOVIES_CHANGE_DIR_REQUEST:
      return { ...state, loading: true };
    case types.MOVIES_CHANGE_DIR_SUCCESS:
      return {
        movies: state.movies.map((movie) =>
          parseInt(movie.id) === parseInt(action.payload.id)
            ? { ...movie, director_id: action.payload.newDir.id }
            : movie
        ),
        loading: false,
        error: "",
      };
    case types.MOVIES_CHANGE_DIR_FAILURE:
      return { ...state, error: "Wystąpił błąd", loading: false };

    default:
      return state;
  }
};
