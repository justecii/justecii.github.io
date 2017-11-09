import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';

class About extends Component {
    render(){
        return (
            <div>
                <h1 className="title">Justen Cracraft</h1>
                <Row>
                    <Col m={4}>
                        <img className="responsive" src="img/me.jpg" alt="my mug" className="myPic" />
                    </Col>
                    <Col m={8}>
                        <h3>Full Stack Web Developer from Seattle WA</h3>
                        <p>The words that describe me will go here. They will let people know how cool i am and why they should hire me!
                            <br/>
                            I am a cool guy and would love to work with you!
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default About