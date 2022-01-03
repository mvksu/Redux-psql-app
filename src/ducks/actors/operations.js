import { createAction } from 'redux-api-middleware';
import types from './types';


export const getActorsList = () => {
    return createAction({
        endpoint: `http://localhost:5000/api/actors`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.ACTORS_LIST_REQUEST,
            types.ACTORS_LIST_SUCCESS,
            types.ACTORS_LIST_FAILURE
        ]
    })
    
}

export const addActor = (movieId, actor) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${movieId}/actors`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(actor),
        types: [
            types.ACTORS_ADD_ACTOR_REQUEST,
            { 
                type: types.ACTORS_ADD_ACTOR_SUCCESS,
                payload: { movieId, actor}
            },
            types.ACTORS_ADD_ACTOR_FAILURE
        ]
    })   
}


export const deleteActor = (movieId, personId) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${movieId}/actors/${personId}`,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.ACTORS_ACTOR_DEL_REQUEST,
            { 
                type: types.ACTORS_ACTOR_DEL_SUCCESS,
                payload: { movieId, personId}
            },
            types.ACTORS_ACTOR_DEL_FAILURE
        ]
    })
}