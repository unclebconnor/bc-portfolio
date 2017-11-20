import React, { Component } from 'react';
import SetImg from './img/Set.png' 
import TapasImg from './img/Tapas.png' 
import RainyDayImg from './img/RainyDay.png' 
import GitHub from './img/github.png' 
import Web from './img/web.png'
import BodyMap from './img/bodymap.png'
import './App.css';

class Projects extends Component {
  render() {
    return (
      <div className="projectsWrapper container-fluid">
        <div className="iNeedSomeSpace"></div>
        <div className="row thickRow borderBottom">
          <div className="col-sm-5 col-xs-12 ">
            <img 
              src={BodyMap} 
              alt='Body Map' 
              className='projectImg'
            />
          </div>
          <div className='col-sm-5 col-xs-12 inlineBlock'>
          <div className="iNeedLessSpace"></div>
            <table className="projTable ">
              <thead>
                <tr>
                  <th colSpan="2" className="ctr"><h3>Body Map</h3></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="ctr">Biology Teaching Tool</td>
                </tr>
                <tr >
                  <td colSpan="2" className="ctr"><h4>Focus</h4></td>
                </tr>
                <tr>
                  <td colSpan="2" className="lft">
                    <ul>
                      <li>API Interaction</li>
                      <li>Responsive Design</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-sm-2 col-xs-12'>
            <div className="iconSpacer"></div>
            <a 
              className="iconSpacer block" 
              href="https://github.com/unclebconnor/body_map" 
              target="_blank"
            >
              <img 
                src={GitHub} 
                alt='GitHub' 
                className='iconLink'
              />
              <p className="padMe block" href="#">Github</p>
            </a>
            <div className="iNeedSomeSpace"></div>
            <a 
              className="iconSpacer block"
              href="http://bodymap.herokuapp.com/maps/1"
              target="_blank"
            >
              <img 
                src={Web} 
                alt='Demo' 
                className='iconLink'
              />
              <p className="padMe block" href="">Demo</p>
            </a>
            <div className="iconSpacer"></div>
          </div>
        </div>
        <div className="iNeedSomeSpace"></div>
      	<div className="row thickRow borderBottom">
          <div className="col-sm-5 col-xs-12 ">
            <img 
              src={SetImg} 
              alt='Set Card Game' 
              className='projectImg'
            />
          </div>
          <div className='col-sm-5 col-xs-12 inlineBlock'>
          <div className="iNeedLessSpace"></div>
            <table className="projTable ">
              <thead>
                <tr>
                  <th colSpan="2" className="ctr"><h3>Set</h3></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="ctr">Pattern-matching game</td>
                </tr>
                <tr >
                  <td colSpan="2" className="ctr"><h4>Focus</h4></td>
                </tr>
                <tr>
                  <td colSpan="2" className="lft">
                    <ul>
                      <li>Game Logic</li>
                      <li>User Interface</li>
                      <li>Layout and Design</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-sm-2 col-xs-12'>
            <div className="iconSpacer"></div>
            <a 
              className="iconSpacer block" 
              href="https://github.com/unclebconnor/set" 
              target="_blank"
            >
              <img 
                src={GitHub} 
                alt='GitHub' 
                className='iconLink'
              />
              <p className="padMe block" href="#">Github</p>
            </a>
            <div className="iNeedSomeSpace"></div>
            <a 
              className="iconSpacer block"
              href="https://unclebconnor.github.io/set/"
              target="_blank"
            >
              <img 
                src={Web} 
                alt='Demo' 
                className='iconLink'
              />
              <p className="padMe block" href="">Demo</p>
            </a>
            <div className="iconSpacer"></div>
          </div>
        </div>
        <div className="iNeedSomeSpace"></div>
        <div className="row thickRow borderBottom">
          <div className="col-sm-5 col-xs-12 ">
            <img 
              src={TapasImg} 
              alt='Tapas Practice Journal' 
              className='projectImg'
            />
          </div>
          <div className='col-sm-5 col-xs-12 inlineBlock'>
            <div className="iNeedLessSpace"></div>
            <table className="projTable ">
              <thead>
                <tr>
                  <th colSpan="2" className="ctr"><h3>Tapas</h3></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="ctr">Musician Practice Journal</td>
                </tr>
                <tr >
                  <td colSpan="2" className="ctr"><h4>Focus</h4></td>
                </tr>
                <tr>
                  <td colSpan="2" className="lft">
                    <ul>
                      <li>Database Design</li>
                      <li>Rendering Music (Vexflow)</li>
                      <li>Flexible User Options</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-sm-2 col-xs-12'>
            <div className="iconSpacer"></div>
            <a 
              className="iconSpacer block" 
              href="https://github.com/unclebconnor/unit2Proj-tapas" 
              target="_blank"
            >
              <img 
                src={GitHub} 
                alt='GitHub' 
                className='iconLink'
              />
              <p className="padMe" href="#">Github</p>
            </a>
            <div className="iNeedSomeSpace"></div>
            <a 
              className="iconSpacer block" 
              href="https://tapaspracticejournal.herokuapp.com/"
              target="_blank"
            >
              <img 
                src={Web} 
                alt='Demo' 
                className='iconLink'
              />
              <p className="padMe block">Demo</p>
            </a>
            <div className="iconSpacer block"></div>
          </div>
        </div>
        <div className="iNeedSomeSpace"></div>
        <div className="row thickRow borderBottom">
          <div className="col-sm-5 col-xs-12 ">
            <img 
              src={RainyDayImg} 
              alt='Rainy Day Savings Tool' 
              className='projectImg'
            />
          </div>
          <div className='col-sm-5 col-xs-12 inlineBlock'>
            <div className="iNeedLessSpace"></div>
            <table className="projTable ">
              <thead>
                <tr>
                  <th colSpan="2" className="ctr"><h3>Rainy Day</h3></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="ctr">Financial Planning Tool</td>
                </tr>
                <tr >
                  <td colSpan="2" className="ctr"><h4>Focus</h4></td>
                </tr>
                <tr>
                  <td colSpan="2" className="lft">
                    <ul>
                      <li>Data Visualization</li>
                      <li>React Specific Interactions</li>
                      <li>Project Management</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-sm-2 col-xs-12'>
            <div className="iconSpacer"></div>
            <a className="iconSpacer block" href="https://github.com/unclebconnor/rainyday" target="_blank">
              <img 
                src={GitHub} 
                alt='GitHub' 
                className='iconLink'
              />
              <p className="padMe block">Github</p>
            </a>
            <div className="iNeedSomeSpace"></div>
            <a className="iconSpacer block" href="https://evening-sea-90772.herokuapp.com/" target="_blank">
              <img 
                src={Web} 
                alt='Demo' 
                className='iconLink'
              />
              <p className="padMe block">Demo</p>
            </a>
            <div className="iNeedLessSpace"></div>
            <a 
              href="" 
              data-toggle="tooltip" 
              title="username:  suzie@sample.com, password: docrivers"
            >
              <span className="glyphicon glyphicon-info-sign"></span>
            </a>
            <div className="iconSpacer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
