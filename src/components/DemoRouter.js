import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {About, Home, Welcome, NotFound, Person} from "./Site Components"
import Header from './Header';

const DemoRouter = () => {
    return (
        <div className = "container">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path = "/" component={Welcome}/>
                    <Route path = "/home" component={Home}/>
                    <Route path = "/person" component={Person}/>
                    <Route path = "/about" component={About}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    );
};

export default DemoRouter;