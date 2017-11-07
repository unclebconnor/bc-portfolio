import React, { Component } from 'react';
import SetImg from './img/Set.png' 
import TapasImg from './img/Tapas.png' 
import RainyDayImg from './img/RainyDay.png' 
import './App.css';

class Projects extends Component {
  render() {
    return (
      <div className="projectsWrapper">
      	<div className="projectCard">
      		<div className='textArea'>
      			<h4>Set</h4>
          		<p>Pattern-matching card game</p>
      		</div>
          <img src={SetImg} alt='Set Card Game' className='img-responsive'/>
        </div>
        <div className="projectCard">
      		<div className='textArea'>
      			<h4>Tapas</h4>
          		<p>Musician Practice Journal</p>
      		</div>
          <img src={TapasImg} alt='Tapas Practice Journal' className='img-responsive'/>
        </div>
        <div className="projectCard">
      		<div className='textArea'>
      			<h4>Rainy Day</h4>
          		<p>Financial Planning Tool</p>
      		</div>
          <img src={RainyDayImg} alt='Rainy Day Savings Tool' className='img-responsive'/>
        </div>
      </div>
    );
  }
}

export default Projects;
