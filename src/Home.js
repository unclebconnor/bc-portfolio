import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  render() {
    return (
    	<div className="homeWrapper container-fluid">
        <div className="row">
          <div className="thickRow oddRow col-xs-12">
            <div>yerajerk maybe don't keep this</div>
          </div>
        </div>
      		<div className="row thickRow">
      			<div className="myBrand col-xs-12">Stuff About me</div>
      			<div className="picOfMe col-xs-12">Pic</div>
      		</div>
      		<div className="row thinRow">
      			<div className="goodyBoxes col-xs-3">GA</div>
      			<div className="goodyBoxes col-xs-3">Linkedin</div>
      			<div className="goodyBoxes col-xs-3">Github</div>
      			<div className="goodyBoxes col-xs-3">Resume</div>
      		</div>
      	</div>
    );
  }
}

export default Home;
