import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from '../components/Home';
import {About} from '../components/About';
import {Contact} from '../components/Contact';




class Landing extends Component {
    render() {
        return (
            <React.Frangment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </Router>

            </React.Frangment>
        )
    }
}

export default Landing;

