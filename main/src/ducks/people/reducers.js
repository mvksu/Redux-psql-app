import types from "./types";

const initState = {
  loading: true,
  error: "",
  notificationStack: [{ type: "green", msg: "You entered in" }],
};

export const peopleReducer = (state = initState, action) => {
  switch (action.type) {
    //LIST FETCH
    case types.PEOPLE_LIST_REQUEST:
      return { ...state, loading: true };
    case types.PEOPLE_LIST_SUCCESS:
      return { ...state, loading: false, error: "" };
    case types.PEOPLE_LIST_FAILURE:
      return {
        loading: false,
        error: "Wystąpił błąd",
        notificationStack: [
          ...state.notificationStack,
          { type: "red", msg: "Unsuccesful list fetch" },
        ],
      };

    //PEOPLE CREATE
    case types.PEOPLE_CREATE_REQUEST:
      return { ...state, loading: true };
    case types.PEOPLE_CREATE_SUCCESS:
      return {
        loading: false,
        error: "",
        notificationStack: [
          ...state.notificationStack,
          { type: "green", msg: "Successful creation" },
        ],
      };
    case types.PEOPLE_CREATE_FAILURE:
      return {
        loading: false,
        error: "Wystąpił błąd",
        notificationStack: [
          ...state.notificationStack,
          { type: "red", msg: "Unsuccesful creation" },
        ],
      };

    //PEOPLE BY ID DELETE
    case types.PEOPLE_DELETE_BY_ID_REQUEST:
      return { ...state, loading: true };
    case types.PEOPLE_DELETE_BY_ID_SUCCESS:
      return {
        loading: false,
        error: "",
        notificationStack: [
          ...state.notificationStack,
          { type: "green", msg: "Successful deletation" },
        ],
      };
    case types.PEOPLE_DELETE_BY_ID_FAILURE:
      return {
        loading: false,
        error: "Wystąpił błąd",
        notificationStack: [
          ...state.notificationStack,
          { type: "red", msg: "Unsuccesful deletation" },
        ],
      };

    //PEOPLE BY ID EDIT
    case types.PEOPLE_EDIT_BY_ID_REQUEST:
      return { ...state, loading: true };
    case types.PEOPLE_EDIT_BY_ID_SUCCESS:
      return {
        loading: false,
        error: "",
        notificationStack: [
          ...state.notificationStack,
          { type: "green", msg: "Successful edit" },
        ],
      };
    case types.PEOPLE_EDIT_BY_ID_FAILURE:
      return {
        loading: false,
        error: "Wystąpił błąd",
        notificationStack: [
          ...state.notificationStack,
          { type: "red", msg: "Unsuccesful edit" },
        ],
      };
    case "PEOPLE_NOTIFICATION_REMOVE":
      return {
        loading: false,
        error: "",
        notificationStack: state.notificationStack.filter(
          (x, index) => index !== action.payload
        ),
      };

    default:
      return state;
  }
};
