import React, { Component } from 'react';
import Home from './Home.js'
import AboutMe from './AboutMe.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import FreeBreakfast  from 'material-ui-icons/FreeBreakfast';
import Resume from './img/BrianConnor_Resume.pdf'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
    	<Router>
      		<div>
            <div className="container-fluid">
              <nav className="row">
              <FreeBreakfast color={'white'}/>
                <div className="col-xs-2 links"><Link to={"/home"}>Home</Link></div>
                <div className="col-xs-2 links"><Link to={"/AboutMe"}>About Me</Link></div>
                <div className="col-xs-2 links"><Link to={"/Projects"}>Projects</Link></div>
                <div className="col-xs-2 links"><Link to={"/Contact"}>Contact</Link></div>
                <div className="col-xs-2 links"><a href={Resume} target="_blank">Resume</a></div>
              </nav>
            </div>

            <div className="mainWrapper container">
      		    <Route path={"/home"} component={Home}/>
              <Route path={"/AboutMe"} component={AboutMe}/>
              <Route path={"/Projects"} component={Projects}/>
              <Route path={"/Contact"} component={Contact}/>
            </div>
      		</div> 
      	</Router>
    );
  }
}

export default App;
