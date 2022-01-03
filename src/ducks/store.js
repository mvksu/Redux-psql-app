import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import logger from 'redux-logger';
import { createMiddleware } from 'redux-api-middleware';
import { peopleReducer } from "./people/reducers"
import { moviesReducer } from "./movies/reducers"
import { actorsReducer } from "./actors/reducers"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({people: peopleReducer, movies: moviesReducer, actors: actorsReducer
});

const store = createStore(combinedReducers, 
  composeEnhancers(applyMiddleware(thunk, createMiddleware(), logger)),
  );


  export default store;