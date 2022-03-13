import { createAction } from "redux-api-middleware";
import types from "./types";
import { schema, normalize } from "normalizr";

const personSchema = new schema.Entity("people");
const peopleSchema = new schema.Array(personSchema);

export const getPeopleList = () => {
  return createAction({
    endpoint: "/api/persons",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    types: [
      types.PEOPLE_LIST_REQUEST,
      {
        type: types.PEOPLE_LIST_SUCCESS,
        payload: async (action, state, res) => {
          const json = await res.json();
          const { entities } = normalize(json, peopleSchema);
          return entities;
        },
        meta: { actionType: types.PEOPLE_LIST_SUCCESS },
      },
      types.PEOPLE_LIST_FAILURE,
    ],
  });
};

export const deletePeopleByID = (id) => {
  return createAction({
    endpoint: `/api/persons/${id}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    types: [
      types.PEOPLE_DELETE_BY_ID_REQUEST,
      {
        type: types.PEOPLE_DELETE_BY_ID_SUCCESS,
        payload: async (action, state, res) => {
          const { entities } = normalize( { id: id}, personSchema);
          return entities;
        },
        meta: { actionType: types.PEOPLE_DELETE_BY_ID_SUCCESS },
      },
      types.PEOPLE_DELETE_BY_ID_FAILURE,
    ],
  });
};


export const createPeople = (newPerson) => {
    return createAction({
        endpoint: '/api/persons',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPerson),
        types: [
            types.PEOPLE_CREATE_REQUEST,
            {
              type: types.PEOPLE_CREATE_SUCCESS,
              payload: async (action, state, res) => {
                const json = await res.json();
                const { entities } = normalize(json, personSchema);
                return entities;
              },
              meta: { actionType: types.PEOPLE_CREATE_SUCCESS },
            },
            types.PEOPLE_CREATE_FAILURE
        ]
    })
}


export const editPeopleByID = (editedValues) => {
    return createAction({
        endpoint: `/api/persons/${editedValues.id}`,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedValues),
        types: [
            types.PEOPLE_EDIT_BY_ID_REQUEST,
            {
              type: types.PEOPLE_EDIT_BY_ID_SUCCESS,
              payload: async (action, state, res) => {
                const { entities } = normalize(editedValues, personSchema);
                return entities;
              },
              meta: { actionType: types.PEOPLE_EDIT_BY_ID_SUCCESS },
            },
            types.PEOPLE_EDIT_BY_ID_FAILURE
        ]
    })

}
