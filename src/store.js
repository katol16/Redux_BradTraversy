import {createStore, applyMiddleware} from 'redux';
// poniżej middleware
import thunk from 'redux-thunk';
// importujemy rootReducer
import rootReducer from './reducers';

const initialState = {};

// middleware bedziemy trzymac w tablic, w razie jakby było ich więcej
const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;