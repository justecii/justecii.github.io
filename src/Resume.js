import React, {Component} from 'react';
import CardTest from './CardTest';
import {Col, Row} from 'react-materialize';

class Resume extends Component {
    render(){
        return (
            <div>
            <Row className='experience'>
                <Col s={12}>
                    <h2>Experience</h2>
                    <Row>
                        <Col s={4}>
                        <i class="fa fa-database fa-5x iconStyle" aria-hidden="true"></i>
                        <ul>
                            <li className='skills'>PostgreSQL</li>
                            <li className='skills'>Sequelize</li>
                            <li className='skills'>MongoDB</li>
                            <li className='skills'>Mongoose</li>
                        </ul>
                        </Col>
                        <Col s={4}>
                        <i class="fa fa-laptop fa-5x iconStyle" aria-hidden="true"></i>
                        <ul>
                            <li className='skills'>Javascript/jQuery</li>
                            <li className='skills'>ReactJS</li>
                            <li className='skills'>NodeJS</li>
                            <li className='skills'>Express</li>
                        </ul>
                        </Col>
                        <Col s={4}>
                        <i class="fa fa-code fa-5x iconStyle" aria-hidden="true"></i>
                        <ul>
                            <li className='skills'>Ruby on Rails</li>
                            <li className='skills'>Git</li>
                            <li className='skills'>Materialize/Bootstrap</li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='links'>
                <Col s={12} m={3}>
                    <h2>Links</h2>
                </Col>
                <Col s={12} m={9}>
                    <ul>
                        <li className='skillLink'><a href="img/resume.txt" download="Justen Cracraft">Download Resume TXT</a></li>
                        <li className='skillLink'><a href="img/resume.pdf" download="Justen Cracraft">Download Resume PDF</a></li>
                        <li className='skillLink'><a href="https://github.com/justecii" target="_blank">My Github</a></li>
                        <li className='skillLink'><a href="https://codepen.io/justecii/">My Codepen</a></li>
                    </ul>
                </Col>
            </Row>
            </div>
        )
    }
}

export default Resume