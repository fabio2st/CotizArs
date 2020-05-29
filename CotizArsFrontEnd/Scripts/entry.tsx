import * as React from 'react';
//import { render } from 'react-dom';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { moneda_reducers } from './redux-reducers';
import { Moneda } from './Moneda';

var Store = createStore(moneda_reducers, (window as any).ReduxInitialState, applyMiddleware(thunk));
//render(<Provider store={Store}><Moneda /></Provider>, document.querySelector('body'));
hydrate(<Provider store={Store}><Moneda /></Provider>, document.querySelector('#content'));