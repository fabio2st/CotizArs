"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
//import { render } from 'react-dom';
var react_dom_1 = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var redux_thunk_1 = require("redux-thunk");
var redux_reducers_1 = require("./redux-reducers");
var Moneda_1 = require("./Moneda");
var Store = redux_1.createStore(redux_reducers_1.moneda_reducers, window.ReduxInitialState, redux_1.applyMiddleware(redux_thunk_1.default));
//render(<Provider store={Store}><Moneda /></Provider>, document.querySelector('body'));
react_dom_1.hydrate(React.createElement(react_redux_1.Provider, { store: Store },
    React.createElement(Moneda_1.Moneda, null)), document.querySelector('#content'));
//# sourceMappingURL=entry.js.map