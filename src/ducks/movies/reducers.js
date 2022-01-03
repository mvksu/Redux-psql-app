import types from "./types";

const initState = {
  loading: true,
  error: "",
  notificationStack: [],
};

export const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    //LIST FETCH
    case types.MOVIES_LIST_REQUEST:
      return { ...state, loading: true };
    case types.MOVIES_LIST_SUCCESS:
      return { ...state, loading: false, error: "" };
    case types.MOVIES_LIST_FAILURE:
      return {
        ...state,
        error: "Wystąpił błąd",
        loading: false,
        notificationStack: [
          ...state.notificationStack,
          { type: "red", msg: "Unsuccesful list fetch" },
        ],
      };

    //MOVIES CREATE
    case types.MOVIES_CREATE_REQUEST:
      return { ...state, loading: true};
    case types.MOVIES_CREATE_SUCCESS:
      return {
        loading: false,
        error: "",
        notificationStack: [
          ...state.notificationStack,
          { type: "green", msg: "Successful creation" },
        ],
      };
    case types.MOVIES_CREATE_FAILURE:
      return {
        ...state,
        error: "Wystąpił błąd",
        loading: false,
        notificationStack: [
          ...state.notificationStack,
          { type: "red", msg: "Unsuccesful creation" },
        ],
      };

    //MOVIE BY ID FETCH
    case types.MOVIES_BY_ID_REQUEST:
      return { ...state, loading: true };
    case types.MOVIES_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };
    case types.MOVIES_BY_ID_FAILURE:
      return {
        ...state,
        error: "Sorry, we can't find the movie :(",
        loading: false,
        notificationStack: [
          ...state.notificationStack,
          { type: "red", msg: "Unsuccesful edi" },
        ],
      };

    //MOVIES BY ID DELETE
    case types.MOVIES_DELETE_BY_ID_REQUEST:
      return { ...state, loading: true };
    case types.MOVIES_DELETE_BY_ID_SUCCESS:
      return {
        loading: false,
        error: "",
        notificationStack: [
          ...state.notificationStack,
          { type: "blue", msg: "Succesful delete" },
        ],
      };
    case types.MOVIES_DELETE_BY_ID_FAILURE:
      return {
        ...state,
        error: "Wystąpił błąd",
        loading: false,
        notificationStack: [
          ...state.notificationStack,
          { type: "red", msg: "Unsuccesful delete" },
        ],
      };

    //MOVIE BY ID EDIT
    case types.MOVIES_EDIT_BY_ID_REQUEST:
      return { ...state, loading: true };
    case types.MOVIES_EDIT_BY_ID_SUCCESS:
      return {
        loading: false,
        error: "",
        notificationStack: [
          ...state.notificationStack,
          { type: "green", msg: "Successful edit" },
        ],
      };
    case types.MOVIES_EDIT_BY_ID_FAILURE:
      return {
        ...state,
        error: "Wystąpił błąd",
        loading: false,
        notificationStack: [
          ...state.notificationStack,
          { type: "red", msg: "Unsuccesful edit" },
        ],
      };

    //MOVIE BY ID CHANGE DIR
    case types.MOVIES_CHANGE_DIR_REQUEST:
      return { ...state, loading: true };
    case types.MOVIES_CHANGE_DIR_SUCCESS:
      return {
        loading: false,
        error: "",
        notificationStack: [
          ...state.notificationStack,
          { type: "green", msg: "Succesful creation" },
        ],
      };
    case types.MOVIES_CHANGE_DIR_FAILURE:
      return {
        ...state,
        error: "Wystąpił błąd",
        loading: false,
        notificationStack: [
          ...state.notificationStack,
          { type: "red", msg: "Unsuccesful dir change" },
        ],
      };

    case "MOVIES_NOTIFICATION_REMOVE":
      return {
        loading: false,
        error: "Wystąpił błąd",
        notificationStack: state.notificationStack.filter(
          (x, index) => index !== action.payload
        ),
      };

    default:
      return state;
  }
};
