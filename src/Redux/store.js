/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
