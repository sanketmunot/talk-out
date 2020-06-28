import React, { Component } from 'react';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './AboutComponent'
import Register from './RegisterComponent'
class Main extends Component {


    render() {

        return (
            <div>

                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/aboutus' component = {About} />
                    <Route path='/register' component = {Register} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
