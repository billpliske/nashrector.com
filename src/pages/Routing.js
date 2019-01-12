//import libraries
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Thanks from './Thanks';
import Missing from './404';

class Routing extends Component {
    render() {
        return (
            <Route
                render={() => (
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/thanks" component={Thanks} />
                        />
                        <Route path="*" component={Missing} />
                    </Switch>
                )}
            />
        );
    }
}

export default Routing;
