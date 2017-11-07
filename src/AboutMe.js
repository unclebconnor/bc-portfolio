import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import myPic from './img/myPic.png'
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import './timeline.css';
import './App.css';


class AboutMe extends Component {
  render() { 
    return (
      <div className="aboutMeWrapper">
      	<div className="row thickRow flexCenter borderBottom">
          <div className="col-md-8 col-xs-12 textArea">
            <div className="inlineBlock">
              <h3 >Branding Statement</h3>
              <div >Observant, reliable, and unbound by convention. 
              I am focused on helping others leverage technology to 
              simplify and streamline complex tasks, making room for 
              deep work and human connection. </div>
              <h3 >List of Skills</h3>
              <div >Skillz skilz etc </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 ">
            <div className="picOfMe">
              <img src={myPic} className="img-responsive" alt="We are the music-makers"/>
            </div>
          </div>
      	</div>
		<VerticalTimeline> 
		  <VerticalTimelineElement
		    className="vertical-timeline-element--education"
		    date="Aug-Nov 2017"
		    iconStyle={{ background: '#266c8e', color: '#fff' }}
		    icon={<SchoolIcon />}
		  >
		    <h3 className="vertical-timeline-element-title">WDI General Assembly</h3>
		    <h4 className="vertical-timeline-element-subtitle">Seattle</h4>
		    <p>12 week immersive web-developer bootcamp</p>
		    <p>Full-Stack - JS, Node, SQL, Ruby/Rails</p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vertical-timeline-element--work"
		    date="2007-2017"
		    iconStyle={{ background: '#763c3b', color: '#fff' }}
		    icon={<WorkIcon />}
		  >
		    <h3 className="vertical-timeline-element-title">Lead Teacher, Tech Specialist</h3>
		    <h4 className="vertical-timeline-element-subtitle">Boston Day & Evening Academy</h4>
		    <p>Lead Teacher - Teacher supervision, operations, coaching</p>
		    <p>Technology Specialist - Student Information System on Salesforce platform</p>
		    <p>Instructor - High School Mathematics teacher & Competency-Based Education coaching</p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vertical-timeline-element--education"
		    date="2016-2017"
		    iconStyle={{ background: '#266c8e', color: '#fff' }}
		    icon={<SchoolIcon />}
		  >
		    <h3 className="vertical-timeline-element-title">Mathematics Coursework</h3>
		    <h4 className="vertical-timeline-element-subtitle">Harvard Extension School</h4>
		    <p>Linear Algebra</p>
		    <p>Statistics</p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vertical-timeline-element--work"
		    date="2011-2013"
		    iconStyle={{ background: '#763c3b', color: '#fff' }}
		    icon={<WorkIcon />}
		  >
		    <h3 className="vertical-timeline-element-title">Technical Director & Lesson Designer</h3>
		    <h4 className="vertical-timeline-element-subtitle">21st Century Lessons</h4>
		    <p>Created open-source mathematics content</p>
		    <p>Provided technical support to lesson designers</p>
		    <p>Managed download data</p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vertical-timeline-element--education"
		    date="2009-2015"
		    iconStyle={{ background: '#266c8e', color: '#fff' }}
		    icon={<SchoolIcon />}
		  >
		    <h3 className="vertical-timeline-element-title">Intro to CS Coursework</h3>
		    <h4 className="vertical-timeline-element-subtitle">Bunker Hill Community College</h4>
		    <p>C++</p>
		    <p>Database Design (MS Access/MySQL)</p>
		    <p>Java</p>
		  </VerticalTimelineElement>
		</VerticalTimeline>
      </div>
    );
  }
}

export default AboutMe;
