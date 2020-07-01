import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { THREADS } from '../shared/threads'
class Home extends Component {
    componentDidMount() {
        console.log('mounted')

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                {
                    THREADS.map((thread) => {

                        return (
                        <Card className='col-6 col-md-5 offset-1 mt-3'>
                            <CardImg top width="100%" className='mt-1' src="https://source.unsplash.com/500x400/?mental,depression,alone,positivity"/>
                            <CardBody>
                                <CardTitle>{thread.title}</CardTitle>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        )

                    })
                }

                
                </div>
            </div >
        )
    }
}

export default Home;