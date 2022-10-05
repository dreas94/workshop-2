import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {About, Home, Welcome, NotFound, Person} from "./Site Components"
import PersonDetails from './PersonDetails';
import CrudDemo from './CrudDemo';
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
                    <Route path = "/crud" component={CrudDemo}/>
                    <Route path = "/persondetails/:id" component={PersonDetails}/>
                    <Route path = "/about" component={About}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    );
};

export default DemoRouter;