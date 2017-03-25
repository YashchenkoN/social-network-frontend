import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';
import { Provider } from 'react-redux';
import store from './store.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/common/Navbar.jsx';

injectTapEventPlugin();

render(
    <Provider store={ store }>
        <MuiThemeProvider>
            <Navbar/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('container')
);