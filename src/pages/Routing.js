// import libraries
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Thanks from './Thanks';
import Ballgrid from './Ballgrid';
import Tennis from './Tennis';
import Soccer from './Soccer';
import Golf from './Golf';
import Basketball from './Basketball';
import Football from './Football';
import Baseball from './Baseball';
import Invitation from './Invitation';
import Missing from './404';

class Routing extends Component {
    render() {
        return (
            <Route
                render={() => (
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/menu" component={Ballgrid} />
                        <Route exact path="/tennis" component={Tennis} />
                        <Route exact path="/soccer" component={Soccer} />
                        <Route exact path="/golf" component={Golf} />
                        <Route exact path="/basketball" component={Basketball} />
                        <Route exact path="/football" component={Football} />
                        <Route exact path="/baseball" component={Baseball} />
                        <Route exact path="/invitation" component={Invitation} />
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
