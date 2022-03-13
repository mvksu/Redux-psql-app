import { createAction } from 'redux-api-middleware';
import types from './types';
import { schema, normalize} from 'normalizr';

const actorSchema = new schema.Entity('actors');
const actorsSchema = new schema.Array(actorSchema);


export const getActorsList = () => {
    return createAction({
        endpoint: `/api/actors`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.ACTORS_LIST_REQUEST,
            {
                type: types.ACTORS_LIST_SUCCESS,
                payload: async (action, state, res) => {
                    const json = await res.json();
                    const { entities } = normalize(json, actorsSchema)
                    return entities;
                },
                meta: { actionType: types.ACTORS_LIST_SUCCESS }
           },
            types.ACTORS_LIST_FAILURE
        ]
    })
    
}

export const addActor = (movieId, actor) => {
    return createAction({
        endpoint: `/api/movies/${movieId}/actors`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(actor),
        types: [
            types.ACTORS_ADD_ACTOR_REQUEST,
            {
                type: types.ACTORS_ADD_ACTOR_SUCCESS,
                payload: async (action, state, res) => {
                    const json = await res.json();
                    const { entities } = normalize(json, actorSchema)
                    return entities;
                },
                meta: { actionType: types.ACTORS_ADD_ACTOR_SUCCESS }
           },
            types.ACTORS_ADD_ACTOR_FAILURE
        ]
    })   
}


export const deleteActor = (movieId, personId) => {
    return createAction({
        endpoint: `/api/movies/${movieId}/actors/${personId}`,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.ACTORS_ACTOR_DEL_REQUEST,
            {
                type: types.ACTORS_ACTOR_DEL_SUCCESS,
                payload: async (action, state, res) => {
                    const { entities } = normalize({ id: movieId, personId: personId}, actorSchema)
                    return entities;
                },
                meta: { actionType: types.ACTORS_ACTOR_DEL_SUCCESS }
           },
            types.ACTORS_ACTOR_DEL_FAILURE
        ]
    })
}