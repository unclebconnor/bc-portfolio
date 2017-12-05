import React, { Component } from 'react';
import colorfulTile from './img/colorfulTile.png';
import GA from './img/gaIcon.png';
import Github from './img/github.png';
import Linkedin from './img/linkedinIcon.png';
import Toolbox from './img/toolbox.png';
import './App.css';

class Home extends Component {
  render() {
    return (
    	<div className="homeWrapper container">
        <div className="iNeedSomeSpace"></div>
      	<div className="row">
          <div className="col-sm-6 col-xs-12 pull-right ctr">
            <div className="picOfMe">
              <img src={colorfulTile} className="img-responsive picOfMe" alt="We are the music-makers"/>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12 textArea ctr">
            <div>
              <div className="iNeedSomeSpace"></div>
              <div className="iNeedSomeSpace"></div>
              <h2 >Brian Connor</h2>
              <h4>Builder of Full-Stack Web-things</h4>
              <div className="row ctr">
                  <a 
                    className="goodyBoxes bkgGreen" 
                    href="https://github.com/unclebconnor"
                    target="_blank"
                  >
                    <img src={Github} className="img-responsive" alt="Link to My Github"/>
                  </a>
                  <a 
                    className="goodyBoxes bkgBlue"
                    href="https://www.linkedin.com/in/unclebconnor/"
                    target="_blank"
                  >
                    <img src={Linkedin} className="img-responsive" alt="Link to My Linkedin"/>
                  </a>
                  <a 
                    className="goodyBoxes bkgRed"
                    href="https://profiles.generalassemb.ly/unclebconnor"
                    target="_blank"
                  >
                    <img src={GA} className="img-responsive" alt="Link to My General Assembly Profile"/>
                  </a>
              </div>
            </div>
          </div>
      	</div>
        <div className="iNeedSomeSpace hidden-xs"></div>
        <div className="row ctr">
          <div className="col-sm-4 col-xs-12 ctr">
            <div className="flip-container">
              <div className="flipper">
                <div className="front myBrand textArea flexCenter">
                  <h4>Builder of Things</h4>
                </div>
                <div className="back myBrand textArea flexLeftCenter">
                  <div>
                    <p>I focus on making my work sturdy and clean</p>
                    <p>Regularly building, and learning new tools in the process, keeps me engaged in my craft</p>
                  </div>                
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 ctr">
            <div className="flip-container">            
              <div className="flipper">
                <div className="front myBrand textArea flexCenter">
                  <h4>Problem Solver</h4>
                </div>
                <div className="back myBrand textArea flexLeftCenter">
                  <div>
                    <p>I love to solve puzzles and engage in complex problems</p>
                    <p>I am fascinated by human behavior and how it relates to design on the web</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 ctr">
            <div className="flip-container"> 
              <div className="flipper">
                <div className="front myBrand textArea flexCenter">
                  <h4>Human</h4>
                </div>
                <div className="back myBrand textArea flexLeftCenter">
                  <div>  
                    <p>I bike commute for exercise and the parking benefits</p>
                    <p>I never turn down a hike that involves a waterfall</p>
                    <p>I am unafraid to put an egg on any dish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


// <div className="col-lg-3 col-sm-6 col-xs-12">
//           <div className="flip-container"> 
//             <div className="flipper">
//               <div className="front myBrand textArea flexCenter">
//                 {/*<!-- building icon -->*/}
//                 <h4>You</h4>
//               </div>
//               <div className="back myBrand textArea">
//                 <div>  
//                   <p>You're not just in it for the money</p>
//                   <p>You value a positive community and do your best to foster one</p>
//                   <p>You actively create safe spaces for your employees and customers</p>
//                   <p>You don't do the same thing as everyone else (unless they're copying you)</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>

