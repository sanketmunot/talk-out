import React, { Component } from 'react';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './AboutComponent'
import Register from './RegisterComponent'
import Thread from './ThreadComponent'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            threadView: null
        }
        this.changeLoginStatus = this.changeLoginStatus.bind(this)
    }

    changeLoginStatus(val) {
        this.setState({
            isLoggedIn: val
        })
    }


    render() {

        return (
            <div>

                <Header isLoggedIn={this.state.isLoggedIn} changeLoginStatus={this.changeLoginStatus} />
                <Switch>
                    <Route path='/home' component={()=>{return(<Home isLoggedIn={this.state.isLoggedIn}/>)}} />
                    <Route path='/aboutus' component={About} />
                    <Route path='/register' component={Register} />
                    <Route exact path='/threadview/:thread_id' component={Thread} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
