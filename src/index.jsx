import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';
import Home from './pages/Home.jsx'
import About from './components/common/About.jsx'
import {hashHistory} from "react-router";
import { Provider } from 'react-redux';
import store from './store.jsx';

render(
    <Provider store={ store }>
        <Router history={hashHistory}>
            <Route component={Home}>
                <Route path="/" component={Home}/>
                {/*<Route path="/cars" component={Car} data={data}/>*/}
                {/*<Route path="/cars/:id" component={CarDetail} data={data}/>*/}
                <Route path="/about" component={About}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
);