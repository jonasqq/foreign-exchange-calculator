import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import * as reducers from './reducers';
import epics from './epics';

const epicMiddleware = createEpicMiddleware();
const store = createStore(combineReducers(reducers), applyMiddleware(epicMiddleware));
epicMiddleware.run(epics);

export default store;
