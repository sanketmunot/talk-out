import React, { Component } from 'react'

class Home extends Component{
    componentDidMount(){
        console.log('mounted')
        
    }

    render(){
    return(
        <div className='container'>
            this is home
        </div>
    )}
}

export default Home;