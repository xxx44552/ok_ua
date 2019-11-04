import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(()=> console.log('subscribe', store.getState()));



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));