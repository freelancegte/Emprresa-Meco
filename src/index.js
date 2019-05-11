import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar/navbar';



ReactDOM.render(
    <Router>
        <NavigationBar />
        <Route path="/" exact component={App} />
        <Route path="/orden" component={App} />
        <Route path="/facturas" component={App} />
        <Route path="/factura/:id" component={App} />
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
