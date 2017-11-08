import React, { Component } from 'react';
import SetImg from './img/Set.png' 
import TapasImg from './img/Tapas.png' 
import RainyDayImg from './img/RainyDay.png' 
import GitHub from './img/github.png' 
import Web from './img/web.png'
import './App.css';

class Projects extends Component {
  render() {
    return (
      <div className="projectsWrapper container-fluid">
      	<div className="row thickRow borderBottom">
          <div className="col-sm-5 col-xs-12 ">
            <img 
              src={SetImg} 
              alt='Set Card Game' 
              className='projectImg'
            />
          </div>
          <div className='col-sm-5 col-xs-12 inlineBlock'>
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
            <div className="iconSpacer">
              <img 
                src={GitHub} 
                alt='GitHub' 
                className='iconLink'
              />
              <a className="padMe" href="#">Github</a>
            </div>
            <div className="iconSpacer">
              <img 
                src={Web} 
                alt='Demo' 
                className='iconLink'
              />
              <a className="padMe" href="#">Demo</a>
            </div>
            <div className="iconSpacer"></div>
          </div>
        </div>
        <div className="row thickRow borderBottom">
          <div className="col-sm-5 col-xs-12 ">
            <img 
              src={TapasImg} 
              alt='Tapas Practice Journal' 
              className='projectImg'
            />
          </div>
          <div className='col-sm-5 col-xs-12 inlineBlock'>
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
            <div className="iconSpacer">
              <img 
                src={GitHub} 
                alt='GitHub' 
                className='iconLink'
              />
              <a className="padMe" href="#">Github</a>
            </div>
            <div className="iconSpacer">
              <img 
                src={Web} 
                alt='Demo' 
                className='iconLink'
              />
              <a className="padMe" href="#">Demo</a>
            </div>
            <div className="iconSpacer"></div>
          </div>
        </div>
        <div className="row thickRow borderBottom">
          <div className="col-sm-5 col-xs-12 ">
            <img 
              src={RainyDayImg} 
              alt='Rainy Day Savings Tool' 
              className='projectImg'
            />
          </div>
          <div className='col-sm-5 col-xs-12 inlineBlock'>
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
                      <li>React Specific Interations</li>
                      <li>Project Management</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-sm-2 col-xs-12'>
            <div className="iconSpacer"></div>
            <div className="iconSpacer">
              <img 
                src={GitHub} 
                alt='GitHub' 
                className='iconLink'
              />
              <a className="padMe" href="#">Github</a>
            </div>
            <div className="iconSpacer">
              <img 
                src={Web} 
                alt='Demo' 
                className='iconLink'
              />
              <a className="padMe" href="#">Demo</a>
            </div>
            <div className="iconSpacer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
