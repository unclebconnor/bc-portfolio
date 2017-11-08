import React, { Component } from 'react';
import colorfulTile from './img/colorfulTile.png'
import './App.css';

class Home extends Component {
  render() {
    return (
    	<div className="homeWrapper container">
      	<div className="row thickRow flexCenter">
          <div className="col-md-8 col-xs-12 textArea flexCenter">
            <div className="inlineBlock">
              <h2 >Brian Connor</h2>
              <h3 >Builder of Full-Stack Web-things</h3>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 ">
            <div className="picOfMe">
              <img src={colorfulTile} className="img-responsive" alt="We are the music-makers"/>
            </div>
          </div>
      	</div>
        <div className="row thickRow ">
          <div className="flip-container col-md-4 col-xs-12">
            <div className="flipper">
              <div className="front myBrand textArea flexCenter">
                {/*<!-- building icon -->*/}
                <h4>Builder of Things</h4>
              </div>
              <div className="back myBrand textArea flexCenter">
                <p>My work is sturdy and clean.</p>
                <p>Regularly learning new tools & techniques keeps me engaged in my craft</p>
              </div>
            </div>
          </div>
          <div className="flip-container col-md-4 col-xs-12">
            <div className="flipper">
              <div className="front myBrand textArea flexCenter">
                {/*<!-- building icon -->*/}
                <h4>Problem Solver</h4>
              </div>
              <div className="back myBrand textArea flexCenter">
                <p>I'm interested in human behavior and pay attention to the nuances of how people work</p>
                <p>I help people simplify & streamline to make room for critical thinking and authentic interaction</p>
              </div>
            </div>
          </div>
          <div className="flip-container col-md-4 col-xs-12">
            <div className="flipper">
              <div className="front myBrand textArea flexCenter">
                {/*<!-- building icon -->*/}
                <h4>Human</h4>
              </div>
              <div className="back myBrand textArea flexCenter">
                <div>  
                  <p>I bike commute for exercise, to save the planet, and so I can park right at the door</p>
                  <p>I never turn down a hike that involves a waterfall</p>
                  <p>I am unafraid to put an egg on any dish</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-container col-md-4 col-xs-12">
            <div className="flipper">
              <div className="front myBrand textArea flexCenter">
                {/*<!-- building icon -->*/}
                <h4>You</h4>
              </div>
              <div className="back myBrand textArea flexCenter">
                <div>  
                  <p>You're not just in it for the money</p>
                  <p>You value a positive community and do your best to foster one</p>
                  <p>You actively create safe spaces for your employees and customers</p>
                  <p>You don't do the same thing as everyone else (unless they're copying you)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      	<div className="row thinRow">
          <div className="col-sm-3 col-xs-6">
            <div className="goodyBoxes">GA</div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className="goodyBoxes">Linkedin</div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className="goodyBoxes">Github</div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className="goodyBoxes">Resume</div>
          </div>
      	</div>
      </div>
    );
  }
}

export default Home;
