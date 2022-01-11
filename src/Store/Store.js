import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../Reducers/rootReducer';
import { watcherSaga } from '../Sagas/WatcherSaga';

const defaultStore = {
    users: [],
    posts: [],
    comments: [],
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

let store = createStore(rootReducer, defaultStore, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga); //this runs the watcher function at start of project

export default store;