import React, {Component} from 'react';
import {Tabs, Tab, Card, CardTitle, Col, Row } from 'react-materialize';
import Test from './Test';
import CardTest from './CardTest';

class Work extends Component {
    render(){
        return (
            <div>
                <h2>My Work</h2>
                <Tabs className="back">
                    <Tab title="WYM" active>
                        <Row>
                            <Col m={9} s={12}>                               
                                <img src="/img/wym.png" alt="testing" className="screenshots" />
                            </Col>
                            <Col m={3} s={12} className="description">
                                <a href="https://wymwatson.herokuapp.com/" target="_blank" className="linkTitle">WYM</a><a href="https://github.com/justecii/project-3" target="_blank" className="linkTitle"> <i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                                <p>Using IBM's Watson, developed an App to help people deteremine the tone that their written communication conveys. Can be used for emails, job applications and even social media posts</p>
                                <h5>Tech Used:</h5>
                                <p>MongoDB, Express, React.js, Node.js, Materialize, IBM's Watson API</p>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab title="Star Wars Slots">
                        <Row>
                            <Col m={9} s={12}>
                                <img src="/img/slot_game.gif" alt="testing" className="screenshots" />
                            </Col>
                            <Col m={3} s={12} className="description">
                                <a href="https://justecii.github.io/project-1-game/" target="_blank" className="linkTitle" >Star Wars Slots</a><a href="https://github.com/justecii/project-1-game" target="_blank" className="linkTitle"> <i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                                <p>My first ever attempt at a Javascript game, combines my favorite movie franchise with my grandmother's favorite hobby
                                    <br/>
                                    <br/>
                                    <span className="small">The content of this project is for entertainment value only. All rights and license material belong to LucasFilms and Disney. I just made a fun game.</span>
                                </p>
                                <h5>Tech Used:</h5>
                                <p>HTML, CSS, Javascript, jQuery</p>
                                
                            </Col>
                        </Row>
                    </Tab>
                    <Tab title="Treasure Cruiser">
                        <Row>
                            <Col m={9} s={12}>
                                <img src="/img/treasure_cruiser.png" alt="testing"className="screenshots" />
                            </Col>
                            <Col m={3} s={12} className="description">
                                <a href="https://treasurecruiser.herokuapp.com/" target="_blank" className="linkTitle">Treasure Cruiser</a><a href="https://github.com/justecii/treasure-cruiser" target="_blank" className="linkTitle"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                                <p>A Magic the Gathering trading app. Users store cards in their collection they would like to trade and use card pricing data to make fair trades</p>
                                <h5>Tech Used:</h5>
                                <p>PostgreSQL, Sequelize, Node.js, Express, jQuery, Bootstrap</p>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
                
            </div>
        )
    }
}

export default Work