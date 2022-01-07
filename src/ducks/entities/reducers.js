import peopleTypes from "../people/types";
import moviesTypes from "../movies/types";
import actorsTypes from "../actors/types";

const allEntities = ["people", "movies", "actors"];

const defaultState = allEntities.reduce(
  (acc, entity) => ({
    ...acc,
    [entity]: {
      byId: {},
      allIds: [],
    },
  }),
  {}
);

const entityReducer = (entity, state = { allIds: [], byId: {} }, action) => {
  const actionEntities = action.payload[entity];
  const { actionType } = action.meta;

  switch (actionType) {
    //PEOPLE LIST
    case peopleTypes.PEOPLE_LIST_SUCCESS:
      return {
        byId: {
          ...Object.keys(actionEntities).reduce(
            (acc, id) => ({
              ...acc,
              [id]: {
                ...state.byId[id],
                ...actionEntities[id],
              },
            }),
            {}
          ),
        },
        allIds: Object.keys(actionEntities),
      };

    // PEOPLE ADD
    case peopleTypes.PEOPLE_CREATE_SUCCESS:
      return {
        byId: {
          ...state.byId,
          ...actionEntities,
        },
        allIds: [...state.allIds, ...Object.keys(actionEntities)],
      };

    // PEOPLE EDIT
    case peopleTypes.PEOPLE_EDIT_BY_ID_SUCCESS:
      return {
        byId: {
          ...state.byId,
          ...action.payload.people,
        },
        allIds: state.allIds,
      };

    //PEOPLE DELETE
    case peopleTypes.PEOPLE_DELETE_BY_ID_SUCCESS:
      return {
        byId: Object.fromEntries(
          Object.entries(state.byId).filter(
            ([key]) => !key.includes(Object.keys(action.payload.people)[0])
          )
        ),
        allIds: state.allIds.filter(
          (x) => parseInt(x) !== parseInt(Object.keys(action.payload.people)[0])
        ),
      };

    //MOVIES LIST
    case moviesTypes.MOVIES_LIST_SUCCESS:
      return {
        byId: {
          ...Object.keys(actionEntities).reduce(
            (acc, id) => ({
              ...acc,
              [id]: {
                ...state.byId[id],
                ...actionEntities[id],
              },
            }),
            {}
          ),
        },
        allIds: Object.keys(actionEntities),
      };

    // MOVIE ADD
    case moviesTypes.MOVIES_CREATE_SUCCESS:
      return {
        byId: {
          ...state.byId,
          ...actionEntities,
        },
        allIds: [...state.allIds, ...Object.keys(actionEntities)],
      };

    // MOVIE EDIT
    case moviesTypes.MOVIES_EDIT_BY_ID_SUCCESS:
      return {
        byId: {
          ...state.byId,
          ...action.payload.movies,
        },
        allIds: state.allIds,
      };

    //MOVIE DELETE
    case moviesTypes.MOVIES_DELETE_BY_ID_SUCCESS:
      return {
        byId: Object.fromEntries(
          Object.entries(state.byId).filter(
            ([key]) => !key.includes(Object.keys(action.payload.movies)[0])
          )
        ),
        allIds: state.allIds.filter(
          (x) => parseInt(x) !== parseInt(Object.keys(action.payload.movies)[0])
        ),
      };

    //MOVIE CHANGE DIR
    case moviesTypes.MOVIES_CHANGE_DIR_SUCCESS:
      return {
        byId: {
          ...state.byId,
          [Object.keys(action.payload.movies)[0]]: {
            ...state.byId[Object.keys(action.payload.movies)[0]],
            director_id:
              parseInt(action.payload.movies[Object.keys(action.payload.movies)[0]]
              .newDir),
          },
        },
        allIds: state.allIds
      };

    //ACTORS LIST
    case actorsTypes.ACTORS_LIST_SUCCESS:
      return {
        byId: {
          ...Object.keys(actionEntities).reduce(
            (acc, id) => ({
              ...acc,
              [id]: {
                ...state.byId[id],
                ...actionEntities[id],
              },
            }),
            {}
          ),
        },
        allIds: Object.keys(actionEntities),
      };

    // ACTOR ADD
    case actorsTypes.ACTORS_ADD_ACTOR_SUCCESS:
      return {
        byId: {
          ...state.byId,
          ...actionEntities,
        },
        allIds: [...state.allIds, ...Object.keys(actionEntities)],
      };

    //ACTOR DEL
    //{ actors: { 31: { id: 31, personId: 9}}}
    case actorsTypes.ACTORS_ACTOR_DEL_SUCCESS:
      let filterd = Object.fromEntries(
        Object.entries(state.byId).filter(
          ([key, value]) =>
            !(
              value.movie_id === parseInt(Object.keys(actionEntities)[0]) &&
              value.person_id ===
                parseInt(
                  actionEntities[Object.keys(actionEntities)[0]].personId
                )
            )
        )
      );
      console.log("New", filterd);
      return {
        byId: filterd,
        allIds: Object.keys(filterd),
      };

    default:
      return state;
    // console.log('Error action not recognized');
  }
};

export const entities = (state = defaultState, action) => {
  if (!action.meta || !action.meta.actionType) return state;

  return {
    ...state,
    ...Object.keys(action.payload).reduce(
      (acc, entity) => ({
        ...acc,
        [entity]: entityReducer(entity, state[entity], action),
      }),
      {}
    ),
  };
};
