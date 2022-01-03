import { createAction } from 'redux-api-middleware';
import types from './types';

/*
[
    {
        id: 'xyz1',
        firstName: 'Tomasz'
    },
    {
        id: 'xyy2',
        firstName: "Natalia"
    },
    {
        id: 'zz3',
        firstName: 'Paweł'
    }
]

{
    ids: [ 'xyz1', 'xyy2', 'zz3' ],
    byId: {
        'xyz1': {
            id: 'xyz1',
            firstName: 'Tomasz'
        },
        'xyy2': {
            id: 'xyy2',
            firstName: 'Natalia
        },
        'zz3': {
            id: 'zz3',
            firstName: 'Paweł'
        }
    }
}

users.filter(user => user.id === id);


{
    byId: {
        1: {

        },
        2: {

        }
    }
    ids: [
        1, 2, 3, 4, 5, 6, 7, 8
     ]
}






*/
export const getMoviesList = () => {
    return createAction({
        endpoint: 'http://localhost:5000/api/movies',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.MOVIES_LIST_REQUEST,
            types.MOVIES_LIST_SUCCESS,
            types.MOVIES_LIST_FAILURE
        ]
    })
}

export const getMoviesByID = (id) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${id}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.MOVIES_BY_ID_REQUEST,
            types.MOVIES_BY_ID_SUCCESS,
            types.MOVIES_BY_ID_FAILURE
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
            types.MOVIES_CREATE_SUCCESS,
            types.MOVIES_CREATE_FAILURE
        ]
    })
}


export const deleteMoviesByID = (id) => {
    return createAction({
        endpoint: `http://localhost:5000/api/movies/${id}`,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.MOVIES_DELETE_BY_ID_REQUEST,
            { 
                type: types.MOVIES_DELETE_BY_ID_SUCCESS,
                payload: id
            },
            types.MOVIES_DELETE_BY_ID_FAILURE
        ]
    })
    
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
            types.MOVIES_EDIT_BY_ID_SUCCESS,
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
                payload: { newDir, id}
            },
            types.MOVIES_CHANGE_DIR_FAILURE
        ]
    })
    
}
