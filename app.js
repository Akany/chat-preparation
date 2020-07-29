import React from "react";
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';

import {store} from './store';
import {App} from './components/app';

const holder = document.createElement('div');
const appProvider = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(appProvider, holder);

document.body.appendChild(holder);