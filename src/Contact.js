import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';

class Contact extends Component {
    render(){
        return (
            <div>
                <h2 class="title">Cash me Outside Tho'</h2>
                <Row className="contactRow">
                    <Col s={6} className="linkedin">
                        <a href="https://www.linkedin.com/in/justen-cracraft/" target="_blank"><i class="fa fa-linkedin fa-5x" aria-hidden="true"></i></a>
                    </Col>
                    <Col s={6} className="github">
                        <a href="https://github.com/justecii" target="_blank"><i class="fa fa-github fa-5x" aria-hidden="true"></i></a>
                    </Col>
                </Row>
                <Row className="contactRow">
                    <Col s={6} className="email">
                        <a href="mailto:justecii@gmail.com"><i class="fa fa-envelope-o fa-5x" aria-hidden="true"></i></a>
                    </Col>
                    <Col s={6} className="twitter">
                        <a href="#"><i class="fa fa-twitter fa-5x" aria-hidden="true"></i></a>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Contact