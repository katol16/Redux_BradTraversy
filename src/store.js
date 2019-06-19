import {createStore, applyMiddleware, compose} from 'redux';
// poniżej middleware
import thunk from 'redux-thunk';
// importujemy rootReducer
import rootReducer from './reducers';

const initialState = {};

// middleware bedziemy trzymac w tablic, w razie jakby było ich więcej
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

// Info dotyczące store:
    // To zakomentowane ponizej będzie w innym pliku
    // import {createStore, applyMiddleware} from 'redux';

    // createStroe, przyjmuje  parametry
    // createStore(reducer, [preloadedState], [enhancer])
    //
    // reducer - root reducer -> główny reducer, może być kombinacją wielu reducerów
    // preloadedState - inital state
    // enhancer - thirdparty compabilities, np. reduxDevTools -> masz to na argue na developerskiej wersji i w tym przykłądzie, chodzi o to: compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOLS_EXTENSION__())
    // Za pomocą poniższej lini, zadziałą nam apliakcja, ale lepiej to robić w osobnym pliku, to jest tylko przykład demonstracyjny
    // const store = createStore(() => [], {}, applyMiddleware());