import React, { Component } from 'react';
import './App.css';
import Scroll from 'react-scroll';
import About from './About';
import Work from './Work';
import Resume from './Resume';
import Contact from './Contact';


let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

class App extends Component {
  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <nav>
            <div className="nav-wrapper">
              <ul className="right hide-on-med-and-down">
                <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                  About
                </Link></li>
                <li><Link activeClass="active" to="work" spy={true} smooth={true} duration={500}>
                  Work
                </Link></li>
                <li><Link activeClass="active" className="test6" to="resume" spy={true} smooth={true} duration={500}>
                  Skills
                </Link></li>
                <li><Link activeClass="active"  to="contact" spy={true} smooth={true} duration={500} >
                  Contact
                </Link></li>
                <li><a href="/img/resume.pdf" target="_blank" download="Justen Cracraft">Resume</a></li>
              </ul>
            </div>
          </nav>
        </div>
        
          <Element name="about" className="element page1">
            <About />
          </Element>

          <Element name="work" className="element page2">
            <Work />
          </Element>

          <Element name="resume" className="element page3">
            <Resume />
          </Element>

          <Element name="contact" className="element page4">
            <Contact />
          </Element>
        
      </div>
    );
  }
}

export default App;
