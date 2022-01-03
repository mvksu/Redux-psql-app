import types from "./types";

const initState = {
  actors: [],
  loading: false,
  error: "",
};

export const actorsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ACTORS_LIST_REQUEST:
      return { ...state, loading: true, error: "" };
    case types.ACTORS_LIST_SUCCESS:
      return { ...state, actors: action.payload, loading: false };
    case types.ACTORS_LIST_FAILURE:
      return { ...state, error: "Wystąpił błą∂" };

    case types.ACTORS_ADD_ACTOR_REQUEST:
      return { ...state, loading: true, error: "" };
    case types.ACTORS_ADD_ACTOR_SUCCESS:
      return { ...state, actors: [...state.actors, { movie_id: action.payload.movieId, person_id: action.payload.actor.id}], loading: false };
    case types.ACTORS_ADD_ACTOR_FAILURE:
      return { ...state, error: "Wystąpił błą∂" };

    case types.ACTORS_ACTOR_DEL_REQUEST:
      return { ...state, loading: true, error: "" };
    case types.ACTORS_ACTOR_DEL_SUCCESS:
      return {
        ...state,
        actors: state.actors.filter(
          (rel) =>
            (parseInt(rel.person_id) !== parseInt(action.payload.personId) && parseInt(rel.movieId) !== parseInt(action.payload.movieId))
        ),
        loading: false,
      };
    case types.ACTORS_ACTOR_DEL_FAILURE:
      return { ...state, error: "Wystąpił błą∂" };

    default:
      return state;
  }
};
