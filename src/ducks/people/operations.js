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
export const getPeopleList = () => {
    return createAction({
        endpoint: 'http://localhost:5000/api/persons',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.PEOPLE_LIST_REQUEST,
            types.PEOPLE_LIST_SUCCESS,
            types.PEOPLE_LIST_FAILURE
        ]
    })
}

// export const getPeopleByID = (id) => {
//     return createAction({
//         endpoint: `http://localhost:5000/api/persons/${id}`,
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         types: [
//             types.PEOPLE_FETCH_BY_ID_REQUEST,
//             types.PEOPLE_FETCH_BY_ID_SUCCESS,
//             types.PEOPLE_FETCH_BY_ID_FAILURE
//         ]
//     })
// }


export const createPeople = (newPerson) => {
    return createAction({
        endpoint: 'http://localhost:5000/api/persons',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPerson),
        types: [
            types.PEOPLE_CREATE_REQUEST,
            types.PEOPLE_CREATE_SUCCESS,
            types.PEOPLE_CREATE_FAILURE
        ]
    })
}


export const deletePeopleByID = (id) => {
    return createAction({
        endpoint: `http://localhost:5000/api/persons/${id}`,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.PEOPLE_DELETE_BY_ID_REQUEST,
            { 
                type: types.PEOPLE_DELETE_BY_ID_SUCCESS,
                payload: id
            },
            types.PEOPLE_DELETE_BY_ID_FAILURE
        ]
    })
    
}


export const editPeopleByID = (editedValues) => {
    return createAction({
        endpoint: `http://localhost:5000/api/persons/${editedValues.id}`,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedValues),
        types: [
            types.PEOPLE_EDIT_BY_ID_REQUEST,
            {
                type: types.PEOPLE_EDIT_BY_ID_SUCCESS,
                payload: editedValues
            },
            types.PEOPLE_EDIT_BY_ID_FAILURE
        ]
    })
    
}
