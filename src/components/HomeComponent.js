import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, Button, Alert } from 'reactstrap';
import { THREADS } from '../shared/threads'
import { Link } from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props)
        this.functionThreadToggler = this.functionThreadToggler.bind(this)
    }
    componentDidMount() {
        console.log('mounted')

    }

    functionThreadToggler(thread_id) {
        document.getElementById(thread_id).isOpen = true;
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <div className='container'>
                    <div className='row'>
                        {
                            THREADS.map((thread) => {

                                return (
                                    <div>

                                        <Card className='col-sm-12 col-md-11  mt-3'>
                                            <CardImg top width="100%" className='mt-1' src={"https://source.unsplash.com/500x400/?" + thread.title} />
                                            <CardBody>
                                                <CardTitle>{thread.title}</CardTitle>
                                                <Link to={'/threadview/' + thread.thread_id}>
                                                <Button>Button</Button>
                                                </Link>
                                            </CardBody>
                                        </Card>

                                    </div>
                                )

                            })
                        }


                    </div>
                </div >
            )
        }
        else {
            return (
                <div className='container'>
                    <Alert color="danger">
                    Login to view and comment on threads
                    </Alert>
                    <div className='row'>
                        {
                            THREADS.map((thread) => {

                                return (
                                    <div>

                                        <Card className='col-sm-12 col-md-11  mt-3'>
                                            <CardImg top width="100%" className='mt-1' src={"https://source.unsplash.com/500x400/?" + thread.title} />
                                            <CardBody>
                                                <CardTitle>{thread.title}</CardTitle>
                                            </CardBody>
                                        </Card>

                                    </div>
                                )

                            })
                        }


                    </div>
                </div >
            )
        }
    }
}

export default Home;