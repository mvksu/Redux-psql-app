import types from "./types";

const initState = {
  people: [],
  loading: true,
  error: "",
};

export const peopleReducer = (state = initState, action) => {
  switch (action.type) {
    //LIST FETCH
    case types.PEOPLE_LIST_REQUEST:
      return { ...state, loading: true };
    case types.PEOPLE_LIST_SUCCESS:
      return { people: action.payload, loading: false, error: "" };
    case types.PEOPLE_LIST_FAILURE:
      return { ...state, error: "Wystąpił błąd", loading: false };

    //PEOPLE CREATE
    case types.PEOPLE_CREATE_REQUEST:
      return { ...state, loading: true };
    case types.PEOPLE_CREATE_SUCCESS:
      return {
        people: [...state.people, action.payload],
        loading: false,
        error: "",
      };
    case types.PEOPLE_CREATE_FAILURE:
      return { ...state, error: "Wystąpił błąd", loading: false };

    //PEOPLE BY ID FETCH
    // case types.PEOPLE_FETCH_BY_ID_REQUEST:
    //   return { ...state, loading: true };
    // case types.PEOPLE_FETCH_BY_ID_SUCCESS:
    //   return { people: [...state.people, action.payload], loading: false, error: "" };
    // case types.PEOPLE_FETCH_BY_ID_FAILURE:
    //   return { ...state, error: "Sorry, we can't find the person :(", loading: false };

    //PEOPLE BY ID DELETE
    case types.PEOPLE_DELETE_BY_ID_REQUEST:
      return { ...state, loading: true };
    case types.PEOPLE_DELETE_BY_ID_SUCCESS:
      return { people: state.people, loading: false, error: "" };
    case types.PEOPLE_DELETE_BY_ID_FAILURE:
      return { ...state, error: "Wystąpił błąd", loading: false };

    //PEOPLE BY ID EDIT
    case types.PEOPLE_EDIT_BY_ID_REQUEST:
      return { ...state, loading: true };
    case types.PEOPLE_EDIT_BY_ID_SUCCESS:
      return {
        people: state.people.map((people) =>
          parseInt(people.id) === parseInt(action.payload.id)
            ? action.payload
            : people
        ),
        loading: false,
        error: "",
      };
    case types.PEOPLE_EDIT_BY_ID_FAILURE:
      return { ...state, error: "Wystąpił błąd", loading: false };

    default:
      return state;
  }
};
