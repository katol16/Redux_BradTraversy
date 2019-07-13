import React from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';


// To zakomentowane ponizej będzie w innym pliku
// import {createStore, applyMiddleware} from 'redux';

// createStore, przyjmuje  parametry
// createStore(reducer, [preloadedState], [enhancer])
//
// reducer - root reducer -> główny reducer, może być kombinacją wielu reducerów
// preloadedState - inital state
// enhancer - thirdparty compabilities, np. reduxDevTools
// Za pomocą poniższej lini, zadziałą nam aplikacja, ale lepiej to robić w osobnym pliku, to jest tylko przykład demonstracyjny
// const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <PostForm/>
          <Posts/>
        </div>
      </Provider>
  );
}

export default App;
