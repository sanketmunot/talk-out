import React, { Component } from 'react'
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'
class Thread extends Component {
    constructor(props) {
        super(props)
        this.state={
            thread_id : this.props.match.params.thread_id
        }
    }

    render() {
        return (
            <>
            <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>{this.state.thread_id}</BreadcrumbItem>
            </Breadcrumb>
            <p>{this.state.thread_id}</p>
            </>
        )
    }
}

export default Thread