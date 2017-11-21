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
                        <p>I'm Justen. I have a passion for web development and problem solving. I'm a people person, but I like using logic to solve difficult problems, which is what drew me to web development. I love working on front-end frameworks like React but also really enjoy working with databases such as MongoDB or PostgreSQL. 
                            <br/>
                            My grandma says I'm nice and funny. If you don't believe her, contact me and I'll prove it. (But please don't be mean to my grandma.)
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