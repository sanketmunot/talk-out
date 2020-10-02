import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Comments = function (props) {
    var x = props.comments

    if (x) {
        const addComment =
            <Card className='mt-3 ml-4 pr-2 pl-2 pt-2' color='warning'>
                <div className="form-group">
                    <textarea id='reply' className="form-control" rows="3" placeholder='Add Your Comment Below...' />
                    <div className='btn btn-primary mt-2' onClick={ () => {
                            var data = {
                                thread_id : props.thread_id,
                                reply: document.getElementById('reply').value,
                                index: x[x.length - 1].index+1,
                                replier: props.owner
                            }
                            
                            axios.post('http://localhost:9000/newreply', data)
                            alert('submitted please go to home')
                        }
                    }>Post!</div>
                </div>
            </Card>

        const com = x.map((c) => {
            return (

                <Card className='mt-2'>
                    <img className='rounded-circle mt-3 ml-2' width='20%' src={"http://api.adorable.io/avatars/200/" + c.index} />
                    <span>
                        <CardBody>
                            <CardTitle><h3>{c.replier}</h3></CardTitle>
                            <div className='row'>
                                <CardText className='col-8' >{c.reply}</CardText>
                                <i id={props.thread_id + c.index + 'u'} onClick={() => {
                                    var data = {
                                        thread_id: props.thread_id,
                                        index: c.index
                                    }
                                    axios.post('http://localhost:9000/upvote', data)
                                    document.getElementById(props.thread_id + c.index + 'u').innerHTML = parseInt(document.getElementById(props.thread_id + c.index + 'u').innerHTML) + 1
                                }}
                                    className="fa fa-thumbs-up col" style={{ fontSize: '150%', color: '#3eb489', cursor: 'pointer' }}>{c.upVote}</i>

                                <i id={props.thread_id + c.index + 'd'} onClick={() => {
                                    var data = {
                                        thread_id: props.thread_id,
                                        index: c.index
                                    }
                                    axios.post('http://localhost:9000/downvote', data).then(
                                        document.getElementById(props.thread_id + c.index + 'd').innerHTML = parseInt(document.getElementById(props.thread_id + c.index + 'd').innerHTML) + 1

                                    )
                                }}
                                    className="fa fa-thumbs-down col" style={{ fontSize: '150%', color: 'red' }}>{c.downVote}</i>
                            </div>
                        </CardBody>
                    </span>
                </Card>


            )
        })

        return (
            <div>
                {com}
                {addComment}
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}


class Thread extends Component {
    constructor(props) {
        super(props)

        this.state = {
            thread_id: this.props.match.params.thread_id,
            isLoggedIn: localStorage.getItem('isLoggedIn')
        }

    }


    componentDidMount() {
        var data = {
            thread_id: this.state.thread_id
        }
        axios.post('http://localhost:9000/thread', data).then((res) => {
            if (res) {

                this.setState({
                    title: res.data.result[0].title,
                    description: res.data.result[0].description,
                    doc: res.data.result[0].doc,
                    owner: res.data.result[0].owner,
                    comments: res.data.result[0].comments
                })

            }
        })
    }

    render() {
        return (
            <div className='container'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'> Home </Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.state.thread_id}</BreadcrumbItem>
                </Breadcrumb>

                <div className='row'>
                    <div className='col-sm-12 col-md-5  mt-3'>
                        <Card>
                            <CardImg top width="100%" src={"https://source.unsplash.com/500x400/?" + this.state.title} />
                            <CardBody>
                                <CardTitle><h3>{this.state.title}</h3></CardTitle>
                                <CardText>{this.state.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-sm-12 col-md-5 offset-md-1 mt-3'>
                        <Comments comments={this.state.comments} thread_id={this.state.thread_id}
                            owner={this.state.owner} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Thread