import types from "./types";

const initState = {
  loading: false,
  error: "",
};

export const actorsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ACTORS_LIST_REQUEST:
      return { ...state, loading: true, error: "" };
    case types.ACTORS_LIST_SUCCESS:
      return { ...state, loading: false };
    case types.ACTORS_LIST_FAILURE:
      return { ...state, error: "Wystąpił błą∂" };

    case types.ACTORS_ADD_ACTOR_REQUEST:
      return { ...state, loading: true, error: "" };
    case types.ACTORS_ADD_ACTOR_SUCCESS:
      return { ...state, loading: false };
    case types.ACTORS_ADD_ACTOR_FAILURE:
      return { ...state, error: "Wystąpił błą∂" };

    case types.ACTORS_ACTOR_DEL_REQUEST:
      return { ...state, loading: true, error: "" };
    case types.ACTORS_ACTOR_DEL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.ACTORS_ACTOR_DEL_FAILURE:
      return { ...state, error: "Wystąpił błą∂" };

    default:
      return state;
  }
};
