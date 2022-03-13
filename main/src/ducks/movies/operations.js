import { createAction } from 'redux-api-middleware';
import types from './types';
import { schema, normalize} from 'normalizr';

const movieSchema = new schema.Entity('movies');
const moviesSchema = new schema.Array(movieSchema);


export const getMoviesList = () => {
    return createAction({
        endpoint: 'http://localhost:5000/api/movies',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.MOVIES_LIST_REQUEST,
            {
                type: types.MOVIES_LIST_SUCCESS,
                payload: async (action, state, res) => {
                    const json = await res.json();
                    const { entities } = normalize(json, moviesSchema)
                    return entities;
                },
                meta: { actionType: types.MOVIES_LIST_SUCCESS }
           },
            types.MOVIES_LIST_FAILURE
        ]
    })
}



export const createMovies = (newMovie) => {
    return createAction({
        endpoint: 'http://localhost:5000/api/movies',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMovie),
        types: [
            types.MOVIES_CREATE_REQUEST,
            {
              type: types.MOVIES_CREATE_SUCCESS,
              payload: async (action, state, res) => {
                const json = await res.json();
                const { entities } = normalize(json, movieSchema);
                return entities;
              },
              meta: { actionType: types.MOVIES_CREATE_SUCCESS },
            },
            types.MOVIES_CREATE_FAILURE
        ]
    })
}

export const deleteMoviesByID = (id) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        types: [
          types.MOVIES_DELETE_BY_ID_REQUEST,
          {
            type: types.MOVIES_DELETE_BY_ID_SUCCESS,
            payload: async (action, state, res) => {
              const { entities } = normalize( { id: id}, movieSchema);
              return entities;
            },
            meta: { actionType: types.MOVIES_DELETE_BY_ID_SUCCESS },
          },
          types.MOVIES_DELETE_BY_ID_FAILURE,
        ],
      });
    
}


export const editMoviesByID = (editedValues) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${editedValues.id}`,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedValues),
        types: [
            types.MOVIES_EDIT_BY_ID_REQUEST,
            {
              type: types.MOVIES_EDIT_BY_ID_SUCCESS,
              payload: async (action, state, res) => {
                const { entities } = normalize(editedValues, movieSchema);
                return entities;
              },
              meta: { actionType: types.MOVIES_EDIT_BY_ID_SUCCESS },
            },
            types.MOVIES_EDIT_BY_ID_FAILURE
        ]
    })
}

export const changeDirector = (newDir, id) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${id}/director`,
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDir),
        types: [
            types.MOVIES_CHANGE_DIR_REQUEST,
            {
                type: types.MOVIES_CHANGE_DIR_SUCCESS,
                payload: async (action, state, res) => {
                  const { entities } = normalize({ id: id, newDir: newDir.id}, movieSchema);
                  return entities;
                },
                meta: { actionType: types.MOVIES_CHANGE_DIR_SUCCESS },
              },
            types.MOVIES_CHANGE_DIR_FAILURE
        ]
    })
    
}
