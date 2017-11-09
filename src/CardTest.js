import React, {Component} from 'react';
import {Card, CardTitle, Col, Row } from 'react-materialize'

class ClassTest extends Component {
    render(){
        return (
            <div> 
                <Card className='darken-1' textClassName='white-text' title='Card title'>
                    <Row>
                        <Col m={6}>
                            <img src="img/aj-app.png" alt="aj app" className="screenshots" />
                        </Col>
                        <Col m={6}>
                        <p>Words going here</p>
                    </Col>
                    </Row>
                </Card>
            </div>
            
        )
    }
}

export default ClassTest