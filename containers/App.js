import React, { Component } from 'react';
import { BrowserRouter, Route, RefreshRoute, Switch, Link } from 'react-router-dom';
import Test1 from "./Test1"
import Test2 from "./Test2"
import Test3 from "./Test3"
import '../assets/fonts/fontface.css'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/form" component={Test1} />
                    <Route path="/register" component={Test2} />
                    <Route path="/lineNotify" component={Test3} />
                </Switch>
            </BrowserRouter>
        )
    }

}

export default App